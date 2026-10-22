import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { SITE } from "@/lib/site-config";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ── Simple in-memory rate limit: 5 enquiries per IP per 10 minutes ────── */
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

/* ── Enquiry delivery ──────────────────────────────────────────────────────
 * Every enquiry is emailed to the business inbox. Two providers are
 * supported (first one configured wins):
 *
 *  1. Web3Forms  — simplest. Create a free access key at web3forms.com with
 *     the business email, set WEB3FORMS_ACCESS_KEY. Done.
 *  2. Resend     — set RESEND_API_KEY (see README → email delivery).
 *
 * When a database is configured (DATABASE_URL), submissions are also stored
 * as a backup copy.
 * ------------------------------------------------------------------------ */

type EnquiryInput = {
  fullName: string;
  email: string;
  businessName: string;
  currentWebsite?: string;
  businessType: string;
  serviceRequired: string;
  estimatedBudget?: string;
  preferredTimeline?: string;
  projectDescription: string;
  reference: string;
};

type Delivery = "sent" | "failed" | "skipped";

async function sendViaWeb3Forms(input: EnquiryInput): Promise<Delivery> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return "skipped";

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New website enquiry — ${input.businessName} (#${input.reference.slice(-8).toUpperCase()})`,
        from_name: "FABOM GLOBAL Website",
        full_name: input.fullName,
        email: input.email,
        business_name: input.businessName,
        current_website: input.currentWebsite || "—",
        business_type: input.businessType,
        service_required: input.serviceRequired,
        estimated_budget: input.estimatedBudget || "—",
        preferred_timeline: input.preferredTimeline || "—",
        message: input.projectDescription,
        reference: input.reference,
      }),
    });
    const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
    return res.ok && data?.success === true ? "sent" : "failed";
  } catch {
    return "failed";
  }
}

async function sendViaResend(input: EnquiryInput): Promise<Delivery> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "skipped";

  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "FABOM GLOBAL Website <onboarding@resend.dev>";

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const row = (label: string, value?: string) =>
    value
      ? `<tr><td style="padding:8px 12px;border:1px solid #e3e6eb;font-weight:600;background:#f5f6f8;">${esc(label)}</td><td style="padding:8px 12px;border:1px solid #e3e6eb;">${value}</td></tr>`
      : "";

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;">
      <div style="background:#14243a;color:#ffffff;padding:20px 24px;">
        <h1 style="margin:0;font-size:18px;">New website enquiry — FABOM GLOBAL</h1>
        <p style="margin:6px 0 0;font-size:12px;color:#c6a66b;">Reference #${esc(input.reference)}</p>
      </div>
      <table style="border-collapse:collapse;width:100%;font-size:13px;color:#202833;">
        ${row("Full name", esc(input.fullName))}
        ${row("Email", `<a href="mailto:${esc(input.email)}">${esc(input.email)}</a>`)}
        ${row("Business name", esc(input.businessName))}
        ${row("Current website", input.currentWebsite ? esc(input.currentWebsite) : undefined)}
        ${row("Type of business", esc(input.businessType))}
        ${row("Service required", esc(input.serviceRequired))}
        ${row("Estimated budget", input.estimatedBudget ? esc(input.estimatedBudget) : undefined)}
        ${row("Preferred timeline", input.preferredTimeline ? esc(input.preferredTimeline) : undefined)}
        ${row("Received", new Date().toISOString())}
      </table>
      <div style="margin-top:16px;">
        <h2 style="font-size:14px;color:#14243a;margin:0 0 8px;">Project description</h2>
        <p style="background:#f5f6f8;border:1px solid #e3e6eb;padding:12px;font-size:13px;white-space:pre-wrap;margin:0;">${esc(input.projectDescription)}</p>
      </div>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: input.email,
        subject: `New website enquiry — ${input.businessName} (#${input.reference.slice(-8).toUpperCase()})`,
        html,
      }),
    });
    return res.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}

async function emailEnquiry(input: EnquiryInput): Promise<Delivery> {
  // Web3Forms first (simplest setup), Resend as the alternative.
  const web3forms = await sendViaWeb3Forms(input);
  if (web3forms !== "skipped") return web3forms;

  const resend = await sendViaResend(input);
  if (resend !== "skipped") return resend;

  return "skipped";
}

/* ── Optional database backup copy ──────────────────────────────────────── */
async function storeEnquiry(v: {
  fullName: string;
  email: string;
  businessName: string;
  currentWebsite?: string;
  businessType: string;
  serviceRequired: string;
  estimatedBudget?: string;
  preferredTimeline?: string;
  projectDescription: string;
  consent: boolean;
}): Promise<string | null> {
  if (!db) return null;
  try {
    const enquiry = await db.enquiry.create({
      data: {
        fullName: v.fullName,
        email: v.email,
        businessName: v.businessName,
        currentWebsite: v.currentWebsite || null,
        businessType: v.businessType,
        serviceRequired: v.serviceRequired,
        estimatedBudget: v.estimatedBudget || null,
        preferredTimeline: v.preferredTimeline || null,
        projectDescription: v.projectDescription,
        consent: v.consent,
      },
    });
    return enquiry.id;
  } catch (error) {
    // A missing/misconfigured database must never block an enquiry.
    console.error("[/api/contact] database unavailable, continuing by email:", error);
    return null;
  }
}

/* ── POST /api/contact ─────────────────────────────────────────────────── */
export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many enquiries have been sent from this connection in a short time. Please try again later, or reach me directly on WhatsApp.",
      },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Your enquiry could not be read. Please try again." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      {
        ok: false,
        message:
          first?.message ??
          "Some details in the form need attention. Please review and try again.",
      },
      { status: 400 }
    );
  }

  const v = parsed.data;
  const reference =
    (await storeEnquiry(v)) ??
    `web-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;

  const delivery = await emailEnquiry({
    fullName: v.fullName,
    email: v.email,
    businessName: v.businessName,
    currentWebsite: v.currentWebsite || undefined,
    businessType: v.businessType,
    serviceRequired: v.serviceRequired,
    estimatedBudget: v.estimatedBudget || undefined,
    preferredTimeline: v.preferredTimeline || undefined,
    projectDescription: v.projectDescription,
    reference,
  });

  if (db && reference.startsWith("c")) {
    // Reference came from the database — record the delivery state.
    try {
      await db.enquiry.update({
        where: { id: reference },
        data: { emailDelivery: delivery === "sent" ? "emailed" : delivery === "failed" ? "email_failed" : "stored" },
      });
    } catch {
      /* non-critical */
    }
  }

  const stored = !reference.startsWith("web-");
  if (delivery === "sent" || stored) {
    return NextResponse.json({
      ok: true,
      reference,
      delivery,
      storedInDatabase: stored,
    });
  }

  // Nothing stored and no email provider configured — be honest so the
  // visitor can use a channel that definitely reaches the business.
  return NextResponse.json(
    {
      ok: false,
      message:
        "The enquiry could not be delivered just now. Please email me directly or message me on WhatsApp — both reach me instantly.",
    },
    { status: 503 }
  );
}

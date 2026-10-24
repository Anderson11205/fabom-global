"use client";

import type { MouseEvent, ReactNode } from "react";
import { SITE } from "@/lib/site-config";

/**
 * Universal click-to-chat link. Works on every platform, even with JS off:
 * iPhone jumps straight into the WhatsApp app (universal link) and desktop
 * opens the WhatsApp chat page.
 */
function waUniversalLink(message?: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message ?? SITE.whatsappMessage
  )}`;
}

/**
 * Android deep link. Fires the whatsapp:// scheme WITHOUT pinning an app
 * package, so Android itself offers every installed handler — WhatsApp AND
 * WhatsApp Business — and the visitor picks the one they want. If nothing
 * can open it, the browser silently falls back to the universal wa.me page
 * in the same tab. No new tabs, no blank screens.
 */
function waAndroidIntentLink(message?: string) {
  const fallback = encodeURIComponent(waUniversalLink(message));
  return `intent://send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(
    message ?? SITE.whatsappMessage
  )}#Intent;scheme=whatsapp;S.browser_fallback_url=${fallback};end`;
}

function handleClick(event: MouseEvent<HTMLAnchorElement>, message?: string) {
  if (typeof navigator === "undefined") return;
  const ua = navigator.userAgent;

  // Non-Android (iPhone, desktop): the plain wa.me link behaves perfectly —
  // iOS opens the installed app, desktop shows the chat page.
  if (!/Android/i.test(ua)) return;

  // In-app browsers / WebViews (e.g. opening the site from inside another
  // app) cannot resolve intent:// links and would just show a blank page.
  // Let them use the plain wa.me page — WhatsApp's own site handles the
  // hand-off gracefully there.
  if (/; wv\)/i.test(ua) || !/chrome|chromium|crios/i.test(ua)) return;

  // Real Android browser (Chrome, Samsung Internet, etc.): skip the wa.me
  // web page entirely and open the installed app directly — with the system
  // picker when both WhatsApp and WhatsApp Business are present.
  event.preventDefault();
  window.location.href = waAndroidIntentLink(message);
}

/**
 * WhatsApp CTA used everywhere on the site (navbar, hero "Book Now",
 * contact section, footer, floating bubble). Renders a real <a> href so it
 * behaves exactly like a normal WhatsApp button on any website: one tap
 * opens the installed app, and phones with two WhatsApps get the system
 * picker to choose which one. Never opens a blank or black tab.
 */
export function WhatsAppTrigger({
  children,
  className,
  ariaLabel,
  message,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  /** Optional custom prefilled chat message. */
  message?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={waUniversalLink(message)}
      onClick={(event) => {
        onClick?.();
        handleClick(event, message);
      }}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

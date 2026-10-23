import { Globe, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-icon";
import { WhatsAppTrigger } from "./whatsapp-trigger";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-charcoal text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center bg-gold font-display text-[15px] font-bold text-navy"
              >
                FG
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[17px] font-bold tracking-tight text-white">
                  FABOM <span className="text-gold">GLOBAL</span>
                </span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/50">
                  Website Design
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-white/55">
              Professional website design and development for businesses that
              want to present their brand properly and make it easy for
              customers to get in touch.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-[13px] text-white/70">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
              {SITE.location} — working with businesses everywhere
            </p>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 text-[13px] text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <WhatsAppTrigger className="inline-flex items-center gap-2.5 text-[13px] text-white/70 transition-colors hover:text-white">
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#4fce5d]" />
                  WhatsApp: {SITE.whatsappDisplay}
                </WhatsAppTrigger>
              </li>
              {SITE.websiteUrl ? (
                <li>
                  <a
                    href={SITE.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    <Globe className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {SITE.websiteUrl.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              ) : null}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex h-10 items-center bg-gold px-5 text-[12.5px] font-semibold text-navy transition-colors hover:bg-gold-soft"
            >
              Start your project
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 text-[12px] text-white/45 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {year} FABOM GLOBAL · Website Design &amp; Development ·{" "}
            {SITE.location}
          </p>
          {SITE.websiteUrl ? (
            <p className="md:text-right">{SITE.websiteUrl.replace(/^https?:\/\//, "")}</p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

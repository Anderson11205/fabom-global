import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-charcoal text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
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
            </Link>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/55">
              Professional website design and development for businesses that
              want to present their brand properly and make it easy for
              customers to get in touch.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-[13px] text-white/70">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {SITE.location}
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-[13px] text-white/65 transition-colors hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 text-[13px] text-white/65 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappPlainLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[13px] text-white/65 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#4fce5d]" />
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
              </li>
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
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[12px] text-white/45 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {year} FABOM GLOBAL · Website Design &amp; Development ·{" "}
            {SITE.location}
          </p>
          <p className="max-w-md md:text-right">
            All portfolio projects shown on this website are clearly-labelled
            demonstration concepts, not client businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}

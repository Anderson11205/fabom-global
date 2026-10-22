"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./whatsapp-icon";

function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center bg-navy font-display text-[15px] font-bold tracking-tight text-gold",
        className
      )}
    >
      FG
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 transition-shadow",
        scrolled ? "border-line shadow-[0_1px_12px_rgba(20,36,58,0.06)]" : "border-transparent"
      )}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[72px] lg:px-8">
        {/* Wordmark */}
        <Link
          href="#home"
          className="flex items-center gap-3"
          aria-label="FABOM GLOBAL — back to top"
          onClick={() => setOpen(false)}
        >
          <Monogram />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[17px] font-bold tracking-tight text-navy">
              FABOM <span className="text-gold">GLOBAL</span>
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.32em] text-steel">
              Website Design
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "relative py-2 text-[13px] font-medium tracking-wide transition-colors",
                  active === id ? "text-navy" : "text-steel hover:text-navy"
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 -bottom-[1px] h-[2px] bg-gold transition-transform duration-300",
                    active === id ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 border border-line px-4 text-[13px] font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-tint"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#1faa53]" />
            WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center bg-navy px-5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-soft"
          >
            Let&apos;s Build Your Website
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center text-navy lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-line bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-3.5 font-display text-lg text-navy"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-5 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 items-center justify-center bg-navy text-sm font-semibold text-white"
            >
              Let&apos;s Build Your Website
            </a>
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 border border-line text-sm font-semibold text-navy"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#1faa53]" />
              Chat on WhatsApp — {SITE.whatsappDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

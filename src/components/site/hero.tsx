import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { Reveal } from "./reveal";
import { MockBrowser, MockButton, MockImage, MockPhone } from "./portfolio/mockup-primitives";

/**
 * Decorative composition: a CSS-built preview of a generic professional
 * business website (desktop + mobile) — a taste of what FABOM GLOBAL builds.
 */
function HeroShowcase() {
  return (
    <div aria-hidden="true" className="relative select-none">
      {/* Backdrop panel */}
      <div className="absolute -inset-6 -z-10 bg-mist bg-blueprint md:-inset-10" />

      {/* Desktop preview */}
      <MockBrowser url="yourbusiness.com" className="relative z-10">
        <div className="w-[340px] sm:w-[420px]">
          {/* Mini site nav */}
          <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-2.5">
            <span className="font-display text-[10px] font-bold tracking-tight text-navy">
              Your Business
            </span>
            <div className="flex items-center gap-2.5">
              <span className="hidden gap-2.5 text-[6.5px] font-medium text-steel sm:flex">
                <span>Services</span>
                <span>About</span>
                <span>Contact</span>
              </span>
              <MockButton className="bg-gold text-navy">Get a Quote</MockButton>
            </div>
          </div>

          {/* Mini hero */}
          <div className="relative flex flex-col gap-3 bg-navy px-4 py-6 text-white">
            <span className="text-[5.5px] font-semibold uppercase tracking-[0.3em] text-gold">
              Trusted local professionals
            </span>
            <span className="font-display text-[15px] font-bold leading-[1.15] sm:text-[18px]">
              Quality service your
              <br />
              customers can rely on
            </span>
            <span className="max-w-[220px] text-[6.5px] leading-relaxed text-white/70">
              Present your brand clearly, showcase what you do and make it easy
              for customers to reach you.
            </span>
            <div className="flex gap-2 pt-0.5">
              <MockButton className="bg-white text-navy">Book Now</MockButton>
              <MockButton tone="light">Learn More</MockButton>
            </div>
            <span className="absolute right-4 top-6 hidden h-12 w-16 border border-gold/40 sm:block">
              <MockImage className="h-full w-full bg-navy-soft" />
            </span>
          </div>

          {/* Mini services */}
          <div className="grid grid-cols-3 gap-px bg-black/[0.06]">
            {["Strategy", "Service One", "Service Two"].map((s) => (
              <div key={s} className="bg-white px-3 py-3.5">
                <span className="mb-1.5 block h-1.5 w-1.5 bg-gold" />
                <span className="block text-[7px] font-semibold text-navy">{s}</span>
                <span className="mt-1 block text-[6px] leading-[1.5] text-steel">
                  A short line describing this service.
                </span>
              </div>
            ))}
          </div>

          {/* Mini CTA strip */}
          <div className="flex items-center justify-between bg-gold-tint px-4 py-2.5">
            <span className="text-[7px] font-semibold text-navy">
              Ready to get started?
            </span>
            <span className="text-[6.5px] font-semibold text-navy underline underline-offset-2">
              Contact us →
            </span>
          </div>
        </div>
      </MockBrowser>

      {/* Phone preview */}
      <MockPhone className="absolute -bottom-8 -right-3 z-20 w-[104px] sm:-right-6 sm:w-[120px]">
        <div className="bg-navy px-2.5 pb-3 pt-2 text-white">
          <div className="flex items-center justify-between">
            <span className="font-display text-[7px] font-bold">Your Business</span>
            <span className="flex flex-col gap-[2px]">
              <span className="block h-[1.5px] w-2.5 bg-white/80" />
              <span className="block h-[1.5px] w-2.5 bg-white/80" />
            </span>
          </div>
          <span className="mt-2.5 block font-display text-[8.5px] font-bold leading-[1.2]">
            Quality service your customers rely on
          </span>
          <span className="mt-1.5 block text-[5.5px] leading-[1.6] text-white/65">
            Present your brand and let customers reach you easily.
          </span>
          <span className="mt-2 inline-block bg-gold px-2 py-[3px] text-[5.5px] font-semibold text-navy">
            Get a Quote
          </span>
        </div>
        <div className="bg-white px-2.5 py-2">
          <span className="text-[6px] font-semibold text-navy">Our Services</span>
          <div className="mt-1.5 space-y-1.5">
            {["Service one", "Service two"].map((s) => (
              <div key={s} className="flex items-center gap-1.5">
                <span className="h-3.5 w-5 shrink-0 bg-mist" />
                <span className="text-[5.5px] text-steel">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </MockPhone>

      {/* Floating caption chip */}
      <div className="absolute -left-3 bottom-14 z-20 hidden bg-white px-3 py-2 shadow-[0_10px_30px_-10px_rgba(13,26,44,0.3)] md:block">
        <span className="block text-[7px] font-semibold uppercase tracking-[0.22em] text-gold">
          Concept preview
        </span>
        <span className="mt-0.5 block text-[8px] font-medium text-navy">
          Designed · Mobile-first · Fast
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pb-24 pt-32 md:pb-32 md:pt-40 lg:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        <Reveal>
          <p className="section-label">FABOM GLOBAL · Website Design &amp; Development</p>
          <h1 className="mt-6 max-w-[13ch] font-display text-[2.6rem] font-bold leading-[1.06] text-navy sm:text-6xl lg:text-[4.2rem]">
            Websites Designed to Help Your Business{" "}
            <em className="relative whitespace-nowrap not-italic text-gold">
              Stand Out.
            </em>
          </h1>
          <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-steel">
            {SITE.heroSubtext}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center gap-2 bg-navy px-7 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
            >
              Let&apos;s Build Your Website
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 border border-navy/25 px-7 text-sm font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-tint"
            >
              Explore My Work
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 text-[13px] text-steel">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              Based in {SITE.location} — working with businesses everywhere
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-soft"
            >
              {SITE.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="pb-8 pr-2 md:pb-10 md:pr-6 lg:pb-14">
          <HeroShowcase />
        </Reveal>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";
import { TESTIMONIAL_PLACEHOLDERS } from "@/lib/site-config";
import { Reveal } from "./reveal";

/**
 * Placeholder testimonials.
 * NO real reviews exist yet — every card below is a clearly-labelled
 * placeholder that will be replaced (or the section removed) once genuine
 * client feedback is available. Copy lives in src/lib/site-config.ts.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Client testimonials (placeholders pending genuine reviews)"
      className="bg-mist py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="section-label">Client feedback</p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight text-navy md:text-[2.4rem]">
              What clients say
            </h2>
            <p className="max-w-md border-l-2 border-gold bg-white px-4 py-3 text-[13px] leading-relaxed text-steel">
              <strong className="font-semibold text-navy">Honesty note:</strong>{" "}
              FABOM GLOBAL does not publish invented reviews. The cards below
              are clearly-marked placeholders reserved for genuine client
              testimonials, which will replace them as real projects are
              completed.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIAL_PLACEHOLDERS.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <figure className="flex h-full flex-col border border-dashed border-steel/40 bg-white/60 p-6">
                <Quote className="h-4 w-4 text-gold" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 font-mono text-[12.5px] leading-relaxed text-steel">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-dashed border-steel/30 pt-3.5">
                  <span className="block font-mono text-[12px] font-semibold text-navy">
                    {t.name}
                  </span>
                  <span className="mt-0.5 block font-mono text-[11px] text-steel">
                    {t.business}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

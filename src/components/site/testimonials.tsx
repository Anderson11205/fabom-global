import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-config";
import { Reveal } from "./reveal";

/**
 * Client feedback. Copy lives in src/lib/site-config.ts (TESTIMONIALS) and
 * can be replaced or extended there at any time.
 */
export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Client feedback" className="bg-mist py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="section-label">Client feedback</p>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight text-navy md:text-[2.4rem]">
            What clients say
          </h2>
        </Reveal>

        <div className="mt-12 mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col border border-line bg-white p-7">
                <Quote className="h-4 w-4 text-gold" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-charcoal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy font-display text-[13px] font-bold text-gold"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-semibold text-navy">
                      {t.name}
                    </span>
                    <span className="mt-0.5 block text-[12px] text-steel">
                      {t.business}
                    </span>
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

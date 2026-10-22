import { Check } from "lucide-react";
import { SERVICES } from "@/lib/site-config";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="section-label">Services</p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight text-navy md:text-[2.75rem]">
              Everything your business needs to look sharp online
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-steel">
              From a first website to a full redesign, every service below is
              delivered with the same standard: clear structure, considered
              design and a result that works as hard as you do.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 2) * 0.08} className="bg-white">
              <article className="group flex h-full flex-col p-7 transition-colors hover:bg-mist md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[24ch] font-display text-xl font-bold leading-snug text-navy">
                    {service.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-semibold text-gold"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3.5 flex-1 text-sm leading-relaxed text-steel">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-1.5 border-t border-line pt-4">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[13px] font-medium text-charcoal"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-steel">
            Not sure which service fits?{" "}
            <a
              href="#contact"
              className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-soft"
            >
              Send an enquiry
            </a>{" "}
            and describe your project in plain words — I will recommend the
            most practical option.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

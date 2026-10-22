import { Compass, PenTool, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";

const PILLARS = [
  {
    icon: Compass,
    title: "Clarity first",
    text: "Visitors should understand what you do, who you serve and how to get in touch within seconds of arriving — on any device.",
  },
  {
    icon: PenTool,
    title: "Considered craft",
    text: "Typography, spacing and imagery are chosen deliberately, so your website reads as carefully made — because it was.",
  },
  {
    icon: ShieldCheck,
    title: "Built to be trusted",
    text: "Fast loading, working links, accessible contrast and honest copy — the unglamorous details that make a business look dependable.",
  },
];

export function Intro() {
  return (
    <section className="bg-mist" aria-label="Design approach in brief">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <Reveal>
          <p className="max-w-3xl font-display text-2xl font-medium leading-snug text-navy md:text-[2.1rem]">
            Your website is often the first conversation you have with a
            customer. It should say <em className="text-gold">professional</em>,{" "}
            <em className="text-gold">credible</em> and{" "}
            <em className="text-gold">worth contacting</em> — before a single
            word is exchanged.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08} className="bg-white">
              <div className="h-full p-7 md:p-8">
                <pillar.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

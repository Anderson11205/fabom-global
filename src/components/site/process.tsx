import { PROCESS_STEPS } from "@/lib/site-config";
import { Reveal } from "./reveal";

export function Process() {
  return (
    <section id="process" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="section-label">Working process</p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight text-navy md:text-[2.75rem]">
              A clear process, so you always know where things stand
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-steel">
              No mystery, no going quiet for weeks. The project moves through
              six agreed stages, and you see and approve the work at every
              step before we move forward.
            </p>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={(i % 3) * 0.08} className="bg-white">
              <li className="flex h-full flex-col p-7 transition-colors hover:bg-mist md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-gold">
                    {step.number}
                  </span>
                  {i < PROCESS_STEPS.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="hidden h-px w-10 bg-line lg:block"
                    />
                  ) : null}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-steel">
            Timelines depend on the size of the project and how quickly content
            and feedback are supplied — you always receive a realistic schedule
            before work begins.{" "}
            <a
              href="#contact"
              className="font-semibold text-navy transition-colors hover:text-navy-soft"
            >
              Tell me about your project
            </a>{" "}
            to get one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

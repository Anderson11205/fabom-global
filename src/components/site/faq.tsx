import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site-config";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";
import { WhatsAppTrigger } from "./whatsapp-trigger";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="section-label">FAQ</p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy md:text-[2.75rem]">
            Questions, answered honestly
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-steel">
            Straight answers to the things business owners usually ask before
            starting a website project. If your question is not here, ask it
            directly — replies come from the person who will actually build
            your website.
          </p>
          <div className="mt-8 border border-line bg-mist p-5">
            <p className="font-display text-base font-bold text-navy">
              Still deciding?
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-steel">
              A short, no-pressure conversation is usually enough to work out
              whether a new website — or a redesign — is the right move.
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center bg-navy px-5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-soft"
              >
                Send an enquiry
              </a>
              <WhatsAppTrigger className="inline-flex h-10 items-center justify-center gap-2 border border-line bg-white px-5 text-[13px] font-semibold text-navy transition-colors hover:border-gold">
                <WhatsAppIcon className="text-[#1faa53]" />
                Ask on WhatsApp
              </WhatsAppTrigger>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="border-t border-line">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="border-b border-line"
              >
                <AccordionTrigger className="py-5 text-left font-display text-[17px] font-semibold text-navy hover:no-underline hover:text-navy-soft">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-steel">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

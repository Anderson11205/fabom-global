import { MessageSquare, PencilRuler, Rocket } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";
import { WhatsAppTrigger } from "./whatsapp-trigger";

const APPROACH = [
  {
    icon: MessageSquare,
    title: "Listen before designing",
    text: "Every project starts with your business — what you sell, who buys it and what makes you different. Design decisions come from that understanding, never from a template.",
  },
  {
    icon: PencilRuler,
    title: "Structure before styling",
    text: "Pages are planned around what your customers need to find and do. Only when the structure is right do typography, colour and imagery bring it to life.",
  },
  {
    icon: Rocket,
    title: "Finish properly",
    text: "Forms are tested, links are checked and the site is reviewed on real screen sizes before launch. A website that almost works is not finished.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm border border-line bg-mist lg:mx-0">
              {SITE.profileImage ? (
                <img
                  src={SITE.profileImage}
                  alt="Emmanuel, website designer at FABOM GLOBAL"
                  className="block aspect-[4/5] w-full object-cover object-top"
                />
              ) : (
                <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 bg-mist">
                  <span className="flex h-24 w-24 items-center justify-center border border-gold/60 font-display text-4xl font-bold text-navy">
                    EF
                  </span>
                  <span className="max-w-[24ch] text-center text-[11px] uppercase leading-relaxed tracking-[0.22em] text-steel">
                    Professional photograph
                    <br />
                    goes here
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.12}>
            <p className="section-label">About</p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy md:text-[2.75rem]">
              A designer who treats your website like his own
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-steel">
              <p>
                I&apos;m Emmanuel, the designer behind FABOM GLOBAL. I build
                websites for businesses that understand something important:
                before a customer ever calls you, they have usually already
                judged your business by how it presents itself online. A
                clear, professional website quietly does the work of a thousand
                first impressions.
              </p>
              <p>
                My approach is straightforward. I take time to understand what
                your business actually does and what your customers need to
                see. Then I plan the structure, design every page with care and
                build it to work properly — fast, mobile-friendly and easy to
                contact you from. You see progress at every stage, and nothing
                goes live until you are happy with it.
              </p>
              <p>
                I work with businesses of all kinds — professional services,
                retail, hospitality, trades and more. Whatever the industry,
                the goal is the same: a website that presents your brand
                honestly, explains your services clearly and turns visitors
                into enquiries.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {APPROACH.map((a) => (
                <div key={a.title} className="border border-line bg-mist p-5">
                  <a.icon className="h-[18px] w-[18px] text-gold" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-[15px] font-bold text-navy">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-steel">
                    {a.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center bg-navy px-6 text-[13px] font-semibold text-white transition-colors hover:bg-navy-soft"
              >
                Start a conversation
              </a>
              <WhatsAppTrigger className="inline-flex h-11 items-center justify-center gap-2 border border-navy/25 px-6 text-[13px] font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-tint">
                <WhatsAppIcon className="text-[#1faa53]" />
                WhatsApp me directly
              </WhatsAppTrigger>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

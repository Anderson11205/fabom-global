import { MessageSquare, PencilRuler, Rocket } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";

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
    <section id="about" className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-blueprint-dark" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Portrait — placeholder until the real photograph is added */}
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 h-full w-full border border-gold/50"
              />
              {SITE.profileImage ? (
                <img
                  src={SITE.profileImage}
                  alt="Emmanuel, website designer at FABOM GLOBAL"
                  className="relative block aspect-[4/5] w-full object-cover"
                />
              ) : (
                <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 border border-white/15 bg-navy-soft">
                  <span className="flex h-24 w-24 items-center justify-center border border-gold/60 font-display text-4xl font-bold text-gold">
                    EF
                  </span>
                  <span className="max-w-[24ch] text-center text-[11px] uppercase leading-relaxed tracking-[0.22em] text-white/50">
                    Professional photograph
                    <br />
                    goes here
                  </span>
                </div>
              )}
              <div className="absolute -bottom-5 -right-3 bg-gold px-4 py-3 text-navy shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)]">
                <span className="block font-display text-lg font-bold leading-none">
                  FABOM GLOBAL
                </span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.24em]">
                  Website design studio
                </span>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.12}>
            <p className="section-label">About</p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-[2.75rem]">
              A designer who treats your website like his own
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/75">
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

            <div className="mt-9 grid gap-px border border-white/12 bg-white/10 sm:grid-cols-3">
              {APPROACH.map((a) => (
                <div key={a.title} className="bg-navy p-5">
                  <a.icon className="h-4.5 w-4.5 text-gold" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-[15px] font-bold">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/65">
                    {a.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center bg-gold px-6 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-soft"
              >
                Start a conversation
              </a>
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 border border-white/25 px-6 text-[13px] font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon />
                WhatsApp me directly
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

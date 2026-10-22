"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Layers, MonitorSmartphone, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PROJECTS, type Project } from "@/lib/site-config";
import { Reveal } from "../reveal";
import { MockBrowser, MockPhone } from "./mockup-primitives";
import {
  MeridianDesktop, MeridianMobile,
  HavenDesktop, HavenMobile,
  ApexDesktop, ApexMobile,
  CasaVerdeDesktop, CasaVerdeMobile,
} from "./mockups-a";
import {
  SterlingDesktop, SterlingMobile,
  LumiereDesktop, LumiereMobile,
  AtelierDesktop, AtelierMobile,
  UrbanDesktop, UrbanMobile,
} from "./mockups-b";

const MOCKUPS: Record<
  string,
  { Desktop: React.ComponentType; Mobile: React.ComponentType; url: string }
> = {
  meridian: { Desktop: MeridianDesktop, Mobile: MeridianMobile, url: "meridianconsulting.example" },
  haven: { Desktop: HavenDesktop, Mobile: HavenMobile, url: "havenandco.example" },
  apex: { Desktop: ApexDesktop, Mobile: ApexMobile, url: "apexmotors.example" },
  casaverde: { Desktop: CasaVerdeDesktop, Mobile: CasaVerdeMobile, url: "casaverde.example" },
  sterling: { Desktop: SterlingDesktop, Mobile: SterlingMobile, url: "sterlinggrant.example" },
  lumiere: { Desktop: LumiereDesktop, Mobile: LumiereMobile, url: "lumierestudio.example" },
  atelier: { Desktop: AtelierDesktop, Mobile: AtelierMobile, url: "ateliernoir.example" },
  urban: { Desktop: UrbanDesktop, Mobile: UrbanMobile, url: "urbanessentials.example" },
};

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const mock = MOCKUPS[project.id];
  return (
    <Reveal className="h-full">
      <article className="group flex h-full flex-col border border-line bg-white transition-shadow duration-300 hover:shadow-[0_24px_60px_-24px_rgba(20,36,58,0.25)]">
        {/* Cropped live-preview of the mock website */}
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Open case study for ${project.title} (demo concept)`}
          className="relative block w-full cursor-pointer overflow-hidden border-b border-line bg-mist text-left"
        >
          <span className="pointer-events-none block h-52 overflow-hidden p-4 transition-transform duration-500 ease-out group-hover:scale-[1.015] sm:h-56 md:h-60">
            <MockBrowser url={mock.url} className="w-full">
              <mock.Desktop />
            </MockBrowser>
          </span>
          <span className="absolute right-3 top-3 flex items-center gap-1.5 bg-navy px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View case study <ArrowUpRight className="h-3 w-3" />
          </span>
        </button>

        {/* Meta */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center bg-gold-tint px-2 py-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-navy">
              {project.label}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-steel">
              {project.industry}
            </span>
          </div>
          <h3 className="mt-3.5 font-display text-xl font-bold text-navy">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">
            {project.blurb}
          </p>
          <button
            type="button"
            onClick={onOpen}
            className="mt-5 inline-flex items-center gap-2 self-start text-[13px] font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-navy-soft"
          >
            View case study
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </article>
    </Reveal>
  );
}

function CaseStudyBody({ project, onClose }: { project: Project; onClose: () => void }) {
  const mock = MOCKUPS[project.id];
  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
      {/* Desktop + mobile previews */}
      <div className="flex flex-col gap-5">
        <MockBrowser url={mock.url}>
          <mock.Desktop />
        </MockBrowser>
        <div className="flex items-start gap-5">
          <MockPhone className="w-[130px] shrink-0">
            <mock.Mobile />
          </MockPhone>
          <div className="pt-2">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-steel">
              <MonitorSmartphone className="h-4 w-4 text-gold" />
              Mobile view
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-steel">
              Every concept is designed mobile-first: the layout, menu and
              call-to-action are planned for small screens before the desktop
              view is drawn.
            </p>
          </div>
        </div>
      </div>

      {/* Written case study */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
          {project.industry}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold text-navy">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-steel">
          {project.overview}
        </p>

        <p className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-navy">
          <Layers className="h-3.5 w-3.5 text-gold" />
          Pages included
        </p>
        <ul className="mt-2.5 space-y-1.5">
          {project.scope.map((s) => (
            <li key={s} className="flex items-baseline gap-2.5 text-[13px] text-charcoal">
              <span className="mt-[7px] h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-navy">
          Key features
        </p>
        <ul className="mt-2.5 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-baseline gap-2.5 text-[13px] text-charcoal">
              <span className="mt-[7px] h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-l-2 border-gold bg-mist p-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy">
            Design notes
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-steel">
            {project.designNotes}
          </p>
        </div>

        <a
          href="#contact"
          onClick={onClose}
          className="mt-7 inline-flex h-11 items-center gap-2 bg-navy px-6 text-[13px] font-semibold text-white transition-colors hover:bg-navy-soft"
        >
          Build something like this
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);
  const closeAndGoToContact = () => setActive(null);

  return (
    <section id="portfolio" className="bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="section-label">Portfolio</p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight text-navy md:text-[2.75rem]">
              Work that shows what your website could be
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-steel">
              Each project below is a fully designed demonstration — real page
              layouts, navigation and mobile views. Every one is clearly
              labelled a sample, demo or concept: examples of what FABOM GLOBAL
              can build for your business.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 border border-line bg-white px-6 py-4 text-center text-[13px] leading-relaxed text-steel">
            <strong className="font-semibold text-navy">A note on honesty:</strong>{" "}
            these eight projects are demonstration concepts built to show design
            capability. They are not real clients, and no client results,
            reviews or statistics are implied. Genuine work will be featured here
            as it is completed.
          </p>
        </Reveal>
      </div>

      {/* Case-study dialog */}
      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        {active ? (
          <DialogContent className="max-h-[90dvh] overflow-y-auto bg-white sm:max-w-5xl sm:rounded-[4px]">
            <DialogHeader className="sr-only">
              <DialogTitle>
                {active.title} — {active.label.toLowerCase()} case study
              </DialogTitle>
              <DialogDescription>
                Detailed case study for the {active.industry} demonstration
                project {active.title}.
              </DialogDescription>
            </DialogHeader>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-line bg-white text-navy transition-colors hover:bg-mist"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mb-5 flex items-center gap-3 pr-10">
              <span className="inline-flex items-center bg-gold-tint px-2 py-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-navy">
                {active.label}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-steel">
                Demonstration project — not a real client
              </span>
            </div>
            <CaseStudyBody project={active} onClose={closeAndGoToContact} />
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  );
}

import { BedDouble, Bath, Maximize, Star, Clock, MapPin, Car, Gauge } from "lucide-react";
import { MockButton, MockImage } from "./mockup-primitives";

/* ══════════════════ 1 · MERIDIAN — CORPORATE ══════════════════ */

export function MeridianDesktop() {
  return (
    <div className="bg-white text-navy">
      <div className="flex items-center justify-between border-b border-black/[0.07] px-4 py-2.5">
        <span className="font-display text-[10px] font-bold tracking-tight">
          Meridian<span className="text-gold">.</span>
        </span>
        <div className="flex items-center gap-3">
          <span className="hidden whitespace-nowrap gap-2.5 text-[6.5px] font-medium text-steel @sm:flex">
            <span>Services</span><span>Insights</span><span>About</span><span>Careers</span>
          </span>
          <MockButton className="whitespace-nowrap">Contact</MockButton>
        </div>
      </div>
      <div className="bg-navy px-4 py-7 text-white">
        <span className="text-[5.5px] font-semibold uppercase tracking-[0.3em] text-gold">
          Meridian Consulting Group
        </span>
        <span className="mt-2 block max-w-[24ch] font-display text-[16px] font-bold leading-[1.14]">
          Strategy that moves ambitious companies forward
        </span>
        <span className="mt-2 block max-w-[250px] text-[6.5px] leading-[1.7] text-white/65">
          We advise leadership teams on growth, operations and transformation —
          with measurable, practical recommendations.
        </span>
        <div className="mt-3 flex gap-2">
          <MockButton className="bg-gold text-navy">Book a consultation</MockButton>
          <MockButton tone="light">Our services</MockButton>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-px bg-black/[0.07]">
        {[["120+", "Engagements"], ["14", "Industries"], ["96%", "Retained clients"], ["9", "Countries"]].map(([n, l]) => (
          <div key={l} className="bg-white px-3 py-3 text-center">
            <span className="block font-display text-[11px] font-bold text-navy">{n}</span>
            <span className="mt-0.5 block text-[5.5px] uppercase tracking-[0.14em] text-steel">{l}</span>
          </div>
        ))}
      </div>
      <div className="px-4 py-5">
        <span className="text-[6px] font-semibold uppercase tracking-[0.26em] text-gold">What we do</span>
        <div className="mt-2.5 grid grid-cols-3 gap-2.5">
          {["Growth strategy", "Operations", "Transformation"].map((s) => (
            <div key={s} className="border border-black/[0.08] p-2.5">
              <span className="block h-6 w-full bg-mist" />
              <span className="mt-2 block text-[7px] font-semibold">{s}</span>
              <span className="mt-1 block text-[5.5px] leading-[1.6] text-steel">
                Practical advisory work delivered by senior consultants.
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
        <span className="text-[7px] font-semibold">Let&apos;s discuss your next quarter.</span>
        <MockButton className="bg-gold text-navy">Get in touch</MockButton>
      </div>
    </div>
  );
}

export function MeridianMobile() {
  return (
    <div className="bg-white text-navy">
      <div className="flex items-center justify-between bg-navy px-2.5 pb-2.5 pt-2 text-white">
        <span className="font-display text-[7px] font-bold">Meridian<span className="text-gold">.</span></span>
        <span className="flex flex-col gap-[2px]"><span className="h-[1.5px] w-2.5 bg-white/80" /><span className="h-[1.5px] w-2.5 bg-white/80" /></span>
      </div>
      <div className="bg-navy px-2.5 pb-3.5 text-white">
        <span className="block font-display text-[9px] font-bold leading-[1.2]">
          Strategy that moves ambitious companies forward
        </span>
        <span className="mt-1.5 block text-[5.5px] leading-[1.6] text-white/65">
          Senior advisory for growth, operations and transformation.
        </span>
        <span className="mt-2 inline-block bg-gold px-2 py-[3px] text-[5.5px] font-semibold text-navy">Book a consultation</span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-black/[0.07]">
        {[["Growth strategy"], ["Operations"], ["Transformation"], ["Insights"]].map(([s]) => (
          <div key={s} className="bg-white px-2 py-2">
            <span className="block h-3.5 w-3.5 bg-mist" />
            <span className="mt-1 block text-[5.5px] font-semibold">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════ 2 · HAVEN & CO — REAL ESTATE ══════════════════ */

const HAVEN_HOUSES = [
  { price: "$485,000", meta: "3 bd · 2 ba · 1,640 sqft", loc: "Maple Grove" },
  { price: "$729,000", meta: "4 bd · 3 ba · 2,310 sqft", loc: "Cedar Heights" },
  { price: "$352,500", meta: "2 bd · 1 ba · 1,120 sqft", loc: "Old Town" },
];

export function HavenDesktop() {
  return (
    <div className="bg-[#f7f4ee] text-[#22392b]">
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="font-display text-[10px] font-bold tracking-tight">Haven &amp; Co</span>
        <div className="flex items-center gap-3">
          <span className="hidden whitespace-nowrap gap-2.5 text-[6.5px] font-medium opacity-70 @sm:flex">
            <span>Buy</span><span>Rent</span><span>Sell</span><span>Agents</span>
          </span>
          <MockButton className="whitespace-nowrap bg-[#22392b] text-[#f7f4ee]">Book a viewing</MockButton>
        </div>
      </div>
      <div className="px-4 pb-4 pt-1">
        <span className="block max-w-[22ch] font-display text-[16px] font-bold leading-[1.14]">
          Find the home your family has been waiting for
        </span>
        <div className="mt-3 flex items-center gap-1.5 rounded-[2px] border border-black/10 bg-white px-2.5 py-2 shadow-sm">
          <MapPin className="h-2.5 w-2.5 text-[#2f4a3c]" />
          <span className="flex-1 text-[6.5px] text-steel">Search by town, postcode or school district…</span>
          <span className="rounded-[2px] bg-[#2f4a3c] px-2 py-[3px] text-[6px] font-semibold text-white">Search</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 px-4">
        {HAVEN_HOUSES.map((h) => (
          <div key={h.price} className="border border-black/[0.07] bg-white">
            <MockImage className="h-11 w-full bg-[#dfe7dd]" />
            <div className="p-2">
              <span className="block text-[8px] font-bold">{h.price}</span>
              <span className="mt-0.5 block text-[5.5px] text-steel">{h.loc}</span>
              <span className="mt-1 flex items-center gap-1.5 text-[5.5px] text-steel">
                <BedDouble className="h-2 w-2" />{h.meta.split(" · ")[0]}
                <Bath className="h-2 w-2" />{h.meta.split(" · ")[1]}
                <Maximize className="h-2 w-2" />{h.meta.split(" · ")[2]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between bg-[#22392b] px-4 py-3 text-[#f7f4ee]">
        <span className="text-[7px] font-semibold">Thinking of selling? Get a free valuation.</span>
        <MockButton className="bg-[#c6a66b] text-[#22392b]">Request valuation</MockButton>
      </div>
    </div>
  );
}

export function HavenMobile() {
  return (
    <div className="bg-[#f7f4ee] text-[#22392b]">
      <div className="flex items-center justify-between px-2.5 py-2">
        <span className="font-display text-[7px] font-bold">Haven &amp; Co</span>
        <span className="rounded-[2px] bg-[#2f4a3c] px-1.5 py-[2px] text-[5px] font-semibold text-white">Menu</span>
      </div>
      <div className="px-2.5">
        <span className="block font-display text-[9px] font-bold leading-[1.2]">Homes for every chapter</span>
        <div className="mt-1.5 rounded-[2px] border border-black/10 bg-white px-1.5 py-1.5 text-[5.5px] text-steel">
          Search listings near you…
        </div>
      </div>
      <div className="mt-2 space-y-1.5 px-2.5 pb-3">
        {HAVEN_HOUSES.slice(0, 2).map((h) => (
          <div key={h.price} className="flex border border-black/[0.07] bg-white">
            <MockImage className="h-10 w-11 shrink-0 bg-[#dfe7dd]" />
            <div className="p-1.5">
              <span className="block text-[6.5px] font-bold">{h.price}</span>
              <span className="block text-[5px] text-steel">{h.loc} · {h.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════ 3 · APEX MOTORS — AUTOMOTIVE ══════════════════ */

export function ApexDesktop() {
  return (
    <div className="bg-[#14181d] text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="whitespace-nowrap font-display text-[10px] font-bold tracking-[0.08em]">APEX MOTORS</span>
        <div className="flex items-center gap-3">
          <span className="hidden whitespace-nowrap gap-2.5 text-[6.5px] font-medium text-white/60 @sm:flex">
            <span>Inventory</span><span>Finance</span><span>Trade-in</span><span>Contact</span>
          </span>
          <MockButton className="whitespace-nowrap bg-[#d9a441] text-[#14181d]">Book test drive</MockButton>
        </div>
      </div>
      <div className="flex items-center gap-4 px-4 py-6">
        <div className="flex-1">
          <span className="text-[5.5px] font-semibold uppercase tracking-[0.3em] text-[#d9a441]">
            Performance · Certified
          </span>
          <span className="mt-2 block max-w-[20ch] font-display text-[16px] font-bold leading-[1.12]">
            Drive something worth talking about
          </span>
          <span className="mt-2 block max-w-[240px] text-[6.5px] leading-[1.7] text-white/60">
            Hand-inspected vehicles, transparent history reports and finance
            arranged on site.
          </span>
          <div className="mt-3 flex gap-2">
            <MockButton className="bg-[#d9a441] text-[#14181d]">Browse inventory</MockButton>
            <MockButton tone="light">Value my trade</MockButton>
          </div>
        </div>
        {/* Featured vehicle — a realistic dealership hero card */}
        <div className="w-[172px] shrink-0 rounded-[3px] border border-white/10 bg-[#1a2029] p-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[5px] font-semibold uppercase tracking-[0.2em] text-[#d9a441]">Featured</span>
            <span className="rounded-[2px] bg-white/[0.07] px-1.5 py-[1px] text-[4.5px] font-medium text-white/70">2022 · 38k miles</span>
          </div>
          <div className="relative mt-1.5 h-[52px] overflow-hidden rounded-[2px] bg-gradient-to-b from-[#232b35] to-[#1c232c]">
            <Car className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-[60%] text-[#d9a441]/80" />
            <span className="absolute inset-x-2 bottom-[9px] h-[2px] rounded-full bg-white/10" />
            <span className="absolute inset-x-4 bottom-[5px] h-[1px] rounded-full bg-white/[0.06]" />
          </div>
          <div className="mt-1.5 flex items-center justify-between">
            <span className="text-[7px] font-bold">GT Coupe</span>
            <span className="text-[7px] font-bold text-[#d9a441]">$41,900</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {["450 hp", "3.4s 0–60", "RWD"].map((s) => (
              <span key={s} className="rounded-[2px] bg-white/[0.07] px-1.5 py-[2px] text-[4.5px] text-white/70">{s}</span>
            ))}
          </div>
          <div className="mt-1.5 flex items-center justify-between border-t border-white/10 pt-1.5">
            <span className="text-[5px] text-white/55">Free history report</span>
            <span className="text-[5px] font-semibold text-[#d9a441]">View details →</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 px-4 pb-4">
        {[
          { name: "GT Coupe", price: "$41,900", specs: ["450 hp", "3.4s 0–60", "RWD"] },
          { name: "Urban SUV", price: "$33,500", specs: ["280 hp", "AWD", "7-seat"] },
          { name: "Roadster S", price: "$47,200", specs: ["385 hp", "4.0s", "Soft-top"] },
        ].map((c) => (
          <div key={c.name} className="border border-white/10 bg-[#1a2029]">
            <div className="relative h-10 w-full overflow-hidden bg-gradient-to-b from-[#242c36] to-[#1e252e]">
              <Car className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-[62%] text-[#d9a441]/60" />
              <span className="absolute inset-x-1.5 bottom-[6px] h-[1.5px] rounded-full bg-white/10" />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between">
                <span className="text-[7px] font-semibold">{c.name}</span>
                <span className="text-[6.5px] font-bold text-[#d9a441]">{c.price}</span>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {c.specs.map((s) => (
                  <span key={s} className="rounded-[2px] bg-white/[0.07] px-1.5 py-[2px] text-[5px] text-white/70">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-white/10 px-4 py-2.5 text-white/50">
        <Gauge className="h-2.5 w-2.5" />
        <span className="text-[5.5px] uppercase tracking-[0.2em]">Every vehicle inspected · Warranty included</span>
      </div>
    </div>
  );
}

export function ApexMobile() {
  return (
    <div className="bg-[#14181d] text-white">
      <div className="flex items-center justify-between px-2.5 py-2">
        <span className="font-display text-[7px] font-bold tracking-[0.08em]">APEX</span>
        <span className="flex flex-col gap-[2px]"><span className="h-[1.5px] w-2.5 bg-white/80" /><span className="h-[1.5px] w-2.5 bg-white/80" /></span>
      </div>
      <div className="px-2.5 pb-3">
        <span className="block font-display text-[9px] font-bold leading-[1.2]">Drive something worth talking about</span>
        <MockImage icon={<Car className="h-5 w-5 text-[#d9a441]/70" />} className="mt-2 h-12 w-full rounded-[2px] bg-[#20262e]" />
        <span className="mt-2 inline-block bg-[#d9a441] px-2 py-[3px] text-[5.5px] font-semibold text-[#14181d]">
          Browse inventory
        </span>
      </div>
      <div className="border-t border-white/10 px-2.5 py-2">
        <span className="text-[5.5px] font-semibold uppercase tracking-[0.2em] text-[#d9a441]">Featured</span>
        <div className="mt-1.5 flex items-center gap-1.5">
          <MockImage className="h-8 w-10 shrink-0 rounded-[2px] bg-[#232b35]" />
          <div>
            <span className="block text-[6px] font-semibold">GT Coupe</span>
            <span className="block text-[5px] text-white/60">450 hp · $41,900</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════ 4 · CASA VERDE — RESTAURANT ══════════════════ */

const MENU = [
  { item: "Wood-fired sea bass", price: "$24" },
  { item: "Truffle mushroom risotto", price: "$19" },
  { item: "Charred lamb cutlets", price: "$27" },
];

export function CasaVerdeDesktop() {
  return (
    <div className="bg-[#faf6ef] text-[#22392b]">
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="font-display text-[10px] font-bold tracking-tight text-[#b3562e]">Casa Verde</span>
        <div className="flex items-center gap-3">
          <span className="flex gap-2.5 text-[6.5px] font-medium opacity-70">
            <span>Menus</span><span>Our story</span><span>Events</span><span>Contact</span>
          </span>
          <MockButton className="bg-[#22392b] text-[#faf6ef]">Reserve a table</MockButton>
        </div>
      </div>
      <div className="flex items-stretch gap-4 px-4 py-5">
        <div className="flex-1 py-2">
          <span className="text-[5.5px] font-semibold uppercase tracking-[0.3em] text-[#b3562e]">
            Kitchen &amp; cellar · Est. seasonal
          </span>
          <span className="mt-2 block max-w-[22ch] font-display text-[16px] font-bold leading-[1.14]">
            Honest food, cooked over fire
          </span>
          <span className="mt-2 block max-w-[240px] text-[6.5px] leading-[1.7] opacity-70">
            A neighbourhood kitchen serving seasonal plates, natural wines and
            warm hospitality — lunch through late.
          </span>
          <div className="mt-3 flex gap-2">
            <MockButton className="bg-[#b3562e] text-white">View menus</MockButton>
            <MockButton tone="solid" className="border border-[#22392b]/30 bg-transparent text-[#22392b]">Opening hours</MockButton>
          </div>
        </div>
        <MockImage className="w-32 shrink-0 rounded-[3px] bg-[#e8ddc8]" />
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1.5 border-y border-[#22392b]/10 bg-white/60 px-4 py-4">
        <span className="text-[5.5px] font-semibold uppercase tracking-[0.26em] text-[#b3562e]">Tonight&apos;s menu</span>
        <span />
        {MENU.map((m) => (
          <div key={m.item} className="col-span-2 flex items-baseline gap-2">
            <span className="text-[7.5px] font-semibold">{m.item}</span>
            <span className="flex-1 border-b border-dotted border-[#22392b]/25" />
            <span className="text-[7px] font-bold text-[#b3562e]">{m.price}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="flex items-center gap-1.5 text-[6px] opacity-70">
          <Clock className="h-2 w-2" /> Tue–Sun · 12:00–23:00
        </span>
        <span className="flex items-center gap-1.5 text-[6px] opacity-70">
          <MapPin className="h-2 w-2" /> 14 Linden Row
        </span>
      </div>
    </div>
  );
}

export function CasaVerdeMobile() {
  return (
    <div className="bg-[#faf6ef] text-[#22392b]">
      <div className="flex items-center justify-between px-2.5 py-2">
        <span className="font-display text-[7px] font-bold text-[#b3562e]">Casa Verde</span>
        <span className="rounded-[2px] bg-[#22392b] px-1.5 py-[2px] text-[5px] font-semibold text-[#faf6ef]">Reserve</span>
      </div>
      <div className="px-2.5">
        <span className="block font-display text-[9px] font-bold leading-[1.2]">Honest food, cooked over fire</span>
        <MockImage className="mt-2 h-12 w-full rounded-[2px] bg-[#e8ddc8]" />
        <div className="mt-2 space-y-1">
          {MENU.slice(0, 2).map((m) => (
            <div key={m.item} className="flex items-baseline gap-1.5">
              <span className="text-[6px] font-semibold">{m.item}</span>
              <span className="flex-1 border-b border-dotted border-[#22392b]/25" />
              <span className="text-[6px] font-bold text-[#b3562e]">{m.price}</span>
            </div>
          ))}
        </div>
        <span className="mt-2 mb-3 inline-block bg-[#b3562e] px-2 py-[3px] text-[5.5px] font-semibold text-white">
          Reserve a table
        </span>
      </div>
    </div>
  );
}

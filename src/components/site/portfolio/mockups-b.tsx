import { Star, ShoppingBag, Search, Heart, Sparkles, BookOpen } from "lucide-react";
import { MockButton, MockImage } from "./mockup-primitives";

/* ══════════════════ 5 · STERLING & GRANT — LAW ══════════════════ */

export function SterlingDesktop() {
  return (
    <div className="bg-[#fbf9f4] text-[#1e3328]">
      <div className="flex items-center justify-between border-b border-[#1e3328]/10 px-4 py-2.5">
        <span className="font-display text-[10px] font-bold tracking-tight">Sterling &amp; Grant</span>
        <div className="flex items-center gap-3">
          <span className="flex gap-2.5 text-[6.5px] font-medium opacity-70">
            <span>Practice areas</span><span>Attorneys</span><span>Our process</span><span>Contact</span>
          </span>
          <MockButton className="bg-[#1e3328] text-[#fbf9f4]">Request consultation</MockButton>
        </div>
      </div>
      <div className="flex items-center gap-4 px-4 py-6">
        <div className="flex-1">
          <span className="text-[5.5px] font-semibold uppercase tracking-[0.3em] text-[#b08d4f]">
            Attorneys at law
          </span>
          <span className="mt-2 block max-w-[24ch] font-display text-[16px] font-bold leading-[1.14]">
            Clear counsel for consequential decisions
          </span>
          <span className="mt-2 block max-w-[250px] text-[6.5px] leading-[1.7] opacity-70">
            Corporate, property and family law delivered with plain language and
            rigorous preparation.
          </span>
        </div>
        <div className="w-28 shrink-0 border border-[#b08d4f]/40 bg-white p-2.5">
          <span className="block font-display text-[10px] leading-[1.4]">
            “They explained everything in language we actually understood.”
          </span>
          <span className="mt-1.5 block text-[5px] uppercase tracking-[0.18em] opacity-60">
            — Client matter, 2025
          </span>
        </div>
      </div>
      <div className="border-y border-[#1e3328]/10 bg-white/70">
        <span className="block px-4 pt-3 text-[5.5px] font-semibold uppercase tracking-[0.26em] text-[#b08d4f]">
          How we help
        </span>
        <div className="grid grid-cols-2 px-4 pb-2 pt-1.5">
          {["Business & corporate", "Property & conveyancing", "Family & estates", "Employment disputes"].map((p, i) => (
            <div key={p} className="flex items-center gap-2 border-b border-[#1e3328]/10 py-2">
              <span className="font-display text-[8px] font-bold text-[#b08d4f]">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[7px] font-semibold">{p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[7px] font-semibold">Confidential. Considered. On your side.</span>
        <MockButton className="bg-[#b08d4f] text-white">Book a consultation</MockButton>
      </div>
    </div>
  );
}

export function SterlingMobile() {
  return (
    <div className="bg-[#fbf9f4] text-[#1e3328]">
      <div className="flex items-center justify-between px-2.5 py-2">
        <span className="font-display text-[7px] font-bold">Sterling &amp; Grant</span>
        <span className="flex flex-col gap-[2px]"><span className="h-[1.5px] w-2.5 bg-[#1e3328]/70" /><span className="h-[1.5px] w-2.5 bg-[#1e3328]/70" /></span>
      </div>
      <div className="bg-[#1e3328] px-2.5 py-3 text-[#fbf9f4]">
        <span className="block font-display text-[9px] font-bold leading-[1.2]">
          Clear counsel for consequential decisions
        </span>
        <span className="mt-1.5 block text-[5.5px] leading-[1.6] text-white/60">
          Corporate · Property · Family · Employment
        </span>
        <span className="mt-2 inline-block bg-[#b08d4f] px-2 py-[3px] text-[5.5px] font-semibold text-white">
          Request consultation
        </span>
      </div>
      <div className="px-2.5 py-2.5">
        <span className="text-[5.5px] font-semibold uppercase tracking-[0.2em] text-[#b08d4f]">Practice areas</span>
        {["Business & corporate", "Property & conveyancing"].map((p) => (
          <div key={p} className="mt-1.5 flex items-center justify-between border-b border-[#1e3328]/10 pb-1.5">
            <span className="text-[6px] font-semibold">{p}</span>
            <span className="text-[6px] text-[#b08d4f]">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════ 6 · LUMIÈRE — BEAUTY ══════════════════ */

export function LumiereDesktop() {
  return (
    <div className="bg-[#faf3f2] text-[#3d2b30]">
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="font-display text-[10px] font-bold tracking-tight text-[#c98a94]">Lumière</span>
        <div className="flex items-center gap-3">
          <span className="flex gap-2.5 text-[6.5px] font-medium opacity-70">
            <span>Services</span><span>Our team</span><span>Gallery</span><span>Gift cards</span>
          </span>
          <MockButton className="bg-[#c98a94] text-white">Book now</MockButton>
        </div>
      </div>
      <div className="flex items-stretch gap-4 px-4 py-5">
        <div className="flex-1 py-1.5">
          <span className="text-[5.5px] font-semibold uppercase tracking-[0.3em] text-[#c98a94]">
            Beauty studio &amp; spa
          </span>
          <span className="mt-2 block max-w-[20ch] font-display text-[16px] font-bold leading-[1.14]">
            Time to feel like yourself again
          </span>
          <span className="mt-2 block max-w-[230px] text-[6.5px] leading-[1.7] opacity-70">
            Hair, skin and nail treatments from a team that plans every visit
            around you.
          </span>
          <div className="mt-3 flex gap-2">
            <MockButton className="bg-[#c98a94] text-white">Book an appointment</MockButton>
            <MockButton tone="solid" className="border border-[#3d2b30]/25 bg-transparent text-[#3d2b30]">Price list</MockButton>
          </div>
        </div>
        <MockImage icon={<Sparkles className="h-5 w-5 text-[#c98a94]" />} className="w-28 shrink-0 rounded-[3px] bg-[#f3dfe0]" />
      </div>
      <div className="grid grid-cols-2 gap-x-6 border-t border-[#3d2b30]/10 px-4 py-4">
        <span className="col-span-2 text-[5.5px] font-semibold uppercase tracking-[0.26em] text-[#c98a94]">
          Signature services
        </span>
        {[
          ["Cut & style", "from $45"],
          ["Glow facial", "from $60"],
          ["Gel nails", "from $35"],
          ["Bridal package", "from $180"],
        ].map(([s, p]) => (
          <div key={s} className="flex items-baseline justify-between border-b border-dotted border-[#3d2b30]/20 py-1.5">
            <span className="text-[7px] font-semibold">{s}</span>
            <span className="text-[6.5px] opacity-60">{p}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-[#3d2b30] px-4 py-3 text-[#faf3f2]">
        <span className="text-[7px] font-semibold">Open late Thursday evenings</span>
        <span className="text-[6.5px]">Book online</span>
      </div>
    </div>
  );
}

export function LumiereMobile() {
  return (
    <div className="bg-[#faf3f2] text-[#3d2b30]">
      <div className="flex items-center justify-between px-2.5 py-2">
        <span className="font-display text-[7px] font-bold text-[#c98a94]">Lumière</span>
        <span className="rounded-[2px] bg-[#c98a94] px-1.5 py-[2px] text-[5px] font-semibold text-white">Book</span>
      </div>
      <div className="px-2.5">
        <span className="block font-display text-[9px] font-bold leading-[1.2]">Time to feel like yourself again</span>
        <MockImage className="mt-2 h-12 w-full rounded-[2px] bg-[#f3dfe0]" />
      </div>
      <div className="px-2.5 py-2">
        {["Cut & style — from $45", "Glow facial — from $60"].map((s) => (
          <div key={s} className="border-b border-dotted border-[#3d2b30]/20 py-1 text-[6px]">{s}</div>
        ))}
        <span className="mt-2 mb-2.5 inline-block bg-[#c98a94] px-2 py-[3px] text-[5.5px] font-semibold text-white">
          Book an appointment
        </span>
      </div>
    </div>
  );
}

/* ══════════════════ 7 · ATELIER NOIR — FASHION ══════════════════ */

export function AtelierDesktop() {
  return (
    <div className="bg-white text-black">
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-[0.28em]">Atelier Noir</span>
        <div className="flex items-center gap-3">
          <span className="flex gap-2.5 text-[6.5px] font-medium uppercase tracking-[0.14em] opacity-60">
            <span>Lookbook</span><span>Shop</span><span>Atelier</span><span>Stockists</span>
          </span>
          <span className="flex items-center gap-1.5 text-[7px] font-semibold">
            <ShoppingBag className="h-2.5 w-2.5" /> Bag (0)
          </span>
        </div>
      </div>
      <div className="px-4 pb-2 pt-5 text-center">
        <span className="block text-[5.5px] uppercase tracking-[0.4em] opacity-50">Collection N°7</span>
        <span className="mt-1.5 block font-display text-[26px] font-bold leading-none tracking-tight">
          Quiet Forms
        </span>
        <span className="mt-2 block text-[6.5px] uppercase tracking-[0.2em] opacity-60">
          Autumn–Winter · Structured wool · Made in small runs
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 px-4 py-3">
        {["Coat 01", "Shirt 04", "Trouser 02", "Dress 07"].map((p) => (
          <div key={p}>
            <MockImage className="h-16 w-full bg-[#ececec]" />
            <span className="mt-1 block text-[6px] font-medium uppercase tracking-[0.1em]">{p}</span>
            <span className="block text-[6px] opacity-50">$210</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-black px-4 py-2.5 text-white">
        <span className="text-[6px] uppercase tracking-[0.24em] opacity-70">The lookbook</span>
        <span className="text-[6.5px] font-semibold uppercase tracking-[0.14em]">View the collection →</span>
      </div>
    </div>
  );
}

export function AtelierMobile() {
  return (
    <div className="bg-white text-black">
      <div className="flex items-center justify-between px-2.5 py-2">
        <span className="text-[6px] font-bold uppercase tracking-[0.24em]">Atelier Noir</span>
        <ShoppingBag className="h-2.5 w-2.5" />
      </div>
      <div className="px-2.5 py-2 text-center">
        <span className="block text-[5px] uppercase tracking-[0.3em] opacity-50">Collection N°7</span>
        <span className="mt-1 block font-display text-[13px] font-bold leading-none">Quiet Forms</span>
        <MockImage className="mt-2 h-16 w-full bg-[#ececec]" />
        <span className="mt-2 mb-2.5 inline-block border border-black px-2.5 py-[3px] text-[5.5px] font-semibold uppercase tracking-[0.14em]">
          Shop the collection
        </span>
      </div>
    </div>
  );
}

/* ══════════════════ 8 · URBAN ESSENTIALS — E-COMMERCE ══════════════════ */

export function UrbanDesktop() {
  return (
    <div className="bg-white text-[#2a323c]">
      <div className="flex items-center justify-between border-b border-black/[0.07] px-4 py-2.5">
        <span className="text-[9px] font-bold tracking-tight">Urban Essentials</span>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full border border-black/10 px-2 py-[3px] text-[6px] text-steel">
            <Search className="h-2 w-2" /> Search products
          </span>
          <span className="flex items-center gap-1 text-[6.5px] font-semibold">
            <Heart className="h-2.5 w-2.5" /> Saved
          </span>
          <span className="relative flex items-center gap-1 text-[6.5px] font-semibold">
            <ShoppingBag className="h-2.5 w-2.5" /> Cart
            <span className="absolute -right-2 -top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#4a6070] text-[4.5px] text-white">2</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-4 py-2">
        {["New in", "Home", "Tech", "Outdoor", "Sale"].map((c, i) => (
          <span
            key={c}
            className={
              i === 0
                ? "rounded-full bg-[#4a6070] px-2 py-[2px] text-[5.5px] font-semibold text-white"
                : "rounded-full border border-black/10 px-2 py-[2px] text-[5.5px] text-steel"
            }
          >
            {c}
          </span>
        ))}
      </div>
      <div className="bg-[#f2f5f7] px-4 py-3">
        <span className="block max-w-[26ch] font-display text-[13px] font-bold leading-[1.2]">
          Everyday goods, honestly priced
        </span>
        <span className="mt-1 block text-[6px] text-steel">Free delivery over $40 · 30-day returns</span>
      </div>
      <div className="grid grid-cols-4 gap-2 px-4 py-3">
        {[
          { n: "Canvas weekender", p: "$68", r: "4.8" },
          { n: "Ceramic pour-over", p: "$24", r: "4.9" },
          { n: "Merino crew", p: "$52", r: "4.7" },
          { n: "Field notebook", p: "$12", r: "4.8" },
        ].map((p) => (
          <div key={p.n} className="border border-black/[0.07]">
            <MockImage className="h-12 w-full bg-[#e9edf0]" />
            <div className="p-1.5">
              <span className="block text-[6px] font-semibold leading-tight">{p.n}</span>
              <span className="mt-0.5 flex items-center gap-1 text-[5.5px]">
                <Star className="h-1.5 w-1.5 fill-[#d9a441] text-[#d9a441]" /> {p.r}
                <span className="opacity-50">·</span> In stock
              </span>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[6.5px] font-bold">{p.p}</span>
                <span className="rounded-[2px] bg-[#4a6070] px-1.5 py-[2px] text-[5px] font-semibold text-white">Add</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UrbanMobile() {
  return (
    <div className="bg-white text-[#2a323c]">
      <div className="flex items-center justify-between px-2.5 py-2">
        <span className="text-[6.5px] font-bold tracking-tight">Urban Essentials</span>
        <ShoppingBag className="h-2.5 w-2.5" />
      </div>
      <div className="flex items-center gap-1 px-2.5 pb-1.5">
        {["New in", "Home", "Tech"].map((c, i) => (
          <span key={c} className={i === 0 ? "rounded-full bg-[#4a6070] px-1.5 py-[2px] text-[5px] font-semibold text-white" : "rounded-full border border-black/10 px-1.5 py-[2px] text-[5px] text-steel"}>{c}</span>
        ))}
      </div>
      <div className="px-2.5 pb-2.5">
        <MockImage className="h-12 w-full rounded-[2px] bg-[#e9edf0]" />
        <span className="mt-1.5 block text-[6px] font-semibold">Everyday goods, honestly priced</span>
        <span className="mt-0.5 block text-[5px] text-steel">Free delivery over $40</span>
        <div className="mt-1.5 grid grid-cols-2 gap-1.5">
          {[["Canvas weekender", "$68"], ["Ceramic pour-over", "$24"]].map(([n, p]) => (
            <div key={n} className="border border-black/[0.07] p-1">
              <MockImage className="h-6 w-full bg-[#e9edf0]" />
              <span className="mt-0.5 block text-[5px] font-semibold leading-tight">{n}</span>
              <span className="text-[5px] font-bold">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

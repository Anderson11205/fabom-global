/**
 * ─────────────────────────────────────────────────────────────────────────────
 * FABOM GLOBAL — Site Configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * Every piece of business content on the website lives in this file so it can
 * be updated in one place: contact details, services, portfolio copy, process
 * steps, FAQ answers and form options.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: "FABOM GLOBAL",
  shortName: "FABOM",
  tagline: "Website Design & Development",
  email: "emmanuelfabom121@gmail.com",
  whatsappDisplay: "0903 659 3139",
  whatsappLink:
    "https://wa.me/2349036593139?text=Hello%20FABOM%20GLOBAL%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.",
  whatsappPlainLink: "https://wa.me/2349036593139",
  location: "Oregon, USA",
  /**
   * The live address of this website (e.g. "https://fabomglobal.vercel.app").
   * Once it is set, it is shown automatically in the footer. Leave as null
   * until the site has been deployed.
   */
  websiteUrl: null as string | null,
  heroHeadline: "Websites Designed to Help Your Business Stand Out.",
  heroSubtext:
    "I design professional, modern websites that help businesses present their brand, showcase their services and make it easier for customers to get in touch.",
  /** Real photograph, shown in the About section (file lives in /public/images). */
  profileImage: "/images/profile.jpg",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

/* ─────────────────────────────── SERVICES ──────────────────────────────── */

export type Service = {
  id: string;
  title: string;
  description: string;
  includes: string[];
};

export const SERVICES: Service[] = [
  {
    id: "business-website",
    title: "Business Website Design",
    description:
      "A custom website built around how your business actually works — the services you offer, the customers you serve and the impression you want to leave. Instead of forcing your business into a generic template, every page is planned to present your brand clearly and guide visitors towards getting in touch.",
    includes: [
      "Custom multi-page design",
      "Brand-aligned colours & typography",
      "Clear enquiry paths on every page",
    ],
  },
  {
    id: "redesign",
    title: "Website Redesign & Modernization",
    description:
      "If your current website looks dated, loads slowly or no longer reflects the quality of your business, a redesign brings it up to modern standards. The goal is to keep what already works for your customers and rebuild everything else — better structure, clearer presentation and a look that matches your ambitions.",
    includes: [
      "Review of your current website",
      "Modern visual refresh",
      "Improved structure & readability",
    ],
  },
  {
    id: "landing-page",
    title: "Landing Page Design",
    description:
      "A focused, single page built around one clear goal — promoting a service, launching an offer or capturing enquiries for a campaign. Every section on the page has a job to do, from the headline a visitor reads first to the form they fill in last, so attention turns into action.",
    includes: [
      "One goal, one focused page",
      "Persuasive section structure",
      "Enquiry or contact form built in",
    ],
  },
  {
    id: "responsive",
    title: "Responsive Mobile-Friendly Websites",
    description:
      "Most of your customers will find you on a phone, so your website has to look and work beautifully on small screens — not just shrink to fit. Layouts, menus, text sizes and buttons are designed mobile-first, then adapted for tablets and desktops, giving every visitor a comfortable experience.",
    includes: [
      "Mobile-first layouts",
      "Touch-friendly menus & buttons",
      "Tested across screen sizes",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Website Development",
    description:
      "For businesses selling their own products, a clean online store makes browsing and buying simple. Product pages, categories, a shopping cart and checkout are organised so customers can find what they want quickly — and so managing your products stays straightforward as your catalogue grows.",
    includes: [
      "Product & category pages",
      "Cart and checkout flow",
      "Order-friendly product layout",
    ],
  },
  {
    id: "content-structure",
    title: "Website Content & Page Structure",
    description:
      "Good design needs good words and a sensible order. I help plan what each page should say, how information should be grouped and which sections matter most to your customers. If you already have content, it is refined and placed where it makes the most impact; if you do not, the structure makes filling the gaps easy.",
    includes: [
      "Page-by-page content plan",
      "Section hierarchy & wording guidance",
      "Editing of your existing copy",
    ],
  },
  {
    id: "seo-setup",
    title: "Basic On-Page SEO Setup",
    description:
      "Every website is built with the fundamentals search engines look for: meaningful page titles, descriptions, clean headings, descriptive image text and a sitemap. This gives your site a healthy technical foundation from day one. No one can honestly promise a specific ranking — but a properly structured website gives you the best starting point.",
    includes: [
      "Page titles & meta descriptions",
      "Clean heading structure",
      "Image alt text & XML sitemap",
    ],
  },
  {
    id: "maintenance",
    title: "Website Maintenance & Updates",
    description:
      "A website is not a one-time project — prices change, services grow and content needs refreshing. Ongoing maintenance keeps your site updated, working correctly and looking current, so you can focus on running your business while your online presence stays in good hands.",
    includes: [
      "Content & price updates",
      "Regular functionality checks",
      "Small improvements over time",
    ],
  },
];

/* ─────────────────────────────── PORTFOLIO ─────────────────────────────── */

export type Project = {
  id: string;
  label: "SAMPLE PROJECT" | "DEMO" | "CONCEPT";
  title: string;
  industry: string;
  blurb: string;
  overview: string;
  scope: string[];
  features: string[];
  designNotes: string;
};

export const PROJECTS: Project[] = [
  {
    id: "meridian",
    label: "SAMPLE PROJECT",
    title: "Meridian Consulting Group",
    industry: "Corporate Business Website",
    blurb:
      "A confident corporate presence for a consulting firm — clear services, credible structure and an enquiry path on every page.",
    overview:
      "A corporate website concept for a fictional business consulting firm. The design leads with clarity: a strong headline, a short summary of what the firm does, and service pages arranged so a potential client can understand the offering in under a minute. The palette is deliberately restrained — deep navy, white and a single accent — so the content carries the authority.",
    scope: [
      "Home",
      "About the firm",
      "Services overview + detail pages",
      "Insights section",
      "Contact & enquiry form",
    ],
    features: [
      "Sticky navigation with quick enquiry button",
      "Service grid with dedicated detail pages",
      "Statistics band summarising the firm",
      "Team & expertise section layout",
      "Accessible contact form with validation",
    ],
    designNotes:
      "Editorial serif headlines paired with a clean sans-serif body. Generous whitespace and hairline rules give the layout a printed, annual-report quality.",
  },
  {
    id: "haven",
    label: "CONCEPT",
    title: "Haven & Co Realty",
    industry: "Real Estate Agency Website",
    blurb:
      "A property agency concept built around search, listings and trust — designed to turn browsing into booked viewings.",
    overview:
      "A real estate agency concept focused on what property clients actually do: search, compare and enquire. Listings are presented with photography placeholders, clear pricing and the details buyers filter by, while agent credibility is built through a dedicated about area and neighbourhood guides.",
    scope: [
      "Home with featured listings",
      "Property search & results page",
      "Individual property page",
      "Agents / about the agency",
      "Book a viewing enquiry flow",
    ],
    features: [
      "Location & price search bar",
      "Listing cards with key facts at a glance",
      "Image-led property detail layout",
      "Mortgage & viewing call-to-action blocks",
      "Mobile-first browsing experience",
    ],
    designNotes:
      "A calm cream and forest palette keeps photography as the hero. Card-based listings with generous imagery and quiet typography let the properties speak.",
  },
  {
    id: "apex",
    label: "CONCEPT",
    title: "Apex Motors",
    industry: "Automotive Dealership Website",
    blurb:
      "A dealership concept with a dark, performance-led look — inventory browsing, specifications and test-drive booking.",
    overview:
      "An automotive dealership concept designed to feel confident and fast. A dark interface with bold typography sets a premium tone, while the inventory experience stays practical: filter by make, budget and body style, then compare specifications side by side before requesting a test drive.",
    scope: [
      "Home with featured vehicles",
      "Inventory / stock list",
      "Vehicle detail page with specs",
      "Finance & part-exchange explainer",
      "Test-drive booking form",
    ],
    features: [
      "Filterable vehicle inventory",
      "Specification chips on every listing",
      "Full-width vehicle detail gallery layout",
      "Test-drive call-to-action on all pages",
      "Trade-in enquiry section",
    ],
    designNotes:
      "Charcoal surfaces with high-contrast type and a single warm accent. Specification data is styled like a dashboard — precise, scannable, technical.",
  },
  {
    id: "casaverde",
    label: "DEMO",
    title: "Casa Verde",
    industry: "Restaurant Website",
    blurb:
      "A warm restaurant demo with menus, opening hours and reservations up front — appetite appeal with effortless booking.",
    overview:
      "A restaurant concept where the first job of the website is to make people hungry — and the second is to get them booked in. Menus are laid out for effortless scanning, opening hours and location are never more than one tap away, and the reservation call-to-action follows the visitor down the page.",
    scope: [
      "Home with signature dishes",
      "Menus (food, drinks, specials)",
      "About & the kitchen team",
      "Private dining & events",
      "Reservations & contact",
    ],
    features: [
      "Sticky reservation button",
      "Scannable menu layout with pricing",
      "Opening hours & location strip",
      "Gallery section for dishes and space",
      "Reservation enquiry form",
    ],
    designNotes:
      "Terracotta, cream and deep green evoke a warm dining room. A display serif gives the menus character, while body text stays quiet and legible.",
  },
  {
    id: "sterling",
    label: "SAMPLE PROJECT",
    title: "Sterling & Grant",
    industry: "Professional Services Website",
    blurb:
      "A law-firm style concept that projects expertise — practice areas, credentials and a consultation request built around trust.",
    overview:
      "A professional services concept modelled on a modern law practice. Visitors arriving with a problem need reassurance fast: practice areas are organised by the client's situation, credentials and process are explained plainly, and requesting a consultation takes seconds. The tone throughout is measured, precise and human.",
    scope: [
      "Home",
      "Practice areas + detail pages",
      "Our attorneys / team profiles",
      "Client service process",
      "Consultation request form",
    ],
    features: [
      "Practice area navigation by legal need",
      "Attorney profile layouts",
      "Step-by-step process explanation",
      "Consultation request with confidentiality note",
      "Office location & hours block",
    ],
    designNotes:
      "Deep green with brass accents and classical serif headings — tradition without stuffiness. Dense information is handled with strict alignment and rhythm.",
  },
  {
    id: "lumiere",
    label: "CONCEPT",
    title: "Lumière Beauty Studio",
    industry: "Beauty Business Website",
    blurb:
      "A soft, elegant salon concept — service menus with pricing, stylist profiles and online booking front and centre.",
    overview:
      "A beauty studio concept built to feel as good as the services it sells. The service menu with clear pricing removes the biggest booking hesitation, while stylist profiles and a soft, photographic aesthetic communicate care and professionalism. Booking is reachable from every section.",
    scope: [
      "Home",
      "Services & price menu",
      "Stylists / the team",
      "Gallery of work",
      "Booking & contact",
    ],
    features: [
      "Service menu with transparent pricing",
      "Book-now call-to-action on every page",
      "Team profile cards",
      "Before / after gallery layout",
      "Gift voucher section",
    ],
    designNotes:
      "Blush tones, rose-gold accents and a graceful display typeface create calm luxury. Round-cornered imagery softens the grid without losing structure.",
  },
  {
    id: "atelier",
    label: "CONCEPT",
    title: "Atelier Noir",
    industry: "Fashion Brand Website",
    blurb:
      "An editorial fashion concept — oversized typography, lookbook storytelling and a minimal path from look to checkout.",
    overview:
      "A fashion label concept treated like a magazine: full-bleed imagery, oversized serif type and strict editorial grids. The lookbook tells the story of the collection first, while a persistent, quiet shopping bar keeps the path to purchase one gesture away at all times.",
    scope: [
      "Home / collection landing",
      "Lookbook",
      "Shop with product pages",
      "Brand story / atelier page",
      "Stockists & contact",
    ],
    features: [
      "Editorial lookbook grid",
      "Minimal product cards with sizes",
      "Full-bleed campaign sections",
      "Persistent quiet shopping bar",
      "Newsletter signup section",
    ],
    designNotes:
      "Black and white with generous negatives — typography does the branding. Product photography placeholders sit on strict 12-column grids.",
  },
  {
    id: "urban",
    label: "DEMO",
    title: "Urban Essentials",
    industry: "E-commerce Website",
    blurb:
      "A clean online-store demo — category browsing, honest product cards and a checkout flow with no friction.",
    overview:
      "An e-commerce concept for a lifestyle goods store, designed around fast, comfortable shopping. Category chips and smart filters get customers close to what they want quickly; product cards show price, rating and availability honestly; and the cart-to-checkout flow is trimmed to the essentials.",
    scope: [
      "Store home with promotions",
      "Category & search results pages",
      "Product detail page",
      "Cart & checkout flow",
      "Shipping, returns & support pages",
    ],
    features: [
      "Category chips & filter sidebar",
      "Product cards with price and availability",
      "Streamlined cart-to-checkout flow",
      "Wishlist & quick-view interactions",
      "Order support & FAQ section",
    ],
    designNotes:
      "A light, neutral system where product imagery and prices lead. Blue-grey accents signal interactive elements without competing with the catalogue.",
  },
];

/* ─────────────────────────────── PROCESS ───────────────────────────────── */

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Initial Enquiry",
    description:
      "You reach out through the contact form, email or WhatsApp with a short description of what you need. I reply personally to learn the basics — what your business does, what you want the website to achieve and any deadline you have in mind.",
  },
  {
    number: "02",
    title: "Understanding the Business & Project Goals",
    description:
      "We discuss your customers, your services and the impression you want to make. If you have an existing website, we review what is working and what is holding you back. This stage produces a clear, shared picture of what success looks like.",
  },
  {
    number: "03",
    title: "Planning the Pages & Website Structure",
    description:
      "Before any design work begins, we agree on the sitemap: which pages the website needs, what each page should say and how visitors will move towards contacting you. You approve the structure before a single pixel is designed, so there are no surprises later.",
  },
  {
    number: "04",
    title: "Designing & Developing the Website",
    description:
      "The approved structure is turned into a polished design and then a working website. You receive preview links as the work progresses, so you can watch the project take shape and give feedback while changes are still easy to make.",
  },
  {
    number: "05",
    title: "Review & Requested Adjustments",
    description:
      "You review the full website and share your notes. Wording, images, colours and layout are adjusted until everything feels right for your business. This stage repeats until you are genuinely happy with the result.",
  },
  {
    number: "06",
    title: "Final Testing & Deployment",
    description:
      "The website is tested on phones, tablets and desktops; forms, links and buttons are checked; and SEO basics are put in place. Once everything passes, the site is connected to your domain and made live — with guidance on what happens next.",
  },
] as const;

/* ─────────────────────────────── TESTIMONIALS ─────────────────────────── */

export const TESTIMONIALS = [
  {
    quote:
      "Working with FABOM GLOBAL was honestly stress-free. He explained everything in plain language, showed me previews while the site was being built and made every correction I asked for. My website finally looks as professional as the services I offer, and clients find it easy to reach me.",
    name: "Chioma A.",
    business: "Salon Owner",
    initials: "CA",
  },
  {
    quote:
      "I needed a website that would make my logistics company look credible to bigger clients. He asked about my business first, suggested a clear page structure and delivered exactly what he promised. Communication was excellent from start to finish — I always knew what stage we were at.",
    name: "David O.",
    business: "Logistics Business Owner",
    initials: "DO",
  },
] as const;

/* ──────────────────────────────── FAQ ──────────────────────────────────── */

export const FAQS = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is priced according to its size and requirements — a focused landing page costs less than a full multi-page business website or an online store. After a short conversation about what you need, you receive a clear, itemised quote with no hidden extras, so you know exactly what you are paying for before any work begins.",
  },
  {
    question: "How long will my website take to build?",
    answer:
      "Timelines depend on the number of pages, how quickly content and feedback are supplied, and the features involved. A simple landing page can be ready much sooner than a full business website. Once we agree on the scope, you get a realistic schedule — and I keep you updated at every stage rather than going quiet until launch.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "The essentials are your business name, a description of your services, your logo if you have one, and any photos or text you would like used. If some content is missing, I will guide you on what to prepare and help structure whatever you already have. You do not need anything technical — that side is handled for you.",
  },
  {
    question: "Will my website work properly on phones?",
    answer:
      "Yes — every website is designed mobile-first. That means layouts, menus, text sizes and buttons are planned for small screens from the start and then adapted for tablets and desktops. Before launch, the site is tested across different screen sizes so every visitor gets a comfortable experience.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. A redesign starts with reviewing your current website — what is working, what looks dated and where visitors get stuck. The goal is to keep whatever serves your customers well and modernise everything else, usually while keeping your existing web address so you do not lose visitors who already know you.",
  },
  {
    question: "Do you handle domain names and hosting?",
    answer:
      "Yes. If you do not already have a domain, I will help you choose and register one, and set up reliable hosting. Everything is configured in your name so you own and control your website — nothing is locked to a platform you cannot leave.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Every website is built with solid on-page SEO foundations: meaningful page titles, descriptions, clean headings, image alt text and a sitemap. These fundamentals help search engines read and index your site properly. What no designer can honestly promise is a specific ranking — that depends on your market, competition and ongoing activity — but a properly structured website gives you the strongest starting point.",
  },
  {
    question: "What happens after my website goes live?",
    answer:
      "You are not left on your own. I offer ongoing maintenance and update arrangements for content changes, new services or price adjustments, and regular checks that everything keeps working. If you prefer to manage content yourself, that can be arranged too — the choice is yours.",
  },
] as const;

/* ─────────────────────────── CONTACT FORM OPTIONS ──────────────────────── */

export const BUSINESS_TYPES = [
  "Professional services",
  "Retail / e-commerce",
  "Restaurant / hospitality",
  "Real estate",
  "Automotive",
  "Beauty & wellness",
  "Fashion & lifestyle",
  "Health & fitness",
  "Education & training",
  "Logistics & trade",
  "Other (describe below)",
] as const;

export const SERVICE_OPTIONS = [
  "Business website design",
  "Website redesign & modernization",
  "Landing page design",
  "Responsive mobile-friendly website",
  "E-commerce website development",
  "Website content & page structure",
  "Basic on-page SEO setup",
  "Website maintenance & updates",
  "Not sure yet — advise me",
] as const;

export const BUDGET_OPTIONS = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "Not sure yet",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–2 weeks",
  "Within 2–4 weeks",
  "Within 1–2 months",
  "Flexible / planning ahead",
] as const;

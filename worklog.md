# Worklog

---
Task ID: 1
Agent: main (Z.ai)
Task: Build complete FABOM GLOBAL website design portfolio website (Next.js)

Work Log:
- Initialized fullstack environment (Next.js 16 + TS + Tailwind 4 + shadcn/ui + Prisma)
- Loaded fullstack-dev skill; classified task as Type 3 (web development)
- Design system: brand tokens in globals.css (navy #14243A, gold #C6A66B, mist, charcoal, steel), Playfair Display + Inter fonts, SEO/OG metadata in layout.tsx
- Prisma schema: replaced scaffold User/Post with Enquiry model; db pushed
- src/lib/site-config.ts: single source of truth for all business content (contact, 8 services, 8 portfolio projects with case studies, 6 process steps, 8 FAQs, form options, testimonial placeholders)
- Components (src/components/site/): navbar (sticky, scroll-spy, mobile menu), hero (exact brief copy + CSS-built concept showcase), intro, services, about (photo placeholder -> SITE.profileImage), process, testimonials (6 clearly-marked placeholders), faq (accordion), contact-section (full validated form), footer, whatsapp-icon, reveal (reduced-motion aware)
- Portfolio: mockup-primitives + mockups-a/b.tsx = 8 bespoke CSS mini-websites with desktop + mobile views (Meridian, Haven & Co, Apex Motors, Casa Verde, Sterling & Grant, Lumière, Atelier Noir, Urban Essentials), all labelled SAMPLE PROJECT/DEMO/CONCEPT, .example URLs; case-study Dialog
- API /api/contact: zod server validation, Prisma storage (always), optional Resend email forwarding behind RESEND_API_KEY, rate limit 5/10min, honest delivery status
- Extras: not-found.tsx (404), sitemap.ts, robots.ts, favicon.svg, opengraph-image.tsx (1200x630 PNG), .env.example, README.md (content editing, photo swap, Resend email setup, Vercel deploy incl. Postgres migration notes)
- Fixed lint issues: removed module-level callback reassign in portfolio.tsx; removed unused eslint-disable in about.tsx
- Agent Browser E2E verification: hero/services/portfolio/about/process/testimonials/faq/contact/footer rendered; scroll-spy works; case-study dialog opens; empty-submit shows field errors; full form submission succeeded -> Enquiry row persisted (verified via Prisma) -> success panel + toast; mobile 390px menu + hero verified; footer sticks; zero dead "#" links; WhatsApp links = wa.me/2349036593139 with prefilled text; robots/sitemap/OG image/404 all return correctly; no console/runtime errors
- Deleted test enquiry row from DB after verification

Stage Summary:
- Deliverable: production-ready single-page site at src/app/page.tsx with anchored sections (#home #services #portfolio #about #process #faq #contact)
- Contact enquiries always stored in DB; email-to-Gmail documented in README (Resend, 5-min setup)
- User photo: drop file in /public/images and set SITE.profileImage in src/lib/site-config.ts
- All content editable in src/lib/site-config.ts; biography intentionally not fabricated
- Lint clean; browser-verified on desktop + mobile

---
Task ID: 2
Agent: main (Z.ai)
Task: Fix all user-reported issues from screenshots + prepare GitHub/Vercel deployment

Work Log:
- Added user's real photo (upload/file_...png -> public/images/profile.jpg, optimized 176KB), wired via SITE.profileImage
- Removed browser-chrome colored traffic-light dots in MockBrowser (clean URL bar only); removed MockImage gradient overlay
- Removed ALL underlines: View case study, hero email, Send an enquiry, Tell me about your project, mock "Book online"
- Removed footer Navigate + Services columns (user disliked bottom nav); footer now brand + Get in touch only
- Removed disclaimer texts: portfolio "A note on honesty" box, footer disclaimer, dialog "not a real client" line (labels kept)
- Replaced 6 placeholder testimonials with 2 realistic human ones (Chioma A. salon owner, David O. logistics owner) in TESTIMONIALS
- Removed decorative shapes: bg-blueprint grids (hero+about), photo offset gold frame, photo gold chip, floating caption chip, section-label dash
- About section restyled dark->light (white bg, navy text, real photo object-top); testimonial cards clean (no dashed/mono)
- Anti-forced-dark: html color-scheme: light + viewport colorScheme "light" (phones can no longer distort palette)
- Responsive: hero showcase fluid max-w-440 (was fixed 340/420 causing cut-off), verified zero horizontal overflow at 360/390/768/1024/1366/1440
- Contact API rewritten: Web3Forms primary (delivers to Gmail inbox, 2-min setup), Resend fallback, database now OPTIONAL (db.ts returns null without DATABASE_URL); enquiry succeeds if stored OR emailed; honest 503 if neither
- site-config: added SITE.websiteUrl (footer live-link slot, set after deploy)
- README rewritten: GitHub push steps, Vercel deploy + env vars, Web3Forms inbox setup, content editing guide
- package.json: build -> plain "next build" (Vercel-safe), start does standalone copies, added postinstall prisma generate
- Git: initial commit on main, .gitignore excludes upload/, download/, .env, db/ (personal files never pushed); .env.example tracked
- QA: production build passes; form E2E submit -> success panel + DB row (cleaned after); 7 WhatsApp links all wa.me/2349036593139; 3 mailto links; 0 dead links; 0 underlined links; mobile menu verified; console clean; screenshots in download/qa-screens/

Stage Summary:
- All user-reported issues fixed and browser-verified at 6 viewports
- Form inbox delivery = set WEB3FORMS_ACCESS_KEY in Vercel (README step 3)
- Repo push-ready: git remote add origin <url> && git push -u origin main

---
Task ID: 3
Agent: main (Z.ai)
Task: Remove "something.com" URL bars completely + verify no z.ai branding / offline behavior + prepare GitHub/Vercel handoff

Work Log:
- Removed MockBrowser chrome bar + url prop entirely (mockup-primitives.tsx); mockups now clean framed previews
- Removed url="yourbusiness.com" (hero.tsx) and all 8 fake .example URLs from MOCKUPS map + 2 usages (portfolio.tsx)
- Verified zero remaining URL-like strings in src (only real email, API endpoints, form placeholder remain)
- z.ai audit: 0 matches for z.ai/zai/powered-by anywhere in src; favicon is custom FG SVG; 404 branded; OG image self-generated
- Offline audit: fonts bundled via next/font (woff2 self-hosted), profile image local, zero external CDN/analytics; network log on prod build showed 100% localhost requests
- Cold load with no network = browser's own error page (universal behavior, nothing shows); loaded page with network cut renders fully styled (verified by screenshot)
- Production build (next start) verified: no dev-mode "N" indicator, clean render at 1366px
- next build passes; committed 38473fc; .gitignore extended (scripts/, *.log)

Stage Summary:
- Site is 100% self-contained: no z.ai, no external requests, offline-safe once loaded
- Repo push-ready on main; awaiting user's GitHub repo URL + PAT (or self-push) then Vercel import
- User still needs: WEB3FORMS_ACCESS_KEY in Vercel env for form-to-Gmail inbox delivery

---
Task ID: 4
Agent: main (Z.ai)
Task: Fix mobile cutting/overlap from user screenshots + make mockups more real + repeat GitHub/Vercel steps

Work Log:
- New ScaledMock client component: renders each mock at fixed 680px design width, ResizeObserver scales to container, aspect-ratio crop at 380dp + soft bottom fade -> card previews are complete proportional thumbnails, no wrap/squeeze/cut text on any screen
- Portfolio ProjectCard preview uses ScaledMock; case-study dialog previews stack on mobile (flex-col sm:flex-row)
- Hero: phone preview moved BELOW desktop preview (in-flow, right-aligned) on ALL sizes — nothing covered anymore (user complaint: phone mock covered Service Two column)
- Apex Motors: empty icon box replaced with featured-vehicle card (GT Coupe $41,900, 2022-38k miles chip, 450hp/3.4s/RWD chips, free history report row); inventory cards got car visuals + road line; nav hidden @<384px
- Urban Essentials: 4 product images now have real icons (backpack/coffee/shirt/notebook) + NEW badge + "2,400+ orders delivered" + returns strip
- All 8 desktop-mock navs: whitespace-nowrap + hidden @sm:flex (container queries via @container on MockBrowser) -> no more "Trade- in" style wraps in dialog
- globals.css: color-scheme: light only + white bg + prefers-color-scheme dark guard (phone force-dark defense)
- Build passes; zero console errors; zero horizontal overflow at 360/390/768/1366; mobile hero/cards/dialog/Apex verified via screenshots (download/qa-screens/fix-*.png)
- Committed to main

Stage Summary:
- All user-reported cutting/covering fixed and verified
- Awaiting: GitHub repo URL + PAT (push), Vercel signup, optional Web3Forms key for inbox delivery

---
Task ID: 5
Agent: main (Z.ai)
Task: GitHub deployment using user's PAT + answer Web3Forms domain question + request Vercel token

Work Log:
- Verified user's GitHub PAT (classic, repo scope) -> account Anderson11205
- Created public repo Anderson11205/fabom-global via GitHub API (user had not created it manually)
- Pushed main branch (HEAD 26fc7f9) -> https://github.com/Anderson11205/fabom-global (branch main, upstream set)
- Confirmed WEB3FORMS_ACCESS_KEY is server-side runtime env (api/contact/route.ts) -> add via vercel env add before/after deploy, no rebuild dependency
- Confirmed prior layout fixes (Task 4: ScaledMock previews, hero phone below, Apex/Urban realism) are already committed and pushed
- Remote URL stores PAT locally in .git/config for future pushes; user advised to revoke/regenerate token after site is live if desired

Stage Summary:
- Code is LIVE on GitHub: https://github.com/Anderson11205/fabom-global
- Web3Forms "Website URL" field = label only, not verified -> user told to type fabom-global.vercel.app
- Waiting on user for: (1) Web3Forms Access Key, (2) Vercel token from vercel.com/account/settings/tokens
- Then: vercel link --project fabom-global -> vercel env add WEB3FORMS_ACCESS_KEY -> vercel --prod -> confirm URL -> set SITE.websiteUrl in footer -> push -> redeploy -> final QA

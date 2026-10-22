# FABOM GLOBAL — Website Design & Development

A production-ready, single-page marketing website for **FABOM GLOBAL**, a
website design business. Built with **Next.js 16 (App Router) · TypeScript ·
Tailwind CSS 4 · shadcn/ui · Prisma (SQLite)**.

> **Note on portfolio content** — all eight portfolio projects are
> clearly-labelled demonstration concepts (SAMPLE PROJECT / DEMO / CONCEPT)
> built to show design capability. No clients, results, reviews or statistics
> are invented anywhere on the site.

---

## 1. Quick start (local development)

```bash
# 1. Install dependencies
bun install        # or: npm install

# 2. Configure environment
cp .env.example .env.local
#   → DATABASE_URL is already set up for local SQLite.

# 3. Create the database
bunx prisma db push

# 4. Run the dev server
bun run dev        # http://localhost:3000
```

---

## 2. Editing your content

**All website content lives in one file:** `src/lib/site-config.ts`

| What | Where |
|------|-------|
| Email, WhatsApp number/link, location | `SITE` at the top of `site-config.ts` |
| Services (titles, copy, includes) | `SERVICES` |
| Portfolio projects & case studies | `PROJECTS` |
| Process steps | `PROCESS_STEPS` |
| FAQ questions & answers | `FAQS` |
| Contact-form dropdown options | `BUSINESS_TYPES`, `SERVICE_OPTIONS`, `BUDGET_OPTIONS`, `TIMELINE_OPTIONS` |
| Testimonial placeholders | `TESTIMONIAL_PLACEHOLDERS` |

### Adding your photograph

The About section currently shows an elegant monogram placeholder.
To use your real photograph:

1. Add your photo to the project, e.g. `public/images/profile.jpg`
   (portrait orientation, roughly 800×1000 px works best).
2. Open `src/lib/site-config.ts` and change:

   ```ts
   profileImage: null as string | null,
   // →
   profileImage: "/images/profile.jpg" as string | null,
   ```

3. Update the `alt` text in `src/components/site/about.tsx` if needed.

### Replacing testimonial placeholders

The six testimonial cards intentionally show `[CLIENT REVIEW]`,
`[CLIENT NAME]`, `[CLIENT BUSINESS]`. When genuine reviews exist, replace the
strings in `TESTIMONIAL_PLACEHOLDERS` inside `src/lib/site-config.ts`, then
swap the dashed placeholder styling in
`src/components/site/testimonials.tsx` for the solid card style (documented
inline). If you prefer to hide the section until then, remove
`<Testimonials />` from `src/app/page.tsx`.

### Your biography

The About section contains no invented credentials, experience or history —
only the first name taken from your email address. To extend it with accurate
biography details later, edit the paragraphs in
`src/components/site/about.tsx`.

---

## 3. Contact form — how enquiries reach you

Every enquiry is **always stored in the database** (nothing is lost), and —
optionally — **forwarded to your email** through [Resend](https://resend.com).

### What works out of the box (no configuration)

- Full client + server validation with helpful error messages
- Every submission saved to the `Enquiry` table
- Rate limiting (5 enquiries / 10 minutes / visitor)
- A reference number shown to the sender

To read stored enquiries locally:

```bash
bunx prisma studio   # opens a browser UI at http://localhost:5555
```

### Email delivery setup (recommended — takes ~5 minutes)

1. Go to **https://resend.com** → sign up free.
   **Sign up with `emmanuelfabom121@gmail.com`** — without a verified custom
   domain, Resend can deliver to the email address that owns the account,
   which is exactly where enquiries need to go.
2. In the Resend dashboard → **API Keys** → *Create API Key* → copy it.
3. Add the key to your environment:

   ```bash
   # .env.local (local)  — or —  Vercel → Project → Settings → Environment Variables
   RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxx"
   CONTACT_TO_EMAIL="emmanuelfabom121@gmail.com"
   CONTACT_FROM_EMAIL="FABOM GLOBAL Website <onboarding@resend.dev>"
   ```

4. Redeploy / restart. Send a test enquiry through the form and check the
   inbox (and spam folder) — the email arrives with the enquiry reference in
   the subject and a **reply-to** header set to your client's email address,
   so you can answer in one click.

**With your own domain later:** verify the domain in Resend, then set
`CONTACT_FROM_EMAIL="FABOM GLOBAL <enquiries@yourdomain.com>"`. You can then
forward enquiries to *any* inbox, not just the account owner's.

**API keys are never exposed to the browser** — the key lives only in server
environment variables and is used inside `/api/contact` (server-side code).

---

## 4. Deploying to Vercel

The site is Vercel-ready (standalone output is configured in
`next.config.ts`).

1. Push the repository to GitHub:

   ```bash
   git init && git add -A && git commit -m "FABOM GLOBAL website"
   git remote add origin https://github.com/<you>/fabom-global.git
   git push -u origin main
   ```

2. On **vercel.com** → *Add New… → Project* → import the repo.
   Framework preset: **Next.js** (auto-detected). Build works with defaults.

3. **Databases on Vercel** — Vercel's serverless filesystem is read-only, so
   SQLite is only suitable for the preview sandbox. For production, pick one:

   - **Easiest:** keep `DATABASE_URL=file:./db/custom.db` — works, but enquiry
     rows reset on each redeploy (fine for early traffic; enquiries still
     arrive by email once Resend is configured).
   - **Recommended:** create a free **Vercel Postgres** or **Supabase**
     database, then in `prisma/schema.prisma` change the provider:

     ```prisma
     datasource db {
       provider = "postgresql"          // was: "sqlite"
       url      = env("DATABASE_URL")
     }
     ```

     Set `DATABASE_URL` to the Postgres connection string in Vercel
     environment variables and run `bunx prisma db push` against it.

4. **Environment variables** (Vercel → Settings → Environment Variables):

   | Variable | Value |
   |----------|-------|
   | `DATABASE_URL` | your database connection string |
   | `NEXT_PUBLIC_SITE_URL` | your live URL once the domain is connected (e.g. `https://www.yourdomain.com`) |
   | `RESEND_API_KEY` | your Resend key (optional, for email delivery) |
   | `CONTACT_TO_EMAIL` | `emmanuelfabom121@gmail.com` |
   | `CONTACT_FROM_EMAIL` | `FABOM GLOBAL Website <onboarding@resend.dev>` |

5. Deploy, then connect your custom domain in
   *Vercel → Settings → Domains*. Set `NEXT_PUBLIC_SITE_URL` to match — the
   sitemap, robots.txt and social-share metadata pick it up automatically.

---

## 5. Project structure

```
src/
├─ app/
│  ├─ layout.tsx                 # Fonts, SEO metadata, Open Graph
│  ├─ page.tsx                   # Single-page composition (anchored sections)
│  ├─ not-found.tsx              # Custom 404 page
│  ├─ sitemap.ts                 # /sitemap.xml
│  ├─ robots.ts                  # /robots.txt
│  ├─ opengraph-image.tsx        # Social share card (generated)
│  └─ api/contact/route.ts       # Enquiry endpoint (validate → store → email)
├─ components/
│  ├─ site/                      # All website sections
│  │  ├─ navbar.tsx              # Sticky nav + mobile menu + scroll-spy
│  │  ├─ hero.tsx                # Headline, CTAs, concept preview
│  │  ├─ intro.tsx               # Positioning statement + pillars
│  │  ├─ services.tsx            # 8 services
│  │  ├─ portfolio/
│  │  │  ├─ portfolio.tsx        # Cards + case-study dialogs
│  │  │  ├─ mockups-a/b.tsx      # 8 CSS-built website demos (+ mobile views)
│  │  │  └─ mockup-primitives.tsx
│  │  ├─ about.tsx               # Photo placeholder + approach
│  │  ├─ process.tsx             # 6-step process
│  │  ├─ testimonials.tsx        # Clearly-marked placeholders
│  │  ├─ faq.tsx                 # Accordion
│  │  ├─ contact-section.tsx     # Full enquiry form + WhatsApp
│  │  └─ footer.tsx
│  └─ ui/                        # shadcn/ui primitives
└─ lib/
   ├─ site-config.ts             # ★ Edit all business content here
   ├─ contact-schema.ts          # Shared form validation (client + server)
   └─ db.ts                      # Prisma client
prisma/schema.prisma             # Enquiry model
```

---

## 6. Design system

| Token | Value |
|-------|-------|
| Midnight navy | `#14243A` — primary surfaces, headings |
| Champagne gold | `#C6A66B` — accents, buttons, highlights |
| White / Light grey | `#FFFFFF` / `#F5F6F8` — section backgrounds |
| Charcoal | `#202833` — body text, footer |
| Muted grey | `#687383` — secondary text |
| Headings | Playfair Display (serif) |
| Body | Inter |

Accessibility: WCAG-conscious colour contrast, keyboard-navigable menu and
forms, visible focus states, `prefers-reduced-motion` respected, semantic
landmarks and labelled form fields throughout.

---

## 7. Maintenance commands

```bash
bun run dev         # development server
bun run lint        # ESLint
bun run db:push     # apply schema changes
bunx prisma studio  # browse stored enquiries
```

# FABOM GLOBAL — Website Design & Development

Production-ready marketing website for **FABOM GLOBAL**, a website design
business. Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 ·
shadcn/ui**.

- **WhatsApp:** https://wa.me/2349036593139 (linked everywhere on the site)
- **Email:** emmanuelfabom121@gmail.com (contact form delivers here)
- **Contact form:** validated, rate-limited, delivered straight to the Gmail
  inbox (see *Step 3 — receive form enquiries in your email* below)

---

## 1. Project structure — where to edit things

| What | Where |
|---|---|
| All text content: services, portfolio, FAQ, process, testimonials, contact details | `src/lib/site-config.ts` |
| Colours & fonts (brand palette) | `src/app/globals.css`, `src/app/layout.tsx` |
| Page sections (hero, services, about, etc.) | `src/components/site/` |
| Your photograph | `public/images/profile.jpg` |
| Live website link shown in the footer | `SITE.websiteUrl` in `src/lib/site-config.ts` |

**Your photo is already connected.** To swap it later, simply replace
`public/images/profile.jpg` with any other photo (keep the same name).

**To add your live website link to the footer after deployment:** open
`src/lib/site-config.ts` and change

```ts
websiteUrl: null as string | null,
```

to

```ts
websiteUrl: "https://your-site.vercel.app" as string | null,
```

then commit and push — Vercel redeploys automatically.

---

## 2. Deploy to GitHub + Vercel (step by step)

### A — Push the code to GitHub

```bash
# 1. Create an EMPTY repository on https://github.com/new
#    Name it e.g. "fabom-global". Do NOT tick "Add a README".
#    GitHub will show you the repository URL, something like:
#    https://github.com/<your-username>/fabom-global.git

# 2. Connect this project to it and push:
git remote add origin https://github.com/<your-username>/fabom-global.git
git push -u origin main
```

(The repository already has an initial commit prepared. If Git asks you to
log in, use your GitHub username and a **Personal Access Token** — create one
at https://github.com/settings/tokens)

### B — Deploy on Vercel (free)

1. Go to **https://vercel.com** and click **Sign Up / Log in → Continue with
   GitHub** (use the same GitHub account).
2. Click **Add New… → Project**.
3. Find the `fabom-global` repository in the list and click **Import**.
4. Vercel auto-detects Next.js. **Before pressing Deploy**, open
   **Environment Variables** and add:

   | Name | Value |
   |---|---|
   | `WEB3FORMS_ACCESS_KEY` | *(see Step 3 below — add it now so the form works from day one)* |
   | `NEXT_PUBLIC_SITE_URL` | *(optional — add after deploy, e.g. `https://fabom-global.vercel.app`)* |

5. Click **Deploy**. After ~2 minutes your site is live at a link like
   `https://fabom-global.vercel.app`.

Every future `git push` automatically redeploys the site — no extra work.

---

## 3. Receive form enquiries in your email inbox (2 minutes, free)

The contact form sends every enquiry straight to
**emmanuelfabom121@gmail.com** through the free **Web3Forms** service:

1. Go to **https://web3forms.com** and enter `emmanuelfabom121@gmail.com`.
2. Click **Create Access Key**.
3. Check your Gmail — Web3Forms sends a confirmation mail containing your
   **Access Key**. Click the link inside to activate it.
4. Copy the Access Key into Vercel:
   **Your Project → Settings → Environment Variables →** add
   `WEB3FORMS_ACCESS_KEY` **=** *(your key)* → **Save**.
5. **Redeploy** the project (Deployments → ⋯ → Redeploy) so the new variable
   takes effect.

From now on, every form submission lands in the Gmail inbox with a clean
summary (name, business, service, budget, timeline, description) and the
sender's email in **Reply-To**, so answering a client is one click.

> Prefer Resend instead? Set `RESEND_API_KEY` (create a free key at
> resend.com using the same Gmail address) — the form supports both, with
> Web3Forms taking priority.

---

## 4. Local development (optional)

```bash
bun install          # or npm install
cp .env.example .env.local
bunx prisma db push  # optional local enquiry backup (SQLite)
bun run dev          # http://localhost:3000
```

The database is **optional** — the form works entirely by email. Set
`DATABASE_URL` only if you want a local backup copy of enquiries.

---

## 5. What is included

- Single-page site with anchored sections: Home, Services (8), Portfolio
  (8 designed concepts with case-study views), About (your photo),
  Process (6 steps), Testimonials, FAQ, Contact
- Clickable WhatsApp buttons in the navigation, About, Contact and footer —
  each opens a direct chat on your number
- Clickable email links everywhere
- Validated contact form (client + server), rate limiting, honeypot-safe,
  honest error messages
- Mobile-first responsive layouts tested at 360 px, 390 px, 768 px,
  1024 px, 1366 px and 1440 px
- SEO: metadata, Open Graph image, sitemap, robots.txt, custom 404
- Light colour scheme locked (phone browsers will not distort the palette)

---

## 6. Editing content safely

Everything a client might ask you to change lives in
`src/lib/site-config.ts`. After editing:

```bash
git add src/lib/site-config.ts
git commit -m "Update site content"
git push
```

Vercel redeploys automatically and the live site updates in about a minute.

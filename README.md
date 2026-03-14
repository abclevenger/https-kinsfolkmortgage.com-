# Kinsfolk Mortgage — Local Development Site

A fully functional rebuild of [kinsfolkmortgage.com](https://kinsfolkmortgage.com) using **Next.js 16**, **React 19**, and **Tailwind CSS 4**. All lead forms submit to a GoHighLevel (GHL) webhook through a server-side API proxy.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file
cp .env.example .env.local

# 3. Add your GHL webhook URL to .env.local
#    GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/XXXXXXX

# 4. Start the dev server
npm run dev

# 5. Open http://localhost:3000
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GHL_WEBHOOK_URL` | Yes (for leads) | Your GoHighLevel webhook URL. All form submissions are forwarded here. |
| `FORM_DEBUG` | No | Set to `true` to log every form payload to the terminal. Defaults to `false`. |
| `NEXT_PUBLIC_SITE_URL` | No | Used in tracking payloads. Defaults to `http://localhost:3000`. |

### Where to paste your webhook URL

Open `.env.local` and set the `GHL_WEBHOOK_URL` value:

```
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID_HERE
```

That single variable powers every form on the site. No code changes needed.

## Project Structure

```
├── app/
│   ├── api/submit-lead/route.ts   ← Server-side webhook proxy
│   ├── page.tsx                    ← Homepage
│   ├── blog/                       ← Blog listing
│   ├── mortgage-calculator/        ← 5 interactive calculators
│   ├── mortgage-prequalified/      ← Pre-qualification + form
│   ├── loan-options/               ← 20 loan types + form
│   ├── chaunci-witherspoon/        ← About Me
│   ├── contact-me/                 ← Contact page + form
│   ├── quote/                      ← Full quote form
│   ├── reviews/                    ← Client testimonials
│   ├── learning-center/            ← 27 educational articles
│   ├── real-estate-agent-recommendation/
│   ├── second-look/
│   ├── [slug]/                     ← Dynamic blog post pages (47)
│   ├── category/[slug]/            ← Dynamic category pages (10)
│   └── (legal pages: privacy-policy, terms-of-use, etc.)
├── components/
│   ├── Header.tsx                  ← Site navigation
│   ├── Footer.tsx                  ← Site footer
│   ├── MortgageForm.tsx            ← Multi-step pre-qual wizard
│   ├── LeadForm.tsx                ← Reusable short lead form
│   └── calculators/
│       ├── MortgagePaymentCalculator.tsx
│       ├── AffordabilityCalculator.tsx
│       ├── RefinanceCalculator.tsx
│       ├── DownPaymentCalculator.tsx
│       └── ClosingCostCalculator.tsx
├── lib/
│   ├── webhook.ts                  ← GHL webhook integration
│   ├── submit-form.ts             ← Client-side form submission
│   ├── tracking.ts                 ← UTM & tracking capture
│   └── posts.ts                    ← Blog post data
├── .env.example                    ← Template for env vars
└── public/images/                  ← Site images (add your own)
```

## Forms

All forms submit through a single architecture:

```
Browser (form data) → POST /api/submit-lead → GHL Webhook
```

### Forms on the site

| Form | Page | Component |
|---|---|---|
| Pre-Qualification Wizard | `/mortgage-prequalified/`, `/quote/`, `/loan-options/`, `/contact-me/`, homepage | `MortgageForm` |
| Short Lead Form | `/mortgage-calculator/` (after calculator CTA) | `LeadForm` |
| Agent Recommendation | `/real-estate-agent-recommendation/` | Inline form |
| Second Look | `/second-look/` | Inline form |

### Form features

- Field validation with inline error messages
- Loading spinner on submit
- Success confirmation on completion
- Error state with retry messaging
- Duplicate submission prevention
- Communications Policy consent checkbox
- Accessible labels on all inputs

### Webhook payload

Every submission includes:

- Contact: `firstName`, `lastName`, `email`, `phone`
- Lead details: `loanGoal`, `message`, form-specific fields
- Calculator data (when submitted from a calculator): `calculatorType`, `homePrice`, `loanAmount`, etc.
- Tracking: `pageUrl`, `pageTitle`, `referrer`, `utmSource`, `utmMedium`, `utmCampaign`, `utmTerm`, `utmContent`, `formName`, `timestamp`, `userAgent`

## Calculators

Five interactive calculators at `/mortgage-calculator/`:

1. **Mortgage Payment** — P&I + estimated taxes/insurance
2. **Affordability** — Max home price based on income and debts
3. **Refinance Savings** — Compare current vs new loan payments
4. **Down Payment** — Savings timeline with scenario table
5. **Closing Costs** — Itemized cost breakdown

Each calculator has a "Get a Personalized Quote" CTA that opens a lead form pre-filled with the calculator data.

## Testing Form Submissions

### Without a webhook (dev mode)

If `GHL_WEBHOOK_URL` is empty, form submissions will:
- Still validate and process normally
- Return a success response with a dev-mode message
- Log the full payload to your terminal (when `FORM_DEBUG=true`)

This lets you test the entire form flow without a real webhook.

### With a webhook

1. Set `GHL_WEBHOOK_URL` in `.env.local`
2. Submit a form on any page
3. Check your GHL workflow/contact list for the new lead

### Debug logging

Set `FORM_DEBUG=true` in `.env.local` to see every payload in your terminal:

```
[webhook] Sending to: https://services.leadconnectorhq.com/hooks/...
[webhook] Payload: { firstName: "Test", ... }
[webhook] Response status: 200
```

## Images

The `public/images/` directory needs to be populated with your site images. The following files are referenced in the codebase:

- `logo.png` — Site logo
- `chaunci.png` — Chaunci Witherspoon headshot
- `eho.png` — Equal Housing Opportunity icon
- `happy-homebuyers.jpg`, `closing-clients.jpg` — Client photos
- `tropical-porch.jpg`, `businesswoman-papers.jpg`, `modern-house-sunset.jpg` — Blog images
- `shopping-home.jpg`, `excited-woman.jpg`, `underwriter-docs.jpg` — Learning center
- `purchase-icon.png`, `refinance-icon.png` — CTA icons
- `5-stars.png`, `home-for-sale.jpg`, `woman-calendar.jpg` — Various pages

Missing images will show broken placeholders but won't break the site.

## Scripts

```bash
npm run dev     # Start development server (http://localhost:3000)
npm run build   # Production build
npm run start   # Serve production build
npm run lint    # Run ESLint
```

## Tech Stack

- **Next.js 16** (App Router, server-side API routes)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript 5**

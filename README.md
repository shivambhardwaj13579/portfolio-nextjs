# Shivam Bhardwaj — Portfolio

A modern, dark-themed personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — scroll-triggered animations, parallax, entrance effects
- **Fonts** — Syne (display), DM Mono, Instrument Serif

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page composing all sections
│   └── globals.css      # Design tokens + base styles
│
└── components/
    ├── ui/
    │   ├── Cursor.tsx          # Custom cursor with lag ring
    │   ├── Noise.tsx           # Grain overlay
    │   └── useScrollReveal.ts  # Reusable intersection hook
    │
    ├── layout/
    │   ├── Navbar.tsx   # Fixed nav with scroll state
    │   └── Footer.tsx
    │
    └── sections/
        ├── Hero.tsx       # Full-screen hero with parallax orbs
        ├── About.tsx      # Stats grid + bio text
        ├── Experience.tsx # Animated timeline
        ├── Projects.tsx   # Cards with mouse-tracking glow
        ├── Skills.tsx     # Categorized pills + marquee
        └── Contact.tsx    # Email + social links
```

## Design System

CSS variables in `globals.css`:

| Token | Value |
|-------|-------|
| `--accent` | `#6c8cff` (electric blue) |
| `--accent2` | `#a78bfa` (violet) |
| `--accent3` | `#34d399` (mint) |
| `--bg` | `#080a0f` (near-black) |
| `--font-display` | Syne |
| `--font-mono` | DM Mono |
| `--font-serif` | Instrument Serif |

## Customise

Update personal info in each section component:
- `Hero.tsx` — name, title, tagline
- `About.tsx` — bio text, stats
- `Experience.tsx` — `experiences` array
- `Projects.tsx` — `projects` array
- `Skills.tsx` — `categories` array, `marqueeItems`
- `Contact.tsx` — `links` array (email, GitHub, LinkedIn, phone)

## Deploy

```bash
npm run build
```

Deploy to Vercel: `vercel --prod`

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server (http://localhost:3000)
npm run build    # production build
npm run lint     # ESLint
```

## Stack

- **Next.js 16.1.6** — App Router, React Server Components, `src/` layout
- **React 19** — use Server Components by default; add `"use client"` only when needed (interactivity, hooks, browser APIs)
- **TypeScript** — strict mode enabled
- **Tailwind CSS v4** — no `tailwind.config.js`; theme tokens defined as CSS variables in `src/app/globals.css` via `@theme inline`
- **shadcn/ui** — style: `new-york`, base color: `neutral`, icons: `lucide-react`
- **framer-motion v12** — animazioni entrance/scroll; import da `"framer-motion"` (non `"motion/react"`)

## Project context

Sito vetrina per **Istituto di Bellezza Alice Diana** — centro estetico, Trino VC.
- ⚠️ Nome ufficiale: **Alice Diana** (non "Diana Alice" — errore storico già corretto in tutti i file)
- Content in Italian. No database or auth needed. Target: static/SSG build deployable on Vercel.
- Tono: **prima persona singolare** in tutto il sito ("io", "mi", "mio") — mai "noi"
- Voce: diretta, calda, professionale — "Vieni a trovarmi", "Contattami", "I miei trattamenti"

---

## Architecture

### Routing
App Router file-based routing under `src/app/`.

```
src/app/
  page.tsx                  ← Homepage
  layout.tsx                ← Root layout (metadata, JSON-LD, font, skip-link)
  globals.css               ← Design tokens @theme inline + :root vars
  trattamenti/page.tsx      ← 6 categorie, 22 trattamenti
  trattamenti/layout.tsx    ← metadata pagina
  chi-siamo/page.tsx        ← About con hero e bio
  chi-siamo/layout.tsx      ← metadata pagina
  prodotti/page.tsx         ← 6 linee Germaine + GalleryStrip carousel
  prodotti/layout.tsx       ← metadata pagina
  contatti/page.tsx         ← Form + mappa + info
  contatti/layout.tsx       ← metadata pagina
  sitemap.ts                ← /sitemap.xml — auto-discovery via fs (scansiona page.tsx)
  robots.ts                 ← /robots.txt
```

### Component map

```
src/components/
  layout/
    Header.tsx              ← "use client" — sticky scroll-aware, hamburger mobile, usePathname
                               Logo: "ALICE DIANA" serif | nav desktop da lg (≥1024px)
    Footer.tsx              ← Server Component, 4 colonne
  sections/
    Hero.tsx                ← sticky top-0 z-0, /hero.jpg quality={100}
                               H1: "Prenditi il tuo tempo. Alla tua bellezza penso io."
                               Subheading: "Il mio centro estetico a Trino Vercellese..."
    ChiSiamo.tsx            ← 2 colonne, /centro.png
                               H2: "Dal 1992 a Trino, la tua estetista di fiducia."
                               Sottotitolo italic rose-dark: "La bellezza è una questione di cura, non di fretta."
    TrattamentiGrid.tsx     ← 2 card viso/corpo con overlay gradient
                               H2: "Viso, Corpo, Benessere"
    WhyChooseUs.tsx         ← 3 icone (ShieldCheck, Gem, Leaf)
                               Titoli: "Formazione Continua" | "Solo Germaine de Capuccini" | "Un'ora tutta per te"
    ProductsTeaser.tsx      ← Germaine split layout sticky, /germaine.png object-contain, /prodotti.jpg sfondo
    RecensioniGoogle.tsx    ← "use client" — 3 colonne scroll infinito verticale, 11 recensioni Google
                               H2: "Cosa dicono di me"
                               Sottotitolo: "Più di 30 anni di fiducia, costruita una cliente alla volta, a Trino."
    ContactMap.tsx          ← info contatti + iframe Google Maps
                               H2: "Vieni a trovarmi"
    GalleryStrip.tsx        ← carousel infinito orizzontale, 8 foto GDC (usato in /prodotti)
    ProdottiBanner.tsx      ← non usato in nessuna pagina
  ui/
    testimonials-columns.tsx ← primitiva TestimonialsColumn + Avatar (iniziali) + Stars (usata in RecensioniGoogle)
    button.tsx, card.tsx, input.tsx, badge.tsx, ...  ← shadcn primitives
```

### Homepage section order (`src/app/page.tsx`)

```
Hero (sticky top-0 z-0)
  ↓ scorre sopra:
ChiSiamo        (z-20 bg-white-pure)
TrattamentiGrid (z-20 bg-white-pure)
  ↓
ProductsTeaser  (sticky top-0 z-0)
  ↓ scorre sopra:
WhyChooseUs      (z-20 bg-white-pure)
RecensioniGoogle (z-20 bg-gray-light)
ContactMap       (z-20 bg-rose-cipria)
```

---

## Design system

### Brand palette (`globals.css`)

| Token | Hex | Uso tipico |
|-------|-----|-----------|
| `rose-cipria` | `#E8D5D0` | border, bg ContactMap, avatar recensioni |
| `rose-powder` | `#DCC5BE` | accenti secondari |
| `rose-dark` | `#B89B94` | icone, stelle recensioni, accenti, testo italic secondario |
| `gray-warm` | `#8B7F7A` | testo secondario |
| `gray-light` | `#F5F3F2` | sfondo sezioni alternate |
| `black-soft` | `#2C2825` | testo principale, primary button |
| `white-pure` | `#FFFFFF` | sfondo default |

### Typography

- **Serif** (`font-serif`): Cormorant Garamond — h1, h2, h3
- **Sans** (`font-sans`): Inter — body, label, caption
- Radius: quasi zero — `--radius: 2px`, bottoni quasi quadrati

### Component conventions

- `src/components/ui/` — shadcn primitives (mai editare direttamente; usare `npx shadcn@latest add <component>`)
- `src/lib/utils.ts` — esporta `cn()` (clsx + tailwind-merge); usare per tutti i className condizionali

---

## Styling rules

- Tailwind v4: nessun config file — estendere il tema in `globals.css` sotto `@theme inline`
- **Keyframe animazioni custom:** non usare token `--animate-*` in `@theme inline` né `@layer utilities` — Tailwind v4 può non includerli nel CSS finale. Approccio affidabile: `<style>` tag JSX colocato nel componente + `style` inline per l'animazione (vedi `GalleryStrip.tsx`)
- `tw-animate-css` disponibile per animazioni entrance standard

---

## Sticky scroll architecture

- `overflow-hidden` su un antenato **rompe** `position: sticky` — usare `overflow-x-clip`
- Pattern: elemento sticky `z-0`, sezioni che scorrono sopra `relative z-20 bg-*` (sfondo **solido e opaco** obbligatorio)
- Se uno sfondo è semi-trasparente (es. `bg-rose-cipria/20`) l'elemento sticky sotto si vede in trasparenza — usare sempre token di colore solidi sui wrapper `z-20`
- **ContactMap** ha `bg-rose-cipria` sulla `<section>` per evitare glitch al primo caricamento (la motion.div interna parte con `opacity: 0`)

---

## Responsive breakpoints

- **Menu desktop** parte da `lg` (≥1024px) — sotto `lg` mostra sempre l'hamburger
- Su tablet 768–1023px: hamburger menu (non il menu desktop compresso)
- **Hero content** ha sempre `pt-20 md:pt-24` per non finire sotto la navbar `fixed`
- Non usare `md:pt-0` nell'hero: rimuove il padding e causa sovrapposizione con l'header
- Container laterale: `px-5 md:px-6` (non `px-6` fisso — 20px mobile, 24px desktop)
- Padding verticale sezioni: `py-12 md:py-24`
- Animazioni framer-motion: `ease: [0.25, 0, 0, 1]` come array (non string `"easeOut"` — causa type error TS con framer-motion v12)

---

## Immagini

Tutte in `public/`:

| File | Usato in |
|------|---------|
| `hero.jpg` | `Hero.tsx` — `quality={100}`, sticky |
| `centro.png` | `ChiSiamo.tsx`, `chi-siamo/page.tsx` |
| `viso.jpg` | `TrattamentiGrid.tsx` |
| `corpo.jpg` | `TrattamentiGrid.tsx` |
| `germaine.png` | `ProductsTeaser.tsx` — PNG senza sfondo → `bg-white object-contain` |
| `prodotti.jpg` | `ProductsTeaser.tsx` — sfondo sezione |
| `gdc/foto1–8.jpeg` | `GalleryStrip.tsx` |

> ⚠️ Dopo aver cambiato `quality` su `next/image`, svuotare `.next/cache/images/` per vedere l'effetto.

---

## SEO & Accessibilità

### Metadata — stato attuale

| Pagina | `<title>` risultante | Note |
|--------|---------------------|------|
| Homepage | `Istituto di Bellezza Alice Diana — Trino` | default nel root layout |
| `/trattamenti` | `Trattamenti Estetici a Trino Vercellese \| Istituto di Bellezza Alice Diana` | keyword locale |
| `/chi-siamo` | `Estetista a Trino dal 1992 \| Istituto di Bellezza Alice Diana` | keyword professione + anno |
| `/prodotti` | `Germaine de Capuccini a Trino \| Istituto di Bellezza Alice Diana` | keyword brand + locale |
| `/contatti` | `Contatti & Orari \| Istituto di Bellezza Alice Diana — Trino VC` | invariato |

- Root `layout.tsx`: `metadataBase`, `title.template`, Schema.org `BeautySalon` (JSON-LD con NAP + geo + orari), Twitter card, OG tags, skip-link `#main-content`
- Root `description`: include "dal 1992", servizi principali e numero di telefono
- Ogni pagina interna ha il proprio `layout.tsx` con `title` + `description` + OG
- `sitemap.ts` → `/sitemap.xml` — **auto-discovery via `fs`**: scansiona `src/app/` ricorsivamente, include tutti i `page.tsx` trovati; esclude `api/`, `_private`, `[dinamici]`, gestisce route groups `(parentesi)`. Priority: `/` = 1.0, top-level = 0.8, annidati = 0.6
- `robots.ts` → `/robots.txt` (allow all)
- `<nav aria-label="Navigazione principale">` e `<nav aria-label="Menu mobile">` in `Header.tsx`
- `lang="it"` nel root layout

### Icone trattamenti (`trattamenti/page.tsx`)

| Categoria | Icona |
|-----------|-------|
| Trattamenti Viso | `Sparkles` |
| Trattamenti Corpo | `Waves` |
| Massaggi | `Feather` |
| Laser & Epilazione | `Sun` |
| Manicure & Pedicure | `Scissors` |
| Trucco | `Palette` |

---

## Workflow: nuove funzionalità

Prima di implementare qualsiasi nuova funzionalità o modifica significativa richiesta dall'utente:

1. **Verifica data/ora corrente** con `date "+%Y-%m-%d-%H-%M-%S"`.
2. **Crea un documento progetto** in `/docs/` con nome `YYYY-MM-DD-HH-MM-SS-nomefunzione.md`.
3. **Descrivi nel documento** cosa stai per fare: obiettivo, componenti coinvolti, approccio tecnico, file che verranno modificati/creati.
4. **Attendi conferma esplicita dell'utente** prima di scrivere qualsiasi codice.

Solo dopo l'approvazione procedi con l'implementazione.

5. **Al termine dell'implementazione**, aggiorna il documento di progetto specifico in `/docs/` con:
   - Lista dei file effettivamente creati/modificati
   - Decisioni tecniche prese durante l'implementazione
   - Eventuali deviazioni dal piano originale e motivazione
   - Stato finale (es. "Build: ✓ 0 errori")

Aggiorna anche il `README.md` se l'implementazione aggiunge funzionalità, route, dipendenze o cambia l'architettura del progetto.

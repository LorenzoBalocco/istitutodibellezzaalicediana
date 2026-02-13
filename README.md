# Istituto di Bellezza Alice & Diana

Sito vetrina per il centro estetico **Istituto di Bellezza Alice & Diana** di Trino Vercellese.

## Stack

- **Next.js 16.1.6** — App Router, React Server Components, static export
- **React 19**
- **TypeScript** strict mode
- **Tailwind CSS v4** — design system custom via CSS variables in `globals.css`
- **Framer Motion 12** — animazioni scroll e entrance
- **shadcn/ui** — new-york, base neutral
- **Lucide React** — icone outline

## Comandi

```bash
npm run dev      # dev server → http://localhost:3000
npm run build    # build produzione (static)
npm run lint     # ESLint
```

## Design System

### Colori brand

| Token Tailwind | Valore | Uso |
|---|---|---|
| `rose-cipria` | `#E8D5D0` | Border, accenti, sfondi delicati |
| `rose-powder` | `#DCC5BE` | Variante cipria |
| `rose-dark` | `#B89B94` | Hover, icone, focus |
| `gray-warm` | `#8B7F7A` | Testo secondario |
| `gray-light` | `#F5F3F2` | Sfondi sezioni alternate |
| `black-soft` | `#2C2825` | Testo primario, titoli, bottoni |
| `white-pure` | `#FFFFFF` | Background principale |

### Font

- **Serif:** Cormorant Garamond (300/400/500/600) → titoli H1–H3, `font-serif`
- **Sans:** Inter (300/400/500) → body, label, UI, `font-sans`

### Bottoni (PRD)

- `primary`: bordo 1px `black-soft`, bg trasparente → hover bg `black-soft`
- `secondary`: bg `gray-light` → hover bg `rose-cipria`
- `outline`: bordo bianco (per hero scuri) → hover bg bianco
- `border-radius: 0px`, `uppercase tracking-widest`, `transition 300ms`

## Struttura

```
src/
  app/
    layout.tsx              ← Root layout, font, JSON-LD, metadata
    page.tsx                ← Homepage (assembla le sezioni)
    globals.css             ← Tailwind v4 @theme inline + design tokens
    sitemap.ts              ← /sitemap.xml (generato automaticamente)
    robots.ts               ← /robots.txt
    trattamenti/
      layout.tsx            ← Metadata SEO pagina
      page.tsx              ← Lista categorie e trattamenti
    chi-siamo/
      layout.tsx
      page.tsx
    prodotti/
      layout.tsx
      page.tsx
    contatti/
      layout.tsx
      page.tsx
  components/
    layout/
      Header.tsx            ← Sticky, scroll-aware, hamburger mobile
      Footer.tsx            ← 4 colonne: brand / link / contatti / orari
    sections/               ← Sezioni homepage
      Hero.tsx
      ChiSiamo.tsx
      TrattamentiGrid.tsx
      WhyChooseUs.tsx
      ProductsTeaser.tsx
      GalleryStrip.tsx      ← Carousel infinito immagini GDC (usato in /prodotti)
      ContactMap.tsx
    ui/                     ← shadcn + custom
      button.tsx            ← 3 variant PRD-compliant
      card.tsx              ← border rose-cipria, hover lift
      input.tsx             ← focus rose-dark, border rose-cipria
      accordion.tsx
      sheet.tsx
      ...
  lib/
    utils.ts                ← cn() helper
```

## Pagine

| Route | Descrizione |
|---|---|
| `/` | Homepage: Hero + ChiSiamo + Trattamenti + WhyChooseUs + Prodotti + Mappa |
| `/trattamenti` | 6 categorie, 22+ trattamenti con CTA tel |
| `/chi-siamo` | Storia, filosofia, citazione — "Dal 1992 a Trino" |
| `/prodotti` | 6 linee Germaine de Capuccini + carousel GDC + CTA consulenza |
| `/contatti` | Form info + indirizzo + orari + Google Maps embedded |

## SEO

- **Schema.org** `BeautySalon` JSON-LD nel root layout (NAP + orari + geo)
- **metadata** per ogni pagina con title template `"%s | Istituto di Bellezza Alice & Diana"`
- **sitemap.xml** e **robots.txt** generati da Next.js App Router
- **metadataBase**: `https://istitutodibellezzaalicediana.com`

## Accessibilità

- Skip-to-content link (`#main-content`) per navigazione da tastiera
- `<nav aria-label>` distinto per nav principale e menu mobile
- `aria-label` su tutti i pulsanti icon-only (hamburger, social)
- `focus-visible:ring` su tutti gli elementi interattivi

## Note deployment

Progetto configurato per static export su **Vercel**.
Tutte le route compilano come `○ (Static)` — nessuna dipendenza server-side.
Immagini reali integrate: `hero.jpg`, `centro.png`, `viso.jpg`, `corpo.jpg`, `germaine.png` in `public/`; gallery GDC in `public/gdc/` (foto1–8.jpeg).

## Contatti centro

- **Indirizzo:** Via di Spalti Ponente, 8 — 13039 Trino VC
- **Telefono:** 0161 829955
- **Orari:** Mar–Ven 9:00–19:00 / Sab 8:00–13:00 / Dom–Lun chiuso

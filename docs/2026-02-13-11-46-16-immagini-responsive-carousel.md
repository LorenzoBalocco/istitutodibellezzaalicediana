# 2026-02-13 — Immagini reali, fix responsive, sticky hero, carousel GDC

## Obiettivo

Sostituire tutte le immagini placeholder con foto reali, correggere il responsive su mobile piccolo (360–390px), aggiungere l'effetto sticky scroll sulla hero e implementare un carousel infinito con le immagini Germaine de Capuccini.

---

## File modificati / creati

### Immagini

| File pubblico | Sorgente | Usato in |
|---|---|---|
| `public/hero.jpg` | `assets/images/hero.jpg` | `Hero.tsx` |
| `public/centro.png` | `assets/images/centro.png` | `ChiSiamo.tsx`, `chi-siamo/page.tsx` |
| `public/viso.jpg` | `assets/images/viso.jpg` | `TrattamentiGrid.tsx` |
| `public/corpo.jpg` | `assets/images/corpo.jpg` | `TrattamentiGrid.tsx` |
| `public/germaine.png` | `assets/images/germaine.png` | `ProductsTeaser.tsx` |
| `public/gdc/foto1–8.jpeg` | `assets/images/GDC/*.jpeg` | `GalleryStrip.tsx` |

### Componenti

| File | Modifica |
|---|---|
| `src/components/sections/Hero.tsx` | Immagine reale (`/hero.jpg`), `quality={100}`, sticky scroll (`sticky top-0 z-0`), font responsivo (`text-xl sm:text-3xl md:text-6xl`), bottoni `size="sm"` su mobile, `pt-20 md:pt-0` per header |
| `src/components/sections/ChiSiamo.tsx` | Immagine reale (`/centro.png`), gap e padding ridotti su mobile |
| `src/components/sections/TrattamentiGrid.tsx` | Immagini reali viso/corpo, padding card `p-4 sm:p-6 md:p-12` |
| `src/components/sections/ProductsTeaser.tsx` | Logo Germaine (`/germaine.png`), `object-contain`, `bg-white` |
| `src/components/sections/ContactMap.tsx` | Mappa corretta su Via di Spalti Ponente 8 Trino VC (query testuale), padding `p-6 sm:p-8 md:p-16` |
| `src/components/sections/GalleryStrip.tsx` | **Nuovo** — carousel infinito con 8 foto GDC duplicate per loop seamless |
| `src/app/page.tsx` | Sticky hero: `overflow-x-clip`, wrapper `relative z-10 bg-white-pure`; import/rimozione GalleryStrip |
| `src/app/prodotti/page.tsx` | Banner placeholder sostituito con `<GalleryStrip />` |
| `src/app/chi-siamo/page.tsx` | Immagine reale (`/centro.png`) |

---

## Decisioni tecniche

### Sticky scroll hero
- `overflow-hidden` sul wrapper rompeva `position: sticky` → cambiato in `overflow-x-clip`
- Hero: `sticky top-0 z-0`; sezioni successive: `relative z-10 bg-white-pure`
- `bg-white-pure` sul wrapper è necessario: sezioni con background semi-trasparente (es. `bg-rose-cipria/20`) lasciavano intravedere la hero

### Qualità immagine hero
- Next.js default: `quality=75` → artefatti visibili
- Soluzione: `quality={100}` + svuotamento cache `.next/cache/images/`

### Carousel infinito
- Array immagini duplicato (`[...images, ...images]`) → animazione `translateX(0) → translateX(-50%)`
- Keyframe `marquee-scroll` definito con `<style>` tag inline nel componente per evitare dipendenze dal processing Tailwind v4 (approach più affidabile rispetto a `@layer utilities` o token `--animate-*`)
- `willChange: "transform"` per performance GPU

### Responsive mobile (360–390px)
- Hero h1: `text-4xl` → `text-xl sm:text-3xl md:text-6xl`
- Hero paragrafo: `text-xs` su mobile
- Hero bottoni: `size="sm"` + `w-full sm:w-auto`
- ContactMap: `p-8` → `p-6 sm:p-8`
- TrattamentiGrid card: `p-6` → `p-4 sm:p-6`

---

## Stato finale

- Build: da verificare
- Placeholder picsum rimasti: nessuno (tutte le immagini sono reali)
- Note: immagine prodotti Germaine è PNG senza sfondo → `bg-white` + `object-contain`

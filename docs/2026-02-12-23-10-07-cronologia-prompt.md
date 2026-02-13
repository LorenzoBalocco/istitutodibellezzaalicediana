# Cronologia Prompt — Sessione Build Sito Alice & Diana

**Data sessione:** 2026-02-12
**Progetto:** Istituto di Bellezza Alice & Diana
**Modello:** Claude Sonnet 4.5

---

## STEP 1 — Analisi

**Prompt:**
> Ho un progetto completo nella cartella /references che contiene:
> 1. Un PRD dettagliato (centro_estetico_prd.md) con tutte le specifiche di design
> 2. Un progetto React/Next.js completo generato da Gemini
>
> Obiettivo: Voglio che tu replichi ESATTAMENTE il progetto, seguendo fedelmente:
> - Il design system del PRD (colori, tipografia, spacing)
> - La struttura e i componenti del progetto in /references
> - Lo stile minimalista ed elegante specificato
>
> STEP 1 - ANALISI:
> Prima di iniziare, leggi attentamente:
> 1. Il file /references/centro_estetico_prd.md (concentrati sulla sezione Design System)
> 2. La struttura del progetto in /references/
> 3. Il package.json per capire le dipendenze
>
> Dopo aver letto, dimmi:
> - Che stack tecnologico è stato usato
> - Quali sono i componenti principali da replicare
> - Eventuali criticità che noti
>
> Non iniziare ancora a codare, solo analisi.

**Risultato:** Analisi completa di PRD + reference Gemini. Identificato stack (Vite+React SPA vs Next.js App Router), 8 componenti da replicare, 5 criticità (Tailwind v4, framer-motion, routing, immagini, form).

---

## STEP 2 — Inizializzazione

**Prompt:**
> Perfetto. Ora procediamo con il setup:
>
> STEP 2 - INIZIALIZZAZIONE:
> 1. Crea un nuovo progetto Next.js (o React, in base a quello che hai visto)
> 2. Installa tutte le dipendenze necessarie (guardando il package.json di references)
> 3. Configura Tailwind CSS con i colori ESATTI del PRD:
>    - rose-cipria: #E8D5D0
>    - rose-powder: #DCC5BE
>    - rose-dark: #B89B94
>    - gray-warm: #8B7F7A
>    - gray-light: #F5F3F2
>    - black-soft: #2C2825
>
> 4. Configura i font:
>    - Serif: Cormorant Garamond (o quello usato in references)
>    - Sans: Inter (o quello usato in references)
>
> IMPORTANTE:
> - Segui ESATTAMENTE la struttura delle cartelle di /references
> - Usa le stesse versioni delle librerie
> - Mantieni la stessa architettura
>
> Procedi con l'inizializzazione e dimmi quando è pronto.
> serviti di context7

**Risultato:** Installato `framer-motion@^12`, configurato `globals.css` con token brand in Tailwind v4 `@theme inline`, `layout.tsx` con Cormorant Garamond + Inter, struttura cartelle creata, `tsconfig.json` con `references/` esclusa. Build: ✓

---

## STEP 3 — Design System (ripetuto 3 volte dall'utente)

**Prompt:**
> STEP 3 - DESIGN SYSTEM:
> Ora creiamo i componenti UI fondamentali. Guarda in /references/components/ui/ (o dove sono) e replica:
>
> 1. Button Component:
>    - CRITICO: Deve essere ESATTAMENTE come specificato nel PRD
>    - Border 1px solid black-soft, background trasparente
>    - Hover: background black-soft, text white
>    - Border-radius: 0px o max 2px
>    - NO ombre pesanti, NO gradient
>
> 2. Card Component:
>    - Come specificato in references
>    - Border sottile, background bianco
>    - Hover con lift delicato
>
> 3. Input Component (per form):
>    - Border 1px solid rose-cipria
>    - Focus: border rose-dark
>    - Padding corretto
>
> Crea questi 3 componenti e mostrameli per verifica prima di procedere.

**Risultato:** Creati `button.tsx` (3 variant PRD-compliant, CVA, Slot), `card.tsx` (border rose-cipria, hover lift), `input.tsx` (focus rose-dark). Build: ✓

**Nota:** Questo prompt è stato inviato 3 volte. Dalla seconda volta in poi è stato risposto mostrando i file già esistenti senza ricrearli.

---

## STEP 4 — Layout (ripetuto 2 volte dall'utente)

**Prompt:**
> STEP 4 - LAYOUT:
> Replica i componenti di layout guardando /references/components/layout/:
>
> 1. Header/Navigation:
>    - Logo a sinistra
>    - Menu centrato
>    - CTA telefono a destra
>    - Sticky con transizione smooth
>    - Hamburger menu per mobile
>
> 2. Footer:
>    - Layout a 3-4 colonne come in references
>    - Background gray-light
>    - Info: indirizzo, telefono, orari
>    - Social icons (se presenti)
>
> 3. Layout generale:
>    - Container max-width: 1280px

**Risultato:** Creati `Header.tsx` (`"use client"`, sticky scroll-aware, hamburger overlay, `usePathname` per active state) e `Footer.tsx` (Server Component, 4 colonne). Integrati in `layout.tsx`. Build: ✓

---

## STEP 5 — Hero Section (ripetuto 2 volte dall'utente)

**Prompt:**
> STEP 5 - HERO SECTION:
> Guarda la Hero section in /references...
> - Layout full-width con immagine di background
> - Tagline: "Prenditi il tuo tempo. Alla tua bellezza penso io."
> - CTA buttons con lo stile che abbiamo creato
> - Animazioni fade-in (se presenti in references)
> - Height: 80-90vh

**Risultato:** `Hero.tsx` con `h-[90vh]`, framer-motion staggered (0/0.2/0.4s), overlay bianco + gradiente, 2 CTA con `Button asChild`. Build: ✓

---

## STEP 6 — Sezioni Homepage (ripetuto 2 volte dall'utente)

**Prompt:**
> STEP 6 - SEZIONI HOMEPAGE:
> Prima sezione: CHI SIAMO
> - Layout two-column (testo | immagine)
> - Titolo H2: "La bellezza è una questione di cura, non di fretta"
> [...]
> Poi: Trattamenti in Evidenza, Perché Sceglierci, Prodotti Germaine de Capuccini, Mappa & Contatti

**Risultato:** Creati tutti i 6 componenti sezione:
- `ChiSiamo.tsx` — 2 colonne, immagine portrait
- `TrattamentiGrid.tsx` — 2 card con overlay gradient
- `WhyChooseUs.tsx` — 3 icone (ShieldCheck, Star, Leaf)
- `ProductsTeaser.tsx` — Germaine de Capuccini split
- `ContactMap.tsx` — info + iframe Maps
- `page.tsx` assembla tutto

---

## STEP 7 — Pagine Interne (ripetuto 2 volte dall'utente)

**Prompt:**
> STEP 7 - PAGINA TRATTAMENTI:
> Replica con TUTTI i trattamenti specificati nel PRD:
> [...categorie...]
> Ogni card: icona, titolo, descrizione, CTA "Prenota: 0161 829955"

**Risultato:** Create 4 pagine interne:
- `/trattamenti` — 6 categorie, 22 trattamenti (aggiunta categoria Trucco dal PRD)
- `/chi-siamo` — hero 21:9, citazione, dal 1992
- `/prodotti` — 6 linee Germaine + CTA
- `/contatti` — form (useState submitted) + Maps + info

---

## STEP 9 — Responsive

**Prompt:**
> STEP 9 - RESPONSIVE:
> Verifica e replica:
> 1. Breakpoints (mobile < 768px, tablet 768-1024px, desktop > 1024px)
> 2. Hamburger menu per mobile
> 3. Stack verticale per grid su mobile
> 4. Typography ridotta ma leggibile
> 5. Spacing adattato

**Risultato:** Audit reale con agente Explore. Trovati 8 problemi concreti:

| Fix | Prima | Dopo |
|---|---|---|
| Hero height mobile | `h-[90vh]` | `h-[60vh] md:h-[90vh]` |
| H1 mobile globale | `text-5xl` (48px) | `text-4xl` (36px) ✅ PRD |
| Padding laterale | `px-6` (24px) | `px-5 md:px-6` (20px) ✅ PRD |
| Padding verticale sezioni | `py-24` (96px) | `py-12 md:py-24` (48px) ✅ PRD |
| Card height | `h-[500px]` fisso | `h-[350px] md:h-[500px]` |
| Gap grid | `gap-16` fisso | `gap-8 md:gap-16` |
| Footer padding/gap | `pt-20 gap-12` | `pt-12 md:pt-20 gap-8 lg:gap-12` |
| ContactMap padding | `p-12 md:p-24` | `p-8 md:p-16 lg:p-24` |

Build: ✓

---

## STEP 10 — Polish Finale (SEO + A11Y)

**Prompt:**
> STEP 10 - POLISH FINALE:
> 1. Animazioni: Fade-in al scroll, hover states smooth
> 2. Performance: Lazy loading, font optimization, WebP
> 3. SEO Base: Meta tags, alt text, heading structure
> 4. Accessibilità: Focus indicators, ARIA labels, keyboard navigation
> 5. Cross-check finale

**Risultato:**

**SEO:**
- `metadataBase` + `title.template` nel root layout
- Metadata (title + description + OG) per tutte e 4 le pagine interne via route `layout.tsx`
- Schema.org JSON-LD `BeautySalon` con NAP, orari, geo
- `sitemap.ts` → `/sitemap.xml` (5 URL con priority)
- `robots.ts` → `/robots.txt`

**Accessibilità:**
- `<nav aria-label="Navigazione principale">` e `<nav aria-label="Menu mobile">`
- Skip-to-content link (`#main-content`) per keyboard users

**Performance (già ok pre-audit):**
- `next/image` fill + sizes su tutte le immagini ✅
- `display: swap` su entrambi i font ✅
- Tutto static pre-rendered ✅

Build: ✓ — 10 route statiche (inclusi `/sitemap.xml`, `/robots.txt`)

---

## Aggiornamento documentazione

**Prompt:**
> Aggiorna il file di progetto [...] inserendo il lavoro che hai svolto.
> Poi aggiorna il file claude.md per inserire la nuova regola che quando finisci
> un'implementazione aggiorni il documento di progetto specifico.

**Risultato:**
- `README.md` riscritto con documentazione reale del progetto
- `CLAUDE.md` aggiornato con step 5 al workflow (aggiorna doc al termine)
- `docs/2026-02-12-22-55-34-seo-a11y-polish.md` aggiornato con consuntivo

---

---

## Sessione 2026-02-13 — Immagini reali, sticky hero, responsive, carousel

---

### Prima persona singolare

**Prompt:**
> converti tutti i testi del sito in prima persona singolare

**Risultato:** 9 file aggiornati (Header, Footer, pagine chi-siamo/contatti/trattamenti/prodotti). Vedi `docs/2026-02-13-10-42-24-prima-persona.md`.

---

### Sostituzione immagine hero

**Prompt:**
> vorrei cambiare l'immagine della hero section (il libro). per favore sostituiscila con assets/images/hero.jpg

**Risultato:** Copiato `hero.jpg` in `public/`, aggiornato `Hero.tsx`.

---

### Qualità immagine hero

**Prompt:**
> noto però che ha perso molto di qualità. come mai?

**Risultato:** Default Next.js `quality=75`. Aggiunto `quality={90}` poi portato a `quality={100}`. Necessario svuotare `.next/cache/images/`.

---

### Sticky scroll hero

**Prompt:**
> Aggiungi l'effetto sticky scroll alla mia landing page: la sezione dopo la hero deve scivolare sopra l'immagine quando scorro. Usa Tailwind con sticky, top-0 e z-index alto.

**Risultato:**
- `page.tsx`: `overflow-hidden` → `overflow-x-clip` (overflow-hidden rompe sticky); sezioni post-hero in `<div className="relative z-10 bg-white-pure">`
- `Hero.tsx`: aggiunto `sticky top-0 z-0`
- `bg-white-pure` sul wrapper necessario: `bg-rose-cipria/20` è semi-trasparente e lasciava vedere la hero

---

### Fix responsive mobile (360–390px)

**Prompt:**
> ho notato che nelle dimensioni "360x740 circa", "390x844 circa" e "375x667 circa" si perde un po il responsive della pagina. per favore sistema questa cosa

**Risultato:**
- Hero h1: `text-4xl` → `text-[1.75rem] xs:text-3xl sm:text-4xl`
- Hero paragrafo: `text-sm` su mobile
- ContactMap: `p-8` → `p-6 sm:p-8`
- ChiSiamo: `py-12` → `py-10 sm:py-12`, `gap-8` → `gap-6`
- TrattamentiGrid card: `p-6` → `p-4 sm:p-6`

**Prompt (screenshot):**
> sistema ancora un po'. ti faccio vedere cosa vedo [screenshot mobile]

**Risultato:**
- Hero h1: ridotto ulteriormente a `text-xl sm:text-3xl md:text-6xl`
- Hero paragrafo: `text-xs` su mobile, `mb-5`
- Hero bottoni: `size="sm"` + `w-full sm:w-auto`, tornano default su `md+`
- Aggiunto `pt-20 md:pt-0` al content div per non finire sotto l'header fisso

---

### Sostituzione immagini placeholder

**Prompt:**
> sostituisci questa immagine [ChiSiamo] con centro.png

**Prompt:**
> per favore sostituisci anche le immagini placeholder nelle card trattamenti. viso: assets/images/viso.jpg corpo: assets/images/corpo.jpg

**Prompt:**
> sostituisci l'immagine prodotti con germaine.png. l'immagine è senza sfondo quindi mettigli tu uno sfondo bianco.

**Prompt:**
> nella pagina chi sono, sostituisci l'immagine dell'orso con centro.png

**Risultato:** Copiate in `public/`: `centro.png`, `viso.jpg`, `corpo.jpg`, `germaine.png`. Aggiornati `ChiSiamo.tsx`, `TrattamentiGrid.tsx`, `ProductsTeaser.tsx` (+ `bg-white object-contain`), `chi-siamo/page.tsx`.

---

### Fix mappa

**Prompt:**
> ho visto che la mappa non punta sull'indirizzo: Via di Spalti Ponente, 8 13039 Trino VC

**Risultato:** Sostituito URL Maps con query testuale: `maps.google.com/maps?q=Via+di+Spalti+Ponente+8,+13039+Trino+VC,+Italia&output=embed&hl=it`

---

### Carousel infinito GDC

**Prompt:**
> Aggiungi un infinite scroll carousel orizzontale con immagini che scorrono all'infinito. Configura l'animazione custom in tailwind.config.js e duplica le immagini per un loop seamless. le immagini sono in assets/images/GDC

**Risultato (1° tentativo):** Creato `GalleryStrip.tsx` con 8 foto duplicate, `@keyframes marquee` in `globals.css`, token `--animate-marquee` in `@theme inline`. Animazione non funzionante.

**Prompt:**
> ancora nulla, le immagini non scorrono

**Risultato (2° tentativo):** Spostato in `@layer utilities` con `.animate-marquee`. Ancora non funzionante.

**Risultato (3° tentativo — fix definitivo):** Keyframe `marquee-scroll` colocati nel componente con `<style>` tag JSX + `style={{ animation: "marquee-scroll 30s linear infinite" }}` inline. Questo approccio bypassa il processing Tailwind v4 ed è garantito funzionante. Nota: Tailwind v4 non genera necessariamente le classi `animate-*` dai token `--animate-*` se non usate nel template scanning.

**Prompt:**
> spostala e mettila nella pagina prodotti al posto dell'immagine placeholder

**Risultato:** Rimossa dalla homepage, inserita in `prodotti/page.tsx` con `-mx-5 md:-mx-6` per full-width.

---

## Lezioni apprese (sessione 2026-02-13)

6. **`overflow-hidden` rompe `sticky`:** Qualsiasi `overflow: hidden` su un antenato disabilita `position: sticky` sui discendenti. Usare `overflow-x: clip` che non crea un nuovo scroll container.

7. **Background semi-trasparente + sticky hero:** Se una sezione ha `bg-rose-cipria/20` (o qualsiasi `/opacity`), la hero sticky sotto si vede in trasparenza. Soluzione: `bg-white-pure` sul wrapper `z-10`.

8. **Next.js image quality cache:** Cambiare `quality` non ha effetto finché non si svuota `.next/cache/images/`. Da fare sempre dopo ogni modifica a `quality`.

9. **Tailwind v4 — keyframe animazioni:** Token `--animate-*` in `@theme inline` e classi in `@layer utilities` possono non essere incluse nel CSS finale se Tailwind v4 non le rileva nel template scanning. Approccio affidabile: `<style>` tag JSX colocato nel componente + `style` inline per l'animazione.

10. **Immagini PNG senza sfondo in Next.js Image:** Usare `object-contain` + `bg-white` sul contenitore, non `object-cover` (che zommerebbe su un'area trasparente).

---

## Lezioni apprese (sessione 2026-02-12)

1. **Prompt ripetuti:** L'utente usava prompt pre-scritti in sequenza senza tenere traccia dello stato. Risposta corretta: mostrare il codice esistente + bloccare la richiesta senza riscrivere.

2. **framer-motion v12 type error:** `ease: "easeOut"` (string) non è accettato — usare bezier `[0.25, 0, 0, 1]` come `const`.

3. **Pagine `"use client"` + metadata:** Impossibile esportare `metadata` da una Client Component. Soluzione: route-level `layout.tsx` che esporta metadata e wrappa la pagina client.

4. **`tsconfig.json` include:** La cartella `/references` veniva inclusa nel build TypeScript causando errori. Fix: aggiungere `"references"` all'array `exclude`.

5. **Responsive audit:** L'audit sistematico con agente ha trovato che `py-24` fisso (96px) era il doppio del max PRD (64px) e `text-5xl` su mobile era 12px sopra spec.

---

## Sessione 2026-02-13 (pomeriggio) — Sitemap auto, SEO copy, CLAUDE.md

---

### Sitemap auto-discovery

**Prompt:**
> Per favore aggiorna il file sitemap.xml. Il file deve essere aggiornato con uno script che possa indicizzare tutte le pagine che vengono aggiunte e create. Per favore utilizza il modo più corretto e migliore per nextjs. Usa context7 per ottenere le ultime informazioni

**Risultato:**
- `src/app/sitemap.ts` riscritto completamente
- Da lista hardcoded di 5 URL → auto-discovery via `fs.readdirSync` ricorsivo su `src/app/`
- Logica di esclusione: `api/`, `_private`, `[dinamici]`, route groups `(parentesi)`
- Priority automatica per profondità: `/` = 1.0, top-level = 0.8, annidati = 0.6
- `new Set()` per deduplicazione, tipo esplicito TS per `changeFrequency`
- Build: ✓ 0 errori

---

### SEO content audit + copy

**Prompt:**
> Per favore verifica il copy del sito con @agents-seo-content-auditor e suggerisci eventuali modifiche con @agent-seo-content-writer, non scrivere file di progetto

**Risultato (audit):**

Problemi rilevati:
- Hero: nessuna keyword locale "Trino" visibile above-the-fold
- `chi-siamo` title: "Chi Sono" ha zero valore SEO
- `prodotti` title: mancava "Trino" per local SEO
- `trattamenti` title: troppo generico
- Root meta description: mancavano "dal 1992" e numero telefono (segnali CTR)
- WhyChooseUs: card copy troppo generiche, non differenzianti
- RecensioniGoogle: heading senza sottotitolo con anchor locale

Proposto e approvato:
- Hero subheading con "Trino Vercellese"
- Titoli pagine interne con keyword locale + professione + anno
- ChiSiamo H2: "Dal 1992 a Trino, la tua estetista di fiducia."
- WhyChooseUs: titoli e descrizioni riscritti
- RecensioniGoogle: sottotitolo "Più di 30 anni di fiducia..."

**Prompt:**
> va bene tutto, ma il title del sito deve rimanere "Istituto di Bellezza Alice Diana — Trino". per favore procedi

**Risultato — file modificati:**
- `src/app/layout.tsx` — title default aggiornato, meta description con "dal 1992" + telefono, OG e Twitter title aggiornati
- `src/app/chi-siamo/layout.tsx` — title: "Estetista a Trino dal 1992"
- `src/app/prodotti/layout.tsx` — title: "Germaine de Capuccini a Trino"
- `src/app/trattamenti/layout.tsx` — title: "Trattamenti Estetici a Trino Vercellese", description migliorata
- `src/components/sections/Hero.tsx` — subheading con "Trino Vercellese"
- `src/components/sections/ChiSiamo.tsx` — H2 e sottotitolo italic rose-dark
- `src/components/sections/WhyChooseUs.tsx` — 3 card riscritte
- `src/components/sections/RecensioniGoogle.tsx` — sottotitolo aggiunto
- Build: ✓ 0 errori

---

### Aggiornamento CLAUDE.md

**Prompt:**
> Per favore aggiorna il file Claude.md ora che abbiamo implementato tante nuove funzionalità. Per farlo leggiti tutti i file md dentro la cartella docs e dentro la cartella prompt. Poi procedi aggiornando.

**Risultato:**
- Letti tutti i 13 file in `docs/` (nessun file in `prompt/`)
- CLAUDE.md aggiornato con:
  - Component map: H1/H2 correnti per ogni sezione, RecensioniGoogle e ContactMap heading
  - Homepage section order: aggiunta RecensioniGoogle
  - `sitemap.ts`: da "5 URL" a "auto-discovery via fs" con descrizione
  - SEO: nuova tabella `<title>` risultanti per tutte le pagine
  - Icone trattamenti: tabella categoria → icona
  - Responsive: nota su tablet 768–1023px con hamburger
  - Project context: aggiunta riga sulla voce in prima persona

---

## Lezioni apprese (sessione 2026-02-13 pomeriggio)

11. **Sitemap Next.js App Router:** La convention nativa `sitemap.ts` eseguita a build time è superiore a qualsiasi script esterno. `fs.readdirSync` + `process.cwd()` funziona perfettamente nel runtime server-side di Next.js.

12. **Route groups e sitemap:** Le cartelle `(parentesi)` non contribuiscono al segmento URL — il nome va rimosso dal path prima di aggiungerlo alla sitemap.

13. **SEO copy locale:** "Dal 1992" e "Trino Vercellese" sono differenziatori di autorità e local SEO molto forti — vanno inseriti nel testo visibile above-the-fold e nei meta title, non solo nel JSON-LD.

14. **Meta description con telefono:** Includere il numero di telefono nella description aumenta il CTR su ricerche locali (l'utente può chiamare direttamente dalla SERP su mobile).

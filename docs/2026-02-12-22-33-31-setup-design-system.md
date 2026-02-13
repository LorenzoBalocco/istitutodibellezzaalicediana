# Setup Design System — Istituto di Bellezza Alice & Diana

**Data:** 2026-02-12-22-33-31
**Obiettivo:** Configurare il design system del progetto replicando fedelmente il PRD e il progetto di riferimento Gemini.

## Cosa viene fatto

### 1. Installazione dipendenze
- `framer-motion@^12` — animazioni entrance/hover (come nel reference)

### 2. `src/app/layout.tsx`
- Rimozione Geist fonts
- Aggiunta Google Fonts: **Cormorant Garamond** (300,400,500,600) + **Inter** (300,400,500)
- CSS variables: `--font-serif`, `--font-sans`
- Metadata aggiornato: titolo e description per il centro estetico
- `lang="it"`

### 3. `src/app/globals.css`
Aggiunta token brand sotto `@theme inline`:
```
--color-rose-cipria: #E8D5D0
--color-rose-powder: #DCC5BE
--color-rose-dark: #B89B94
--color-gray-warm: #8B7F7A
--color-gray-light: #F5F3F2
--color-black-soft: #2C2825
--font-serif: Cormorant Garamond
--font-sans: Inter
```
Override `--radius: 0` (bottoni quadrati come da PRD)

### 4. Struttura cartelle
```
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      ChiSiamo.tsx
      TrattamentiGrid.tsx
      WhyChooseUs.tsx
      ProductsTeaser.tsx
      ContactMap.tsx
    ui/            ← già popolata da shadcn
  app/
    page.tsx       ← Homepage
    trattamenti/page.tsx
    chi-siamo/page.tsx
    prodotti/page.tsx
    contatti/page.tsx
```

## File modificati
- `package.json` (aggiunta framer-motion)
- `src/app/layout.tsx`
- `src/app/globals.css`

## File creati
- Struttura cartelle `components/layout/`, `components/sections/`

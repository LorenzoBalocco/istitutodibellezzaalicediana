# Copy, SEO & Icons Review — 2026-02-13

## Obiettivo
Revisione completa del copy del sito, audit SEO del contenuto e check delle icone.
Ruoli simulati: agent-copywriter, agent-seo-content-writer, agent-seo-content-auditor.

---

## 🔴 BUG CRITICO — Nome sbagliato

Il nome ufficiale è **"Alice Diana"** (non "Diana Alice").
È invertito in 5 punti:

| File | Riga | Attuale | Corretto |
|------|------|---------|----------|
| `Header.tsx` | 53 | `DIANA ALICE` | `ALICE DIANA` |
| `Footer.tsx` | 14 | `Diana Alice` | `Alice Diana` |
| `Footer.tsx` | 113 | `Istituto di Bellezza Diana Alice` | `Istituto di Bellezza Alice Diana` |
| `chi-siamo/page.tsx` | 48 | `Benvenuta da Diana Alice` | `Benvenuta da Alice Diana` |
| `chi-siamo/page.tsx` | 73 | `— Diana Alice` | `— Alice Diana` |

---

## 📝 COPY — Analisi e proposte (agent-copywriter)

### Hero (`Hero.tsx`)
**Stato:** Ottimo. H1 poetico e diretto.
- H1: "Prenditi il tuo tempo. Alla tua bellezza penso io." ✓ — non si tocca
- Subtext: leggero miglioramento di ritmo proposto:
  - **Attuale:** "Un'esperienza estetica dove la cura non è una corsa, ma un gesto consapevole di amore verso se stessi."
  - **Proposto:** "Un luogo dove la cura estetica diventa un rituale. Per te, con tutta la mia attenzione."
  - *(più breve, più diretto, voce in prima persona coerente con il resto del sito)*

### ChiSiamo — sezione homepage (`ChiSiamo.tsx`)
**Stato:** Buono. Secondo paragrafo un po' piatto.
- H2: "La bellezza è una questione di cura, non di fretta." ✓
- P1: ✓ — lasciare invariato
- P2:
  - **Attuale:** "Qui troverai competenza certificata e un ambiente dove potrai finalmente staccare la spina e dedicarti a te stessa."
  - **Proposto:** "Competenza certificata, prodotti d'eccellenza e uno spazio pensato per farti sentire ascoltata — non solo trattata."

### WhyChooseUs (`WhyChooseUs.tsx`)
**Stato:** Descrizioni corrette ma generiche.
- "Competenza Certificata":
  - **Attuale:** "Anni di esperienza e formazione continua per garantire risultati sicuri."
  - **Proposto:** "Formazione continua e protocolli testati: ogni trattamento è eseguito con precisione e responsabilità."
- "Prodotti Premium":
  - **Attuale:** "Utilizzo esclusivo di Germaine de Capuccini per un'efficacia superiore."
  - **Proposto:** "Solo Germaine de Capuccini: cosmesi professionale con formulazioni testate clinicamente."
- "Ambiente Rilassante":
  - **Attuale:** "Uno spazio progettato per farti dimenticare lo stress quotidiano."
  - **Proposto:** "Un ambiente raccolto dove il tempo rallenta — e tu puoi finalmente dedicarti a te stessa."

### TrattamentiGrid — homepage (`TrattamentiGrid.tsx`)
**Stato:** Header troppo generico.
- H2: "Trattamenti Selezionati" → **Proposto:** "Viso, Corpo, Benessere"
- Subtext: "Percorsi personalizzati per il tuo benessere." → **Proposto:** "Ogni trattamento nasce da un ascolto. Ogni percorso è pensato solo per te."
- Card descrizioni: già buone ✓

### ProductsTeaser (`ProductsTeaser.tsx`)
**Stato:** Copy già ottimo. "Competenza che si sente, non si ostenta." è un ottimo tagline.
- Nessuna modifica proposta.

### ContactMap (`ContactMap.tsx`)
**Stato:** H2 generico.
- H2: "Il tuo spazio di benessere" → **Proposto:** "Vieni a trovarmi"
- *(più diretto, coerente con la voce in prima persona del sito)*

### Chi Sono page (`chi-siamo/page.tsx`)
**Stato:** Copy eccellente — caldo, personale, autentico. Solo fix nome.
- Fix: "Benvenuta da Diana Alice" → "Benvenuta da Alice Diana"
- Fix: "— Diana Alice" → "— Alice Diana"

### Trattamenti page (`trattamenti/page.tsx`)
**Stato:** Buono.
- Intro: "Soluzioni personalizzate che uniscono manualità esperta e prodotti d'eccellenza." ✓
- Descrizioni trattamenti: accurate e chiare ✓

### Prodotti page (`prodotti/page.tsx`)
**Stato:** Buono. CTA consulenza leggermente migliorabile.
- "Passa in istituto per scoprire la routine perfetta per la tua pelle."
  → **Proposto:** "Vieni in istituto: ti aiuto a trovare la routine più adatta alla tua pelle."
  *(voce attiva in prima persona)*

### Contatti page (`contatti/page.tsx`)
**Stato:** Subtext piatto.
- **Attuale:** "Sono qui per rispondere alle tue domande e programmare il tuo prossimo momento di benessere."
- **Proposto:** "Chiamami — troveremo insieme il momento giusto per te."

---

## 🔍 SEO — Audit contenuto (agent-seo-content-auditor + agent-seo-content-writer)

### Root layout (`layout.tsx`) — Stato: BUONO
- Title ✓ (include brand + keyword locale)
- Description ✓ (125 chr, include parole chiave principali)
- Schema.org BeautySalon ✓
- `metadataBase` ✓
- `lang="it"` ✓
- `robots: index/follow` ✓
- **Mancante: `twitter` card** → da aggiungere

### Trattamenti layout — Stato: BUONO ✓
### Chi Sono layout — Stato: BUONO ✓
### Contatti layout — Stato: BUONO ✓
### Prodotti layout — Stato: BUONO ✓

### SEO — Aggiunte proposte in root layout:
```ts
twitter: {
  card: "summary_large_image",
  title: "Istituto di Bellezza Alice Diana | Centro Estetico a Trino",
  description: "Centro estetico a Trino VC. Trattamenti viso, corpo, laser, massaggi e prodotti Germaine de Capuccini.",
},
```

### SEO on-page note:
- Le `<h1>` di ogni pagina includono la keyword principale ✓
- Alt text delle immagini sono ottimizzati ✓
- Il numero di telefono è cliccabile `tel:` in tutte le pagine ✓
- Il brand "Germaine de Capuccini" è citato in più punti strategici ✓

---

## 🎯 ICONS — Check (lucide-react)

### WhyChooseUs.tsx
| Attuale | Voce | Giudizio | Proposta |
|---------|------|----------|---------|
| `ShieldCheck` | Competenza Certificata | ✓ ottimo | — |
| `Star` | Prodotti Premium | ⚠ generico | `Gem` (più elegante per beauty) |
| `Leaf` | Ambiente Rilassante | ✓ ottimo | — |

### TrattamentiPage (`trattamenti/page.tsx`)
| Attuale | Voce | Giudizio | Proposta |
|---------|------|----------|---------|
| `Sparkles` | Trattamenti Viso | ✓ ottimo | — |
| `User` | Trattamenti Corpo | ⚠ troppo generico/maschile | `Waves` (evoca relax e corpo) |
| `Feather` | Massaggi | ✓ ottimo | — |
| `Sun` | Laser & Epilazione | ✓ ottimo | — |
| `Scissors` | Manicure & Pedicure | ✓ ottimo | — |
| `Droplet` | Trucco | ⚠ evoca acqua, non makeup | `Palette` (molto più preciso) |

---

## File da modificare

| File | Tipo modifica |
|------|--------------|
| `src/components/layout/Header.tsx` | Fix nome |
| `src/components/layout/Footer.tsx` | Fix nome (×2) |
| `src/app/chi-siamo/page.tsx` | Fix nome (×2) + copy |
| `src/components/sections/Hero.tsx` | Copy subtext |
| `src/components/sections/ChiSiamo.tsx` | Copy p2 |
| `src/components/sections/WhyChooseUs.tsx` | Copy descrizioni + icon `Star→Gem` |
| `src/components/sections/TrattamentiGrid.tsx` | Copy header |
| `src/components/sections/ContactMap.tsx` | Copy h2 |
| `src/app/trattamenti/page.tsx` | Icons `User→Waves`, `Droplet→Palette` |
| `src/app/prodotti/page.tsx` | Copy CTA |
| `src/app/contatti/page.tsx` | Copy subtext |
| `src/app/layout.tsx` | Aggiunta Twitter card metadata |

---

## Stato

### File modificati
- `src/components/layout/Header.tsx` — nome logo: ALICE DIANA
- `src/components/layout/Footer.tsx` — nome brand + copyright: Alice Diana
- `src/app/chi-siamo/page.tsx` — nome (×2): Alice Diana
- `src/components/sections/Hero.tsx` — subtext riformulato
- `src/components/sections/ChiSiamo.tsx` — p2 riformulato
- `src/components/sections/WhyChooseUs.tsx` — descrizioni aggiornate + Star→Gem
- `src/components/sections/TrattamentiGrid.tsx` — header aggiornato
- `src/components/sections/ContactMap.tsx` — h2 aggiornato
- `src/app/trattamenti/page.tsx` — icone: User→Waves, Droplet→Palette
- `src/app/prodotti/page.tsx` — CTA consulenza riformulata
- `src/app/contatti/page.tsx` — subtext riformulato
- `src/app/layout.tsx` — aggiunta Twitter card metadata

### Build finale
✓ 0 errori TypeScript — 10/10 pagine statiche generate

# Sezione Recensioni Google — Piano

**Data:** 2026-02-13-15-56-20
**Obiettivo:** Aggiungere una sezione con le recensioni Google prima di `ContactMap` nella home page, usando un effetto colonne in scroll infinito verticale.

---

## Componenti coinvolti

| File | Azione |
|------|--------|
| `src/components/ui/testimonials-columns.tsx` | Nuovo — primitiva riutilizzabile (colonna animata) |
| `src/components/sections/RecensioniGoogle.tsx` | Nuovo — sezione completa con heading + 3 colonne |
| `src/app/page.tsx` | Modifica — inserire `<RecensioniGoogle />` prima di `<ContactMap />` |

---

## Dati recensioni (da commenti.md)

| Nome | Stelle | Testo |
|------|--------|-------|
| Antonella Tantimonaco | ⭐⭐⭐⭐⭐ | "Bravissima, e molto gentile e disponibile mi sono trovata molto bene !!" |
| Francesca Crosio | ⭐⭐⭐⭐⭐ | "Pulito, ambiente accogliente, estetista competente e bravissima…" |
| Lucio Tex | ⭐⭐⭐⭐⭐ | "Estetista molto brava e competente" |
| Danilo Mantovani | ⭐⭐⭐⭐⭐ | "Buon centro estetico staff preparato" |
| Jorge Ghazul | ⭐⭐⭐⭐⭐ | "Ottimo!!! In tutti i sensi" |
| Francesca Ghisio | ⭐⭐⭐⭐⭐ | *(solo stelle)* |
| Laura Pini | ⭐⭐⭐⭐⭐ | *(solo stelle)* |
| Franca Deregibus | ⭐⭐⭐⭐⭐ | *(solo stelle)* |
| Debora Carchidi | ⭐⭐⭐⭐⭐ | *(solo stelle)* |
| Franca Viola | ⭐⭐⭐⭐⭐ | *(solo stelle)* |
| Gianna Irico | ⭐⭐⭐⭐ | *(solo stelle)* |

Le recensioni senza testo mostreranno solo nome + stelle (nessun testo fittizio).

---

## Approccio tecnico

- **Motion:** `framer-motion` v12 già installata — importo da `"framer-motion"` (stessa lib, no nuove dipendenze)
- **Avatar:** iniziali del nome su sfondo `rose-cipria` (nessuna immagine esterna)
- **Stelle:** stringa `★★★★★` in `text-rose-dark`
- **Colonne:** 3 colonne (1 mobile, 2 tablet, 3 desktop), scroll infinito `translateY -50%`
- **Stile adattato al sito:**
  - Sfondo sezione: `bg-gray-light`
  - Card: `border border-rose-cipria`, `rounded-sm`, shadow leggera
  - Nome: `font-serif text-black-soft`
  - Stelle: `text-rose-dark`
  - Divisione colonne: prima 4, seconda 4, terza 3

---

## Nessuna dipendenza aggiuntiva richiesta

`framer-motion` ^12.34.0 già presente in package.json.

---

## Stato finale

**Build: ✓ 0 errori**

### File creati/modificati
| File | Azione |
|------|--------|
| `src/components/ui/testimonials-columns.tsx` | Creato — primitiva `TestimonialsColumn` + `Avatar` + `Stars` |
| `src/components/sections/RecensioniGoogle.tsx` | Creato — sezione con heading e 3 colonne animate |
| `src/app/page.tsx` | Modificato — aggiunto `<RecensioniGoogle />` prima di `<ContactMap />` |

### Decisioni tecniche
- Import da `"framer-motion"` (già presente) anziché `"motion/react"` del componente proposto
- Avatar con iniziali invece di immagini esterne (nessuna dipendenza da URL terzi)
- Recensioni senza testo mostrano solo nome + stelle (nessun testo inventato)
- `rounded-sm` e `border-rose-cipria` per coerenza con il design system del sito

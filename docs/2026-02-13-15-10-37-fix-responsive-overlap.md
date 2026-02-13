# Fix: Sovrapposizione elementi al ridimensionamento

**Data:** 2026-02-13
**Problema:** Ridimensionando Chrome a ~900px, la navbar si sovrappone all'hero e i link di navigazione si scontrano con il logo.

## Causa

### 1. Hero — padding-top rimosso a `md`
In `Hero.tsx`, il contenuto ha `pt-20 md:pt-0`.
A `md` (≥768px) il padding sparisce, ma la navbar rimane `fixed z-50`, quindi sovrasta il contenuto dell'hero.

### 2. Header — nav desktop parte troppo presto (`md` = 768px)
`hidden md:flex` fa apparire il menu desktop già a 768px. Su schermi ~900px, il logo (`text-2xl md:text-3xl`) + 5 link + CTA + telefono sono troppo stretti e si accavallano.

## Fix pianificato

### `src/components/sections/Hero.tsx`
- Cambia `pt-20 md:pt-0` → `pt-20 md:pt-24` nel div contenuto

### `src/components/layout/Header.tsx`
- Nav desktop: `hidden md:flex` → `hidden lg:flex`
- CTA desktop: `hidden md:flex` → `hidden lg:flex`
- Hamburger: `md:hidden` → `lg:hidden`

Questo sposta il breakpoint del menu desktop da 768px a 1024px, mostrando l'hamburger su tablet/schermi medi (768–1023px).

## File modificati
- `src/components/sections/Hero.tsx` — `pt-20 md:pt-0` → `pt-20 md:pt-24`
- `src/components/layout/Header.tsx` — nav/CTA/hamburger breakpoint `md` → `lg`

## Stato finale
Implementazione completata. Su schermi 768–1023px ora appare l'hamburger invece del menu desktop compresso.

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import GalleryStrip from "@/components/sections/GalleryStrip"

const products = [
  {
    name: "Timexpert Lift(IN)",
    desc: "Ricostruisce la struttura di sostegno della pelle per sollevare e ridensificare.",
  },
  {
    name: "Timexpert Radiance C+",
    desc: "Il potere antiossidante della Vitamina C Pura per una luminosità immediata.",
  },
  {
    name: "Timexpert SRNS",
    desc: "Protezione essenziale contro lo stress ossidativo durante il giorno e riparazione notturna.",
  },
  {
    name: "Excel Therapy O2",
    desc: "Difesa globale contro l'inquinamento ambientale e la luce blu.",
  },
  {
    name: "Hydracure",
    desc: "Idratazione attiva immediata e duratura per tutti i tipi di pelle.",
  },
  {
    name: "Sperience",
    desc: "Linea corpo spa per trasformare la cura del corpo in un momento di puro relax.",
  },
]

export default function ProdottiPage() {
  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-24 min-h-screen bg-gray-light/30">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">

        {/* ── Titolo ───────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-black-soft mb-4 md:mb-6">
              Germaine de Capuccini
            </h1>
            <p className="text-gray-warm text-lg">
              L&apos;eccellenza della cosmetica professionale. Formule innovative
              testate clinicamente per garantire risultati visibili e rispettosi
              della fisiologia cutanea.
            </p>
          </motion.div>
        </div>

        {/* ── Gallery carousel ─────────────────────────── */}
        <div className="mb-20 -mx-5 md:-mx-6">
          <GalleryStrip />
        </div>

        {/* ── Grid prodotti ────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <motion.div
              key={prod.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.25, 0, 0, 1] }}
              className="bg-white-pure p-8 border border-rose-cipria/40 hover:border-rose-cipria transition-colors duration-300"
            >
              <div className="w-12 h-px bg-rose-dark mb-6" />
              <h3 className="font-serif text-2xl text-black-soft mb-4">{prod.name}</h3>
              <p className="text-gray-warm text-sm leading-relaxed mb-6">{prod.desc}</p>
              <span className="text-xs uppercase tracking-widest text-gray-warm/60">
                Disponibile in negozio
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── CTA consulenza ───────────────────────────── */}
        <div className="mt-20 text-center bg-white-pure p-12 border border-rose-cipria/40">
          <h3 className="font-serif text-3xl text-black-soft mb-4">
            Vuoi una consulenza personalizzata?
          </h3>
          <p className="text-gray-warm mb-8">
            Vieni in istituto: ti aiuto a trovare la routine più adatta alla tua pelle.
          </p>
          <Button asChild variant="primary">
            <a href="tel:0161829955">Contattami</a>
          </Button>
        </div>

      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns"

const recensioni: Testimonial[] = [
  {
    name: "Antonella Tantimonaco",
    stars: 5,
    text: "Bravissima, e molto gentile e disponibile mi sono trovata molto bene!!",
  },
  {
    name: "Francesca Crosio",
    stars: 5,
    text: "Pulito, ambiente accogliente, estetista competente e bravissima…",
  },
  {
    name: "Lucio Tex",
    stars: 5,
    text: "Estetista molto brava e competente",
  },
  {
    name: "Danilo Mantovani",
    stars: 5,
    text: "Buon centro estetico staff preparato",
  },
  {
    name: "Jorge Ghazul",
    stars: 5,
    text: "Ottimo!!! In tutti i sensi",
  },
  {
    name: "Francesca Ghisio",
    stars: 5,
  },
  {
    name: "Laura Pini",
    stars: 5,
  },
  {
    name: "Franca Deregibus",
    stars: 5,
  },
  {
    name: "Debora Carchidi",
    stars: 5,
  },
  {
    name: "Franca Viola",
    stars: 5,
  },
  {
    name: "Gianna Irico",
    stars: 4,
  },
]

const col1 = recensioni.slice(0, 4)
const col2 = recensioni.slice(4, 8)
const col3 = recensioni.slice(8, 11)

export default function RecensioniGoogle() {
  return (
    <section className="py-16 md:py-24 bg-gray-light overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-rose-dark mb-3">
            Recensioni Google
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-black-soft">
            Cosa dicono di me
          </h2>
          <p className="text-gray-warm text-sm mt-3 font-light">
            Più di 30 anni di fiducia, costruita una cliente alla volta, a Trino.
          </p>
        </motion.div>

        {/* Colonne animate */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[620px] overflow-hidden">
          <TestimonialsColumn testimonials={col1} duration={18} />
          <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={16} />
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Gem, Leaf } from "lucide-react"

const items = [
  {
    Icon: ShieldCheck,
    title: "Formazione Continua",
    description: "Aggiornamento costante sulle ultime tecniche estetiche. Certificazioni e corsi specialistici ogni anno per offrirti il meglio.",
  },
  {
    Icon: Gem,
    title: "Solo Germaine de Capuccini",
    description: "Cosmesi professionale testata dermatologicamente, rispettosa della pelle. Disponibile anche per l'acquisto in istituto.",
  },
  {
    Icon: Leaf,
    title: "Un'ora tutta per te",
    description: "Niente attese, niente fretta. Ogni appuntamento è uno spazio riservato solo a te.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-24 bg-white-pure">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center">
          {items.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center p-6 hover:bg-gray-light transition-colors duration-500 rounded-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0, 0, 1] }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-rose-dark mb-5 md:mb-6" strokeWidth={1} />
              <h4 className="font-serif text-lg md:text-xl mb-3 text-black-soft">{title}</h4>
              <p className="text-gray-warm text-sm leading-relaxed max-w-xs">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

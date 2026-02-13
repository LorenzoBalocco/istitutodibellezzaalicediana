"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const cards = [
  {
    title: "Trattamenti Viso",
    description: "Pulizia, idratazione profonda e anti-age per una pelle luminosa.",
    cta: "Scopri la linea viso",
    src: "/viso.jpg",
    alt: "Trattamenti viso — Istituto di Bellezza Alice Diana",
  },
  {
    title: "Trattamenti Corpo",
    description: "Massaggi, trattamenti rassodanti e detox per ritrovare leggerezza.",
    cta: "Scopri la linea corpo",
    src: "/corpo.jpg",
    alt: "Trattamenti corpo — Istituto di Bellezza Alice Diana",
  },
]

export default function TrattamentiGrid() {
  return (
    <section className="py-12 md:py-24 bg-gray-light">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-black-soft mb-3 md:mb-4">
            Viso, Corpo, Benessere
          </h2>
          <p className="text-gray-warm text-sm md:text-base">
            Ogni trattamento nasce da un ascolto. Ogni percorso è pensato solo per te.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative h-[350px] md:h-[500px] overflow-hidden cursor-pointer bg-white-pure"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0, 0, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-soft/70 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-12 text-white-pure">
                <h3 className="font-serif text-2xl md:text-3xl mb-2 md:mb-3">{card.title}</h3>
                <p className="text-white-pure/80 mb-4 md:mb-6 font-light text-sm md:text-base">
                  {card.description}
                </p>
                <Link
                  href="/trattamenti"
                  className="text-xs md:text-sm uppercase tracking-widest border-b border-white-pure pb-1 hover:text-rose-cipria hover:border-rose-cipria transition-colors duration-300"
                >
                  {card.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

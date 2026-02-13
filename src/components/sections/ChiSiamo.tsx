"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeUpInitial   = { opacity: 0, y: 24 }
const fadeUpAnimate   = { opacity: 1, y: 0 }
const fadeUpTransition = { duration: 0.7, ease: [0.25, 0, 0, 1] as const }

export default function ChiSiamo() {
  return (
    <section className="py-10 sm:py-12 md:py-24 lg:py-32 bg-white-pure">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">

          {/* ── Immagine ───────────────────────────────── */}
          <motion.div
            className="relative"
            initial={fadeUpInitial}
            whileInView={fadeUpAnimate}
            transition={fadeUpTransition}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
              <Image
                src="/centro.png"
                alt="Interno dell'Istituto di Bellezza Alice Diana — Trino"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-rose-cipria/20 -z-10 hidden md:block" />
          </motion.div>

          {/* ── Testo ──────────────────────────────────── */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={fadeUpInitial}
            whileInView={fadeUpAnimate}
            transition={{ ...fadeUpTransition, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black-soft leading-tight">
              Dal 1992 a Trino, la tua estetista di fiducia.
            </h2>
            <p className="text-rose-dark text-sm font-light italic">
              La bellezza è una questione di cura, non di fretta.
            </p>
            <p className="text-gray-warm text-base md:text-lg leading-relaxed">
              Credo in un&apos;estetica fatta di equilibrio, delicatezza e risultati
              reali. Ogni trattamento nel mio centro nasce dalla comprensione delle
              tue esigenze uniche.
            </p>
            <p className="text-gray-warm text-base md:text-lg leading-relaxed">
              Competenza certificata, prodotti d&apos;eccellenza e uno spazio pensato
              per farti sentire ascoltata — non solo trattata.
            </p>
            <Link
              href="/chi-siamo"
              className="inline-flex items-center gap-2 text-black-soft border-b border-black-soft pb-1 hover:text-rose-dark hover:border-rose-dark transition-colors duration-300 uppercase tracking-widest text-xs font-medium"
            >
              Scopri di più
              <ArrowRight size={14} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

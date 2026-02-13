"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="sticky top-0 z-0 relative h-[60vh] md:h-[90vh] flex items-center justify-center overflow-hidden">

      {/* ── Immagine di sfondo ───────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Siero cosmetico con fiore d'arancio — Istituto di Bellezza Alice Diana"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white-pure/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white-pure via-transparent to-transparent opacity-80" />
      </div>

      {/* ── Contenuto ────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-6 text-center pt-20 md:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0, 0, 1] }}
          className="font-serif text-xl sm:text-3xl md:text-6xl lg:text-8xl font-light text-black-soft mb-3 md:mb-6 leading-tight"
        >
          Prenditi il tuo tempo.<br />
          <span className="italic">Alla tua bellezza penso io.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0, 0, 1] }}
          className="text-gray-warm text-xs sm:text-base md:text-xl max-w-2xl mx-auto mb-5 md:mb-12 font-light"
        >
          Il mio centro estetico a Trino Vercellese, dove ogni trattamento
          è pensato su di te. Con la stessa cura di sempre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0, 0, 1] }}
          className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4"
        >
          <Button asChild variant="primary" size="sm" className="w-full sm:w-auto md:px-8 md:py-4 md:text-sm">
            <Link href="/contatti">Prenota un Appuntamento</Link>
          </Button>
          <Button asChild variant="secondary" size="sm" className="w-full sm:w-auto md:px-8 md:py-4 md:text-sm">
            <Link href="/trattamenti">Scopri i Trattamenti</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

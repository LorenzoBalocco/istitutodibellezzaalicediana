"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProductsTeaser() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* ── Sfondo ────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/prodotti.jpg"
          alt=""
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white-pure/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

          {/* ── Testo ──────────────────────────────────── */}
          <motion.div
            className="flex-1 order-2 md:order-1 space-y-5 md:space-y-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-black-soft">
              Germaine de Capuccini
            </h2>
            <p className="text-gray-warm text-base md:text-lg leading-relaxed">
              Competenza che si sente, non si ostenta. Ho scelto Germaine de
              Capuccini perché rappresenta l&apos;eccellenza nella cosmesi
              professionale: innovazione scientifica unita al rispetto per la pelle.
            </p>
            <Button asChild variant="primary">
              <Link href="/prodotti">Scopri la linea prodotti</Link>
            </Button>
          </motion.div>

          {/* ── Immagine ───────────────────────────────── */}
          <motion.div
            className="flex-1 order-1 md:order-2 w-full"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="relative w-full aspect-[3/2] overflow-hidden bg-white">
              <Image
                src="/germaine.png"
                alt="Prodotti Germaine de Capuccini"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

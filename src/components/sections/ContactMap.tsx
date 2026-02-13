"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ContactMap() {
  return (
    <section className="flex flex-col md:flex-row min-h-[500px] bg-rose-cipria">

      {/* ── Info contatti ───────────────────────────── */}
      <motion.div
        className="flex-1 bg-gray-light p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-black-soft mb-5 md:mb-6">
          Vieni a trovarmi
        </h2>

        <div className="space-y-3 md:space-y-4 text-gray-warm mb-6 md:mb-8">
          <p className="text-base md:text-lg">
            Via di Spalti Ponente, 8<br />
            13039 Trino VC
          </p>
          <p className="text-lg md:text-xl text-black-soft font-medium">0161 829955</p>
          <div className="pt-3 md:pt-4 border-t border-rose-cipria w-24" />
          <div className="text-sm space-y-1">
            <p>Mar – Ven: 9:00 – 19:00</p>
            <p>Sabato: 8:00 – 13:00</p>
          </div>
        </div>

        <div>
          <Button asChild variant="primary">
            <Link href="/contatti">Prenota ora</Link>
          </Button>
        </div>
      </motion.div>

      {/* ── Mappa Google ────────────────────────────── */}
      <div className="flex-1 bg-gray-200 min-h-[300px] md:min-h-[500px] relative">
        <iframe
          src="https://maps.google.com/maps?q=Via+di+Spalti+Ponente+8,+13039+Trino+VC,+Italia&output=embed&hl=it"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0, filter: "grayscale(100%) opacity(0.8)" }}
          allowFullScreen={false}
          loading="lazy"
          title="Mappa Istituto di Bellezza Alice Diana — Trino VC"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </section>
  )
}

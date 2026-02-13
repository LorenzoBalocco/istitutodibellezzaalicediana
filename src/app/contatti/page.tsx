"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"

export default function ContattiPage() {
  return (
    <div className="pt-24 pb-12 md:pb-24 min-h-screen">
      <div className="mx-auto max-w-[760px] px-5 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-black-soft mb-4 md:mb-6">Contattami</h1>
          <p className="text-gray-warm text-base md:text-lg mb-8 md:mb-12">
            Chiamami — troveremo insieme il momento giusto per te.
          </p>

          <div className="space-y-8">

            {/* Indirizzo */}
            <div className="flex items-start gap-6">
              <div className="bg-rose-cipria/20 p-3 shrink-0">
                <MapPin className="w-6 h-6 text-black-soft" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-black-soft mb-1">Dove Sono</h3>
                <p className="text-gray-warm">
                  Via di Spalti Ponente, 8<br />
                  13039 Trino VC
                </p>
              </div>
            </div>

            {/* Telefono */}
            <div className="flex items-start gap-6">
              <div className="bg-rose-cipria/20 p-3 shrink-0">
                <Phone className="w-6 h-6 text-black-soft" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-black-soft mb-1">Telefono</h3>
                <a
                  href="tel:0161829955"
                  className="text-gray-warm hover:text-black-soft text-lg font-medium transition-colors duration-300"
                >
                  0161 829955
                </a>
                <p className="text-xs text-gray-warm/60 mt-1">Chiamami per prenotare</p>
              </div>
            </div>

            {/* Orari */}
            <div className="flex items-start gap-6">
              <div className="bg-rose-cipria/20 p-3 shrink-0">
                <Clock className="w-6 h-6 text-black-soft" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-black-soft mb-3">Orari</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-gray-warm text-sm">
                  <span>Mar – Ven</span><span>9:00 – 19:00</span>
                  <span>Sabato</span><span>8:00 – 13:00</span>
                  <span className="text-rose-dark">Dom &amp; Lun</span>
                  <span className="text-rose-dark">Chiuso</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Mappa full-width ──────────────────────────── */}
        <div className="mt-16 md:mt-24 h-[400px] w-full bg-gray-200 relative">
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

      </div>
    </div>
  )
}

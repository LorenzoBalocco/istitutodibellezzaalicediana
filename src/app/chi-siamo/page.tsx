"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ChiSiamoPage() {
  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-24 min-h-screen">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0, 0, 1] }}
          className="max-w-4xl mx-auto"
        >

          {/* ── Immagine header ──────────────────────── */}
          <div className="aspect-[21/9] w-full overflow-hidden mb-12 bg-gray-100 relative">
            <Image
              src="/centro.png"
              alt="Istituto di Bellezza Alice Diana — interno"
              fill
              priority
              className="object-cover"
              style={{ filter: "grayscale(20%)" }}
              sizes="100vw"
            />
          </div>

          {/* ── Layout 2 colonne ─────────────────────── */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">

            {/* Colonna sinistra */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-black-soft mb-4 md:mb-6 leading-tight">
                Chi Sono
              </h1>
              <div className="w-16 h-1 bg-rose-cipria mb-6" />
              <p className="text-sm font-sans uppercase tracking-widest text-gray-warm">
                Dal 1992 a Trino
              </p>
            </div>

            {/* Colonna destra */}
            <div className="space-y-6 text-gray-warm text-lg font-light leading-relaxed">
              <p>
                Benvenuta da Alice Diana. La mia filosofia nasce da una
                convinzione semplice ma profonda: la bellezza autentica emerge
                quando ci permettiamo di rallentare.
              </p>
              <p>
                In un mondo che corre veloce, ho voluto creare un rifugio dove
                il tempo si dilata. Qui, ogni trattamento non è solo una
                procedura estetica, ma un rituale di riconnessione con se stessi.
              </p>
              <p>
                La professionalità per me significa formazione continua, igiene
                rigorosa e la scelta di partner d&apos;eccellenza come Germaine de
                Capuccini. Ma significa anche ascolto, empatia e la capacità di
                consigliarti il percorso giusto per te, senza false promesse.
              </p>
              <p>
                Il mio obiettivo non è trasformarti, ma rivelare la tua bellezza
                naturale, rispettando la tua unicità.
              </p>

              {/* Quote */}
              <div className="pt-8 mt-8 border-t border-rose-cipria/40">
                <p className="font-serif text-2xl text-black-soft italic">
                  &ldquo;La cura è un atto di rispetto verso la propria storia.&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium uppercase tracking-widest text-rose-dark">
                  — Alice Diana
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Sparkles, Palette, Waves, Sun, Scissors, Feather } from "lucide-react"

const categories = [
  {
    id: "viso",
    title: "Trattamenti Viso",
    description: "Protocolli avanzati per rigenerare la pelle e illuminare il volto.",
    Icon: Sparkles,
    items: [
      { name: "Pulizia viso completa",         desc: "Detersione profonda con vapore e spremitura manuale." },
      { name: "Trattamento idratante profondo", desc: "Un bagno di idratazione per pelli secche e disidratate." },
      { name: "Anti-age e lifting",             desc: "Stimolazione del collagene per distendere i tratti." },
      { name: "Peeling delicato",               desc: "Esfoliazione controllata per rinnovare la texture cutanea." },
    ],
  },
  {
    id: "corpo",
    title: "Trattamenti Corpo",
    description: "Rimodella, tonifica e ritrova la tua silhouette ideale.",
    Icon: Waves,
    items: [
      { name: "Trattamento rassodante",  desc: "Tonificazione tessutale con attivi specifici." },
      { name: "Drenaggio linfatico",     desc: "Massaggio tecnico per ridurre ritenzione e gonfiore." },
      { name: "Scrub corpo rigenerante", desc: "Esfoliazione salina con oli essenziali." },
      { name: "Bendaggi drenanti",       desc: "Applicazione di bende imbevute per shock osmotico." },
    ],
  },
  {
    id: "massaggi",
    title: "Massaggi",
    description: "L'arte del tocco per sciogliere tensioni e stress.",
    Icon: Feather,
    items: [
      { name: "Linfodrenaggio",             desc: "Tecnica manuale delicata per il sistema linfatico." },
      { name: "Massaggio connettivale",     desc: "Azione profonda sul tessuto connettivo." },
      { name: "Massaggio decontratturante", desc: "Scioglie le tensioni muscolari localizzate." },
    ],
  },
  {
    id: "laser",
    title: "Laser & Epilazione",
    description: "Tecnologie sicure per una pelle liscia a lungo.",
    Icon: Sun,
    items: [
      { name: "Epilazione Laser Diodo",  desc: "Efficace, veloce e indolore per tutti i fototipi." },
      { name: "Ceretta Tradizionale",    desc: "Epilazione classica con cera al titanio." },
      { name: "COCOcera",                desc: "La ceretta delicata per pelli sensibili." },
    ],
  },
  {
    id: "mani-piedi",
    title: "Manicure & Pedicure",
    description: "Cura dettagliata per mani e piedi impeccabili.",
    Icon: Scissors,
    items: [
      { name: "Manicure Classica",       desc: "Cura delle cuticole, limatura e smalto." },
      { name: "Pedicure Curativo",       desc: "Trattamento specifico per callosità e benessere del piede." },
      { name: "Smalto Semipermanente",   desc: "Durata e brillantezza fino a 3 settimane." },
    ],
  },
  {
    id: "trucco",
    title: "Trucco",
    description: "Valorizza la tua bellezza naturale per ogni occasione.",
    Icon: Palette,
    items: [
      { name: "Trucco giorno",      desc: "Look fresco e luminoso per la vita quotidiana." },
      { name: "Trucco sera/evento", desc: "Intensità e durata per le grandi occasioni." },
      { name: "Trucco sposa",       desc: "Il giorno più bello, il look più importante." },
      { name: "Trucco correttivo",  desc: "Tecniche professionali per armonizzare i tratti." },
    ],
  },
]

export default function TrattamentiPage() {
  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen bg-white-pure">

      {/* ── Page Header ──────────────────────────────── */}
      <div className="bg-gray-light py-12 md:py-20 mb-10 md:mb-16">
        <div className="mx-auto max-w-[1280px] px-5 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
          >
            <span className="text-xs font-sans uppercase tracking-widest text-gray-warm mb-3 md:mb-4 block">
              Esplora il Menu
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black-soft mb-4 md:mb-6">
              I Miei Trattamenti
            </h1>
            <p className="text-gray-warm max-w-xl mx-auto text-base md:text-lg font-light">
              Soluzioni personalizzate che uniscono manualità esperta e prodotti d&apos;eccellenza.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Categorie ────────────────────────────────── */}
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="grid gap-16">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              id={cat.id}
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
            >
              {/* Intestazione categoria */}
              <div className="flex items-center mb-8 border-b border-rose-cipria pb-4">
                <cat.Icon
                  className="w-8 h-8 text-rose-dark mr-4 shrink-0"
                  strokeWidth={1}
                />
                <div>
                  <h2 className="font-serif text-3xl text-black-soft">{cat.title}</h2>
                  <p className="text-gray-warm text-sm mt-1">{cat.description}</p>
                </div>
              </div>

              {/* Cards trattamenti */}
              <div className="grid md:grid-cols-2 gap-6">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group bg-white-pure border border-rose-cipria/60 p-8 hover:shadow-[0_4px_24px_0_rgba(44,40,37,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <h3 className="font-serif text-xl text-black-soft mb-3 group-hover:text-rose-dark transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-warm text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <a
                      href="tel:0161829955"
                      className="text-xs font-medium uppercase tracking-widest text-black-soft hover:underline decoration-rose-dark underline-offset-4"
                    >
                      Prenota: 0161 829955
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  )
}

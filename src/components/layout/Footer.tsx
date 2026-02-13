import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-light pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">

        {/* ── Colonne ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 md:mb-16">

          {/* Col 1 — Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-black-soft">Alice Diana</h3>
            <p className="text-gray-warm text-sm leading-relaxed max-w-xs">
              Un rifugio di benessere dove il tempo rallenta e la tua bellezza
              naturale viene valorizzata con competenza e dedizione.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/istitutodibellezzaalice?igsh=OWdpZTFqamMyZWw3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-warm hover:text-black-soft transition-colors duration-300"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com/share/1HVjyye3Dc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-warm hover:text-black-soft transition-colors duration-300"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Col 2 — Link rapidi */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-widest text-black-soft">
              Esplora
            </h4>
            <ul className="space-y-3 text-sm text-gray-warm">
              {[
                { label: "Trattamenti", path: "/trattamenti" },
                { label: "Chi Sono",    path: "/chi-siamo" },
                { label: "Prodotti",    path: "/prodotti" },
                { label: "Contatti",    path: "/contatti" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="hover:text-rose-dark transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contatti */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-widest text-black-soft">
              Contatti
            </h4>
            <ul className="space-y-4 text-sm text-gray-warm">
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>
                  Via di Spalti Ponente, 8<br />
                  13039 Trino VC
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.5} className="shrink-0" />
                <a href="tel:0161829955" className="hover:text-black-soft transition-colors duration-300">
                  0161 829955
                </a>
              </li>

            </ul>
          </div>

          {/* Col 4 — Orari */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-widest text-black-soft">
              Orari
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-gray-warm">
                <span>Mar — Ven</span>
                <span>9:00 – 19:00</span>
              </li>
              <li className="flex justify-between text-gray-warm">
                <span>Sabato</span>
                <span>8:00 – 13:00</span>
              </li>
              <li className="flex justify-between text-rose-dark">
                <span>Dom &amp; Lun</span>
                <span>Chiuso</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Copyright bar ───────────────────────────── */}
        <div className="border-t border-rose-cipria pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-warm">
          <p>
            &copy; {new Date().getFullYear()} Istituto di Bellezza Alice Diana.
            Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black-soft transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black-soft transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

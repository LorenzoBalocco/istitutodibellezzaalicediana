"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"

const navItems = [
  { label: "Home",        path: "/" },
  { label: "Trattamenti", path: "/trattamenti" },
  { label: "Chi Sono",    path: "/chi-siamo" },
  { label: "Prodotti",    path: "/prodotti" },
  { label: "Contatti",    path: "/contatti" },
]

export default function Header() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Chiudi menu mobile al cambio route
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Blocca scroll body quando menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Rileva scroll per sfondo header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={[
          "fixed w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white-pure/95 backdrop-blur-sm shadow-[0_1px_0_0_#E8D5D0] py-4"
            : "bg-transparent py-6",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1280px] px-6 flex items-center justify-between">

          {/* ── Logo ─────────────────────────────────────── */}
          <Link href="/" className="relative z-50 flex flex-col leading-none group">
            <span className="font-serif text-2xl md:text-3xl tracking-wide text-black-soft">
              ALICE DIANA
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-warm mt-1">
              Istituto di Bellezza
            </span>
          </Link>

          {/* ── Nav Desktop ──────────────────────────────── */}
          <nav aria-label="Navigazione principale" className="hidden lg:flex items-center gap-5 lg:gap-8">
            {navItems.map((item) => {
              const isActive =
                item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={[
                    "text-sm tracking-wide pb-1 border-b transition-colors duration-300 whitespace-nowrap",
                    isActive
                      ? "text-black-soft border-black-soft"
                      : "text-gray-warm border-transparent hover:text-black-soft hover:border-black-soft",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* ── CTA Desktop ──────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-6">
            <a
              href="tel:0161829955"
              className="hidden lg:flex items-center gap-2 text-black-soft hover:text-rose-dark transition-colors duration-300"
            >
              <Phone size={16} strokeWidth={1.5} />
              <span className="text-sm font-medium whitespace-nowrap">0161 829955</span>
            </a>
            <Link
              href="/contatti"
              className="px-6 py-3 border border-black-soft text-xs uppercase tracking-widest text-black-soft hover:bg-black-soft hover:text-white-pure transition-all duration-300"
            >
              Prenota
            </Link>
          </div>

          {/* ── Hamburger Mobile ─────────────────────────── */}
          <button
            className="relative z-50 lg:hidden p-2 text-black-soft focus:outline-none"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* ── Overlay Menu Mobile ──────────────────────────── */}
      {/* Fuori da <header> per evitare che backdrop-blur/stacking context del header
          lo intrappoli e faccia trasparire i contenuti z-20 della pagina */}
      <div
        className={[
          "fixed inset-0 z-40 bg-white-pure flex flex-col justify-center items-center",
          "transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <nav aria-label="Menu mobile" className="flex flex-col items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                href={item.path}
                className={[
                  "font-serif text-3xl transition-colors duration-200",
                  isActive ? "text-black-soft" : "text-gray-warm hover:text-black-soft",
                ].join(" ")}
              >
                {item.label}
              </Link>
            )
          })}

          <div className="pt-8 flex flex-col items-center gap-6">
            <a
              href="tel:0161829955"
              className="flex items-center gap-3 text-black-soft text-lg"
            >
              <Phone size={20} strokeWidth={1.5} />
              0161 829955
            </a>
            <Link
              href="/contatti"
              className="px-8 py-4 bg-black-soft text-white-pure text-xs uppercase tracking-widest"
            >
              Prenota Ora
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

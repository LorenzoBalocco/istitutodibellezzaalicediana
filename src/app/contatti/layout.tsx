import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contatti & Orari | Istituto di Bellezza Alice Diana — Trino VC",
  description:
    "Contattami per informazioni o prenota un appuntamento. Via di Spalti Ponente, 8 — 13039 Trino VC. Tel: 0161 829955. Mar–Ven 9–19, Sab 8–13.",
  openGraph: {
    url: "https://istitutodibellezzaalicediana.com/contatti",
    title: "Contatti — Istituto di Bellezza Alice Diana",
    description:
      "Via di Spalti Ponente, 8 — Trino VC. Tel: 0161 829955. Aperto mar–ven 9–19, sab 8–13. Prenota il tuo appuntamento al centro estetico Alice Diana.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Istituto di Bellezza Alice Diana — Trino Vercellese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contatti — Istituto di Bellezza Alice Diana",
    description:
      "Trino VC — Tel: 0161 829955. Mar–ven 9–19, sab 8–13. Prenota ora il tuo trattamento.",
    images: ["/og-image.jpg"],
  },
}

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

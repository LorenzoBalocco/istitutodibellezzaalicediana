import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estetista a Trino dal 1992",
  description:
    "Sono Alice Diana, estetista a Trino Vercellese dal 1992. Competenza certificata, prodotti Germaine de Capuccini e un approccio su misura per ogni cliente.",
  openGraph: {
    url: "https://istitutodibellezzaalicediana.com/chi-siamo",
    title: "Estetista a Trino dal 1992 — Alice Diana",
    description:
      "Dal 1992 nel cuore di Trino VC. Estetica professionale, formazione continua e solo prodotti Germaine de Capuccini. La bellezza è cura, non fretta.",
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
    title: "Estetista a Trino dal 1992 — Alice Diana",
    description:
      "30 anni di professionalità a Trino. Estetica certificata, Germaine de Capuccini, approccio su misura.",
    images: ["/og-image.jpg"],
  },
}

export default function ChiSiamoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

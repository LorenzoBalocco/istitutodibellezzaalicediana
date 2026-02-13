import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Germaine de Capuccini a Trino",
  description:
    "Prodotti Germaine de Capuccini disponibili nel mio centro estetico a Trino Vercellese: Timexpert Lift, Radiance C+, SRNS, Excel Therapy O2, Hydracure e Sperience.",
  openGraph: {
    url: "https://istitutodibellezzaalicediana.com/prodotti",
    title: "Germaine de Capuccini a Trino — Alice Diana",
    description:
      "Cosmesi professionale Germaine de Capuccini nel mio istituto a Trino Vercellese. Linee esclusive per viso, corpo e benessere. Scopri i trattamenti disponibili.",
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
    title: "Germaine de Capuccini a Trino — Alice Diana",
    description:
      "Cosmesi Germaine de Capuccini. Linee esclusive a Trino VC. Qualità professionale, risultati visibili.",
    images: ["/og-image.jpg"],
  },
}

export default function ProdottiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

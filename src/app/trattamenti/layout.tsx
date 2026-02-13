import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trattamenti Estetici a Trino Vercellese",
  description:
    "Trattamenti estetici professionali a Trino Vercellese: viso, corpo, massaggi, epilazione laser, manicure, pedicure e trucco. Estetista certificata dal 1992.",
  openGraph: {
    url: "https://istitutodibellezzaalicediana.com/trattamenti",
    title: "Trattamenti Estetici a Trino — Alice Diana",
    description:
      "Trattamenti viso, corpo, massaggi, epilazione laser, manicure e trucco a Trino Vercellese. Ogni trattamento su misura per te. Prenota il tuo appuntamento.",
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
    title: "Trattamenti Estetici a Trino — Alice Diana",
    description:
      "Viso, corpo, massaggi, laser, manicure e trucco a Trino VC. Trattamenti professionali, su misura per te.",
    images: ["/og-image.jpg"],
  },
}

export default function TrattamentiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

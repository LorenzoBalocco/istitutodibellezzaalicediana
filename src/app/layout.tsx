import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://istitutodibellezzaalicediana.com"),
  title: {
    default: "Istituto di Bellezza Alice Diana — Trino",
    template: "%s | Istituto di Bellezza Alice Diana",
  },
  description:
    "Centro estetico a Trino Vercellese dal 1992. Trattamenti viso e corpo, epilazione laser, massaggi, manicure e trucco. Prodotti Germaine de Capuccini. Prenota: 0161 829955.",
  keywords: [
    "centro estetico Trino",
    "estetista Vercelli",
    "trattamenti viso",
    "trattamenti corpo",
    "Germaine de Capuccini",
    "epilazione laser Trino",
    "manicure pedicure Trino",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://istitutodibellezzaalicediana.com",
    siteName: "Istituto di Bellezza Alice Diana",
    title: "Istituto di Bellezza Alice Diana — Trino",
    description:
      "Centro estetico a Trino dal 1992. Trattamenti viso e corpo, massaggi, laser, manicure e prodotti Germaine de Capuccini. Vieni a trovarmi.",
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
    title: "Istituto di Bellezza Alice Diana — Trino",
    description:
      "Centro estetico a Trino VC dal 1992. Trattamenti professionali e prodotti Germaine de Capuccini.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Istituto di Bellezza Alice Diana",
  description:
    "Centro estetico professionale a Trino Vercellese con trattamenti viso, corpo, massaggi, laser e prodotti Germaine de Capuccini.",
  url: "https://istitutodibellezzaalicediana.com",
  telephone: "+390161829955",
  email: "info@dianaalice.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via di Spalti Ponente, 8",
    addressLocality: "Trino",
    addressRegion: "VC",
    postalCode: "13039",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.195029,
    longitude: 8.293456,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Skip to main content — accessibilità keyboard */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black-soft focus:text-white-pure focus:text-sm focus:uppercase focus:tracking-widest"
        >
          Vai al contenuto
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

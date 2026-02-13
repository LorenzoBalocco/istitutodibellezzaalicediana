import Hero               from "@/components/sections/Hero"
import ChiSiamo           from "@/components/sections/ChiSiamo"
import TrattamentiGrid    from "@/components/sections/TrattamentiGrid"
import WhyChooseUs        from "@/components/sections/WhyChooseUs"
import ProductsTeaser     from "@/components/sections/ProductsTeaser"
import RecensioniGoogle   from "@/components/sections/RecensioniGoogle"
import ContactMap         from "@/components/sections/ContactMap"

export default function HomePage() {
  return (
    <div className="w-full overflow-x-clip">
      <Hero />

      {/* Sezioni normali — sfondo bianco solido */}
      <div className="relative z-20 bg-white-pure">
        <ChiSiamo />
        <TrattamentiGrid />
      </div>

      {/* ProductsTeaser — rimane sticky mentre le sezioni seguenti scorrono sopra */}
      <div className="sticky top-0 z-0">
        <ProductsTeaser />
      </div>

      {/* WhyChooseUs — scivola sopra l'immagine dal basso */}
      <div className="relative z-20 bg-white-pure">
        <WhyChooseUs />
      </div>

      {/* RecensioniGoogle — prima del contatto */}
      <div className="relative z-20 bg-gray-light">
        <RecensioniGoogle />
      </div>

      {/* ContactMap — scivola sopra l'immagine dal basso */}
      <div className="relative z-20">
        <ContactMap />
      </div>
    </div>
  )
}

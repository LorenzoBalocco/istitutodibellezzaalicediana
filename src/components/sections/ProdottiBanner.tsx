import Image from "next/image"

export default function ProdottiBanner() {
  return (
    <section className="sticky top-0 z-0 h-[50vh] md:h-[70vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/prodotti.jpg"
          alt="Prodotti cosmetici Istituto di Bellezza Alice Diana"
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white-pure/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white-pure via-transparent to-transparent opacity-80" />
      </div>
    </section>
  )
}

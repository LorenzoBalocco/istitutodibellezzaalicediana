import Image from "next/image"

const images = [
  { src: "/gdc/foto1.jpeg", alt: "Germaine de Capuccini — prodotto 1" },
  { src: "/gdc/foto2.jpeg", alt: "Germaine de Capuccini — prodotto 2" },
  { src: "/gdc/foto3.jpeg", alt: "Germaine de Capuccini — prodotto 3" },
  { src: "/gdc/foto4.jpeg", alt: "Germaine de Capuccini — prodotto 4" },
  { src: "/gdc/foto5.jpeg", alt: "Germaine de Capuccini — prodotto 5" },
  { src: "/gdc/foto6.jpeg", alt: "Germaine de Capuccini — prodotto 6" },
  { src: "/gdc/foto7.jpeg", alt: "Germaine de Capuccini — prodotto 7" },
  { src: "/gdc/foto8.jpeg", alt: "Germaine de Capuccini — prodotto 8" },
]

const items = [...images, ...images]

export default function GalleryStrip() {
  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div className="w-full overflow-hidden bg-gray-light py-8 md:py-12">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee-scroll 30s linear infinite", willChange: "transform" }}
        >
          {items.map((img, i) => (
            <div
              key={i}
              className="relative h-48 md:h-64 w-64 md:w-80 shrink-0 overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

"use client"

import { Link } from "react-router-dom"
import { Footer } from "../components/comon/Footer"
import { useEffect, useRef } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { LazyImage } from "../components/comon/LazyImage"

interface ApartmentCard {
  id: string
  title: string
  image: string
  route: string
}

const APARTMENTS: ApartmentCard[] = [
  {
    id: "pba",
    title: "Planta Baja A",
    image: "/edificioFarfalle/images/PbA.jpg",
    route: "/Departamentos/Pb-A",
  },
  {
    id: "pbb",
    title: "Planta Baja B",
    image: "/edificioFarfalle/images/PbB.jpg",
    route: "/Departamentos/Pb-B",
  },
  {
    id: "1a",
    title: "Primero A",
    image: "/edificioFarfalle/images/1A.jpeg",
    route: "/Departamentos/1-A",
  },
  {
    id: "1b",
    title: "Primero B",
    image: "/edificioFarfalle/images/1B.jpeg",
    route: "/Departamentos/1-B",
  },
  {
    id: "2b",
    title: "Segundo B",
    image: "/edificioFarfalle/images/2B.jpeg",
    route: "/Departamentos/2-B",
  },
]

export function Departamentos() {
  const animatedRefs = useRef<(HTMLHeadingElement | null)[]>([])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate")
          } else {
            entry.target.classList.remove("aos-animate")
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    animatedRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      animatedRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  return (
    <section className="pt-12 h-full w-full m-auto bg-background">
      <div className="container mx-auto mb-12 md:mb-20 px-3 md:px-20 lg:px-28">
        <h2
          ref={(el) => (animatedRefs.current[0] = el)}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="text-base xl:text-lg mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-8"
        >
          Nuestros Departamentos
        </h2>

        <div className="bg-white/50 rounded-lg shadow-sm mb-12">
          <p className="text-justify text-black text-opacity-90 mb-4 px-4 md:px-0 xl:px-8 pt-2 md:pt-4 text-base xl:text-lg">
            En Edificio Farfalle, ofrecemos una variedad de opciones de alojamiento perfectas para quienes buscan una
            estancia acogedora y completamente equipada. Nuestros departamentos, con capacidad para hasta 4 personas,
            están diseñados para <span className="text-orange font-semibold">proporcionar el máximo confort </span>
            durante su visita.
          </p>

          <p className="text-justify text-black text-opacity-90 px-4 md:px-0 xl:px-8 pb-2 md:pb-3 text-base xl:text-lg">
            Además, incluimos un servicio de cambio de ropa de cama semanal (aplicable para estancias mínimas de una
            semana), garantizando así la frescura y limpieza que nuestros huéspedes merecen.
          </p>
        </div>

        <h3
          ref={(el) => (animatedRefs.current[1] = el)}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="text-base xl:text-lg md:mt-4 font-medium text-slate-950 text-center px-8 mb-8"
        >
          Galería de Imágenes y Videos
        </h3>

        <p className="text-justify text-black text-opacity-90 mb-12 px-4 md:px-0 xl:px-8 text-base xl:text-lg">
          Para ofrecerte una visión más clara de lo que puedes esperar, te invitamos a explorar nuestras galerías de
          imágenes y videos. Haz clic en los enlaces de cada departamento para ver más detalles y conocer todo lo que
          ofrecemos.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-0 xl:px-8 mb-20">
          {APARTMENTS.map((apartment, index) => (
            <div
              key={apartment.id}
              className="bg-white overflow-hidden relative h-64 sm:h-80 border-2 border-none rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <LazyImage src={apartment.image} alt={apartment.title} className="h-full w-full object-cover" />

              <div className="absolute inset-0 flex flex-col justify-between items-center">
                <div className="self-start">
                  <h3 className="text-base xl:text-lg font-semibold mb-2 text-almostWhite bg-orange/80 opacity-95 p-2 rounded-br-lg">
                    {apartment.title}
                  </h3>
                </div>

                <div className="p-6 text-center">
                  <Link
                    to={apartment.route}
                    className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-6 font-medium text-neutral-200 transition hover:bg-slate-950 hover:scale-110"
                  >
                    <span className="text-base xl:text-lg">Ver</span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                      <div className="relative h-full w-8 bg-white/20"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}

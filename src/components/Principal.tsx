"use client"

import { useEffect, useRef } from "react"
// import { RatingCharts } from "./comon/RatingChart"
import { Footer } from "./comon/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import { LazyVideo } from "./comon/LazyVideo"
import { SectionTitle } from "./comon/SectionTitle"
import { FeatureItem } from "./comon/FeatureItem"

interface PrincipalProps {
  isMobile: boolean
}

// Lista de características para evitar repetición de código
const FEATURES = [
  {
    title: "Ubicación Privilegiada y tranquila",
    description:
      "Situado en una zona residencial tranquila de La Plata, Edificio Farfalle ofrece un escape del bullicio del centro de la ciudad. Disfruta de la paz y la tranquilidad mientras sigues estando a poca distancia de los principales puntos de interés.",
  },
  {
    title: "Comodidad y Modernidad",
    description:
      "Nuestros departamentos están diseñados para ofrecer el máximo confort con instalaciones modernas y elegantes. Cada unidad está completamente equipada con todo lo que necesitas para sentirte como en casa, incluyendo cocina completa, Wi-Fi gratuito y TV por cable.",
  },
  {
    title: "Estacionamiento Disponible",
    description:
      "Para aquellos que viajan en coche, ofrecemos opciones de estacionamiento seguras y convenientes, eliminando el estrés de buscar un lugar para aparcar.",
  },
  {
    title: "Entorno Familiar y Seguro",
    description:
      "Nuestra ubicación en una zona residencial garantiza un entorno seguro y familiar, perfecto para huéspedes de todas las edades.",
  },
  {
    title: "Fácil Acceso al Transporte Público",
    description:
      "Aunque no estamos en el centro de la ciudad, estamos bien conectados con las principales líneas de transporte público, lo que facilita el acceso a cualquier parte de La Plata.",
  },
  {
    title: "Relación Calidad-Precio",
    description:
      "Ofrecemos tarifas competitivas y un excelente valor por tu dinero, asegurando que recibas una experiencia de alta calidad sin romper el banco.",
  },
  {
    title: "Atmósfera Agradable",
    description:
      "Con un diseño interior acogedor y una atmósfera cálida, nuestros departamentos están pensados para que te sientas relajado y a gusto desde el momento en que entras.",
  },
  {
    title: "Servicio Personalizado",
    description:
      "Nos enorgullece ofrecer atención personalizada para asegurar que tu estancia sea lo más placentera posible. Nuestro personal está siempre dispuesto a ayudarte con cualquier necesidad o consulta que puedas tener.",
  },
]

export function Principal({ isMobile }: PrincipalProps) {
  const video = "/edificioFarfalle/video.start.mp4"
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    // Inicializar AOS una sola vez
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    })

    // Refrescar AOS cuando cambie el tamaño de la ventana
    window.addEventListener("resize", AOS.refresh)

    return () => {
      window.removeEventListener("resize", AOS.refresh)
    }
  }, [])

  const textClass = `text-justify text-black text-opacity-90 px-4 md:px-0 xl:px-8 ${isMobile ? "text-base" : "text-lg"}`

  return (
    <div className="mx-auto w-full h-full md:mt-2 bg-background">
      {/* Sección de Hero con Video */}
      <section
        className={`${isMobile ? "h-[450px]" : "h-[500px]"} relative w-full max-w-screen overflow-hidden max-h-[500px] mb-4`}
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="relative">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            className={`absolute top-[30%] md:top-[35%] text-center w-full hover:bg-slate-950/50 text-white mb-8 whitespace-wrap mx-auto z-10 ${
              isMobile ? "pt-2 text-lg" : "pt-3 text-4xl"
            }`}
          >
            Bienvenidos a <span className="text-orange italic">Edificio Farfalle</span>
            <br />
            tu lugar en la ciudad de La Plata
          </h1>

          <LazyVideo
            src={video}
            poster="/edificioFarfalle/video-poster.jpg"
            className="w-full object-cover object-center h-[600px] max-h-[600px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-almostWhite to-transparent"></div>
      </section>

      <div className="px-3 md:px-28">
        {/* Introducción */}
        <p className={`${textClass} mb-8`}>
          Ofrecemos una experiencia de alojamiento única en la Ciudad de La Plata. Contamos con opciones flexibles y
          convenientes para aquellos que buscan alojamiento a corto plazo. Nuestras unidades están diseñadas para
          brindar comodidad y funcionalidad, ya sea para estancias cortas, o para períodos más prolongados. Nuestros
          departamentos están completamente amueblados y equipados con todas las comodidades necesarias para una estadía
          confortable, buscando brindar calidad y confort en nuestro servicio para que la estadía sea placentera y te
          sientas como en casa.
        </p>

        {/* Sección "¿Por qué elegirnos?" */}
        <SectionTitle title="¿Por qué elegirnos?" ref={(el) => (sectionRefs.current[1] = el)} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {FEATURES.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              isMobile={isMobile}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Sección de Opiniones */}
        <SectionTitle title="Opiniones y Valoraciones" ref={(el) => (sectionRefs.current[2] = el)} />

        <p className={`${textClass} mb-8`}>
          Nos enorgullece ofrecer una experiencia de alojamiento excepcional. No solo lo decimos nosotros, sino que
          nuestros huéspedes también lo confirman. Consulta las valoraciones y opiniones de quienes ya han disfrutado de
          su estancia con nosotros.
        </p>

        <div className="flex flex-col md:flex-row px-4 md:px-0 xl:px-8 gap-6">
          <div className="w-full md:w-1/2 bg-white/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-medium text-black text-start mb-4">Booking</h3>
            <p className={`text-justify text-black text-opacity-90 ${isMobile ? "text-base" : "text-lg"}`}>
              Edificio Farfalle tiene una puntuación destacada en Booking.com. Nuestros huéspedes nos han valorado con
              una calificación promedio de
              <span className="font-bold text-orange"> 9.4/10</span>. Agradecemos a todos nuestros visitantes por sus
              maravillosas reseñas y comentarios que resaltan nuestra hospitalidad, limpieza y excelente ubicación.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-medium text-black text-start mb-4">Airbnb</h3>
            <p className={`text-justify text-black text-opacity-90 ${isMobile ? "text-base" : "text-lg"}`}>
              En Airbnb, nuestros huéspedes han otorgado a Edificio Farfalle una impresionante puntuación de{" "}
              <span className="font-bold text-orange">5/5</span>. Estamos muy contentos de recibir sus valoraciones
              positivas que destacan la comodidad de nuestros departamentos y la calidad del servicio que brindamos.
            </p>
          </div>
        </div>

        {/* <div className="p-6 relative my-10" data-aos="fade-up">
          <RatingCharts />
        </div> */}

        {/* Sección para compartir experiencia */}
        <SectionTitle title="Comparte Tu Experiencia" ref={(el) => (sectionRefs.current[3] = el)} />

        <p className={`${textClass} mb-8`}>
          Si ya te has hospedado con nosotros, nos encantaría escuchar tu opinión. Tu feedback nos ayuda a mejorar y a
          seguir ofreciendo una experiencia de calidad. Puedes dejar tu reseña en:{" "}
          <a
            href="https://www.booking.com/hotel/ar/farfalle.es-ar.html#tab-reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-lato text-orange hover:text-orange-600 underline transition-colors"
          >
            Booking
          </a>{" "}
          y{" "}
          <a
            href="https://es-l.airbnb.com/rooms/54102302/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-lato text-orange hover:text-orange-600 underline transition-colors"
          >
            Airbnb
          </a>
          .
        </p>

        {/* Sección de reserva */}
        {/* <div className="bg-orange/10 p-6 rounded-lg mb-12 md:mb-20" data-aos="fade-up">
          <h3 className="text-xl font-medium text-black mb-4 text-center">Reserva Hoy</h3>
          <p className={`text-center text-black text-opacity-90 ${isMobile ? "text-base" : "text-lg"} mb-4`}>
            Descubre por ti mismo por qué Edificio Farfalle es la elección preferida de tantos viajeros. Reserva hoy y
            disfruta de una experiencia de alojamiento excepcional en La Plata.
          </p>
          <div className="flex justify-center">
            <a
              href="/edificioFarfalle/Reservas"
              className="bg-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            >
              Hacer Reserva
            </a>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

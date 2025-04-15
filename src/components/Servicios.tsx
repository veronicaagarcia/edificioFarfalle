"use client"

import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSquareParking,
  faKitchenSet,
  faBath,
  faVideo,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons"
import WifiRoundedIcon from "@mui/icons-material/WifiRounded"
import BedRoundedIcon from "@mui/icons-material/BedRounded"
import WeekendRoundedIcon from "@mui/icons-material/WeekendRounded"
import DeckRoundedIcon from "@mui/icons-material/DeckRounded"
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded"
import AppsRoundedIcon from "@mui/icons-material/AppsRounded"
import { Footer } from "./comon/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import ImageGallery from "./ImageGaller"

// Definir las categorías de servicios para evitar repetición
const SERVICE_CATEGORIES = [
  {
    id: "parking",
    icon: <FontAwesomeIcon icon={faSquareParking} color="inherit" size="xl" />,
    title: "Estacionamiento",
    items: ["Estacionamiento gratuito dentro del edificio (un auto por departamento)"],
  },
  {
    id: "kitchen",
    icon: <FontAwesomeIcon icon={faKitchenSet} color="inherit" size="xl" />,
    title: "Cocina",
    items: [
      "Horno/ hornalla",
      "Electrodomésticos (pava eléctrica, tostadora, heladera y microondas)",
      "Utensilios de cocina (cubiertos, platos, vasos, ollas)",
      "Elementos de limpieza (Detergente, esponja, virulana, ballerina, trapo de piso, balde)",
      "Cesto de basura",
    ],
  },
  {
    id: "bathroom",
    icon: <FontAwesomeIcon icon={faBath} color="inherit" size="xl" />,
    title: "Baño",
    items: ["Ducha", "Bidet", "Papel higiénico", "Jabón", "Cesto de basura"],
  },
  {
    id: "internet",
    icon: <WifiRoundedIcon color="inherit" />,
    title: "Internet",
    items: ["Wifi gratuito en departamentos"],
  },
  {
    id: "bedroom",
    icon: <BedRoundedIcon color="inherit" />,
    title: "Habitación",
    items: ["Cama matrimonial / + cama individual", "Placard", "Aire acondicionado", "Ropa de cama", "Veladores", "Mesa de luz"],
  },
  {
    id: "living",
    icon: <WeekendRoundedIcon color="inherit" />,
    title: "Living/comedor",
    items: [
      "Sofa cama con carrión (para 2 personas)",
      "Aire acondicionado",
      "TV por cable",
      "Mesa y sillas (para 4/5 personas)",
    ],
  },
  {
    id: "exterior",
    icon: <DeckRoundedIcon color="inherit" />,
    title: "Exteriores",
    items: ["Patio común", "Cocheras"],
  },
  {
    id: "checkin",
    icon: <FontAwesomeIcon icon={faCalendarCheck} color="inherit" size="lg" />,
    title: "Check in",
    items: ["A partir de las 14:00 hs"],
  },
  {
    id: "checkout",
    icon: <FontAwesomeIcon icon={faCalendarCheck} color="inherit" size="lg" />,
    title: "Check Out",
    items: ["10:00 hs"],
  },
  {
    id: "general",
    icon: <AppsRoundedIcon color="inherit" />,
    title: "General",
    items: [
      "Prohibido fumar dentro de los departamentos",
      "Zona fumadores (zonas comunes del edificio)",
      "Calefacción (Termotanque o Calefón)",
      "No se admiten mascotas",
    ],
  },
  {
    id: "security",
    icon: <FontAwesomeIcon icon={faVideo} color="inherit" size="lg" />,
    title: "Seguridad",
    items: ["Cámaras de seguridad en zonas comunes"],
  },
  {
    id: "languages",
    icon: <RecordVoiceOverRoundedIcon color="inherit" />,
    title: "Idiomas",
    items: ["Español", "Inglés"],
  },
]

// Componente para cada categoría de servicio
function ServiceCategory({
  icon,
  title,
  items,
  delay = 0,
}: {
  icon: JSX.Element
  title: string
  items: string[]
  delay?: number
}) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <li className=" font-lato flex justify-center md:justify-start items-center w-full text-orange/80 mt-5 mb-1">
        {icon}
        <p className="pl-2">{title}</p>
      </li>
      <ul className="font-lato text-black text-opacity-90 text-center md:text-start w-full ">
        {items.map((item, index) => (
          <li key={index} className="transition-all duration-300 hover:text-orange/80 text-base">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Servicios() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    })

    return () => {
      // Limpiar AOS al desmontar
    }
  }, [])

  // Dividir las categorías en tres columnas
  const firstColumn = SERVICE_CATEGORIES.slice(0, 3)
  const secondColumn = SERVICE_CATEGORIES.slice(3, 7)
  const thirdColumn = SERVICE_CATEGORIES.slice(7)

  return (
    <section className="w-full h-full flex flex-col font-thin font-serif text-black bg-background pt-12">
      <div className="w-full mx-auto h-fit mb-4 md:mb-16 lg:mb-0 md:rounded-lg bg-transparent">
        {/* Título de la sección */}
        <h2
          className="text-lg md:text-xl mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Nuestros Servicios
        </h2>

        {/* Galería de imágenes */}
        <div data-aos="fade-up" data-aos-delay="200">
          <ImageGallery />
        </div>

        {/* Categorías de servicios */}
        <ul className="container mx-auto mt-4 flex flex-col justify-center sm:flex-row sm:justify-between px-3 md:px-20 lg:px-28 lg:mb-8">
          {/* Primera columna */}
          <div className="w-full h-auto sm:w-1/3 flex flex-col m-auto text-base md:text-lg not-italic text-opacity-90 px-2">
            {firstColumn.map((category, index) => (
              <ServiceCategory
                key={category.id}
                icon={category.icon}
                title={category.title}
                items={category.items}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Segunda columna */}
          <div className="w-full h-auto sm:w-1/3 flex flex-col m-auto text-base md:text-lg not-italic text-opacity-90 px-2">
            {secondColumn.map((category, index) => (
              <ServiceCategory
                key={category.id}
                icon={category.icon}
                title={category.title}
                items={category.items}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Tercera columna */}
          <div className="w-full h-auto sm:w-1/3 flex flex-col m-auto text-base md:text-lg not-italic text-opacity-90 px-2">
            {thirdColumn.map((category, index) => (
              <ServiceCategory
                key={category.id}
                icon={category.icon}
                title={category.title}
                items={category.items}
                delay={index * 100}
              />
            ))}
          </div>
        </ul>
      </div>
      <Footer />
    </section>
  )
}

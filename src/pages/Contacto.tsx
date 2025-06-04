"use client"

import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import { CircularProgress } from "@mui/material"
import { Map } from "../components/comon/Map"
import InstagramIcon from "@mui/icons-material/Instagram"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import { Card } from "@mui/material"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { Footer } from "../components/comon/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

export function Contacto() {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [nombre, setNombre] = useState("")
  const [loading, setLoading] = useState(true)
  const [emailError, setEmailError] = useState("")
  const [messageError, setMessageError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    })

    // Simular carga del mapa
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps?q=-34.94458185270848,-57.963126869810374")
  }

interface NombreChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleNombreChange = (event: NombreChangeEvent): void => {
	setNombre(event.target.value)
}

interface EmailChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleEmailChange = (event: EmailChangeEvent): void => {
	setEmail(event.target.value)
	if (emailError) validateEmail(event.target.value)
}

interface MessageChangeEvent extends React.ChangeEvent<HTMLTextAreaElement> {}

const handleMessageChange = (event: MessageChangeEvent): void => {
	setMessage(event.target.value)
	if (messageError && event.target.value.trim() !== "") {
		setMessageError("")
	}
}

  // Función para validar el formato del correo electrónico
const validateEmail = (email: string): boolean => {
	const re: RegExp = /\S+@\S+\.\S+/
	const isValid: boolean = re.test(email)
	setEmailError(isValid ? "" : "Por favor ingrese un correo electrónico válido")
	return isValid
}

  const validateForm = () => {
    let isValid = true

    if (!validateEmail(email)) {
      isValid = false
    }

    if (message.trim() === "") {
      setMessageError("Por favor ingrese su mensaje")
      isValid = false
    } else {
      setMessageError("")
    }

    return isValid
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_ow5tu5w",
        "template_p80tkf5",
        {
          from_name: email,
          to_email: "edificiofarfalle@gmail.com",
          nombre: nombre,
          message: message,
          email: email,
        },
        "0DIH_YtJhCdbknU0z",
      )

      // Resetear el formulario
      setMessage("")
      setEmail("")
      setNombre("")

      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "#fa9336",
        title: "Consulta enviada con éxito",
        text: "A la brevedad nos estaremos comunicando con usted.",
        customClass: {
          confirmButton: "bg-orange hover:bg-orangeDark border-2 text-lg py-2 px-4 rounded-xl text-white",
        },
        buttonsStyling: false,
      })
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error)

      Swal.fire({
        icon: "error",
        iconColor: "#865d95",
        title: "Error al enviar su consulta",
        text: "A la brevedad lo estaremos solucionando, disculpe las molestias.",
        customClass: {
          confirmButton: "bg-orange hover:bg-orangeDark border-2 text-lg py-2 px-4 rounded-xl text-white",
        },
        buttonsStyling: false,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Componente para botones de redes sociales
  const SocialButton: React.FC<{ icon: React.ReactNode; link?: string; action?: () => void; ariaLabel: string }> = ({ icon, link, action, ariaLabel }) => {
    const renderButton = () => (
      <Card
        style={{
          backgroundColor: "#0f172a",
          opacity: 0.85,
          transition: "background-color 0.3s",
        }}
        className="hover:shadow-md hover:shadow-slate-900 hover:scale-105 opacity-95 rounded-none md:rounded-full w-fit p-1 md:p-2"
      >
        <div className="items-center flex justify-start">{icon}</div>
      </Card>
    )

    if (link) {
      return (
        <Link to={link} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
          {renderButton()}
        </Link>
      )
    }

    return (
      <button onClick={action} className="flex justify-start items-center" aria-label={ariaLabel}>
        {renderButton()}
      </button>
    )
  }

  // Datos de contacto
  const CONTACT_BUTTONS = [
    {
      id: "whatsapp",
      icon: <WhatsAppIcon color="warning" fontSize="medium" />,
      link: "https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.",
      ariaLabel: "Contactar por WhatsApp",
    },
    {
      id: "instagram",
      icon: <InstagramIcon color="warning" fontSize="medium" />,
      link: "https://www.instagram.com/edificiofarfalle/",
      ariaLabel: "Visitar Instagram",
    },
    {
      id: "location",
      icon: <LocationOnIcon color="warning" fontSize="medium" />,
      action: openGoogleMaps,
      ariaLabel: "Ver ubicación en Google Maps",
    },
    {
      id: "email",
      icon: <EmailOutlinedIcon fontSize="medium" color="warning" />,
      link: "mailto:edificiofarfalle@gmail.com",
      ariaLabel: "Enviar correo electrónico",
    },
  ]

  return (
    <section className="pt-12 h-full w-full m-auto bg-background">
      <section className="container mx-auto mb-12 md:mb-20 px-3 md:px-20 lg:px-28">
        <h2
          className="text-base xl:text-lg mt-4 md:mt-8 font-lato font-semibold uppercase text-orange text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contáctanos
        </h2>

        <p
          className="text-justify text-black text-opacity-90 mb-4 px-4 md:px-0 xl:px-8 pt-2 md:pt-3 text-base xl:text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          En <span className="text-orange italic">Edificio Farfalle</span>, estamos siempre a su disposición para
          responder cualquier consulta o necesidad que pueda tener. </p>
          <p className="text-justify text-black text-opacity-90 mb-8 px-4 md:px-0 xl:px-8 pt-2 md:pt-3 text-base xl:text-lg"
          data-aos="fade-up"
          data-aos-delay="100">Puede contactarnos a través de los siguientes
          medios:
        </p>

        <div
  className="flex flex-col md:flex-row justify-center items-start md:items-stretch w-full max-w-6xl mx-auto p-4 md:p-8 gap-6 bg-transparent rounded-xl mb-8"
  data-aos="fade-up"
  data-aos-delay="200"
>
  {/* Formulario de contacto */}
  <Card
    style={{
      backgroundColor: "#0f172a",
      opacity: 0.85,
      transition: "background-color 0.3s",
    }}
    className="w-full md:w-2/3 xl:w-3/4 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <form className="w-full flex flex-col gap-4">
      <input
        className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
        id="nombre"
        type="text"
        value={nombre}
        onChange={handleNombreChange}
        placeholder="Nombre"
        aria-label="Nombre"
        disabled={isSubmitting}
      />

      <textarea
        className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none text-sm"
        id="message"
        value={message}
        onChange={handleMessageChange}
        placeholder="Envía tu consulta aquí..."
        aria-label="Mensaje"
        rows={4}
        disabled={isSubmitting}
      />
      {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}

      <input
        className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Correo electrónico"
        aria-label="Correo electrónico"
        disabled={isSubmitting}
      />
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      <button
        type="button"
        onClick={handleSubmit}
        className="group relative inline-flex h-10 items-center justify-center rounded-md bg-orange hover:bg-nav px-6 text-white font-medium transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        disabled={isSubmitting}
      >
        <span className="relative text-sm font-lato flex items-center">
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </>
          ) : (
            "Enviar"
          )}
        </span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
      </button>
    </form>
  </Card>

  {/* Botones de redes sociales */}
  <div className="w-full md:w-1/3 xl:w-1/4 flex flex-row md:flex-col justify-center md:justify-around items-center gap-4 p-4 md:p-0">
    {CONTACT_BUTTONS.map((button) => (
      <SocialButton
        key={button.id}
        icon={button.icon}
        link={button.link}
        action={button.id === "location" ? openGoogleMaps : undefined}
        ariaLabel={button.ariaLabel}
      />
    ))}
  </div>
</div>


        <h3
          className="text-base xl:text-lg mt-4 font-lato font-semibold uppercase text-orange text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Nuestra Ubicación
        </h3>

        <p
          className="text-justify text-black text-opacity-90 mb-4 px-4 md:px-0 xl:px-8 text-base xl:text-lg mt-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Nuestro edificio ofrece alojamiento confortable en el corazón de La Plata, ideal tanto para turistas como para
          viajeros de negocios. </p>
          <p className="text-justify text-black text-opacity-90 mb-12 px-4 md:px-0 xl:px-8 text-base xl:text-lg mt-4"
          data-aos="fade-up"
          data-aos-delay="100">Nuestra ubicación estratégica te permite acceder fácilmente a los principales puntos de
          interés de la ciudad:
        </p>

        <div
          className="h-fit w-full text-black mx-auto flex flex-col items-center rounded-xl mt-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col md:flex-row justify-between mx-auto items-center w-full h-fit">
            <div className="w-11/12 md:w-1/2 rounded-lg overflow-hidden">
              {loading ? (
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <CircularProgress color="inherit" />
                </div>
              ) : (
                <Map />
              )}
            </div>

            <div className="text-[12px] w-full md:w-1/2 p-4 text-black text-opacity-90 mb-4 text-justify">
              <p className="font-medium mb-4">
                Dirección: <span className="text-orange">1770 Calle 62, 1900 La Plata, Argentina</span>
              </p>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange mr-2">▪</span>
                  <span>
                    A 5,1 km del Estadio Ciudad de La Plata, donde puedes disfrutar de eventos deportivos y conciertos.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-orange mr-2">▪</span>
                  <span>
                    A 5,9 km del Museo de la Plata, un destino imprescindible para los amantes de la ciencia y la
                    historia.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-orange mr-2">▪</span>
                  <span>A 3,7 km de la majestuosa Catedral de La Plata, un ícono arquitectónico y religioso.</span>
                </li>

                <li className="flex items-start">
                  <span className="text-orange mr-2">▪</span>
                  <span>
                    Hipódromo Roberto José Mouras: Situado a 31 km, ideal para los amantes de las carreras de caballos.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-orange mr-2">▪</span>
                  <span>
                    Centro Comercial Paseo Rocha: A solo 10 minutos en coche, donde puedes disfrutar de tiendas,
                    restaurantes y entretenimiento.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-orange mr-2">▪</span>
                  <span>
                    El Aeropuerto Jorge Newbery es el más cercano, a 66 km de El Farfalle. Ofrecemos servicios de
                    traslado desde y hacia el aeropuerto bajo petición para tu comodidad.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  )
}

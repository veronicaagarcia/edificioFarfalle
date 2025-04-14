"use client"

import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import { CircularProgress } from "@mui/material"
import { Map } from "./comon/Map"
import InstagramIcon from "@mui/icons-material/Instagram"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import { Card } from "@mui/material"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { Footer } from "./comon/Footer"
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
          backgroundColor: "#fefcf9",
          transition: "background-color 0.3s",
        }}
        className="hover:shadow-md hover:shadow-slate-900 hover:scale-105 rounded-none md:rounded-full w-fit p-2 md:p-3"
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
      icon: <WhatsAppIcon color="success" fontSize="large" />,
      link: "https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.",
      ariaLabel: "Contactar por WhatsApp",
    },
    {
      id: "instagram",
      icon: <InstagramIcon color="error" fontSize="large" />,
      link: "https://www.instagram.com/edificiofarfalle/",
      ariaLabel: "Visitar Instagram",
    },
    {
      id: "location",
      icon: <LocationOnIcon color="info" fontSize="large" />,
      action: openGoogleMaps,
      ariaLabel: "Ver ubicación en Google Maps",
    },
    {
      id: "email",
      icon: <EmailOutlinedIcon fontSize="large" color="secondary" />,
      link: "mailto:edificiofarfalle@gmail.com",
      ariaLabel: "Enviar correo electrónico",
    },
  ]

  return (
    <section>
      <section className="pt-10 w-full h-full px-3 md:px-28 bg-background">
        <h2
          className="text-lg md:text-xl mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contáctanos
        </h2>

        <p
          className="text-justify text-black text-opacity-90 mb-8 px-4 md:px-0 xl:px-8 pt-2 md:pt-3 text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          En <span className="text-orange italic">Edificio Farfalle</span>, estamos siempre a su disposición para
          responder cualquier consulta o necesidad que pueda tener. Puede contactarnos a través de los siguientes
          medios:
        </p>

        <div
          className="flex flex-col md:flex-row justify-center md:justify-evenly self-center m-auto items-center w-full h-fit relative mb-8 md:mb-20 py-6 xl:py-10 bg-[#0f172a] rounded-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Formulario de contacto */}
          <Card
            style={{
              backgroundColor: "#fefcf9",
              transition: "background-color 0.3s",
            }}
            className="py-1 px-2 h-fit rounded-lg w-full mx-4 md:mx-0 xl:mx-8 md:w-1/2 hover:shadow-lg"
          >
            <form className="p-4 mx-auto w-full h-80 flex flex-col justify-evenly">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                value={nombre}
                onChange={handleNombreChange}
                placeholder="Nombre"
                aria-label="Nombre"
                disabled={isSubmitting}
              />

              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
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
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="group relative inline-flex mb-4 h-10 items-center justify-center overflow-hidden rounded-md bg-nav px-4 font-medium text-neutral-200 transition hover:bg-orange hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <span className="relative text-base font-lato flex items-center">
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
          <div className="w-full md:w-fit h-fit md:h-72 flex md:flex-col justify-around mt-4 md:mt-0 gap-4">
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
          className="text-lg md:text-xl mt-4 font-mono font-medium uppercase text-orange/80 text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Nuestra Ubicación
        </h3>

        <p
          className="text-justify text-black text-opacity-90 mb-12 px-4 md:px-0 xl:px-8 text-base md:text-lg mt-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          El Farfalle ofrece alojamiento confortable en el corazón de La Plata, ideal tanto para turistas como para
          viajeros de negocios. Nuestra ubicación estratégica te permite acceder fácilmente a los principales puntos de
          interés de la ciudad:
        </p>

        <div
          className="h-fit w-full text-black mx-auto flex flex-col items-center rounded-xl mt-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col md:flex-row justify-between mx-auto items-center w-full h-fit">
            <div className="w-11/12 md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              {loading ? (
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <CircularProgress color="inherit" />
                </div>
              ) : (
                <Map />
              )}
            </div>

            <div className="text-base w-full md:w-1/2 p-4 text-black text-opacity-90 mb-4 text-justify">
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

// import { useEffect, useRef, useState } from 'react'
// import emailjs from 'emailjs-com'
// import Swal from 'sweetalert2'
// import { Footer } from './comon/Footer'
// import AOS from 'aos'
// import 'aos/dist/aos.css';

// export function Reservas() {

// 	const animatedRefs = useRef<(HTMLHeadingElement | null)[]>([])
	
// 	useEffect(() => {
// 		AOS.init({
// 		duration: 1000,
// 		easing: 'ease-in-out',
// 		once: false,
// 		offset: 100,
// 		})
	
// 		const observer = new IntersectionObserver(
// 		(entries) => {
// 			entries.forEach((entry) => {
// 			if (entry.isIntersecting) {
// 				entry.target.classList.add('aos-animate')
// 			} else {
// 				entry.target.classList.remove('aos-animate')
// 			}
// 			})
// 		},
// 		{
// 			root: null,
// 			rootMargin: '0px',
// 			threshold: 0.1
// 		}
// 		)
// 		animatedRefs.current.forEach((ref) => {
// 		if (ref) {
// 			observer.observe(ref)
// 		}
// 		})
	
// 		return () => {
// 		animatedRefs.current.forEach((ref) => {
// 			if (ref) {
// 			observer.unobserve(ref)
// 			}
// 		})
// 		}
// 	}, [])

// 	const [checkIn, setCheckIn] = useState('')
// 	const [checkOut, setCheckOut] = useState('')
// 	const [adultos, setAdultos] = useState('')
// 	const [ninos, setNinos] = useState('')
// 	const [departamento, setDepartamento] = useState(
// 		'No seleccionó ningún departamento en particular'
// 	)
// 	const [email, setEmail] = useState('')
// 	const [formError, setFormError] = useState('')
// 	const [minCheckOutDate, setMinCheckOutDate] = useState('')
// 	const today = new Date()
// 	const year = today.getFullYear()
// 	let month = (today.getMonth() + 1).toString() // Convertir a string
// 	let day = today.getDate().toString() // Convertir a string

// 	// Formatear el día y el mes para que siempre tengan 2 dígitos
// 	if (month.length === 1) {
// 		month = `0${month}`
// 	}
// 	if (day.length === 1) {
// 		day = `0${day}`
// 	}

// 	// Construir la fecha mínima seleccionable en el formato YYYY-MM-DD
// 	const minDate = `${year}-${month}-${day}`

// 	// Usar esta fecha mínima en los campos de fecha
// 	const [minCheckInDate] = useState(minDate)
// 	const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		const selectedDate = new Date(event.target.value)
// 		const currentDate = new Date()

// 		// Verificar si la fecha seleccionada es anterior al día actual
// 		if (selectedDate < currentDate) {
// 			// Restablecer la fecha de check-in a la fecha actual
// 			setCheckIn(currentDate.toISOString().split('T')[0])
// 			setFormError('La fecha de check-in no puede ser anterior al día actual')
// 		} else {
// 			setCheckIn(event.target.value)
// 			setFormError('')
// 			// Actualizar la fecha mínima seleccionable en el campo de check-out
// 			const nextDay = new Date(selectedDate)
// 			nextDay.setDate(nextDay.getDate() + 1)
// 			const minDate = nextDay.toISOString().split('T')[0]
// 			setMinCheckOutDate(minDate)
// 			// Establecer la fecha inicial del campo de check-out como la fecha seleccionada en el campo de check-in
// 			setCheckOut(selectedDate.toISOString().split('T')[0])
// 		}
// 	}

// 	// Función para establecer la fecha actual en el campo de check-in al cargar la página
// 	const setTodayAsCheckIn = () => {
// 		const currentDate = new Date()
// 		setCheckIn(currentDate.toISOString().split('T')[0])
// 		// Actualizar la fecha mínima seleccionable en el campo de check-out
// 		const nextDay = new Date(currentDate)
// 		nextDay.setDate(nextDay.getDate() + 1)
// 		const minDate = nextDay.toISOString().split('T')[0]
// 		setMinCheckOutDate(minDate)
// 	}

// 	// Llamar a la función para establecer la fecha actual al cargar la página
// 	useEffect(() => {
// 		setTodayAsCheckIn()
// 	}, [])

// 	const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setCheckOut(event.target.value)
// 	}

// 	const handleAdultosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setAdultos(event.target.value)
// 	}

// 	const handleNinosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setNinos(event.target.value)
// 	}

// 	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setEmail(event.target.value)
// 	}

// 	// Función para validar el formulario
// 	const validateForm = () => {
// 		if (!validateEmail(email)) {
// 			setFormError('Por favor ingrese un correo electrónico válido')
// 			return false
// 		}

// 		if (!checkIn || !checkOut) {
// 			setFormError(
// 				'Por favor seleccione tanto la fecha de check-in como la de check-out'
// 			)
// 			return false
// 		}

// 		if (new Date(checkOut) <= new Date(checkIn)) {
// 			setFormError(
// 				'La fecha de check-out debe ser posterior a la fecha de check-in'
// 			)
// 			return false
// 		}

// 		if (!adultos) {
// 			setFormError('Por favor seleccione la cantidad de adultos')
// 			return false
// 		}

// 		setFormError('')
// 		return true
// 	}

// 	// Función para validar el formato del correo electrónico
// 	const validateEmail = (email: string) => {
// 		const re = /\S+@\S+\.\S+/
// 		return re.test(email)
// 	}
// 	const handleConsultarDisponibilidad = async () => {
// 		// Validar el formulario antes de enviar el correo electrónico
// 		if (!validateForm()) {
// 			return
// 		}

// 		// Enviar correo electrónico usando EmailJS
// 		try {
// 			await emailjs.send(
// 				'service_ow5tu5w', // Reemplaza 'YOUR_SERVICE_ID' con tu Service ID de EmailJS
// 				'template_6c857kn', // Reemplaza 'YOUR_TEMPLATE_ID' con tu Template ID de EmailJS
// 				{
// 					from_name: email,
// 					to_email: 'edificiofarfalle@gmail.com', // Cambia esto por la dirección de correo electrónico a la que deseas enviar el mensaje
// 					checkIn: checkIn,
// 					checkOut: checkOut,
// 					adultos: adultos,
// 					ninos: ninos,
// 					departamento: departamento,
// 					email: email,
// 				},
// 				'0DIH_YtJhCdbknU0z' // Reemplaza 'YOUR_USER_ID' con tu User ID (que ahora seria publick_key) de EmailJS
// 			)
// 			// Mostrar mensaje de éxito al usuario usando Swal.fire
// 			Swal.fire({
// 				icon: 'success',
// 				iconColor: '#fa9336',
// 				title: 'Consulta enviada con éxito',
// 				text: 'A la brevedad nos estaremos comunicando con usted.',
// 				customClass: {
// 					confirmButton:
// 						'bg-orange hover:bg-orangeDark border-2 text-lg py-2 px-4 rounded-xl text-white',
// 				},
// 				buttonsStyling: false,
// 			})
// 		} catch (error) {
// 			console.error('Error al enviar el correo electrónico:', error)
// 			// Mostrar mensaje de error al usuario usando Swal.fire
// 			Swal.fire({
// 				icon: 'error',
// 				iconColor: '#865d95',
// 				title: 'Error al enviar su consulta',
// 				text: 'A la brevedad lo estaremos solucionando, disculpe las molestias e inténtelo de nuevo más tarde.',
// 				customClass: {
// 					confirmButton:
// 						'bg-orange hover:bg-orangeDark border-2 text-lg py-2 px-4 rounded-xl text-white',
// 				},
// 				buttonsStyling: false,
// 			})
// 		}
// 	}
// 	return (
// 		<section className='h-full w-full pt-12 bg-background'>
// 			<h2 ref={(el) => (animatedRefs.current[0] = el)}
//           data-aos="fade-up" 
//           data-aos-duration="1000"
//           data-aos-offset="200"  className='text-lg md:text-xl mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-8'>
// 				Reservas
// 			</h2>
// 			<p className='text-justify text-black text-opacity-90 text-base md:text-lg px-3 md:px-28 mb-8 md:mb-20'>
// 				¡Gracias por elegir
// 				<span className='text-orange italic'> Edificio Farfalle</span> para tu
// 				estancia en La Plata! Para consultar la disponibilidad de nuestros
// 				departamentos y realizar una reserva, por favor completa el siguiente
// 				formulario.
// 			</p>
// 			<section
// 				className='flex flex-col md:flex-row mb-4 md:mb-12 py-10 md:py-20 md:p-20 xl:py-28 px-3 md:px-28 bg-slate-950/90'
// 				// style={{
// 				// 	backgroundImage:
// 				// 		'url("https://images.unsplash.com/photo-1620503292890-c597f62cce8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
// 				// 	backgroundSize: 'cover',
// 				// 	backgroundPosition: 'center',
// 				// }}
// 			>
// 				<div className='container mx-auto w-11/12 md:w-[60%] lg:w-1/2 mb-8 md:mb-0'>
// 					<h3 className='text-lg md:text-xl font-bold text-white text-center mb-4'>
// 						¿Cómo Funciona?
// 					</h3>
// 					<p className='text-justify text-white text-opacity-90 pb-3 pt-2 text-base md:pt-3 md:text-lg'>
// 						<span className='text-white'>1. </span>
// 						<span className='text-orange font-semibold'>
// 							Selecciona tus Fechas:{' '}
// 						</span>
// 						Elige las fechas de entrada y salida que deseas para tu estancia.
// 					</p>
// 					<p className='text-justify text-white text-opacity-90 pb-3 pt-2 text-base md:pt-3 md:text-lg'>
// 						<span className='text-white'>2. </span>
// 						<span className=' text-orange font-semibold'>
// 							Indica el Número de Personas:{' '}
// 						</span>
// 						Especifica cuántas personas se alojarán con nosotros.
// 					</p>
// 					<p className='text-justify text-white text-opacity-90 pb-3 pt-2 text-base md:pt-3 md:text-lg'>
// 						<span className='text-white'>3. </span>
// 						<span className=' text-orange font-semibold'>
// 							Elige tu Departamento:{' '}
// 						</span>
// 						Selecciona el departamento en el que estás interesado.
// 					</p>
// 					<p className='text-justify text-white text-opacity-90 pb-3 pt-2 text-base md:pt-3 md:text-lg'>
// 						<span className='text-white'>4. </span>
// 						<span className=' text-orange font-semibold'>
// 							Envía tu Solicitud:{' '}
// 						</span>
// 						Haz clic en el botón "Consultar Disponibilidad".
// 					</p>
// 					<p className='text-justify text-white text-opacity-90 pb-3 pt-2 text-base md:pt-3 md:text-lg'>
// 						<span className='text-white'>5. </span>
// 						<span className=' text-orange font-semibold'>
// 							Respuesta de Disponibilidad:{' '}
// 						</span>
// 						Una vez que envíes el formulario, nuestro equipo revisará la
// 						disponibilidad de los departamentos en las fechas solicitadas. Te
// 						responderemos a la brevedad para confirmar si hay disponibilidad y
// 						proporcionarte los siguientes pasos para completar tu reserva.
// 					</p>
// 				</div>
// 				<section
// 					className='w-11/12 md:w-[40%] lg:w-1/2 h-fit relative m-auto md:-mr-12 xl:m-auto'
// 					id='reservas'
// 				>
// 					<div className='max-w-lg mx-auto'>
// 						<form className='bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 hover:shadow-2xl  border-black'>
// 							<div className='mb-4 flex items-center justify-between'>
// 								<div className='w-1/3'>
// 									<label
// 										className='text-gray-700 text-xs lg:text-base font-bold mb-2'
// 										htmlFor='check-in'
// 									>
// 										Entrada
// 									</label>
// 									<input
// 										className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
// 										id='check-in'
// 										type='date'
// 										value={checkIn}
// 										onChange={handleCheckInChange}
// 										min={minCheckInDate} // Establece la fecha mínima seleccionable como el día actual
// 									/>
// 								</div>
// 								<div className='w-1/3'>
// 									<label
// 										className='text-gray-700 text-xs lg:text-base font-bold mb-2'
// 										htmlFor='check-out'
// 									>
// 										Salida
// 									</label>
// 									<input
// 										className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
// 										id='check-out'
// 										type='date'
// 										min={minCheckOutDate} // Utiliza el estado 'minCheckOutDate' como valor para el atributo 'min'
// 										value={checkOut}
// 										onChange={handleCheckOutChange}
// 									/>
// 								</div>
// 							</div>

// 							<div className='mb-4 flex items-center justify-between'>
// 								<div className='w-1/3'>
// 									<label
// 										className='text-gray-700 text-xs lg:text-base font-bold mb-2'
// 										htmlFor='adults'
// 									>
// 										Adultos
// 									</label>
// 									<input
// 										className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
// 										id='adults'
// 										type='number'
// 										min='1'
// 										max='5'
// 										inputMode='numeric'
// 										value={adultos}
// 										onChange={handleAdultosChange}
// 									/>
// 								</div>
// 								<div className='w-1/3'>
// 									<label
// 										className='text-gray-700 text-xs lg:text-base font-bold mb-2'
// 										htmlFor='children'
// 									>
// 										Niños
// 									</label>
// 									<input
// 										className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
// 										id='children'
// 										type='number'
// 										min='0'
// 										max='4'
// 										inputMode='numeric'
// 										value={ninos}
// 										onChange={handleNinosChange}
// 									/>
// 								</div>
// 							</div>
// 							<div className='mb-4'>
// 								<label
// 									className='text-gray-700 text-xs lg:text-base font-bold mb-2'
// 									htmlFor='departamento'
// 								>
// 									Departamento
// 								</label>
// 								<div className='relative inline-block w-full'>
// 									<select
// 										className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer bg-white'
// 										id='departamento'
// 										value={departamento}
// 										onChange={(e) => setDepartamento(e.target.value)}
// 									>
// 										<option value='todos'>Sin preferencias</option>
// 										<option value='Pb-A'>Planta Baja A</option>
// 										<option value='Pb-B'>Planta Baja B</option>
// 										<option value='1-A'>Primero A</option>
// 										<option value='1-B'>Primero B</option>
// 										<option value='2-B'>Segundo B</option>
// 									</select>
// 									<div className='pointer-events-none absolute inset-y-0 right-0 flex text-xs items-center px-2 text-gray-600'>
// 										▼
// 									</div>
// 								</div>
// 							</div>

// 							<div className='mb-4'>
// 								<label
// 									className='text-gray-700 text-xs lg:text-base font-bold mb-2'
// 									htmlFor='email'
// 								>
// 									Correo Electrónico
// 								</label>
// 								<input
// 									className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
// 									id='email'
// 									type='email'
// 									value={email}
// 									onChange={handleEmailChange}
// 								/>
// 							</div>
// 							{formError && (
// 								<p className='text-red-900 text-xs mb-4'>{formError}</p>
// 							)}
// 							<div className='flex items-center justify-center'>
// 								<button
// 									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange md:bg-nav px-4 font-medium text-white transition hover:bg-orange hover:scale-110'
// 									type='button'
// 									onClick={handleConsultarDisponibilidad}
// 								>
// 									<span className='text-base font-lato'>
// 										Consultar disponibilidad
// 									</span>
// 									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
// 										<div className='relative h-full w-8 bg-white/20'></div>
// 									</div>
// 								</button>
// 							</div>
// 						</form>
// 					</div>
// 				</section>
// 			</section>
// 			<p className='text-black text-opacity-90 text-base text-center md:text-lg px-3 md:px-28 my-8 md:my-20'>
// 				Nos aseguraremos de que tu estancia en Edificio Farfalle sea cómoda y
// 				placentera.
// 				<span className='text-orange'>
// 					{' '}
// 					¡Esperamos darte la bienvenida pronto!
// 				</span>
// 			</p>
// 			<Footer />
// 		</section>
// 	)
// }

"use client"

import { useEffect, useState } from "react"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import { Footer } from "../components/comon/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

export function Reservas() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [adultos, setAdultos] = useState("")
  const [ninos, setNinos] = useState("")
  const [departamento, setDepartamento] = useState("No seleccionó ningún departamento en particular")
  const [email, setEmail] = useState("")
  const [formError, setFormError] = useState("")
  const [minCheckOutDate, setMinCheckOutDate] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    })

    // Desactivar AOS en dispositivos móviles para evitar problemas
    if (window.innerWidth < 768) {
      AOS.init({ disable: true })
    }

    // Establecer la fecha actual en el campo de check-in al cargar la página
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split("T")[0]
    setCheckIn(formattedDate)

    // Actualizar la fecha mínima seleccionable en el campo de check-out
    const nextDay = new Date(currentDate)
    nextDay.setDate(nextDay.getDate() + 1)
    const minDate = nextDay.toISOString().split("T")[0]
    setMinCheckOutDate(minDate)
    setCheckOut(minDate)
  }, [])

interface CheckInChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleCheckInChange = (event: CheckInChangeEvent): void => {
	const selectedDate = new Date(event.target.value)
	const currentDate = new Date()

	// Verificar si la fecha seleccionada es anterior al día actual
	if (selectedDate < currentDate) {
		// Restablecer la fecha de check-in a la fecha actual
		setCheckIn(currentDate.toISOString().split("T")[0])
		setFormError("La fecha de check-in no puede ser anterior al día actual")
	} else {
		setCheckIn(event.target.value)
		setFormError("")

		// Actualizar la fecha mínima seleccionable en el campo de check-out
		const nextDay = new Date(selectedDate)
		nextDay.setDate(nextDay.getDate() + 1)
		const minDate = nextDay.toISOString().split("T")[0]
		setMinCheckOutDate(minDate)

		// Si la fecha de check-out es anterior a la nueva fecha mínima, actualizarla
		if (new Date(checkOut) <= selectedDate) {
			setCheckOut(minDate)
		}
	}
}

interface CheckOutChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleCheckOutChange = (event: CheckOutChangeEvent): void => {
	setCheckOut(event.target.value)
}

interface AdultosChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleAdultosChange = (event: AdultosChangeEvent): void => {
	setAdultos(event.target.value)
}

interface NinosChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleNinosChange = (event: NinosChangeEvent): void => {
	setNinos(event.target.value)
}

interface EmailChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleEmailChange = (event: EmailChangeEvent): void => {
	setEmail(event.target.value)

	// Si hay un error de email, validar mientras el usuario escribe
	if (formError.includes("correo electrónico")) {
		validateEmail(event.target.value)
	}
}

  // Función para validar el formato del correo electrónico
interface ValidateEmailFunction {
	(email: string): boolean
}

const validateEmail: ValidateEmailFunction = (email) => {
	const re = /\S+@\S+\.\S+/
	return re.test(email)
}

  // Función para validar el formulario
  const validateForm = () => {
    if (!validateEmail(email)) {
      setFormError("Por favor ingrese un correo electrónico válido")
      return false
    }

    if (!checkIn || !checkOut) {
      setFormError("Por favor seleccione tanto la fecha de check-in como la de check-out")
      return false
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setFormError("La fecha de check-out debe ser posterior a la fecha de check-in")
      return false
    }

    if (!adultos) {
      setFormError("Por favor seleccione la cantidad de adultos")
      return false
    }

    setFormError("")
    return true
  }

  const handleConsultarDisponibilidad = async () => {
    // Validar el formulario antes de enviar el correo electrónico
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_ow5tu5w",
        "template_6c857kn",
        {
          from_name: email,
          to_email: "edificiofarfalle@gmail.com",
          checkIn: checkIn,
          checkOut: checkOut,
          adultos: adultos,
          ninos: ninos,
          departamento: departamento,
          email: email,
        },
        "0DIH_YtJhCdbknU0z",
      )

      // Resetear el formulario
      setNinos("")
      setAdultos("")
      setEmail("")
      setDepartamento("No seleccionó ningún departamento en particular")

      // Actualizar fechas
      const currentDate = new Date()
      setCheckIn(currentDate.toISOString().split("T")[0])
      const nextDay = new Date(currentDate)
      nextDay.setDate(nextDay.getDate() + 1)
      setCheckOut(nextDay.toISOString().split("T")[0])

      Swal.fire({
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
        text: "A la brevedad lo estaremos solucionando, disculpe las molestias e inténtelo de nuevo más tarde.",
        customClass: {
          confirmButton: "bg-orange hover:bg-orangeDark border-2 text-lg py-2 px-4 rounded-xl text-white",
        },
        buttonsStyling: false,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="h-full w-full pt-12 bg-background">
      <h2
        className="text-base xl:text-lg mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Reservas
      </h2>

      <p
        className="text-justify text-black text-opacity-90 text-base xl:text-lg px-6 md:px-28 mb-8 md:mb-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        ¡Gracias por elegir
        <span className="text-orange italic"> Edificio Farfalle</span> para tu estancia en La Plata! Para consultar la
        disponibilidad de nuestros departamentos y realizar una reserva, por favor completa el siguiente formulario.
      </p>

      <section
        className="flex flex-col md:flex-row mb-4 md:mb-12 py-10 md:py-20 md:p-20 xl:py-28 px-3 md:px-28 bg-slate-950/85"
      >
        <div className="container mx-auto w-11/12 md:w-[50%] lg:w-[45%] mb-8 md:mb-0">
          <h3 className="text-base xl:text-lg font-semibold text-white text-center mb-4">¿Cómo Funciona?</h3>

          <div className="space-y-4 text-base xl:text-lg">
            <p className="text-justify text-white text-opacity-90 pb-3 pt-2 md:pt-3"  data-aos="fade-up"
        data-aos-delay="100">
              <span className="text-white">1. </span>
              <span className="text-orange font-medium">Selecciona tus Fechas: </span>
              Elige las fechas de entrada y salida que deseas para tu estancia.
            </p>

            <p className="text-justify text-white text-opacity-90 pb-3 pt-2 md:pt-3"  data-aos="fade-up"
        data-aos-delay="100">
              <span className="text-white">2. </span>
              <span className="text-orange font-medium">Indica el Número de Personas: </span>
              Especifica cuántas personas se alojarán con nosotros.
            </p>

            <p className="text-justify text-white text-opacity-90 pb-3 pt-2 md:pt-3"  data-aos="fade-up"
        data-aos-delay="100">
              <span className="text-white">3. </span>
              <span className="text-orange font-medium">Elige tu Departamento: </span>
              Selecciona el departamento en el que estás interesado.
            </p>

            <p className="text-justify text-white text-opacity-90 pb-3 pt-2 md:pt-3"  data-aos="fade-up"
        data-aos-delay="100">
              <span className="text-white">4. </span>
              <span className="text-orange font-medium">Envía tu Solicitud: </span>
              Haz clic en el botón "Consultar Disponibilidad".
            </p>

            <p className="text-justify text-white text-opacity-90 pb-3 pt-2 md:pt-3"  data-aos="fade-up"
        data-aos-delay="100">
              <span className="text-white">5. </span>
              <span className="text-orange font-medium">Respuesta de Disponibilidad: </span>
              Una vez que envíes el formulario, nuestro equipo revisará la disponibilidad de los departamentos en las
              fechas solicitadas. Te responderemos a la brevedad para confirmar si hay disponibilidad y proporcionarte
              los siguientes pasos para completar tu reserva.
            </p>
          </div>
        </div>

        <section className="w-11/12 md:w-[50%] lg:w-1/2 h-fit relative m-auto md:-mr-12 xl:m-auto" id="reservas">
          <div className="max-w-lg mx-auto">
            <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 hover:shadow-2xl border-black">
              <div className="mb-4 flex items-center justify-between">
                <div className="w-1/3">
                  <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="check-in">
                    Entrada
                  </label>
                  <input
                    className="appearance-none border border-slate-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="check-in"
                    type="date"
                    value={checkIn}
                    onChange={handleCheckInChange}
                    min={new Date().toISOString().split("T")[0]}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="w-1/3">
                  <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="check-out">
                    Salida
                  </label>
                  <input
                    className="appearance-none border border-slate-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="check-out"
                    type="date"
                    min={minCheckOutDate}
                    value={checkOut}
                    onChange={handleCheckOutChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div className="w-1/3">
                  <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="adults">
                    Adultos
                  </label>
                  <input
                    className="appearance-none border border-slate-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="adults"
                    type="number"
                    min="1"
                    max="5"
                    inputMode="numeric"
                    value={adultos}
                    onChange={handleAdultosChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="w-1/3">
                  <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="children">
                    Niños
                  </label>
                  <input
                    className="appearance-none border border-slate-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="children"
                    type="number"
                    min="0"
                    max="4"
                    inputMode="numeric"
                    value={ninos}
                    onChange={handleNinosChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="departamento">
                  Departamento
                </label>
                <div className="relative inline-block w-full">
                  <select
                    className="appearance-none border border-slate-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer bg-white"
                    id="departamento"
                    value={departamento}
                    onChange={(e) => setDepartamento(e.target.value)}
                    disabled={isSubmitting}
                  >
                    <option value="No seleccionó ningún departamento en particular">Sin preferencias</option>
                    <option value="Pb-A">Planta Baja A</option>
                    <option value="Pb-B">Planta Baja B</option>
                    <option value="1-A">Primero A</option>
                    <option value="1-B">Primero B</option>
                    <option value="2-B">Segundo B</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex text-xs items-center px-2 text-gray-600">
                    ▼
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  className="appearance-none border border-slate-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isSubmitting}
                />
              </div>

              {formError && <p className="text-red-500 text-xs mb-4">{formError}</p>}

              <div className="flex items-center justify-center">
                <button
                  className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-4 font-medium text-white transition hover:bg-slate-950/85 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="button"
                  onClick={handleConsultarDisponibilidad}
                  disabled={isSubmitting}
                >
                  <span className="text-base font-lato flex items-center">
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
                        Consultando...
                      </>
                    ) : (
                      "Consultar disponibilidad"
                    )}
                  </span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20"></div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>

      <p
        className="text-black text-opacity-90 text-base xl:text-lg text-center px-3 md:px-28 my-8 md:my-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Nos aseguraremos de que tu estancia en Edificio Farfalle sea cómoda y placentera.
        <span className="text-orange"> ¡Esperamos darte la bienvenida pronto!</span>
      </p>

      <Footer />
    </section>
  )
}

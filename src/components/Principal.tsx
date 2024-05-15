import { useState } from 'react'
import emailjs from 'emailjs-com'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import Swal from 'sweetalert2'
import { VideoLazyLoad } from './comon/VideoLazyLoad'

interface PrincipalProps {
	sectionTopRef: React.MutableRefObject<HTMLDivElement | null>
	isMobile: boolean
	sectionReservasRef: React.MutableRefObject<HTMLDivElement | null>
}

export function Principal({
	sectionTopRef,
	isMobile,
	sectionReservasRef,
}: PrincipalProps) {
	const [videosLoaded, setVideosLoaded] = useState(false)
	const [checkIn, setCheckIn] = useState('')
	const [checkOut, setCheckOut] = useState('')
	const [adultos, setAdultos] = useState('')
	const [ninos, setNinos] = useState('')
	const [email, setEmail] = useState('')
	const [formError, setFormError] = useState('')
	const [minCheckOutDate, setMinCheckOutDate] = useState('')
	const [currentIndex, setCurrentIndex] = useState(0) // Estado para controlar el índice actual del video
	const video = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/dron1.mp4'
	const video1 = `https://newfarfalle.s3.sa-east-1.amazonaws.com/Veronica+Garcia's+V%C3%ADdeo+-+May+9%2C+2024.mp4`
	const video2 = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/dron2.mp4'

	const handleClick = () => {
		const sectionReservas = sectionReservasRef.current
		if (sectionReservas) {
			sectionReservas.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleToTop = () => {
		const sectionTop = sectionTopRef.current
		if (sectionTop) {
			sectionTop.scrollIntoView({ behavior: 'smooth' })
		}
	}

	// const handleVideosLoad = () => {
	// 	// Se ejecuta cuando todos los videos se han cargado
	// 	setVideosLoaded(true)
	// }

	const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedDate = new Date(event.target.value)
		const currentDate = new Date()

		// Verificar si la fecha seleccionada es anterior al día actual
		if (selectedDate < currentDate) {
			// Restablecer la fecha de check-in a la fecha actual
			setCheckIn(currentDate.toISOString().split('T')[0])
			setFormError('La fecha de check-in no puede ser anterior al día actual')
		} else {
			setCheckIn(event.target.value)
			setFormError('')
			// Actualizar la fecha mínima seleccionable en el campo de check-out
			const nextDay = new Date(selectedDate)
			nextDay.setDate(nextDay.getDate() + 1)
			const minDate = nextDay.toISOString().split('T')[0]
			setMinCheckOutDate(minDate)
			// Establecer la fecha inicial del campo de check-out como la fecha seleccionada en el campo de check-in
			setCheckOut(selectedDate.toISOString().split('T')[0])
		}
	}

	const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCheckOut(event.target.value)
	}

	const handleAdultosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAdultos(event.target.value)
	}

	const handleNinosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNinos(event.target.value)
	}

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	// Función para validar el formulario
	const validateForm = () => {
		if (!validateEmail(email)) {
			setFormError('Por favor ingrese un correo electrónico válido')
			return false
		}

		if (!checkIn || !checkOut) {
			setFormError(
				'Por favor seleccione tanto la fecha de check-in como la de check-out'
			)
			return false
		}

		if (new Date(checkOut) <= new Date(checkIn)) {
			setFormError(
				'La fecha de check-out debe ser posterior a la fecha de check-in'
			)
			return false
		}

		if (!adultos) {
			setFormError('Por favor seleccione la cantidad de adultos')
			return false
		}

		setFormError('')
		return true
	}

	// Función para validar el formato del correo electrónico
	const validateEmail = (email: string) => {
		const re = /\S+@\S+\.\S+/
		return re.test(email)
	}

	// const handleConsultarDisponibilidad = async () => {
	// 	// Configurar la clave de API de SendGrid
	// 	// Verificar si process.env.API_KEY_SENDGRID está definido y no es null
	// 	if (process.env.API_KEY_SENDGRID) {
	// 		// Configurar la clave de API de SendGrid
	// 		sgMail.setApiKey(process.env.API_KEY_SENDGRID)
	// 	} else {
	// 		console.error('La clave de API de SendGrid no está definida')
	// 		// Manejar el caso donde la clave de API no está definida
	// 	}

	// 	// Configurar el contenido del correo electrónico
	// 	const msg = {
	// 		from: `${email}`,
	// 		to: 'veroagarcia90@gmail.com',
	// 		subject: 'Consulta de disponibilidad',
	// 		text: `Check-in: ${checkIn}\nCheck-out: ${checkOut}\nAdultos: ${adultos}\nNiños: ${ninos}\nConsulta de: ${email}`,
	// 	}

	// 	try {
	// 		await sgMail.send(msg);
	// 		console.log('Correo electrónico enviado con éxito');
	// 		alert('Correo electrónico enviado con éxito');
	// 	} catch (error) {
	// 		console.error('Error al enviar el correo electrónico:', error);
	// 		alert('Error al enviar el correo electrónico');
	// 	}

	// 	if (!validateForm()) {
	// 		return;
	// 	}

	// 	try {
	// 		const response = await fetch('http://localhost:5000/api/enviar-correo', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify({
	// 				checkIn: checkIn,
	// 				checkOut: checkOut,
	// 				adultos: adultos,
	// 				ninos: ninos,
	// 				email: email,
	// 			}),
	// 		})

	// 		if (response.ok) {
	// 			// El correo electrónico se envió correctamente
	// 			Swal.fire({
	// 				position: 'center',
	// 				icon: 'success',
	// 				title:
	// 					'Enviado con éxito. A la brevedad nos estaremos comunicando con usted.',
	// 				showConfirmButton: false,
	// 				timer: 3000,
	// 			})
	// 		} else {
	// 			// Hubo un error al enviar el correo electrónico
	// 			Swal.fire({
	// 				icon: 'error',
	// 				title: 'Error al enviar su consulta',
	// 				text: 'A la brevedad lo estaremos solucionando, disculpe las molestias.',
	// 			})
	// 		}
	// 	} catch (error) {
	// 		console.error('Error al enviar la solicitud:', error)
	// 		Swal.fire({
	// 			icon: 'error',
	// 			title: 'Error al enviar su consulta',
	// 			text: 'A la brevedad lo estaremos solucionando, disculpe las molestias.',
	// 		})
	// 	}
	// }

	const handleConsultarDisponibilidad = async () => {
		// Validar el formulario antes de enviar el correo electrónico
		if (!validateForm()) {
			return
		}

		// Enviar correo electrónico usando EmailJS
		try {
			await emailjs.send(
				'service_ow5tu5w', // Reemplaza 'YOUR_SERVICE_ID' con tu Service ID de EmailJS
				'template_6c857kn', // Reemplaza 'YOUR_TEMPLATE_ID' con tu Template ID de EmailJS
				{
					from_name: email,
					to_email: 'veroagarcia90@gmail.com', // Cambia esto por la dirección de correo electrónico a la que deseas enviar el mensaje
					checkIn: checkIn,
					checkOut: checkOut,
					adultos: adultos,
					ninos: ninos,
					email: email,
				},
				'0DIH_YtJhCdbknU0z' // Reemplaza 'YOUR_USER_ID' con tu User ID (que ahora seria publick_key) de EmailJS
			)
			console.log('Correo electrónico enviado con éxito')
			// Mostrar mensaje de éxito al usuario usando Swal.fire
			Swal.fire({
				icon: 'success',
				title: 'Éxito',
				text: 'El correo electrónico se ha enviado correctamente.',
			})
		} catch (error) {
			console.error('Error al enviar el correo electrónico:', error)
			// Mostrar mensaje de error al usuario usando Swal.fire
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Ha ocurrido un error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.',
			})
		}
	}

	const handleVideoChange = (index: number) => {
		setVideosLoaded(true)
		// Actualiza el índice actual del video
		setCurrentIndex(index)
	}

	return (
		<div className='flex flex-col items-center justify-around'>
			<section
				className={`${
					isMobile ? ` h-72` : ` h-72 `
				} relative w-full max-w-full overflow-hidden max-h-72`}
			>
				{!videosLoaded && (
					// Indicador de carga mientras los videos se están cargando
					<div className='absolute inset-0 flex items-center justify-center w-full h-full bg-orangeDark bg-opacity-50'>
						<p className='text-white'>Cargando...</p>
					</div>
				)}
				<Carousel
					className={`w-full h-260 ${
						isMobile ? 'max-w-screen-sm mx-auto' : ''
					}`}
					autoPlay
					infiniteLoop
					interval={7000}
					showArrows={false}
					showThumbs={false}
					showStatus={false}
					showIndicators={false}
					selectedItem={currentIndex}
					onChange={handleVideoChange} // Se ejecuta cuando se cambia de video
				>
					{[video, video1, video2].map((item, index) => (
						<div
							key={index}
							className={`w-full h-72 max-h-72 transition-shadow ${
								currentIndex === index ? 'shadow-lg' : 'shadow-none'
							}`}
						>
							<VideoLazyLoad src={item} type='video/mp4' />
						</div>
					))}
				</Carousel>
			</section>
			<p
				className={`text-justify text-black text-opacity-90 pb-3 ${
					isMobile ? `px-3 pt-2 text-xs` : `px-12 pt-3 text-base`
				}`}
			>
				<strong>Edificio Farfalle</strong> ofrece una experiencia de alojamiento
				única en la Ciudad de La Plata. Contamos con opciones flexibles y
				convenientes para aquellos que buscan alojamiento a corto plazo.
				Nuestras unidades están diseñadas para brindar comodidad y
				funcionalidad, ya sea para estancias cortas, o para períodos más
				prolongados.{' '}
			</p>
			<p
				className={`text-justify text-black text-opacity-90 ${
					isMobile ? `px-3 pb-2 text-xs` : `px-12 pb-3 text-base`
				}`}
			>
				Nuestros departamentos están completamente amueblados y equipados con
				todas las comodidades necesarias para una estadía confortable, buscando
				brindar calidad y confort en nuestro servicio para que la estadía sea
				placentera y te sientas <strong>como en casa</strong>.
			</p>
			<div className='w-full h-fit text-center overflow-hidden p-3'>
				<h2 className='text-orange font-thin font-serif italic  text-sm text-center lg:text-lg mb-1'>
					Consulte por reservas
				</h2>
				<FaChevronDown
					onClick={handleClick}
					id='chevronDown'
					className='text-3xl text-orange animate-bounce mx-auto cursor-pointer'
				/>
			</div>
			<section className={`w-full h-screen relative bg-creme`}>
				<section
					ref={sectionReservasRef}
					id='reservas'
					className='mx-auto bg-creme py-20 px-2 md:p-20'
				>
					<div className='max-w-lg mx-auto mt-10 '>
						<form
							method='post'
							action='/api/enviar-correo'
							className='bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 hover:shadow-2xl '
						>
							<div className='mb-4 flex justify-between mx-auto '>
								<div className='w-full sm:w-1/3 flex-shrink mb-4 sm:mb-0 flex justify-center items-center sm:flex-col sm:items-start'>
									<label
										className='text-gray-700 text-xs md:text-base font-bold mb-2 mr-2'
										htmlFor='check-in'
									>
										Check-in
									</label>
									<input
										className='appearance-none border rounded w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='check-in'
										type='date'
										value={checkIn}
										onChange={handleCheckInChange}
									/>
								</div>
								<div className='w-full sm:w-1/3 flex-shrink mb-4 sm:mb-0 flex justify-center items-center sm:flex-col sm:items-start'>
									<label
										className='text-gray-700 text-xs md:text-base font-bold mb-2 mr-2'
										htmlFor='check-out'
									>
										Check-out
									</label>
									<input
										className='appearance-none border rounded w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='check-out'
										type='date'
										min={minCheckOutDate} // Utiliza el estado 'minCheckOutDate' como valor para el atributo 'min'
										value={checkOut}
										onChange={handleCheckOutChange}
									/>
								</div>
							</div>
							<div className='mb-4 flex items-center justify-between'>
								<div className='w-1/3'>
									<label
										className='text-gray-700 text-xs md:text-base font-bold mb-2'
										htmlFor='adults'
									>
										Adultos
									</label>
									<input
										className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='adults'
										type='number'
										min='1'
										max='5'
										inputMode='numeric'
										value={adultos}
										onChange={handleAdultosChange}
									/>
								</div>
								<div className='w-1/3'>
									<label
										className='text-gray-700 text-xs md:text-base font-bold mb-2'
										htmlFor='children'
									>
										Niños
									</label>
									<input
										className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='children'
										type='number'
										min='0'
										max='4'
										inputMode='numeric'
										value={ninos}
										onChange={handleNinosChange}
									/>
								</div>
							</div>
							<div className='mb-4'>
								<label
									className='text-gray-700 text-xs md:text-base font-bold mb-2'
									htmlFor='email'
								>
									Correo Electrónico
								</label>
								<input
									className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									id='email'
									type='email'
									value={email}
									onChange={handleEmailChange}
								/>
							</div>
							{formError && (
								<p className='text-red-900 text-xs mb-4'>{formError}</p>
							)}
							<div className='flex items-center justify-center'>
								<button
									className='group relative inline-flex mb-2 h-10 items-center justify-center overflow-hidden rounded-md bg-orangeDark px-4 font-medium text-neutral-200 transition hover:bg-orange hover:scale-110'
									type='button'
									onClick={handleConsultarDisponibilidad}
								>
									Consultar disponibilidad
								</button>
							</div>
						</form>
					</div>
				</section>

				<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
					<FaChevronUp
						onClick={handleToTop}
						className='text-3xl text-orange mx-auto cursor-pointer'
					/>
					<h2 className='text-orange font-thin font-serif italic  text-sm text-center lg:text-lg mb-1'>
						Volver
					</h2>
				</div>
			</section>
		</div>
	)
}

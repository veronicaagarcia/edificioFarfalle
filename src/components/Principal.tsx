import { useRef, useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import Swal from 'sweetalert2'
import video from '../assets/videos/principal/dron1.mp4'
import video2 from '../assets/videos/principal/dron2.mp4'

interface PrincipalProps {
	sectionTopRef: React.MutableRefObject<HTMLDivElement | null>
	isMobile: boolean
}

export function Principal({ sectionTopRef, isMobile }: PrincipalProps) {
	const sectionReservasRef = useRef<HTMLDivElement>(null)
	const [videosLoaded, setVideosLoaded] = useState(false)
	const [checkIn, setCheckIn] = useState('')
	const [checkOut, setCheckOut] = useState('')
	const [adultos, setAdultos] = useState('')
	const [ninos, setNinos] = useState('')
	const [email, setEmail] = useState('')
	const [formError, setFormError] = useState('')
	const [minCheckOutDate, setMinCheckOutDate] = useState('')

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

	const handleVideosLoad = () => {
		// Se ejecuta cuando todos los videos se han cargado
		setVideosLoaded(true)
	}

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

	const handleConsultarDisponibilidad = async () => {
		// Validar el formulario antes de enviarlo
		if (!validateForm()) {
			return
		}
		try {
			const response = await fetch('http://localhost:5000/api/enviar-correo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					checkIn: checkIn,
					checkOut: checkOut,
					adultos: adultos,
					ninos: ninos,
					email: email,
				}),
			})

			if (response.ok) {
				// El correo electrónico se envió correctamente
				Swal.fire({
					position: 'center',
					icon: 'success',
					title:
						'Enviado con éxito. A la brevedad nos estaremos comunicando con usted.',
					showConfirmButton: false,
					timer: 3000,
				})
			} else {
				// Hubo un error al enviar el correo electrónico
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Error al enviar el correo electrónico',
				})
			}
		} catch (error) {
			console.error('Error al enviar la solicitud:', error)
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Error al enviar la solicitud',
			})
		}
	}

	return (
		<div className='flex flex-col items-center justify-around'>
			<section
				className={`${
					isMobile ? ` h-72` : ` h-72 `
				} relative w-full max-w-full overflow-hidden`}
			>
				{!videosLoaded && (
					// Indicador de carga mientras los videos se están cargando
					<div className='absolute inset-0 flex items-center justify-center w-full h-full bg-orangeDark bg-opacity-50'>
						<p className='text-white'>Cargando...</p>
					</div>
				)}
				<Carousel
					className={`w-full h-260`}
					autoPlay
					infiniteLoop
					interval={300000}
					showArrows={false}
					showThumbs={false}
					showStatus={false}
					showIndicators={false}
					onChange={handleVideosLoad} // Se ejecuta cuando se cambia de video
				>
					{[video2, video, video2, video].map((item, index) => (
						<div key={index} className='w-full h-425'>
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
					isMobile ? `px-2 pb-2 text-xs` : `px-12 pb-3 text-base`
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
					<div className='max-w-lg mx-auto mt-10'>
						<form
							method='post'
							action='/api/enviar-correo'
							className='bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4'
						>
							<div className='mb-4 flex flex-col sm:flex-row sm:justify-between mx-auto '>
								<div className='w-1/3 flex-shrink mb-4'>
									<label
										className='text-gray-700 text-xs md:text-base font-bold mb-2'
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
								<div className='w-1/3 flex-shrink mb-4'>
									<label
										className='text-gray-700 text-xs md:text-base font-bold mb-2'
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
									className='bg-orangeDark hover:bg-orange text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mt-6 text-xs md:text-base'
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

function VideoLazyLoad({ src, type }: { src: string; type: string }) {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		}

		const callback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const video = videoRef.current
					if (video) {
						video.load()
					}
				}
			})
		}

		const observer = new IntersectionObserver(callback, options)
		const target = videoRef.current
		if (target) {
			observer.observe(target)
		}

		return () => {
			if (target) {
				observer.unobserve(target)
			}
		}
	}, [])

	return (
		<video
			ref={videoRef}
			autoPlay
			muted
			className='block mx-auto w-full h-425 object-cover z-0 object-center'
		>
			<source src={src} type={type} />
		</video>
	)
}

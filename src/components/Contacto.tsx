import { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import { CircularProgress } from '@mui/material'
import { Map } from './comon/Map'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Footer } from './comon/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';

export function Contacto() {
	const [message, setMessage] = useState('')
	const [email, setEmail] = useState('')
	const [nombre, setNombre] = useState('')
	const [loading, setLoading] = useState(true)
	const [emailError, setEmailError] = useState('')
	const [messageError, setMessageError] = useState('')

	const animatedRefs = useRef<(HTMLHeadingElement | null)[]>([])
	
	useEffect(() => {
		AOS.init({
		duration: 1000,
		easing: 'ease-in-out',
		once: false,
		offset: 100,
		})
	
		const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('aos-animate')
			} else {
				entry.target.classList.remove('aos-animate')
			}
			})
		},
		{
			root: null,
			rootMargin: '0px',
			threshold: 0.1
		}
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

	const openGoogleMaps = () => {
		window.open(
			'https://www.google.com/maps?q=-34.94458185270848,-57.963126869810374'
		)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNombre(event.target.value)
	}
	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}
	const handleMessageChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setMessage(event.target.value)
	}

	// Función para validar el formato del correo electrónico
	const validateEmail = (email: string) => {
		const re = /\S+@\S+\.\S+/
		return re.test(email)
	}

	const handleSubmit = async () => {
		// Validar el correo electrónico
		if (!validateEmail(email)) {
			setEmailError('Por favor ingrese un correo electrónico válido')
			return
		}

		if (message.trim() === '') {
			// Mostrar un mensaje de error al usuario
			setMessageError('Por favor ingrese su mensaje')
			return // Salir de la función si el campo de mensaje está vacío
		}

		// Enviar correo electrónico usando EmailJS
		try {
			await emailjs.send(
				'service_ow5tu5w', // Reemplaza 'YOUR_SERVICE_ID' con tu Service ID de EmailJS
				'template_p80tkf5', // Reemplaza 'YOUR_TEMPLATE_ID' con tu Template ID de EmailJS
				{
					from_name: email,
					to_email: 'edificiofarfalle@gmail.com', // Cambia esto por la dirección de correo electrónico a la que deseas enviar el mensaje
					nombre: nombre,
					message: message,
					email: email,
				},
				'0DIH_YtJhCdbknU0z' // Reemplaza 'YOUR_USER_ID' con tu User ID (que ahora seria publick_key) de EmailJS
			)
			// Mostrar mensaje de éxito al usuario usando Swal.fire
			Swal.fire({
				position: 'center',
				icon: 'success',
				iconColor: '#fa9336',
				title: 'Consulta enviada con éxito',
				text: 'A la brevedad nos estaremos comunicando con usted.',
				// showConfirmButton: false,
				// timer: 3000,
				customClass: {
					confirmButton:
						'bg-orange hover:bg-orangeDark border-2 text-lg py-2 px-4 rounded-xl text-white',
				},
				buttonsStyling: false,
			})
		} catch (error) {
			console.error('Error al enviar el correo electrónico:', error)
			// Mostrar mensaje de error al usuario usando Swal.fire
			Swal.fire({
				icon: 'error',
				iconColor: '#865d95',
				title: 'Error al enviar su consulta',
				text: 'A la brevedad lo estaremos solucionando, disculpe las molestias.',
				customClass: {
					confirmButton:
						'bg-orange hover:bg-orangeDark border-2 text-lg py-2 px-4 rounded-xl text-white',
				},
				buttonsStyling: false,
			})
		}
	}

	return (
		<section className='pt-12 w-full h-full '>
			<h2 ref={(el) => (animatedRefs.current[0] = el)}
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-offset="200" className='text-lg md:text-xl mt-4 md:mt-8 font-mono font-medium uppercase text-nav text-center mb-8'>
				Contáctanos
			</h2>
			<p className='text-justify text-black text-opacity-90 mb-8 px-3 md:px-28 pt-2 md:pt-3 text-base md:text-lg'>
				En <span className='text-orange italic'>Edificio Farfalle</span>, estamos
				siempre a su disposición para responder cualquier consulta o necesidad
				que pueda tener. Puede contactarnos a través de los siguientes medios:
			</p>
			<div
				className='flex justify-center self-center m-auto items-center w-full h-fit relative mb-8 md:mb-20'
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1720180320321-2a3d719d14f8?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '600px',
				}}
			>
				<Card
					style={{
						backgroundColor: 'transparent',
						transition: 'background-color 0.3s',
					}}
					className=' py-1 px-2 h-fit rounded-full mx-auto w-2/3 md:w-1/2 hover:shadow-2xl shadow-black '
				>
					<form className='p-4 mx-auto w-11/12 h-80 flex flex-col justify-evenly'>
						<input
							className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='nombre'
							type='text'
							value={nombre}
							onChange={handleNombreChange}
							placeholder='Nombre'
						/>

						<textarea
							className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='message'
							value={message}
							onChange={handleMessageChange}
							placeholder='Envía tu consulta aquí...'
						/>
						{messageError && (
							<p className='text-red-900 text-sm'>{messageError}</p>
						)}
						<input
							className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='email'
							type='email'
							value={email}
							onChange={handleEmailChange}
							placeholder='Correo electrónico'
						/>
						{emailError && <p className='text-red-900 text-sm'>{emailError}</p>}
						<button
							type='button'
							onClick={handleSubmit}
							className='group relative inline-flex mb-4 h-10 items-center justify-center overflow-hidden rounded-md bg-orange md:bg-nav px-4 font-medium text-neutral-200 transition hover:bg-orange hover:scale-110'
						>
							<span className='relative text-base font-lato'>Enviar</span>
							<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
								<div className='relative h-full w-8 bg-white/20'></div>
							</div>
						</button>
					</form>
				</Card>
				<div className='w-1/5 md:w-1/3 xl:w-[25%] h-60 md:h-72 flex flex-col justify-around mt-4 md:mt-0'>
					<Card
						style={{
							backgroundColor: 'transparent',
							transition: 'background-color 0.3s',
						}}
						className='py-0 hover:shadow-md hover:shadow-white hover:scale-105 px-0  rounded-none md:rounded-full w-fit p-2 '
					>
						<Link
							to='https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.'
							target='_blanck'
						>
							<h5 className='items-center flex justify-start'>
								<WhatsAppIcon
									color='success'
									fontSize='large'
								/>
							</h5>
						</Link>
					</Card>
					<Card
						style={{
							backgroundColor: 'transparent',
							transition: 'background-color 0.3s',
						}}
						className='py-0 hover:shadow-md hover:shadow-white hover:scale-105 px-0  rounded-none md:rounded-full w-fit p-2 '
					>
						<Link
							to='https://www.instagram.com/edificiofarfalle/'
							target='_blanck'
						>
							<h5 className='items-center flex justify-start'>
								<InstagramIcon
									color='error'
									fontSize='large'
								/>
							</h5>
						</Link>
					</Card>
					<Card
						style={{
							backgroundColor: 'transparent',
							transition: 'background-color 0.3s',
						}}
						className='py-0 hover:shadow-md hover:shadow-white hover:scale-105 px-0  rounded-none md:rounded-full w-fit p-2 '
					>
						<button
							onClick={openGoogleMaps}
							className='flex justify-start items-center'
						>
							<h5 className='items-center flex justify-start'>
								<LocationOnIcon
									color='info'
									fontSize='large'
								/>
							</h5>
						</button>
					</Card>
					<Card
						style={{
							backgroundColor: 'transparent',
							transition: 'background-color 0.3s',
						}}
						className='py-0 hover:shadow-md hover:shadow-white hover:scale-105 px-0  rounded-none md:rounded-full w-fit p-2  '
					>
						<a
							href='mailto:edificiofarfalle@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<h5 className='items-center flex justify-start'>
								<EmailOutlinedIcon
									fontSize='large'
									color='secondary'
								/>
							</h5>
						</a>
					</Card>
				</div>
			</div>
			<h3 ref={(el) => (animatedRefs.current[1] = el)}
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-offset="200"  className='text-lg md:text-xl mt-4 md:mt-8 font-mono font-medium uppercase text-nav text-center mb-8'>
				Nuestra Ubicación
			</h3>
			<p className='text-justify text-black text-opacity-90 mb-12 px-3 md:px-28 text-base md:text-lg mt-4 '>
				El Farfalle ofrece alojamiento confortable en el corazón de La Plata,
				ideal tanto para turistas como para viajeros de negocios. Nuestra
				ubicación estratégica te permite acceder fácilmente a los principales
				puntos de interés de la ciudad:
			</p>
			<div className='h-fit w-10/12 text-black mx-auto flex flex-col items-center rounded-xl mt-8 mb-12 md:mb-20'>
				<div className='flex flex-col md:flex-row justify-between mx-auto items-center w-full h-fit'>
					<div className='w-11/12 md:w-1/2'>
						{loading ? <CircularProgress color='inherit' /> : <Map />}
					</div>
					<div className='text-xs w-full md:w-1/2 p-1 px-5 text-black text-opacity-90 mb-4 text-justify'>
						<p className='text-base font-medium mb-4'>
							Dirección:{' '}
							<span className='text-orange'>
								{' '}
								1770 Calle 62, 1900 La Plata, Argentina
							</span>
						</p>

						<p>
							▪ A 5,1 km del Estadio Ciudad de La Plata, donde puedes disfrutar
							de eventos deportivos y conciertos.
						</p>

						<p>
							▪ A 5,9 km del Museo de la Plata, un destino imprescindible para
							los amantes de la ciencia y la historia.
						</p>

						<p>
							▪ A 3,7 km de la majestuosa Catedral de La Plata, un ícono
							arquitectónico y religioso.
						</p>
						<p>
							▪ Hipódromo Roberto José Mouras: Situado a 31 km, ideal para los
							amantes de las carreras de caballos.
						</p>
						<p>
							▪ Centro Comercial Paseo Rocha: A solo 10 minutos en coche, donde
							puedes disfrutar de tiendas, restaurantes y entretenimiento.
						</p>
						<p>
							▪ El Aeropuerto Jorge Newbery es el más cercano, a 66 km de El
							Farfalle. Ofrecemos servicios de traslado desde y hacia el
							aeropuerto bajo petición para tu comodidad.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	)
}

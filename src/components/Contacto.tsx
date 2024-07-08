import { useState, useEffect } from 'react'
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

export function Contacto() {
	const [message, setMessage] = useState('')
	const [email, setEmail] = useState('')
	const [nombre, setNombre] = useState('')
	const [loading, setLoading] = useState(true)
	const [emailError, setEmailError] = useState('')
	const [messageError, setMessageError] = useState('')
	const [hovered, setHovered] = useState<string | null>(null)

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

	const handleMouseEnter = (text: string) => {
		setHovered(text)
	}

	const handleMouseLeave = () => {
		setHovered(null)
	}

	return (
		<section className='w-10/12 mx-auto h-screen flex flex-col overflow-y-auto pt-4 lg:pt-16 pb-28 font-thin font-serif italic text-black bg-creme opacity-95'>
			<p className='px-8 md:px-16 mb-8 text-justify'>
				En Edificio Farfalle, estamos siempre a su disposición para responder
				cualquier consulta o necesidad que pueda tener. Puede contactarnos a
				través de los siguientes medios:
			</p>
			<div className='flex flex-col md:flex-row justify-start w-full h-fit py-2 pr-14 relative'>
				<div className='w-10/12 md:w-1/3 h-60 md:h-72 flex flex-col justify-between mt-4 md:mt-0 -ml-1 md:ml-0'>
					<Card
						style={{
							backgroundColor: '#402e32',
							transition: 'background-color 0.3s',
						}}
						className='py-0 md:py-1 px-0 md:px-2 rounded-none md:rounded-full w-12 md:w-48 md:hover:rounded-tr-full md:hover:rounded-br-full md:hover:opacity-90 md:hover:w-96 md:hover:shadow-2xl md:opacity-75'
						onMouseEnter={() => handleMouseEnter('Contactanos')}
						onMouseLeave={handleMouseLeave}
					>
						<Link
							to='https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.'
							target='_blanck'
						>
							<h5 className='text-white hover:text-green-700 text-lg items-center sm:text-lg flex justify-start pl-2'>
								<WhatsAppIcon
									color='success'
									className='pr-2'
									fontSize='large'
								/>
								<span className='hidden md:block'>
									{hovered === 'Contactanos'
										? 'Estamos para asesorarte'
										: 'Contactanos'}
								</span>
							</h5>
						</Link>
					</Card>
					<Card
						style={{
							backgroundColor: '#402e32',
							transition: 'background-color 0.3s',
						}}
						className='py-0 md:py-1 px-0 md:px-2 rounded-none md:rounded-full w-12 md:w-48 md:hover:rounded-tr-full md:hover:rounded-br-full md:hover:opacity-90 md:hover:w-96 md:hover:shadow-2xl md:opacity-75'
						onMouseEnter={() => handleMouseEnter('Seguinos')}
						onMouseLeave={handleMouseLeave}
					>
						<Link
							to='https://www.instagram.com/edificiofarfalle/'
							target='_blanck'
						>
							<h5 className='text-white hover:text-pink-700 text-lg sm:text-lg flex items-center justify-start pl-2'>
								<InstagramIcon
									className='pr-2'
									color='error'
									fontSize='large'
								/>
								<span className='hidden md:block'>
									{hovered === 'Seguinos' ? 'Estamos en instagram' : 'Seguinos'}
								</span>
							</h5>
						</Link>
					</Card>
					<Card
						style={{
							backgroundColor: '#402e32',
							transition: 'background-color 0.3s',
						}}
						className='py-0 md:py-1 px-0 md:px-2 rounded-none md:rounded-full w-12 md:w-48 md:hover:rounded-tr-full md:hover:rounded-br-full md:hover:opacity-90 md:hover:w-96 md:hover:shadow-2xl md:opacity-75'
						onMouseEnter={() => handleMouseEnter('Encontranos')}
						onMouseLeave={handleMouseLeave}
					>
						<button
							onClick={openGoogleMaps}
							className='flex justify-start items-center'
						>
							<h5 className='text-white hover:text-blue-500 text-lg sm:text-lg flex items-center justify-start pl-2'>
								<LocationOnIcon
									className='pr-2'
									color='info'
									fontSize='large'
								/>
								<span className='hidden md:block'>
									{hovered === 'Encontranos' ? 'Ver en el mapa' : 'Encontranos'}
								</span>
							</h5>
						</button>
					</Card>
					<Card
						style={{
							backgroundColor: '#402e32',
							transition: 'background-color 0.3s',
						}}
						className='py-0 md:py-1 px-0 md:px-2 rounded-none md:rounded-full w-12 md:w-48 md:hover:rounded-tr-full md:hover:rounded-br-full md:hover:opacity-90 md:hover:w-96 md:hover:shadow-2xl md:opacity-75'
						onMouseEnter={() => handleMouseEnter('Escribinos')}
						onMouseLeave={handleMouseLeave}
					>
						<a
							href='mailto:edificiofarfalle@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<h5 className='text-white hover:text-nav text-lg sm:text-lg flex items-center justify-start pl-2'>
								<EmailOutlinedIcon
									className='pr-2'
									fontSize='large'
									color='secondary'
								/>
								<span className='hidden md:block'>
									{hovered === 'Escribinos'
										? 'A edificiofarfalle@gmail.com'
										: 'Escribinos'}
								</span>
							</h5>
						</a>
					</Card>
				</div>
				<Card
					style={{
						backgroundColor: '#fefdfd',
						transition: 'background-color 0.3s',
					}}
					className='py-1 px-2 h-72 rounded-full w-9/12 mx-auto md:w-1/2 hover:opacity-90 hover:shadow-2xl shadow-black opacity-85 absolute top-0 right-4 md:right-20'
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
							className='group relative inline-flex mb-4 h-10 items-center justify-center overflow-hidden rounded-md bg-orange md:bg-black px-4 font-medium text-neutral-200 transition hover:bg-orange hover:scale-110'
						>
							<span className='relative text-base font-lato'>Enviar</span>
							<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
								<div className='relative h-full w-8 bg-white/20'></div>
							</div>
						</button>
					</form>
				</Card>
			</div>
			<div className='h-fit md:h-600 w-10/12 text-black mx-auto flex flex-col items-center rounded-xl mt-32 mb-4 '>
				<div className='flex flex-col md:flex-row justify-between mx-auto items-center w-full h-fit'>
					<div className='w-11/12 md:w-1/2 mb-4'>
						{loading ? <CircularProgress color='inherit' /> : <Map />}
					</div>
					<div className='text-xs w-full md:w-1/2 p-1 px-5 font-thin font-serif text-black italic mb-4'>
						<p className='text-base text-orange p-2'>
							1770 Calle 62, 1904 La Plata, Argentina.
						</p>
						<br />
						<p>
							El Farfalle ofrece alojamiento en La Plata, a 5,1 km del estadio
							Ciudad de La Plata, a 5,9 km del Museo de la Plata y a 3,7 km de
							la catedral de La Plata.
						</p>
						<br />
						<p>
							El hipódromo Roberto José Mouras está a 31 km del departamento. El
							aeropuerto Jorge Newbery es el más cercano y está a 66 km del
							Farfalle.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

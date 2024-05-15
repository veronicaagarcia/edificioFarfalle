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
import { Footer } from './comon/Footer'

export function Contacto() {
	const [message, setMessage] = useState('')
	const [email, setEmail] = useState('')
	const [nombre, setNombre] = useState('')
	const [loading, setLoading] = useState(true)
	const [emailError, setEmailError] = useState('')
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

		// Enviar correo electrónico usando EmailJS
		try {
			await emailjs.send(
				'service_ow5tu5w', // Reemplaza 'YOUR_SERVICE_ID' con tu Service ID de EmailJS
				'template_p80tkf5', // Reemplaza 'YOUR_TEMPLATE_ID' con tu Template ID de EmailJS
				{
					from_name: email,
					to_email: 'veroagarcia90@gmail.com', // Cambia esto por la dirección de correo electrónico a la que deseas enviar el mensaje
					nombre: nombre,
					message: message,
					email: email,
				},
				'0DIH_YtJhCdbknU0z' // Reemplaza 'YOUR_USER_ID' con tu User ID (que ahora seria publick_key) de EmailJS
			)
			console.log('Correo electrónico enviado con éxito')
			// Mostrar mensaje de éxito al usuario usando Swal.fire
			Swal.fire({
				position: 'center',
				icon: 'success',
				title:
					'Enviado con éxito. A la brevedad nos estaremos comunicando con usted.',
				showConfirmButton: false,
				timer: 3000,
			})
		} catch (error) {
			console.error('Error al enviar el correo electrónico:', error)
			// Mostrar mensaje de error al usuario usando Swal.fire
			Swal.fire({
				icon: 'error',
				title: 'Error al enviar su consulta',
				text: 'A la brevedad lo estaremos solucionando, disculpe las molestias.',
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
		<section className='w-full h-screen flex flex-col overflow-y-scroll pt-4 lg:pt-16 pb-32 font-thin font-serif italic text-black bg-creme opacity-90'>
			<div className='flex flex-col md:flex-row justify-start w-full h-fit py-2 pr-14 relative'>
				<div className='w-10/12 md:w-1/3 h-52 flex flex-col justify-between mt-4 md:mt-0 -ml-1 md:ml-0'>
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
							<h5 className='text-white hover:text-green-700 text-lg items-center sm:text-lg flex justify-center'>
								<span className='hidden md:block'>
									{hovered === 'Contactanos'
										? 'Estamos para asesorarte'
										: 'Contactanos'}
								</span>
								<WhatsAppIcon
									color='success'
									className='pl-2'
									fontSize='large'
								/>
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
							<h5 className='text-white hover:text-pink-700 text-lg sm:text-lg flex items-center justify-center'>
								<span className='hidden md:block'>
									{hovered === 'Seguinos' ? 'Estamos en instagram' : 'Seguinos'}
								</span>
								<InstagramIcon
									className='pl-2'
									color='error'
									fontSize='large'
								/>
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
							className='flex justify-center items-center text-center mx-auto'
						>
							<h5 className='text-white hover:text-blue-500 text-lg flex justify-center items-center text-center'>
								<span className='hidden md:block'>
									{hovered === 'Encontranos' ? 'Ver en el mapa' : 'Encontranos'}
								</span>
								<LocationOnIcon
									className='pl-2'
									color='info'
									fontSize='large'
								/>
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
							href='mailto:farfalle@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<h5 className='text-white hover:text-nav text-lg flex justify-center items-center text-center'>
								<span className='hidden md:block'>
									{hovered === 'Escribinos'
										? 'A farfalle@gmail.com'
										: 'Escribinos'}
								</span>
								<EmailOutlinedIcon
									className='pl-2'
									fontSize='large'
									color='secondary'
								/>
							</h5>
						</a>
					</Card>
				</div>
				<Card
					style={{
						backgroundColor: '#fefdfd',
						transition: 'background-color 0.3s',
					}}
					className='py-1 px-2 h-72 rounded-full w-9/12 mx-auto md:w-2/5 hover:opacity-90 hover:shadow-2xl shadow-black opacity-85 absolute top-0 right-4 md:right-52'
				>
					<form
						method='post'
						action='/api/enviar-email'
						className='p-4 mx-auto w-11/12 h-80 flex flex-col justify-evenly'
					>
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
							className='group relative inline-flex mb-4 h-10 items-center justify-center overflow-hidden rounded-md bg-orangeDark font-medium text-neutral-200 transition hover:bg-orange hover:scale-110'
						>
							<span className='relative'>Enviar</span>
						</button>
					</form>
				</Card>
				{/* <form
						method='post'
						action='/api/enviar-email'
						className='bg-creme shadow-2xl shadow-creme rounded-xl p-4 ml-8 w-10/12 md:w-1/2 h-80 mb-4 flex flex-col justify-evenly'
					>
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
							className='group relative inline-flex mb-2 h-10 w-1/2  mx-auto items-center justify-center overflow-hidden rounded-md bg-orangeDark px-4 font-medium text-creme transition hover:bg-orange hover:scale-110'
						>
							<span className='relative'>Enviar</span>
						</button>
					</form> */}
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
			<Footer />
		</section>
	)
}

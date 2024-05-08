import { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material'
import { Map } from './comon/Map'
import InstagramIcon from '@mui/icons-material/Instagram'
import MapIcon from '@mui/icons-material/Map'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
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
		try {
			const response = await fetch('http://localhost:5000/api/enviar-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					nombre: nombre,
					email: email,
					message: message,
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
					title: 'Error al enviar su consulta',
					text: 'A la brevedad lo estaremos solucionando, disculpe las molestias.',
				})
			}
		} catch (error) {
			console.error('Error al enviar la solicitud:', error)
			Swal.fire({
				icon: 'error',
				title: 'Error al enviar su consulta',
				text: 'A la brevedad lo estaremos solucionando, disculpe las molestias.',
			})
		}
	}

	return (
		<section className='w-full h-screen flex flex-col overflow-y-scroll pt-4 lg:pt-16 pb-32 font-thin font-serif italic text-black'>
			<div className='flex flex-col md:flex-row w-full h-fit p-2'>
				<div className='w-10/12 md:w-1/3 mx-auto mt-8 h-80 flex flex-col justify-evenly'>
					<Card className=' m-auto p-2 rounded-full w-72 hover:shadow-2xl'>
						<Link
							to='https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.'
							target='_blanck'
						>
							<h5 className='text-black hover:text-green-600 text-base sm:text-lg flex justify-center'>
								¡Estamos para asesorarte!
								<WhatsAppIcon color='success' className='pl-2' />
							</h5>
						</Link>
					</Card>
					<Card className=' m-auto p-2 rounded-xl w-72 hover:shadow-2xl'>
						<Link
							to='https://www.instagram.com/edificiofarfalle/'
							target='_blanck'
						>
							<h5 className='text-black hover:text-pink-600 text-base sm:text-lg flex justify-center'>
								Seguinos
								<InstagramIcon className='pl-2' color='error' />
							</h5>
						</Link>
					</Card>
					<Card className='m-auto p-2 rounded-xl w-72 hover:shadow-2xl '>
						<button
							onClick={openGoogleMaps}
							className='flex justify-center items-center text-center mx-auto'
						>
							<h5 className='text-black hover:text-blue-600 text-base sm:text-lg flex justify-center text-center'>
								Encontranos
								<MapIcon className='pl-2' color='info' />
							</h5>
						</button>
					</Card>
				</div>
				<form
					method='post'
					action='/api/enviar-email'
					className='bg-creme rounded-xl p-4 ml-8 w-10/12 md:w-1/3 h-96 mr-32 mb-4 flex flex-col justify-evenly'
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
						className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-black px-6 font-medium text-neutral-50 w-32 mx-auto'
					>
						<span className='absolute h-0 w-0 rounded-full bg-orangeDark transition-all duration-300 group-hover:h-56 group-hover:w-32'></span>
						<span className='relative'>Enviar</span>
					</button>
				</form>
			</div>
			<div className='h-fit md:h-600 w-11/12 text-black mx-auto flex flex-col items-center rounded-xl mt-4 mb-4'>
				{/* <h3 className='text-base text-start w-full pl-16 text-black font-semibold font-serif italic'>
					Ver en el mapa
				</h3> */}
				<div className='flex flex-col md:flex-row justify-around w-full h-fit'>
					<div className='text-xs w-full md:w-1/2 p-1 px-5 font-thin font-serif text-orangeDark italic mb-4'>
						<p className='text-base text-black p-2'>
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
					<div className='w-full md:w-1/2'>
						{loading ? <CircularProgress color='inherit' /> : <Map />}
					</div>
				</div>
			</div>
			<Footer />
		</section>
	)
}

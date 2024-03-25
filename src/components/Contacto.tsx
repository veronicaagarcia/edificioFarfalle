import InstagramIcon from '@mui/icons-material/Instagram'
import MapIcon from '@mui/icons-material/Map'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Card } from '@mui/material'
import { SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'

export function Contacto() {
	const [message, setMessage] = useState('')
	const [email, setEmail] = useState('')

	const handleMessageChange = (event: {
		target: { value: SetStateAction<string> }
	}) => {
		setMessage(event.target.value)
	}

	const handleEmailChange = (event: {
		target: { value: SetStateAction<string> }
	}) => {
		setEmail(event.target.value)
	}

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault()

		// Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
		// o usar un servicio de correo electrónico para enviar el mensaje.
		console.log('Mensaje:', message)
		console.log('Correo electrónico:', email)

		// Limpia los campos del formulario después del envío
		setMessage('')
		setEmail('')
	}
	return (
		<section
			style={{ height: 'calc(100vh - 100px)' }}
			className='w-full flex flex-col overflow-auto mt-4 lg:mt-16 font-thin font-serif italic text-black bg-gradient-to-b from-almostWhite to-orange'
		>
			<main className='flex w-full h-fit'>
				<div className='w-1/3 mx-auto h-425 flex flex-col justify-evenly'>
					<Card className='cardShadow m-auto p-2 rounded-xl w-400 hover:shadow-2xl'>
						<Link
							to='https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.'
							target='_blanck'
						>
							<h5 className='text-black hover:text-green-600 text-xs sm:text-base flex justify-center'>
								¡Estamos para asesorarte!
								<WhatsAppIcon color='inherit' className='pl-2' />
							</h5>
						</Link>
					</Card>
					<Card className='cardShadow m-auto p-2 rounded-xl w-400 hover:shadow-2xl'>
						<Link
							to='https://www.instagram.com/edificiofarfalle/'
							target='_blanck'
						>
							<h5 className='text-black hover:text-pink-600 text-xs sm:text-base flex justify-center'>
								Seguinos
								<InstagramIcon className='pl-2' />
							</h5>
						</Link>
					</Card>
					<Card className='cardShadow m-auto p-2 rounded-xl w-400 hover:shadow-2xl'>
						<Link to='/edificioFarfalle/Nosotros'>
							<h5 className='text-black hover:text-blue-600 text-xs sm:text-base flex justify-center'>
								Encontranos
								<MapIcon className='pl-2' />
							</h5>
						</Link>
					</Card>
				</div>
				<form
					className='bg-gray rounded-xl p-4 w-2/4 h-425 mr-12 flex flex-col justify-evenly'
					onSubmit={handleSubmit}
				>
					<p>En produccion</p>
					<textarea
						value={message}
						onChange={handleMessageChange}
						placeholder='Envia tu consulta aqui...'
					/>
					<input
						type='email'
						value={email}
						onChange={handleEmailChange}
						placeholder='Correo electrónico'
					/>
					<button
						className='border-2 border-orangeDark text-black p-2 w-fit rounded-xl mx-auto bg-almostWhite hover:text-orange'
						type='submit'
					>
						Enviar
					</button>
				</form>
			</main>
		</section>
	)
}

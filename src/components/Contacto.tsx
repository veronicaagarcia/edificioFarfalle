import InstagramIcon from '@mui/icons-material/Instagram'
import MapIcon from '@mui/icons-material/Map'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Card } from '@mui/material'
import { Link } from 'react-router-dom'

export function Contacto() {
	return (
		<section
			style={{ height: 'calc(100vh - 100px)' }}
			className='w-full flex flex-col overflow-auto mt-4 lg:mt-16 font-thin font-serif italic text-black bg-gradient-to-b from-almostWhite to-orange'
		>
			<main>
				<div className='w-11/12 mx-auto h-425 flex flex-col justify-evenly'>
					<Card className='cardShadow m-auto p-2 rounded-xl w-400 hover:shadow-2xl'>
						<Link
							to='https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.'
							target='_blanck'
						>
							<h5 className='text-black hover:text-slate-600 text-xs sm:text-base flex justify-center'>
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
							<h5 className='text-black hover:text-slate-600 text-xs sm:text-base flex justify-center'>
								Seguinos
								<InstagramIcon className='pl-2' />
							</h5>
						</Link>
					</Card>
					<Card className='cardShadow m-auto p-2 rounded-xl w-400 hover:shadow-2xl'>
						<Link to='/edificioFarfalle/Nosotros'>
							<h5 className='text-black hover:text-slate-600 text-xs sm:text-base flex justify-center'>
								Encontranos
								<MapIcon className='pl-2' />
							</h5>
						</Link>
					</Card>
				</div>
			</main>
		</section>
	)
}

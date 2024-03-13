import InstagramIcon from '@mui/icons-material/Instagram'
import MapIcon from '@mui/icons-material/Map'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Card, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'

export function Footer() {
	const isMobile = useMediaQuery('(max-width:640px)')
	return (
		<Card
			style={{
				backgroundColor: 'var(--orange)',
				borderTopRightRadius: '10px',
				borderTopLeftRadius: '10px',
				padding: '5px 0',
				height: 'fit',
				width: '100%',
				display: 'flex',
				justifyContent: 'space-around',
				position: 'fixed',
				bottom: '0',
			}}
		>
			<Link
				to='https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.'
				target='_blanck'
			>
				<h5 className='text-white flex flex-col md:flex-row items-center hover:text-slate-600 text-xs sm:text-base'>
					¡Estamos para asesorarte!
					<WhatsAppIcon
						color='inherit'
						style={{
							paddingLeft: '5px',
							...(isMobile && { paddingBottom: '5px', paddingLeft: '0' }),
						}}
					/>
				</h5>
			</Link>
			<Link to='https://www.instagram.com/edificiofarfalle/' target='_blanck'>
				<h5 className='text-white flex flex-col md:flex-row items-center hover:text-slate-600 text-xs sm:text-base'>
					Seguinos
					<InstagramIcon
						style={{
							paddingLeft: '5px',
							...(isMobile && { paddingBottom: '5px', paddingLeft: '0' }),
						}}
					/>
				</h5>
			</Link>
			<Link to='/Nosotros'>
				<h5 className='text-white flex flex-col md:flex-row items-center hover:text-slate-600 text-xs sm:text-base'>
					Encontranos
					<MapIcon
						style={{
							paddingLeft: '5px',
							...(isMobile && { paddingBottom: '5px', paddingLeft: '0' }),
						}}
					/>
				</h5>
			</Link>
		</Card>
	)
}

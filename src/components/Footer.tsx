import InstagramIcon from '@mui/icons-material/Instagram'
import MapIcon from '@mui/icons-material/Map'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Link } from 'react-router-dom'

export function Footer() {
	return (
		<footer className='footer'>
			<div
				style={{
					color: 'var(--black)',
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<Link to='/'>
					<WhatsAppIcon color='inherit' />
				</Link>
				<Link to='https://www.instagram.com/edificiofarfalle/' target='_blanck'>
					<InstagramIcon />
				</Link>
				<MapIcon />
			</div>
		</footer>
	)
}

import { Link } from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import MapIcon from '@mui/icons-material/Map'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

export function Footer() {
	const openGoogleMaps = () => {
		window.open(
			'https://www.google.com/maps?q=-34.94458185270848,-57.963126869810374'
		)
	}
	return (
		<section
			className={`w-full h-fit static bottom-0 -mb-6 px-1 md:px-2 py-2 md:py-4 flex font-thin font-serif italic text-black bg-gradient-to-b via-creme from-almostWhite to-nav`}
		>
			<div className='w-full md:w-10/12 mx-auto flex items-center justify-between'>
				<div className='flex flex-col md:flex-row justify-between w-2/3 py-1 md:py-0'>
					<div className='text-xs w-1/3 md:justify-evenly hidden md:flex'>
						<FontAwesomeIcon icon={faLocationDot} /> Calle 62, nº 1770, La Plata
					</div>
					<div className='text-xs w-1/3 md:justify-evenly hidden md:flex'>
						<FontAwesomeIcon icon={faPhone} /> +5492216342322
					</div>
					<div className='text-xs w-full md:w-1/3 flex justify-evenly'>
						<FontAwesomeIcon icon={faEnvelope} /> farfalle@gmail.com
					</div>
				</div>
				<div className='flex w-1/3 justify-evenly'>
					<Link
						to='https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.'
						target='_blanck'
						className='hover:text-green-900 mr-4'
					>
						<WhatsAppIcon fontSize='small' />
					</Link>

					<Link
						to='https://www.instagram.com/edificiofarfalle/'
						target='_blanck'
						className=' hover:text-fuchsia-800 mr-4'
					>
						<InstagramIcon fontSize='small' />
					</Link>

					<button onClick={openGoogleMaps} className='hover:text-blue-900'>
						<MapIcon fontSize='small' />
					</button>
				</div>
			</div>
		</section>
	)
}

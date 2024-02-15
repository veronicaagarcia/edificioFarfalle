import { Link } from 'react-router-dom'
import logoFarfalle from '../assets/logo.gif'
export function Navbar() {
	return (
		<nav className='header'>
			<div>
				<img
					width={70}
					height={70}
					src={logoFarfalle}
					alt='logo edificio Farfalle'
				/>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '48vw',
					justifyContent: 'space-around',
				}}
			>
				<Link className='linkNav' to={'/'}>
					Principal
				</Link>
				<Link className='linkNav' to={'/Nosotros'}>
					Nosotros
				</Link>
				<Link className='linkNav' to={'/Departamentos'}>
					Departamentos
				</Link>
			</div>
		</nav>
	)
}

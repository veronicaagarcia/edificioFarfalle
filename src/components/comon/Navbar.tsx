/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { FaCalendarCheck } from 'react-icons/fa'
import logoFarfalle from '../../assets/222.png'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'

interface NavLinkProps {
	to?: string
	exact?: boolean
	activeClassName?: string
	className?: string
	children: ReactNode
	onClick?: () => void
}

interface NavbarProps {
	sectionTopRef: React.MutableRefObject<null>
	isMobile: boolean
	sectionReservasRef: React.MutableRefObject<HTMLDivElement | null>
}

export function Navbar({
	sectionTopRef,
	isMobile,
	sectionReservasRef,
}: NavbarProps) {
	const [openCloseMenu, setOpenCloseMenu] = useState(false)

	function NavLink({
		to,
		exact,
		activeClassName,
		className,
		children,
		onClick,
	}: NavLinkProps) {
		const location = useLocation()
		const isActive = to
			? exact
				? location.pathname === to
				: location.pathname.startsWith(to)
			: false
		const departamentosRoutes = [
			'/edificioFarfalle/Departamentos/Pb-A',
			'/edificioFarfalle/Departamentos/Pb-B',
			'/edificioFarfalle/Departamentos/1-A',
			'/edificioFarfalle/Departamentos/1-B',
			'/edificioFarfalle/Departamentos/2-B',
		]

		const isDepartamentosActive = departamentosRoutes.some(
			(route) => location.pathname === route
		)
		const isLinkActive =
			(isActive && !isDepartamentosActive) ||
			(to === '/edificioFarfalle/Departamentos' && isDepartamentosActive)

		const handleClick = () => {
			setOpenCloseMenu(false)
			if (onClick) {
				onClick()
			}
		}
		return to ? (
			<Link
				to={to}
				className={`${className} ${isLinkActive ? activeClassName : ''}`}
				onClick={handleClick}
			>
				{children}
			</Link>
		) : (
			<span className={className} onClick={handleClick}>
				{children}
			</span>
		)
	}

	const handleOpenCloseMenu = () => {
		setOpenCloseMenu(!openCloseMenu)
	}

	const navigate = useNavigate()

	const handleReservasClick = () => {
		navigate('/edificioFarfalle/')
		setTimeout(() => {
			if (sectionReservasRef.current) {
				sectionReservasRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}, 100) // Ajusta el tiempo de espera según sea necesario
		setOpenCloseMenu(false)
	}

	return (
		<Card
			ref={sectionTopRef}
			id='top'
			style={{
				height: isMobile ? '14vh' : '18vh',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				position: 'relative',
				top: '0',
				overflow: 'visible',
			}}
		>
			<div
				className={`flex flex-col w-full h-full ${
					isMobile
						? `justify-center items-start`
						: `items-center justify-center`
				}`}
			>
				<img
					className={`animate-pulse -mt-2 ${
						isMobile ? `h-auto w-40 mb-5 -mt-4` : `h-auto w-200`
					}`}
					src={logoFarfalle}
					alt='Logo mariposa'
					loading='lazy'
				/>
				<h1
					className={`font-great-vibes ${
						isMobile ? `-mt-16 ml-4 text-xl` : `-mt-16 text-3xl`
					} pb-2`}
				>
					Edificio Farfalle
				</h1>
			</div>

			<div
				className={`${
					isMobile
						? `h-fit absolute bottom-1/4 flex flex-col self-end justify-center p-2 gap-2${
								openCloseMenu
									? 'w-36 h-fit z-50 absolute top-0 border-transparent rounded-tl-xl rounded-bl-xl right-0 p-5 shadow-sm bg-nav pb-36 pt-5'
									: 'w-16 h-16 my-auto mr-3'
						  }`
						: 'flex items-center w-full bg-nav justify-around p-2 rounded-xl rounded-tl-none rounded-tr-none -mb-2 z-10'
				}`}
			>
				{isMobile ? (
					<button
						className='h-fit mt-2 w-36 flex justify-end'
						onClick={handleOpenCloseMenu}
					>
						{openCloseMenu ? (
							<img
								src={close}
								className='h-4 mb-14'
								loading='lazy'
								title='Cerrar'
							/>
						) : (
							<img src={menu} className='h-4' loading='lazy' title='Menú' />
						)}
					</button>
				) : (
					''
				)}
				<NavLink
					className={`${
						isMobile
							? `text-white hover:text-orange ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:text-orange text-base'
					}`}
					activeClassName='text-amber-600'
					onClick={handleReservasClick}
				>
					<FaCalendarCheck
						className='mr-2 cursor-pointer'
						title='Consultar disponibilidad'
					/>
				</NavLink>
				<NavLink
					className={`${
						isMobile
							? `text-white hover:text-orange ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:text-orange text-base'
					}`}
					activeClassName='text-amber-600'
					exact
					to={'/edificioFarfalle/'}
				>
					Principal
				</NavLink>
				<NavLink
					className={`${
						isMobile
							? `text-white hover:text-orange ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:text-orange text-base'
					}`}
					activeClassName='text-amber-600'
					exact
					to={'/edificioFarfalle/Departamentos'}
				>
					Departamentos
				</NavLink>
				<NavLink
					className={`${
						isMobile
							? `text-white hover:text-orange ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:text-orange text-base'
					}`}
					activeClassName='text-amber-600'
					exact
					to={'/edificioFarfalle/Servicios'}
				>
					Servicios
				</NavLink>
				<NavLink
					className={`${
						isMobile
							? `text-white hover:text-orange ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:text-orange text-base'
					}`}
					activeClassName='text-amber-600'
					exact
					to={'/edificioFarfalle/Contacto'}
				>
					Contacto
				</NavLink>
				<a
					href='https://api.whatsapp.com/send?phone=542216342322&text=Hola%20Mat%C3%ADas!%20Quero%20m%C3%A1s%20info%20sobre%20el%20alquiler%20temporario.'
					target='_blank'
					rel='noopener noreferrer'
					className={`${
						isMobile
							? `text-white hover:text-green-900 ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:text-green-900 text-base'
					}`}
				>
					<WhatsAppIcon fontSize='small' />
				</a>
			</div>
		</Card>
	)
}

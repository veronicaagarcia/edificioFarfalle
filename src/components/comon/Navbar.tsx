/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Card } from '@mui/material'
import logoFarfalle from '../../assets/222.png'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'

interface NavLinksProps {
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
}

export function Navbar({ sectionTopRef, isMobile }: NavbarProps) {
	const [openCloseMenu, setOpenCloseMenu] = useState(false)

	function NavLinks({
		to,
		exact,
		activeClassName,
		className,
		children,
		onClick,
	}: NavLinksProps) {
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
			<NavLink
				to={to}
				className={`${className} ${isLinkActive && activeClassName}`}
				onClick={handleClick}
			>
				{children}
			</NavLink>
		) : (
			<span className={className} onClick={handleClick}>
				{children}
			</span>
		)
	}

	const handleOpenCloseMenu = () => {
		setOpenCloseMenu(!openCloseMenu)
	}

	return (
		<Card
			ref={sectionTopRef}
			id='top'
			style={{
				height: isMobile ? '18vh' : '22vh',
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
						isMobile ? `h-auto w-44 mb-5 -mt-4 -ml-2` : `h-auto w-[220px] -mt-10`
					}`}
					src={logoFarfalle}
					alt='Logo mariposa'
					loading='lazy'
				/>
				<h1
					className={`font-great-vibes text-black ${
						isMobile ? `-mt-16 ml-4 text-2xl` : `-mt-16 text-4xl`
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
									? 'w-36 h-screen z-50 absolute top-0 border-transparent rounded-tl-xl rounded-bl-xl right-0 p-5 shadow-sm bg-orange pb-36 pt-5'
									: 'w-16 h-16 my-auto mr-3'
						  }`
						: 'flex items-center w-full bg-gradient-to-b from-orange to-nav justify-around py-6 px-10  -mb-2 z-10'
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
				<NavLinks
					className={`${
						isMobile
							? `text-white hover:text-black ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:scale-110 hover:drop-shadow-lg text-lg font-semibold'
					}`}
					activeClassName='text-black'
					exact
					to={'/edificioFarfalle/'}
				>
					Inicio
				</NavLinks>
				<p className='hidden sm:block text-white text-xl font-semibold'>|</p>
				<NavLinks
					className={`${
						isMobile
							? `text-white hover:text-black ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:scale-110 hover:drop-shadow-lg text-lg font-semibold'
					}`}
					activeClassName='text-black'
					exact
					to={'/edificioFarfalle/Departamentos'}
				>
					Departamentos
				</NavLinks>
				<p className='hidden sm:block text-white text-xl font-semibold'>|</p>
				<NavLinks
					className={`${
						isMobile
							? `text-white hover:text-black ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:scale-110 hover:drop-shadow-lg text-lg font-semibold'
					}`}
					activeClassName='text-black'
					exact
					to={'/edificioFarfalle/Servicios'}
				>
					Servicios
				</NavLinks>
				<p className='hidden sm:block text-white text-xl font-semibold'>|</p>
				<NavLinks
					className={`${
						isMobile
							? `text-white hover:text-black ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:scale-110 hover:drop-shadow-lg text-lg font-semibold'
					}`}
					activeClassName='text-black'
					exact
					to={'/edificioFarfalle/Contacto'}
				>
					Contacto
				</NavLinks>
				<p className='hidden sm:block text-white text-xl font-semibold'>|</p>
				<NavLinks
					className={`${
						isMobile
							? `text-white hover:text-black ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-white hover:scale-110 hover:drop-shadow-lg text-lg font-semibold'
					}`}
					activeClassName='text-black'
					exact
					to={'/edificioFarfalle/Reservas'}
				>
					Reservas
				</NavLinks>
			</div>
		</Card>
	)
}

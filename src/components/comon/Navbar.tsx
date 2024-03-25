/* eslint-disable no-mixed-spaces-and-tabs */
import { ReactNode } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Card, useMediaQuery } from '@mui/material'
import logoFarfalle from '../../assets/222.png'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'
// import { Principal } from '../Principal'

interface NavLinkProps {
	to: string
	exact?: boolean
	activeClassName?: string
	className?: string
	children: ReactNode
	onClick?: () => void
}

interface NavbarProps {
	sectionTopRef: React.MutableRefObject<null>
}

export function Navbar({ sectionTopRef }: NavbarProps) {
	const [isOpenDepartments, setIsOpenDepartments] = useState(false)
	const [openCloseMenu, setOpenCloseMenu] = useState(false)
	const isMobile = useMediaQuery('(max-width:640px)')

	// const location = useLocation()

	// useEffect(() => {
	// 	setOpenCloseMenu(false)
	// }, [location])

	function NavLink({
		to,
		exact,
		activeClassName,
		className,
		children,
		onClick,
	}: NavLinkProps) {
		const location = useLocation()
		const isActive = exact
			? location.pathname === to
			: location.pathname.startsWith(to)

		const handleClick = () => {
			if (onClick) {
				onClick()
			}
			handleCloseDepartments()
		}
		return (
			<Link
				to={to}
				className={`${className} ${isActive ? activeClassName : ''}`}
				onClick={handleClick}
			>
				{children}
			</Link>
		)
	}

	const handleOpenCloseMenu = () => {
		setOpenCloseMenu(!openCloseMenu)
		setIsOpenDepartments(false)
	}
	const handleCloseDepartments = () => {
		setIsOpenDepartments(false)
	}

	return (
		<Card
			ref={sectionTopRef}
			id='top'
			style={{
				height: '60px',
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				position: 'relative',
				top: '0',
				overflow: 'visible',
			}}
		>
			{/* <Principal sectionTopRef={sectionTopRef} /> */}
			<div className='flex items-center pt-2 text-orange w-2/12'>
				<img
					width={200}
					height={170}
					src={logoFarfalle}
					alt='logo edificio Farfalle'
				/>
				{/* <h1 className='text-3xl'>Farfalle</h1> */}
			</div>

			<div
				className={`${
					isMobile
						? `h-fit flex flex-col self-end justify-center p-2 gap-2${
								openCloseMenu
									? 'w-36 h-fit z-20 absolute top-0 border-transparent rounded-xl right-0 p-5 shadow-sm bg-almostWhite pb-36 pt-5'
									: 'w-16 h-16 my-auto mr-3'
						  }`
						: 'flex items-center w-8/12 justify-around p-4'
				}`}
			>
				{' '}
				{isMobile ? (
					<button
						className='h-fit mt-2 w-36 flex justify-end'
						onClick={handleOpenCloseMenu}
					>
						{openCloseMenu ? (
							<img src={close} className='h-4 ' />
						) : (
							<img src={menu} className='h-4' />
						)}
					</button>
				) : (
					''
				)}
				<NavLink
					className={`${
						isMobile
							? `text-orangeDark hover:text-slate-600 ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-orangeDark hover:text-slate-600 text-xl md:text-2xl lg:text-3xl'
					}`}
					activeClassName='font-bold'
					exact
					to={'/edificioFarfalle/'}
				>
					Principal
				</NavLink>
				<NavLink
					className={`${
						isMobile
							? `text-orangeDark hover:text-slate-600 ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-orangeDark hover:text-slate-600 text-xl md:text-2xl lg:text-3xl'
					}`}
					activeClassName='font-bold'
					exact
					to={'/edificioFarfalle/Nosotros'}
				>
					Nosotros
				</NavLink>
				<div className='relative group'>
					<button
						className={`${
							isMobile
								? `text-orangeDark hover:text-slate-600 ${
										openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
								  }`
								: 'focus:outline-none text-orangeDark hover:text-slate-600 text-xl md:text-2xl lg:text-3xl'
						}`}
						onClick={() => setIsOpenDepartments(!isOpenDepartments)}
					>
						Departamentos
					</button>
					{isOpenDepartments && (
						<div
							className={`${
								isMobile
									? 'absolute z-50 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg left-0'
									: 'w-44 mt-2 absolute z-10 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg left-0'
							}`}
						>
							<NavLink
								className='block px-4 py-2 text-orangeDark hover:text-slate-600 text-lg md:text-xl lg:text-2xl'
								activeClassName='font-bold'
								exact
								to='/edificioFarfalle/Departamentos/Pb-A'
							>
								Planta baja A
							</NavLink>
							<NavLink
								className='block px-4 py-2 text-orangeDark hover:text-slate-600 text-lg md:text-xl lg:text-2xl'
								activeClassName='font-bold'
								exact
								to='/edificioFarfalle/Departamentos/Pb-B'
							>
								Planta baja B
							</NavLink>
							<NavLink
								className='block px-4 py-2 text-orangeDark hover:text-slate-600 text-lg md:text-xl lg:text-2xl'
								activeClassName='font-bold'
								exact
								to='/edificioFarfalle/Departamentos/1-A'
							>
								Primero A
							</NavLink>
							<NavLink
								className='block px-4 py-2 text-orangeDark hover:text-slate-600 text-lg md:text-xl lg:text-2xl'
								activeClassName='font-bold'
								exact
								to='/edificioFarfalle/Departamentos/1-B'
							>
								Primero B
							</NavLink>
							<NavLink
								className='block px-4 py-2 text-orangeDark hover:text-slate-600 text-lg md:text-xl lg:text-2xl'
								activeClassName='font-bold'
								exact
								to='/edificioFarfalle/Departamentos/2-B'
							>
								Segundo B
							</NavLink>
							<NavLink
								className='block px-4 py-2 text-orangeDark hover:text-slate-600 text-lg md:text-xl lg:text-2xl'
								activeClassName='font-bold'
								exact
								to='/edificioFarfalle/ZonasComunes'
							>
								Zonas comunes
							</NavLink>
						</div>
					)}
				</div>
				<NavLink
					className={`${
						isMobile
							? `text-orangeDark hover:text-slate-600 ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-orangeDark hover:text-slate-600 text-xl md:text-2xl lg:text-3xl'
					}`}
					activeClassName='font-bold'
					exact
					to={'/edificioFarfalle/Servicios'}
				>
					Servicios
				</NavLink>
				<NavLink
					className={`${
						isMobile
							? `text-orangeDark hover:text-slate-600 ${
									openCloseMenu ? 'justify-end pb-6 pt-6' : 'hidden'
							  }`
							: 'text-orangeDark hover:text-slate-600 text-xl md:text-2xl lg:text-3xl'
					}`}
					activeClassName='font-bold'
					exact
					to={'/edificioFarfalle/Contacto'}
				>
					Contacto
				</NavLink>
			</div>
		</Card>
	)
}

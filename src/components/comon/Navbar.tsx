import { ReactNode } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Card, Typography, useMediaQuery } from '@mui/material'
import logoFarfalle from '../../assets/logo.gif'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'

interface NavLinkProps {
	to: string
	exact?: boolean
	activeClassName?: string
	className?: string
	children: ReactNode
}

export function Navbar() {
	function NavLink({
		to,
		exact,
		activeClassName,
		className,
		children,
	}: NavLinkProps) {
		const location = useLocation()
		const isActive = exact
			? location.pathname === to
			: location.pathname.startsWith(to)

		return (
			<Link
				to={to}
				className={`${className} ${isActive ? activeClassName : ''}`}
			>
				{children}
			</Link>
		)
	}

	const [openClose, setOpenClose] = useState(false)
	const handleAsideOpenClose = () => {
		setOpenClose(!openClose)
	}

	const isMobile = useMediaQuery('(max-width:640px)')
	return (
		<Card
			style={{
				backgroundColor: 'var(--background-body)',
				height: '60px',
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				position: 'fixed',
				top: '0',
				...(isMobile && {
					position: 'relative',
					overflow: 'visible',
				}),
			}}
		>
			<div className='flex items-center text-orange'>
				<img
					style={{ ...(isMobile && { width: '60px', height: '60px' }) }}
					width={70}
					height={70}
					src={logoFarfalle}
					alt='logo edificio Farfalle'
				/>
				<Typography component='h1'>FARFALLE</Typography>
			</div>
			{/* NAVBAR XS */}
			<div
				className={`sm:hidden h-fit flex flex-col self-end justify-center p-2 gap-2${
					openClose
						? 'w-36 h-fit z-20 absolute top-2 border-transparent rounded-xl right-0 p-2 shadow-sm bg-almostWhite'
						: 'w-16 h-16'
				}`}
			>
				<button
					className='h-fit mt-2 w-36 flex justify-end'
					onClick={handleAsideOpenClose}
				>
					{openClose ? (
						<img src={close} className='h-4 ' />
					) : (
						<img src={menu} className='h-4' />
					)}
				</button>
				<NavLink
					className={`text-orangeDark hover:text-slate-600 ${
						openClose ? 'justify-end pb-6 pt-6' : 'hidden'
					}`}
					activeClassName='font-bold shadow-sm border-2'
					exact
					to={'/edificioFarfalle/'}
				>
					Principal
				</NavLink>
				<NavLink
					className={`text-orangeDark hover:text-slate-600 ${
						openClose ? 'justify-end pb-6' : 'hidden'
					}`}
					activeClassName='font-bold shadow-sm'
					exact
					to={'/edificioFarfalle/Departamentos'}
				>
					Departamentos
				</NavLink>
				<NavLink
					className={`text-orangeDark hover:text-slate-600 ${
						openClose ? 'justify-end pb-6' : 'hidden'
					}`}
					activeClassName='font-bold shadow-sm'
					exact
					to={'/edificioFarfalle/Nosotros'}
				>
					Nosotros
				</NavLink>
			</div>
			{/* NAVBAR CUANDO ESTOY EN MD */}
			<div className='hidden sm:flex items-center w-2/3 justify-around p-4'>
				<NavLink
					className='text-orangeDark hover:text-slate-600'
					activeClassName='font-bold shadow-sm'
					exact
					to={'/edificioFarfalle/'}
				>
					Principal
				</NavLink>
				<NavLink
					className='text-orangeDark hover:text-slate-600'
					activeClassName='font-bold shadow-sm'
					exact
					to={'/edificioFarfalle/Departamentos'}
				>
					Departamentos
				</NavLink>
				<NavLink
					className='text-orangeDark hover:text-slate-600'
					activeClassName='font-bold shadow-sm'
					exact
					to={'/edificioFarfalle/Nosotros'}
				>
					Nosotros
				</NavLink>
			</div>
		</Card>
	)
}

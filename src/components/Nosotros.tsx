import { useState, useEffect } from 'react'
import { Card, CircularProgress } from '@mui/material'
import { Map } from '../components/Map'

export function Nosotros(): JSX.Element {
	const [loading, setLoading] = useState(true)
	const [showFullText, setShowFullText] = useState(false)

	const toggleFullText = () => {
		setShowFullText(!showFullText)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<section
			style={{ marginTop: '60px' }}
			className='w-full flex flex-col sm:h-80v lg:h-70v'
		>
			<h2 className='text-orange font-semibold text-center p-2 underline'>
				NOSOTROS
			</h2>
			<Card
				className='cardShadow h-200 p-2'
				style={{
					width: '75vw',
					margin: 'auto',
					padding: '15px',
					overflow: 'auto',
				}}
			>
				<p className='text-sm mb-2'>
					El Farfalle ofrece alojamiento en La Plata, a 5,1 km del estadio
					Ciudad de La Plata, a 5,9 km del Museo de la Plata y a 3,7 km de la
					catedral de La Plata. Hay estacionamiento privado y wifi gratis en
					todas las instalaciones.
				</p>
				<button
					className='w-full text-sm text-slate-600 hover:text-orange'
					onClick={toggleFullText}
				>
					{showFullText ? 'Mostrar menos' : 'Mostrar más'}
				</button>
				<p className={`${showFullText ? 'flex text-sm mb-2' : 'hidden'}`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
					accusantium similique. Praesentium earum itaque provident ut, odio
					dolores dicta voluptate voluptas quae magnam minus optio
				</p>
				<p className={`${showFullText ? 'flex text-sm mb-2' : 'hidden'}`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
					repellendus rem temporibus enim nemo!
				</p>
			</Card>
			<div className='h-fit w-10/12 lg:w-3/5 m-auto flex flex-col items-center rounded-xl bg-creme p-2 opacity-90 mt-4 '>
				<h3 className='text-base text-orangeDark'>Ver en el mapa</h3>
				{loading ? <CircularProgress color='inherit' /> : <Map />}
				<p className='text-xs p-1'>1770 Calle 62, 1904 La Plata, Argentina</p>
			</div>
		</section>
	)
}

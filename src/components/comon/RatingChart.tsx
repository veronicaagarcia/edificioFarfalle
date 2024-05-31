import { useEffect } from 'react'
import Chart from 'chart.js/auto'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa' // Importa los iconos de estrellas desde react-icons
import { RiStarSmileFill } from 'react-icons/ri'
import booking from '../../assets/booking.png'
import airbnb from '../../assets/aibnb.png'
import { Link } from 'react-router-dom'

const StarRating = ({
	score,
	maxScore,
}: {
	score: number
	maxScore: number
}) => {
	const stars = []
	const totalStars = 5 // Total de estrellas a mostrar

	// Calcular la fracción del puntaje en relación al máximo
	const fraction = (score / maxScore) * totalStars

	// Llenar estrellas según la fracción
	for (let i = 0; i < totalStars; i++) {
		if (i < Math.floor(fraction)) {
			stars.push(
				<RiStarSmileFill key={i} className='w-6 h-6 text-yellow-500' />
			)
		} else if (i === Math.floor(fraction) && fraction % 1 !== 0) {
			// Si es la última estrella y la fracción no es un número entero,
			// entonces consideramos el porcentaje restante
			const remainingPercentage = (fraction % 1) * 100
			if (remainingPercentage >= 70) {
				// Si el porcentaje restante es 70% o más, usamos el icono de estrella llena
				stars.push(<FaStar key={i} className='w-6 h-6 text-yellow-500' />)
			} else if (remainingPercentage >= 1) {
				// Si el porcentaje restante está entre 1% y 69%, usamos el icono de estrella a la mitad
				stars.push(
					<FaStarHalfAlt key={i} className='w-6 h-6 text-yellow-500' />
				)
			} else {
				// Si el porcentaje restante es 0, usamos el icono de estrella vacía
				stars.push(<FaRegStar key={i} className='w-6 h-6 text-yellow-500' />)
			}
		} else {
			// Si la estrella está vacía
			stars.push(<FaRegStar key={i} className='w-6 h-6 text-yellow-500' />)
		}
	}

	return <div className='flex space-x-1'>{stars}</div>
}

const BookingRatingChart = () => {
	const score = 9.9
	const maxScore = 10

	useEffect(() => {
		const ctx = document.getElementById(
			'bookingChart'
		) as HTMLCanvasElement | null

		if (ctx) {
			new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ['Score'],
					datasets: [
						{
							label: 'Score',
							data: [score, maxScore - score],
							backgroundColor: ['rgba(5, 99, 193, 1)', 'rgba(0, 0, 0, 0.1)'],
						},
					],
				},
				options: {
					cutout: '70%', // Tamaño del corte del círculo
					plugins: {
						legend: {
							display: false, // Ocultar la leyenda
						},
						tooltip: {
							enabled: false, // Deshabilitar los tooltips
						},
					},
				},
			})
		}
	}, [])

	return (
		<div className='flex flex-col justify-center items-center'>
			<h2 className='text-xs md:text-base text-blue-700'>
				Excepcional - Booking
				<span className='pl-2 text-xs md:text-base text-blue-700'>
					{score.toFixed(1)}
				</span>
			</h2>
			<StarRating score={score} maxScore={maxScore} />
			<Link
				to='https://www.booking.com/hotel/ar/farfalle.es-ar.html#tab-reviews'
				target='_blanck'
				title='Ver reseñas'
			>
				<img src={booking} className='w-20 h-auto rounded-lg mt-4' />
			</Link>
		</div>
	)
}

const AirbnbRatingChart = () => {
	const score = 5.0
	const maxScore = 5.0

	useEffect(() => {
		const ctx = document.getElementById(
			'airbnbChart'
		) as HTMLCanvasElement | null

		if (ctx) {
			new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ['Score'],
					datasets: [
						{
							label: 'Score',
							data: [score, maxScore - score],
							backgroundColor: ['rgba(255, 90, 95, 1)', 'rgba(0, 0, 0, 0.1)'],
						},
					],
				},
				options: {
					cutout: '70%', // Tamaño del corte del círculo
					plugins: {
						legend: {
							display: false, // Ocultar la leyenda
						},
						tooltip: {
							enabled: false, // Deshabilitar los tooltips
						},
					},
				},
			})
		}
	}, [])

	return (
		<div className='flex flex-col justify-center items-center'>
			<h2 className='text-xs md:text-base text-red-600'>
				Superanfitrión - Airbnb
				<span className='pl-2 text-xs md:text-base text-red-600'>
					{score.toFixed(1)}
				</span>
			</h2>
			<StarRating score={score} maxScore={maxScore} />
			<Link
				to='https://es-l.airbnb.com/rooms/54102302/reviews?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-05-20&check_out=2024-05-25&source_impression_id=p3_1715699031_Nw6dgILYkxqsos2D&previous_page_section_name=1000&federated_search_id=8006342d-5149-4a1a-bf03-1ebed305d08a'
				target='_blanck'
				title='Ver reseñas'
			>
				<img src={airbnb} className='w-12 h-auto rounded-lg mt-4' />
			</Link>
		</div>
	)
}

export function RatingCharts() {
	return (
		<>
			<div className='w-full mx-auto h-fit bg-black opacity-60 rounded-lg p-2'>
				<h3 className='text-center font-semibold text-lg md:text-xl text-white mb-2'>
					Reseñas
				</h3>
				<div className='flex flex-col md:flex-row justify-evenly'>
					<BookingRatingChart />
					<AirbnbRatingChart />
				</div>
				<p className='pt-2 text-xs text-center w-full font-extralight text-gray'>
					Reviews score 14 mayo 2024
				</p>
			</div>
		</>
	)
}

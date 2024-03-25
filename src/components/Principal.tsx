import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
// import { CarouselImg } from './comon/Carousel'
// import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import { useRef } from 'react'

interface PrincipalProps {
	sectionTopRef: React.MutableRefObject<HTMLDivElement | null>
}

export function Principal({ sectionTopRef }: PrincipalProps) {
	const arrayPhotos = [
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/478872983.jpg?k=b3ae07da65bb39dd2956c82918cd3601bdccb9492362b36be85a842697949bb2&o=&hp=1',
			title: 'Contrafrente del edificio',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518591872.jpg?k=ab1a0a33e6078b352c2f6e0c48b7a4247257461a671841d7779dddf430c55535&o=&hp=1',
			title: 'Frente del edificio',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433392854.jpg?k=3ee6d04326997d3ed092a2a45e74d8213bc902d7cd903c623fa49a624cae0d18&o=&hp=1',
			title: 'Pasillo a la cochera',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518591845.jpg?k=7c43b9a2fef2686fa1124e2027d97d38c0884ea42c42cf5e8e7a2fbff815bd5c&o=&hp=1',
			title: 'Escaleras internas desde arriba',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433393030.jpg?k=f1e7d6302d8bade2a7fe77ad19d076d8685c8be373cf787d7baa1c00edf5619c&o=&hp=1',
			title: 'Cochera',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518591846.jpg?k=84dc94bda00a2d53c3268ffb812d34c9216525c03c3d60bf9618452cc8a2a461&o=&hp=1',
			title: 'Escaleras internas',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518591810.jpg?k=100198841408ff28e9451d954493b535450e7983a08f903b5aa9f1ea061be5b2&o=&hp=1',
			title: 'Cochera desde arriba',
		},
		{
			img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/474623212.jpg?k=9db3d1b4597a171051d7c27292b24f4081dbdd4b1cee9d25d0410a092b516e3a&o=&hp=1',
			title: 'Cartel bienvenida',
		},
	]
	// const [openCloseImg, setOpenCloseImg] = useState(false)
	// const [showThumbs, setShowThumbs] = useState(false)

	// const handleClick = () => {
	// 	setOpenCloseImg(!openCloseImg)
	// 	setShowThumbs(!openCloseImg)
	// 	console.log(showThumbs)
	// }
	const sectionReservasRef = useRef<HTMLDivElement>(null)
	// const sectionTopRef = useRef<HTMLDivElement>(null)

	const handleClick = () => {
		const sectionReservas = sectionReservasRef.current
		if (sectionReservas) {
			sectionReservas.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleToTop = () => {
		const sectionTop = sectionTopRef.current
		if (sectionTop) {
			sectionTop.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-arround overflow-y-auto'>
			<h2 className='text-black text-center text-4xl mt-6 mb-4'>
				Edificio Farfalle
			</h2>
			{/* <CarouselImg /> */}
			<section className={`relative h-315 w-full max-w-full overflow-hidden`}>
				<Carousel
					className={`w-full h-315`}
					autoPlay
					infiniteLoop
					interval={3000}
					showArrows={false}
					// centerMode={true}
					showThumbs={false}
					showStatus={false}
					showIndicators={false}
					// renderArrowPrev={(onClickHandler, hasPrev) =>
					// 	hasPrev && (
					// 		<button
					// 			type='button'
					// 			onClick={onClickHandler}
					// 			title='Anterior'
					// 			className='absolute border-2 top-0 left-0 z-10 p-2 h-full'
					// 		>
					// 			<svg
					// 				xmlns='http://www.w3.org/2000/svg'
					// 				className='h-8 w-8 text-orangeDark border-2 p-1 hover:text-opacity-25'
					// 				fill='none'
					// 				viewBox='0 0 24 24'
					// 				stroke='currentColor'
					// 			>
					// 				<path
					// 					strokeLinecap='round'
					// 					strokeLinejoin='round'
					// 					strokeWidth={2}
					// 					d='M15 19l-7-7 7-7'
					// 				/>
					// 			</svg>
					// 		</button>
					// 	)
					// }
					// renderArrowNext={(onClickHandler, hasNext) =>
					// 	hasNext && (
					// 		<button
					// 			type='button'
					// 			onClick={onClickHandler}
					// 			title='Siguiente'
					// 			className='absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 border-2'
					// 		>
					// 			<svg
					// 				xmlns='http://www.w3.org/2000/svg'
					// 				className='h-8 w-8 text-orangeDark border-2 p-1 hover:text-opacity-25'
					// 				fill='none'
					// 				viewBox='0 0 24 24'
					// 				stroke='currentColor'
					// 			>
					// 				<path
					// 					strokeLinecap='round'
					// 					strokeLinejoin='round'
					// 					strokeWidth={2}
					// 					d='M9 5l7 7-7 7'
					// 				/>
					// 			</svg>
					// 		</button>
					// 	)
					// }
				>
					{arrayPhotos.map((item) => (
						<div key={item.img} className=' w-full h-600'>
							<img
								className={`h-425 aspect-video object-cover`}
								src={item.img}
								alt={item.title}
								loading='lazy'
							/>
						</div>
					))}
				</Carousel>
			</section>
			<div className='mt-8 w-full text-white text-center mb-8 '>
				<h2 className='text-black font-thin font-serif italic  text-base lg:text-lg mb-1'>
					Consulte por reservas
				</h2>
				<FaChevronDown
					onClick={handleClick}
					id='chevronDown'
					className='text-3xl text-orange animate-bounce mx-auto cursor-pointer'
				/>
			</div>
			<section
				ref={sectionReservasRef}
				id='reservas'
				className=' w-full h-425 mt-20 relative overflow-y-scroll bg-gray'
			>
				<h3 className='text-center font-sans pt-12'>
					ACA VA LOGICA DE CONSULTA DE RESERVAS
				</h3>
				<p className='text-center font-sans pt-12'>Produccion</p>
				<div className='text-center mt-4'>
					<FaChevronUp
						onClick={handleToTop}
						className='mt-8 text-3xl text-orange mx-auto cursor-pointer absolute bottom-0 w-full text-end '
					/>
				</div>
			</section>
		</div>
	)
}

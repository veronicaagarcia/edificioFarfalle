// import { useState } from 'react'
// import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { VideoModel } from './VideoModel'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
// import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
// import { Footer } from './Footer'

// export function DeptoModel({
// 	numVideos,
// 	videoNames,
// 	imageNames,
// 	videoSizeMultiplier,
// 	onClose,
// }: {
// 	numVideos: number
// 	videoNames: string[]
// 	imageNames: string[]
// 	videoSizeMultiplier: number
// 	onClose: () => void // Propiedad para manejar el cierre del componente
// }) {
// 	const videoComponents: JSX.Element[] = []
// 	const [isImageBig, setIsImageBig] = useState<boolean>(false)
// 	for (let i = 0; i < numVideos; i++) {
// 		if (i < videoNames.length) {
// 			const videoName = videoNames[i]
// 			videoComponents.push(
// 				<VideoModel
// 					key={i}
// 					video={videoName}
// 					videoSizeMultiplier={videoSizeMultiplier}
// 				/>
// 			)
// 		}
// 	}

// 	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
// 		null
// 	)

// 	const handleImageClick = (index: number) => {
// 		setSelectedImageIndex(index)
// 		setIsImageBig(true)
// 	}

// 	const handleNextImage = () => {
// 		setSelectedImageIndex((prevIndex) => {
// 			if (prevIndex !== null && prevIndex < imageNames.length - 1) {
// 				return prevIndex + 1
// 			}
// 			return prevIndex
// 		})
// 	}

// 	const handlePrevImage = () => {
// 		setSelectedImageIndex((prevIndex) => {
// 			if (prevIndex !== null && prevIndex > 0) {
// 				return prevIndex - 1
// 			}
// 			return prevIndex
// 		})
// 	}

// 	// Combine images and videos into one array
// 	const carouselItems = [
// 		...imageNames.map((imageName, index) => (
// 			<div
// 				key={index}
// 				className='cursor-pointer w-11/12 md:w-full h-full mb-16 flex justify-center items-center'
// 				onClick={() => handleImageClick(index)}
// 			>
// 				<img
// 					src={imageName}
// 					alt={`Imagen ${index}`}
// 					className='max-w-255 max-h-500 mx-auto h-auto cursor-pointer hover:shadow-lg border-2 border-creme'
// 					loading='lazy'
// 				/>
// 			</div>
// 		)),
// 		// eslint-disable-next-line @typescript-eslint/no-unused-vars
// 		...videoComponents.filter((_video) => !isImageBig), // Filtrar videos cuando isImageBig es true
// 	]

// 	const handleExitFullscreen = () => {
// 		setIsImageBig(false)
// 	}

// 	return (
// 		<>
// 			<section className='w-full overflow-y-hidden h-screen mb-8 border-2 flex flex-col justify-center items-center z-50 absolute top-0 left-0'>
// 				<button
// 					className='close-button text-base bg-nav p-2 text-white w-full'
// 					onClick={onClose}
// 				>
// 					Cerrar
// 				</button>
// 				<div className='relative h-screen overflow-x-scroll md:overflow-x-hidden w-full bg-transparent shadow-2xl'>
// 					<div className='max-w-full h-screen mx-auto w-full self-center'>
// 						<Carousel
// 							autoPlay={true}
// 							infiniteLoop
// 							interval={4000}
// 							showArrows={false}
// 							showStatus={false}
// 							showIndicators={!isImageBig}
// 							showThumbs={true}
// 							selectedItem={selectedImageIndex || 0}
// 							thumbWidth={70}
// 							centerMode={true}
// 							onChange={(index) => setSelectedImageIndex(index)}
// 							className='mx-auto bg-white px-0 md:px-80 p-4 w-full max-w-screen-xl pb-24 min-h-screen'
// 						>
// 							{carouselItems}
// 						</Carousel>
// 					</div>
// 					<Footer />
// 				</div>
// 			</section>

// 			{isImageBig && (
// 				<div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50'>
// 					<div className='absolute inset-0 flex items-center justify-between md:justify-around p-1'>
// 						<button
// 							className='text-white text-2xl font-bold'
// 							onClick={handlePrevImage}
// 							disabled={selectedImageIndex === null || selectedImageIndex === 0}
// 						>
// 							<FontAwesomeIcon icon={faArrowLeft} />
// 						</button>
// 						<img
// 							src={imageNames[selectedImageIndex || 0]}
// 							className='max-w-100 w-10/12 md:w-5/12 h-auto max-h-90 border-creme border-2 hover:shadow-lg bg-black mx-1'
// 							loading='lazy'
// 						/>
// 						<button
// 							className='text-white text-2xl font-bold'
// 							onClick={handleNextImage}
// 							disabled={
// 								selectedImageIndex === null ||
// 								selectedImageIndex === imageNames.length - 1
// 							}
// 						>
// 							<FontAwesomeIcon icon={faArrowRight} />
// 						</button>
// 					</div>
// 					<button
// 						className='absolute top-4 right-4 text-white text-2xl'
// 						onClick={handleExitFullscreen}
// 					>
// 						<FontAwesomeIcon icon={faTimes} />
// 					</button>
// 				</div>
// 			)}
// 		</>
// 	)
// }

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowLeft,
	faArrowRight,
	faTimes,
} from '@fortawesome/free-solid-svg-icons'

interface DeptoModelProps {
	numVideos: number
	videoNames: string[]
	imageNames: string[]
	videoSizeMultiplier: number
	onClose: () => void
	initialIndex?: number | null
}

export function DeptoModel({
	imageNames,
	// onClose,
	initialIndex,
}: DeptoModelProps) {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
		initialIndex ?? null
	)

	useEffect(() => {
		setSelectedImageIndex(initialIndex ?? null)
	}, [initialIndex])

	const handleNextImage = () => {
		setSelectedImageIndex((prevIndex) => {
			if (prevIndex !== null && prevIndex < imageNames.length - 1) {
				return prevIndex + 1
			}
			return prevIndex
		})
	}

	const handlePrevImage = () => {
		setSelectedImageIndex((prevIndex) => {
			if (prevIndex !== null && prevIndex > 0) {
				return prevIndex - 1
			}
			return prevIndex
		})
	}

	const handleExitFullscreen = () => {
		setSelectedImageIndex(null)
	}

	return (
		<>
			{selectedImageIndex !== null && (
				<div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50'>
					<div className='absolute inset-0 flex items-center justify-between md:justify-around p-1'>
						<button
							className='text-white text-2xl font-bold'
							onClick={handlePrevImage}
							disabled={selectedImageIndex === 0}
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						{imageNames[selectedImageIndex].endsWith('.mp4') ? (
							<video
								src={imageNames[selectedImageIndex]}
								className='max-w-100 w-10/12 md:w-5/12 h-auto max-h-90 border-creme border-2 hover:shadow-lg bg-black mx-1'
								controls // Agregar el atributo controls para mostrar los controles del video
								autoPlay
							/>
						) : (
							<img
								src={imageNames[selectedImageIndex]}
								className='max-w-100 w-10/12 md:w-5/12 h-auto max-h-90 border-creme border-2 hover:shadow-lg bg-black mx-1'
								loading='lazy'
							/>
						)}
						<button
							className='text-white text-2xl font-bold'
							onClick={handleNextImage}
							disabled={selectedImageIndex === imageNames.length - 1}
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
					<button
						className='absolute top-4 right-4 text-white text-2xl'
						onClick={handleExitFullscreen}
					>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>
			)}
		</>
	)
}

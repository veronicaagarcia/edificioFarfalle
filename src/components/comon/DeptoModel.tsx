import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { VideoModel } from './VideoModel'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

export function DeptoModel({
	numVideos,
	videoNames,
	imageNames,
	videoSizeMultiplier,
}: {
	numVideos: number
	videoNames: string[]
	imageNames: string[]
	videoSizeMultiplier: number
}) {
	const videoComponents: JSX.Element[] = []
	const [isImageBig, setIsImageBig] = useState<boolean>(false)
	for (let i = 0; i < numVideos; i++) {
		if (i < videoNames.length) {
			const videoName = videoNames[i]
			videoComponents.push(
				<VideoModel
					key={i}
					video={videoName}
					videoSizeMultiplier={videoSizeMultiplier}
				/>
			)
		}
	}

	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
		null
	)

	const handleImageClick = (index: number) => {
		setSelectedImageIndex(index)
		setIsImageBig(true)
	}

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

	// Combine images and videos into one array
	const carouselItems = [
		...imageNames.map((imageName, index) => (
			<div
				key={index}
				className='cursor-pointer w-full h-full mb-16 '
				onClick={() => handleImageClick(index)}
			>
				<img
					src={imageName}
					alt={`Imagen ${index}`}
					className='max-w-255 max-h-500 h-auto cursor-pointer rounded-xl hover:shadow-lg'
					loading='lazy'
				/>
			</div>
		)),
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		...videoComponents.filter((_video) => !isImageBig), // Filtrar videos cuando isImageBig es true
	]

	const handleExitFullscreen = () => {
		setIsImageBig(false)
	}

	return (
		<>
			<section className='w-full h-full flex flex-col justify-center items-center'>
				<div className='relative h-full overflow-x-scroll md:overflow-x-hidden w-full bg-transparent rounded-3xl shadow-2xl'>
					<div className='max-w-full h-full bg-transparent overflow-x-auto mx-auto w-full '>
						<Carousel
							autoPlay={true}
							infiniteLoop
							interval={4000}
							showArrows={false}
							showStatus={false}
							showIndicators={!isImageBig}
							showThumbs={true}
							selectedItem={selectedImageIndex || 0}
							thumbWidth={90}
							centerMode={true}
							onChange={(index) => setSelectedImageIndex(index)}
							className='mx-auto bg-creme p-4 rounded-3xl  h-auto w-full max-w-screen-xl '
						>
							{carouselItems}
						</Carousel>
					</div>
				</div>
			</section>

			{isImageBig && (
				<div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50'>
					<div className='absolute inset-0 flex items-center justify-between p-4'>
						<button
							className='text-white text-2xl font-bold'
							onClick={handlePrevImage}
							disabled={selectedImageIndex === null || selectedImageIndex === 0}
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<img
							src={imageNames[selectedImageIndex || 0]}
							className='max-w-100 w-5/12 h-auto max-h-90 border-creme border-2 rounded-xl hover:shadow-lg bg-black'
							loading='lazy'
						/>
						<button
							className='text-white text-2xl font-bold'
							onClick={handleNextImage}
							disabled={
								selectedImageIndex === null ||
								selectedImageIndex === imageNames.length - 1
							}
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

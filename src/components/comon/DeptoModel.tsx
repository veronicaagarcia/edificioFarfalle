import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { VideoModel } from './VideoModel'

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

	const [isImageBig, setIsImageBig] = useState<boolean>(false)

	const handleImageClick = (index: number) => {
		setSelectedImageIndex(index)
		setIsImageBig(true)
	}

	const handleCloseImage = () => {
		setIsImageBig(false)
	}

	return (
		<div className='w-full flex flex-col justify-center items-center mb-2 p-4'>
			<section className='w-full h-fit flex flex-col justify-center items-center'>
				<h3 className='font-serif italic text-base md:text-lg self-start text-black'>
					Video tour
				</h3>
				<div className=' py-20 w-full flex flex-wrap h-fit overflow-y-auto gap-1'>
					{videoComponents}
				</div>
			</section>
			<section className='w-full h-fit flex flex-col justify-center items-center'>
				<h3 className='font-serif italic text-base md:text-lg self-start text-black'>
					Galeria de fotos
				</h3>
				<div className='relative h-fit mb-8 overflow-x-scroll md:overflow-x-hidden'>
					<div className='max-w-full overflow-x-auto mx-auto w-350 sm:w-10/12 lg:w-full'>
						<Carousel
							autoPlay={true}
							infiniteLoop
							interval={4000}
							showArrows={true}
							showStatus={false}
							showIndicators={true}
							showThumbs={true}
							selectedItem={selectedImageIndex || 0}
							thumbWidth={90}
							centerMode={true}
							onChange={(index) => setSelectedImageIndex(index)}
							className='mx-auto w-11/12 max-w-screen-xl mt-2'
							renderArrowPrev={(onClickHandler, hasPrev, label) =>
								hasPrev && (
									<button
										type='button'
										onClick={onClickHandler}
										title={label}
										className='absolute z-10 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-xl'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-8 w-8 text-orangeDark border-2 p-1 hover:text-opacity-25'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M15 19l-7-7 7-7'
											/>
										</svg>
									</button>
								)
							}
							renderArrowNext={(onClickHandler, hasNext, label) =>
								hasNext && (
									<button
										type='button'
										onClick={onClickHandler}
										title={label}
										className='absolute z-10 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-xl'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-8 w-8 text-orangeDark border-2 p-1 hover:text-opacity-25'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 5l7 7-7 7'
											/>
										</svg>
									</button>
								)
							}
						>
							{imageNames.map((imageName, index) => (
								<div
									key={index}
									className='cursor-pointer'
									onClick={() => handleImageClick(index)}
								>
									<img
										src={imageName}
										alt={`Imagen ${index}`}
										className='max-w-340 max-h-500 cursor-pointer border-2 border-orange rounded-xl hover:shadow-lg'
									/>
								</div>
							))}
						</Carousel>
					</div>
				</div>
			</section>
			{isImageBig && (
				<div
					className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50'
					onClick={handleCloseImage}
				>
					<img
						src={imageNames[selectedImageIndex || 0]}
						alt={`Imagen ${selectedImageIndex}`}
						className='max-w-100 max-h-100 border-orange border-2 rounded-xl hover:shadow-lg'
					/>
				</div>
			)}
		</div>
	)
}

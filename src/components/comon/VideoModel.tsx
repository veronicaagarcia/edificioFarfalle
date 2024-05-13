import { useEffect, useRef, useState } from 'react'
import { IconButton } from '@mui/material'
// import { PlayArrow } from '@mui/icons-material'

interface Video {
	video: string
	videoSizeMultiplier: number
}

export function VideoModel({ video, videoSizeMultiplier }: Video) {
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const [containerStyle, setContainerStyle] = useState({})

	useEffect(() => {
		const resizeContainer = () => {
			if (videoRef.current) {
				const videoWidth = videoRef.current.videoWidth
				const videoHeight = videoRef.current.videoHeight
				const aspectRatio = videoWidth / videoHeight

				let containerWidth = Math.min(window.innerWidth * 0.9, videoWidth / 2.5)
				let containerHeight = containerWidth / aspectRatio

				// Si está en pantalla completa, ajusta el tamaño del contenedor al tamaño de la pantalla
				if (document.fullscreenElement === videoRef.current) {
					containerWidth = window.innerWidth
					containerHeight = window.innerHeight
				}

				setContainerStyle({
					width: `${containerWidth}px`,
					height: `${containerHeight}px`,
				})
			}
		}

		const handleResize = () => {
			resizeContainer()
		}

		const handleFullscreenChange = () => {
			resizeContainer()
		}

		if (videoRef.current) {
			videoRef.current.addEventListener('loadedmetadata', resizeContainer)
			window.addEventListener('resize', handleResize)
			document.addEventListener('fullscreenchange', handleFullscreenChange)
			resizeContainer()
		}

		return () => {
			if (videoRef.current) {
				videoRef.current.removeEventListener('loadedmetadata', resizeContainer)
			}
			window.removeEventListener('resize', handleResize)
			document.removeEventListener('fullscreenchange', handleFullscreenChange)
		}
	}, [])

	return (
		<div
			className='relative bg-creme opacity-90 mx-auto cursor-pointer border-2 border-creme w-full h-full'
			style={{
				...containerStyle,
				transform: `scale(${videoSizeMultiplier})`,
			}}
		>
			<video
				className='absolute top-0 left-0 w-full h-full object-contain object-center'
				ref={videoRef}
				src={video}
				controls
			/>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				<IconButton>
					{/* <PlayArrow className='text-orange bg-creme p-1 rounded-full' /> */}
				</IconButton>
			</div>
		</div>
	)
}

import { useEffect, useRef, useState } from 'react'
import { IconButton } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'

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

				const containerWidth = Math.min(window.innerWidth * 0.9, videoWidth / 3)
				const containerHeight = containerWidth / aspectRatio

				setContainerStyle({
					width: `${containerWidth}px`,
					height: `${containerHeight}px`,
				})
			}
		}

		if (videoRef.current) {
			videoRef.current.addEventListener('loadedmetadata', resizeContainer)
			window.addEventListener('resize', resizeContainer)
			resizeContainer()
		}

		return () => {
			if (videoRef.current) {
				videoRef.current.removeEventListener('loadedmetadata', resizeContainer)
				window.removeEventListener('resize', resizeContainer)
			}
		}
	}, [])

	return (
		<div
			className='relative bg-orangeDark opacity-90 mx-auto cursor-pointer rounded-xl border-2 border-orange'
			style={{
				...containerStyle,
				transform: `scale(${videoSizeMultiplier})`,
			}}
		>
			<video
				className='absolute rounded-xl top-0 left-0 w-full h-fit object-contain '
				ref={videoRef}
				src={video}
				controls
			/>
			<IconButton className='absolute top-4 left-4 bg-orangeDark rounded-xl'>
				<PlayArrow className='text-orange' />
			</IconButton>
		</div>
	)
}

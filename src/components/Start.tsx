import { useState, useEffect } from 'react'
import { Container, Stack, CircularProgress } from '@mui/material'
import logoFarfalle from '../assets/logoMove.gif'
import { useFarfalleStore } from '../store/farfalle'
import video from '../assets/videos/Comunes/Cartel.mp4'

export function Start() {
	const getStart = useFarfalleStore((state) => state.getStart)
	const [videoLoaded, setVideoLoaded] = useState(false)

	const handleVideoLoad = () => {
		// Cuando el video se carga completamente, actualizamos el estado
		setVideoLoaded(true)
	}

	useEffect(() => {
		const player = document.getElementById(
			'farfalleVideo'
		) as HTMLIFrameElement | null

		if (player) {
			setTimeout(() => {
				player.contentWindow?.postMessage(
					'{"event":"command","func":"playVideo","args":""}',
					'*'
				)
			}, 1000) // Esperar 1000 milisegundos (1 segundos) antes de iniciar la reproducción
		}
	}, [])

	return (
		<main className='h-full flex flex-col'>
			<div className='relative w-full h-screen flex'>
				{/* Mostramos el indicador de carga mientras el video se está cargando */}
				{!videoLoaded && (
					<div className='absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
						<CircularProgress color='primary' />
					</div>
				)}
				{/* Usamos el reproductor de video de Google Drive */}
				<video
					id='farfalleVideo'
					src={video}
					autoPlay
					muted
					loop
					className='w-full h-full object-cover z-0'
					onLoadedData={handleVideoLoad} // Manejador de evento cuando el video se carga
				></video>
			</div>

			<Container
				maxWidth='xs'
				sx={{
					height: 'fit-content',
					backgroundColor: '#fefdfd',
					paddingTop: '5px',
					paddingBottom: '5px',
					paddingLeft: '0',
					margin: 'auto',
					opacity: '0.7',
					borderRadius: '30px',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Stack
					direction='column'
					gap={0}
					alignItems='center'
					justifyContent='center'
				>
					<img
						width={100}
						height={100}
						src={logoFarfalle}
						alt='Logo edificio Farfalle'
						loading='lazy'
					/>
					<h1 className='text-black text-5xl mb-2 font-great-vibes'>
						Edificio Farfalle
					</h1>
				</Stack>
				<div className='text-orange flex justify-center mt-2'>
					<button
						onClick={getStart}
						className='group relative inline-flex mb-2 h-10 items-center justify-center overflow-hidden rounded-md bg-black px-4 font-medium text-neutral-200 transition hover:bg-orange hover:scale-110'
					>
						<span className='text-base font-lato'>Ingresar</span>
						<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
							<div className='relative h-full w-8 bg-white/20'></div>
						</div>
					</button>
				</div>
			</Container>
		</main>
	)
}

// import { useState } from 'react'
// import { Container, Stack, CircularProgress } from '@mui/material'
// import logoFarfalle from '../assets/logoMove.gif'

// export function Start() {
// 	const [videoLoaded, setVideoLoaded] = useState(false)

// 	const handleVideoLoad = () => {
// 		// Cuando el video se carga completamente, actualizamos el estado
// 		setVideoLoaded(true)
// 	}

// 	return (
// 		<main className='h-full flex flex-col'>
// 			<div className='relative w-full h-screen flex'>
// 				{/* Mostramos el indicador de carga mientras el video se está cargando */}
// 				{!videoLoaded && (
// 					<div className='absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
// 						<CircularProgress color='primary' />
// 					</div>
// 				)}
// 				{/* Usamos un iframe para embeber el video de Google Drive */}
// 				<iframe
// 					src='https://drive.google.com/file/d/19QPIIhE6c7qsiDDm-U1LlM_MNN7nEp0u/preview'
// 					allowFullScreen
// 					className='w-full h-full object-cover z-0'
// 					onLoad={handleVideoLoad}
// 				></iframe>
// 			</div>

// 			<Container
// 				maxWidth='xs'
// 				sx={{
// 					height: 'fit-content',
// 					backgroundColor: '#fefdfd',
// 					paddingTop: '5px',
// 					paddingBottom: '5px',
// 					paddingLeft: '0',
// 					margin: 'auto',
// 					opacity: '0.7',
// 					borderRadius: '30px',
// 					position: 'absolute',
// 					top: '50%',
// 					left: '50%',
// 					transform: 'translate(-50%, -50%)',
// 				}}
// 			>
// 				<Stack
// 					direction='column'
// 					gap={0}
// 					alignItems='center'
// 					justifyContent='center'
// 				>
// 					<img
// 						width={100}
// 						height={100}
// 						src={logoFarfalle}
// 						alt='Logo edificio Farfalle'
// 						loading='lazy'
// 					/>
// 					<h1 className='text-black text-5xl mb-2 font-great-vibes'>
// 						Edificio Farfalle
// 					</h1>
// 				</Stack>
// 				<div className='text-orange flex justify-center mt-2'>
// 					<button className='group relative inline-flex mb-2 h-10 items-center justify-center overflow-hidden rounded-md bg-black px-4 font-medium text-neutral-200 transition hover:bg-orange hover:scale-110'>
// 						<span className='text-base font-lato'>Ingresar</span>
// 						<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
// 							<div className='relative h-full w-8 bg-white/20'></div>
// 						</div>
// 					</button>
// 				</div>
// 			</Container>
// 		</main>
// 	)
// }

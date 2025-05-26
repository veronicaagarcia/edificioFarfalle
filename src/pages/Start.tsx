import { useState, useEffect, useMemo } from 'react'
import { CircularProgress, Container, Stack, IconButton } from '@mui/material'
import logoFarfalle from '../assets/logoMove.gif'
import { useFarfalleStore } from '../store/farfalle'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'

export function Start() {
  const getStart = useFarfalleStore((state) => state.getStart)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [videoError, setVideoError] = useState(false)
  
  const video = '/edificioFarfalle/video.start.mp4'

  const containerStyle = useMemo(() => ({
    height: 'fit-content',
    backgroundColor: '#fefdfd',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '0',
    margin: 'auto',
    opacity: '0.7',
    borderRadius: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%'
  }), [])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  useEffect(() => {
    const player = document.getElementById('farfalleVideo') as HTMLVideoElement | null
    if (player) {
      setTimeout(() => {
        player.play().catch(error => console.error('Error al reproducir el video:', error))
      }, 1000)
    }
  }, [])

  return (
    <main className='h-full flex flex-col'>
      <div className='relative w-full h-screen flex'>
        {!videoLoaded && !videoError && (
          <div className='absolute inset-0 flex items-center justify-center w-full h-full bg-orangeDark bg-opacity-50'>
            <CircularProgress color='inherit' />
          </div>
        )}
        <div className="w-screen h-screen overflow-hidden relative">
          <video
            id='farfalleVideo'
            autoPlay
            loop
            playsInline
            muted={isMuted}
            className='w-full h-full object-cover z-0 absolute'
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            preload="auto"
          >
            <source src={video} type='video/mp4' />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div className='absolute top-2 text-slate-950 hover:text-orange left-2 z-50'>
          <IconButton onClick={toggleMute} color='inherit' aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}>
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </div>
      </div>
			<Container
				maxWidth='xs'
				sx={containerStyle}
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
						className='group relative inline-flex mb-2 h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-4 font-medium text-neutral-200 transition hover:bg-slate-950 hover:scale-110'
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

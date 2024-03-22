import { Button, Container, Stack } from '@mui/material'
import logoFarfalle from '../assets/logo.gif'
import { useFarfalleStore } from '../store/farfalle'
import video from '../assets/videos/video.mp4'
export function Start() {
	const getStart = useFarfalleStore((state) => state.getStart)
	return (
		<main className='h-full flex flex-col'>
			<div className='relative w-full h-screen flex'>
				<video autoPlay muted loop className='w-full h-full object-cover z-0'>
					<source src={video} type='video/mp4' />
				</video>
			</div>

			<Container
				maxWidth='xs'
				sx={{
					backgroundColor: 'var(--background-body)',
					padding: '10px',
					margin: 'auto',
					opacity: '0.8',
					borderRadius: '30px',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Stack
					direction='row'
					gap={1}
					alignItems='center'
					justifyContent='center'
				>
					<img
						width={110}
						height={110}
						src={logoFarfalle}
						alt='Logo edificio Farfalle'
					/>
					<h1 className='text-black text-5xl'>Edificio Farfalle</h1>
				</Stack>
				<div className='text-orange flex justify-center'>
					<Button variant='outlined' color='inherit' onClick={getStart}>
						Conocer
					</Button>
				</div>
			</Container>
		</main>
	)
}

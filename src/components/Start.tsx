import { Button, Container, Stack, Typography } from '@mui/material'
import logoFarfalle from '../assets/logo.gif'
import { useFarfalleStore } from '../store/farfalle'

export function Start() {
	const getStart = useFarfalleStore((state) => state.getStart)
	return (
		<main
			className='h-full flex flex-col'
			style={{
				backgroundImage: `url('src/assets/Front.avif')`,
				width: 'inherit',
				alignItems: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<Container
				maxWidth='xs'
				sx={{
					backgroundColor: 'var(--background-body)',
					padding: '10px',
					margin: 'auto',
					opacity: '0.8',
					borderRadius: '30px',
				}}
			>
				<Stack
					direction='row'
					gap={2}
					alignItems='center'
					justifyContent='center'
				>
					<img
						width={120}
						height={120}
						src={logoFarfalle}
						alt='Logo edificio Farfalle'
					/>
					<Typography color='var(--black)' fontSize={25} component='h1'>
						EDIFICIO FARFALLE
					</Typography>
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

import { Button, Container, Stack, Typography } from '@mui/material'
import logoFarfalle from '../assets/logo.gif'
import { useFarfalleStore } from '../store/farfalle'

export function Start() {
	const getStart = useFarfalleStore((state) => state.getStart)
	return (
		<main className='start'>
			<Container
				maxWidth='xs'
				sx={{
					padding: '10px',
					backgroundColor: 'var(--background-body)',
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
						alt='logo edificio Farfalle'
					/>
					<Typography color='var(--black)' fontSize={25} component='h1'>
						EDIFICIO FARFALLE
					</Typography>
				</Stack>
				<div
					style={{
						color: 'var(--orange)',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Button variant='outlined' color='inherit' onClick={getStart}>
						Conocer
					</Button>
				</div>
			</Container>
		</main>
	)
}

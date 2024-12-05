import { useRef} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HelmetWrapper from './components/comon/HelmetWrapper'
import 'aos/dist/aos.css'
import { Navbar } from './components/comon/Navbar'
import { Principal } from './components/Principal'
import { Departamentos } from './components/Departamentos'
import { useFarfalleStore } from './store/farfalle'
import { Start } from './components/Start'
import { Card, useMediaQuery } from '@mui/material'
import { PbA } from './components/PlantaBajaA'
import { PbB } from './components/PlantaBajaB'
import { PrimeroA } from './components/PrimeroA'
import { PrimeroB } from './components/PrimeroB'
import { SegundoB } from './components/SegundoB'
import { Servicios } from './components/Servicios'
import { Contacto } from './components/Contacto'
import { Reservas } from './components/Reservas'
import './App.css'

function App() {
	const isStarted = useFarfalleStore((state) => state.isStarted)
	const sectionTopRef = useRef(null)
	// const sectionReservasRef = useRef<HTMLDivElement>(null)
	const isMobile = useMediaQuery('(max-width:640px)')

	return (
		<Card style={{ width: '100vw',height: '100vh' }}>
			<HelmetWrapper
				title='Edificio Farfalle, Alquileres Temporales'
				description='Descubre una amplia selección de departamentos para alquiler temporal. Encuentra el lugar perfecto para tu estadía con nuestras detalladas imágenes y descripciones. Alquila tu próximo hogar con facilidad y disfruta de ubicaciones exclusivas y confortables. ¡Explora nuestras opciones y reserva hoy mismo!'
			/>
			{!isStarted ? (
				<Start />
			) : (
				<main className=' h-min-screen h-full overflow-y-scroll w-full min-w-screen scrollbar-hide'>
					<BrowserRouter>
						<Navbar
							sectionTopRef={sectionTopRef}
							isMobile={isMobile}
							// sectionReservasRef={sectionReservasRef}
						/>
						<Routes>
							<Route
								path='edificioFarfalle/'
								element={
									<Principal
										// sectionTopRef={sectionTopRef}
										// sectionReservasRef={sectionReservasRef}
										isMobile={isMobile}
									/>
								}
							/>
							<Route
								path='edificioFarfalle/Departamentos'
								element={<Departamentos />}
							/>
							<Route
								path='edificioFarfalle/Departamentos/Pb-A'
								element={<PbA />}
							/>
							<Route
								path='edificioFarfalle/Departamentos/Pb-B'
								element={<PbB />}
							/>
							<Route
								path='edificioFarfalle/Departamentos/1-A'
								element={<PrimeroA />}
							/>
							<Route
								path='edificioFarfalle/Departamentos/1-B'
								element={<PrimeroB />}
							/>
							<Route
								path='edificioFarfalle/Departamentos/2-B'
								element={<SegundoB />}
							/>
							<Route
								path='edificioFarfalle/Servicios'
								element={<Servicios />}
							/>
							<Route path='edificioFarfalle/Contacto' element={<Contacto />} />
							<Route path='edificioFarfalle/Reservas' element={<Reservas />} />
						</Routes>
					</BrowserRouter>
				</main>
			)}
		</Card>
	)
}

export default App

import { useRef } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HelmetWrapper from './components/comon/HelmetWrapper'
import { Navbar } from './components/comon/Navbar'
import { Principal } from './pages/Principal'
import { Departamentos } from './pages/Departamentos'
import { useFarfalleStore } from './store/farfalle'
import { Start } from './pages/Start'
import { Card, useMediaQuery } from '@mui/material'
import { PbA } from './pages/PlantaBajaA'
import { PbB } from './pages/PlantaBajaB'
import { PrimeroA } from './pages/PrimeroA'
import { PrimeroB } from './pages/PrimeroB'
import { SegundoB } from './pages/SegundoB'
import { Servicios } from './pages/Servicios'
import { Contacto } from './pages/Contacto'
import { Reservas } from './pages/Reservas'
import './App.css'
import 'aos/dist/aos.css'

function App() {
	const isStarted = useFarfalleStore((state) => state.isStarted)
	const sectionTopRef = useRef(null)
	const isMobile = useMediaQuery('(max-width:640px)')

	return (
		<Card style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
			<HelmetWrapper
				title='Edificio Farfalle, Alquileres Temporales'
				description='Descubre una amplia selección de departamentos para alquiler temporal. Encuentra el lugar perfecto para tu estadía con nuestras detalladas imágenes y descripciones. Alquila tu próximo hogar con facilidad y disfruta de ubicaciones exclusivas y confortables. ¡Explora nuestras opciones y reserva hoy mismo!'
			/>
			{!isStarted ? (
				<Start />
			) : (
				<main className='h-min-screen h-full overflow-y-scroll w-full min-w-screen scrollbar-hide max-w-screen-2xl mx-auto'>
					<HashRouter>
						<Navbar sectionTopRef={sectionTopRef} isMobile={isMobile} />
						<Routes>
							<Route path="/Departamentos" element={<Departamentos />} />
							<Route path="/Departamentos/Pb-A" element={<PbA />} />
							<Route path="/Departamentos/Pb-B" element={<PbB />} />
							<Route path="/Departamentos/1-A" element={<PrimeroA />} />
							<Route path="/Departamentos/1-B" element={<PrimeroB />} />
							<Route path="/Departamentos/2-B" element={<SegundoB />} />
							<Route path="/Servicios" element={<Servicios />} />
							<Route path="/Contacto" element={<Contacto />} />
							<Route path="/Reservas" element={<Reservas />} />
							<Route path="/" element={<Principal isMobile={isMobile} />} />
						</Routes>
					</HashRouter>
				</main>
			)}
		</Card>
	)
}

export default App

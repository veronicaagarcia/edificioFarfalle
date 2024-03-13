import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/comon/Navbar'
import { Principal } from './components/Principal'
import { Nosotros } from './components/Nosotros'
import { Departamentos } from './components/Departamentos'
import { Footer } from './components/comon/Footer'
import { useFarfalleStore } from './store/farfalle'
import { Start } from './components/Start'
import { Card } from '@mui/material'
import { PbA } from './components/PlantaBajaA'
import { PbB } from './components/PlantaBajaB'
import { PrimeroA } from './components/PrimeroA'
import { PrimeroB } from './components/PrimeroB'
import { SegundoB } from './components/SegundoB'
import './App.css'

function App() {
	const isStarted = useFarfalleStore((state) => state.isStarted)

	return (
		<Card style={{ width: '100vw', height: '100vh' }}>
			{!isStarted ? (
				<Start />
			) : (
				<main className='w-full h-full'>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path='edificioFarfalle/' element={<Principal />} />
							<Route path='edificioFarfalle/Nosotros' element={<Nosotros />} />
							<Route
								path='edificioFarfalle/Departamentos'
								element={<Departamentos />}
							/>
							<Route path='edificioFarfalle/Pb-A' element={<PbA />} />
							<Route path='edificioFarfalle/Pb-B' element={<PbB />} />
							<Route path='edificioFarfalle/1-A' element={<PrimeroA />} />
							<Route path='edificioFarfalle/1-B' element={<PrimeroB />} />
							<Route path='edificioFarfalle/2-B' element={<SegundoB />} />
						</Routes>
						<Footer />
					</BrowserRouter>
				</main>
			)}
		</Card>
	)
}

export default App

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
							<Route path='/' element={<Principal />} />
							<Route path='/Nosotros' element={<Nosotros />} />
							<Route path='/Departamentos' element={<Departamentos />} />
							<Route path='/Pb-A' element={<PbA />} />
							<Route path='/Pb-B' element={<PbB />} />
							<Route path='/1-A' element={<PrimeroA />} />
							<Route path='/1-B' element={<PrimeroB />} />
							<Route path='/2-B' element={<SegundoB />} />
						</Routes>
						<Footer />
					</BrowserRouter>
				</main>
			)}
		</Card>
	)
}

export default App

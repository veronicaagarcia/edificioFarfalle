import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Principal } from './components/Principal'
import { Nosotros } from './components/Nosotros'
import { Departamentos } from './components/Departamentos'
import { Footer } from './components/Footer'
import { LeftSide } from './components/LeftSide'
import { RightSide } from './components/RightSide'
import './App.css'
import { useFarfalleStore } from './store/farfalle'
import { Start } from './components/Start'

function App() {
	const isStarted = useFarfalleStore((state) => state.isStarted)

	return (
		<>
			{!isStarted ? (
				<Start />
			) : (
				<div className='layout'>
					<BrowserRouter>
						<Navbar />
						<LeftSide />
						<RightSide />
						<Routes>
							<Route path='/' element={<Principal />} />
							<Route path='/Nosotros' element={<Nosotros />} />
							<Route path='/Departamentos' element={<Departamentos />} />
						</Routes>
						<Footer />
					</BrowserRouter>
				</div>
			)}
		</>
	)
}

export default App

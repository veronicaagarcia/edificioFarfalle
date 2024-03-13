import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded'
import WifiRoundedIcon from '@mui/icons-material/WifiRounded'
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded'
import BedRoundedIcon from '@mui/icons-material/BedRounded'
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded'
import WeekendRoundedIcon from '@mui/icons-material/WeekendRounded'
import DeckRoundedIcon from '@mui/icons-material/DeckRounded'
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded'
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded'

export function Departamentos() {
	return (
		<section
			style={{ height: 'calc(100vh - 100px)' }}
			className='w-full flex flex-col overflow-auto mt-4 lg:mt-16'
		>
			<h2 className='text-orange font-semibold text-center p-2'>
				DEPARTAMENTOS
			</h2>
			<main>
				<div className='w-11/12 mx-auto h-auto'>
					<Card
						className='cardShadow'
						style={{
							margin: 'auto',
							padding: '10px',
							borderRadius: '8px',
						}}
					>
						<h3 className='text-base text-center p-2 text-orangeDark'>
							Todos nuestros departamentos cuentan con:
						</h3>
						<p className='text-sm mb-2'>
							Modernos departamentos totalmente amueblados, con estacionamiento
							privado. Todos los departamentos son aptos para 4 personas ( 1
							cama matrimonial, 1 sofá cama con Carrión). Los departamentos
							cuentan con wifi gratuito y calefacción mediante aire
							acondicionado (frio/calor). Encontranos en Instagram como
							EdificioFarfalle
						</p>
						<p className='text-sm mb-2'>
							El edificio se encuentra en un barrio tranquilo y amigable. La
							zona donde se encuentran ubicado los departamentos cuenta con
							comercios como: supermercado, verdulería, panadería, carnicería,
							pollería, bicicleteria, gomería, parada de micros, etc.
						</p>
					</Card>
					<ul className='w-full h-auto flex flex-col items-center sm:flex-row sm:justify-around'>
						<li className='cursor-pointer font-semibold text-slate-600 hover:text-orange mt-10'>
							<Link to='/Pb-A'>Pb A</Link>
						</li>
						<li className='cursor-pointer font-semibold text-slate-600 hover:text-orange mt-10'>
							<Link to='/Pb-B'>Pb B</Link>
						</li>
						<li className='cursor-pointer font-semibold text-slate-600 hover:text-orange mt-10'>
							<Link to='/1-A'>Primero A</Link>
						</li>
						<li className='cursor-pointer font-semibold text-slate-600 hover:text-orange mt-10'>
							<Link to='/1-B'>Primero B</Link>
						</li>
						<li className='cursor-pointer font-semibold text-slate-600 hover:text-orange mt-10'>
							<Link to='/2-B'>Segundo B</Link>
						</li>
					</ul>
					<ul className='w-full h-fit p-4 mt-4 mb-20 flex flex-col justify-center sm:flex-row sm:justify-between'>
						<div className='w-full sm:w-1/2 md:w-2/5 flex flex-col m-auto'>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<LocalParkingRoundedIcon color='inherit' />
								Estacionamiento
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin'>
									Hay parking gratis privado en el establecimiento. No es
									necesario reservar.
								</p>
							</li>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<KitchenRoundedIcon color='inherit' />
								Cocina
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin flex flex-col'>
									Tostadora, Hornalla, Horno, Utensilios de cocina, Pava
									eléctrica, Cocina, Microondas, Heladera
								</p>
							</li>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<BathtubRoundedIcon color='inherit' />
								Baño
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin flex flex-col'>
									Papel higiénico, Toallas, Bidé, Bañera o ducha, Baño privado,
									Baño, Ducha
								</p>
							</li>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<DeckRoundedIcon color='inherit' />
								Exteriores
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin flex flex-col'>
									Patio
								</p>
							</li>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<HttpsRoundedIcon color='inherit' />
								Seguridad
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin flex flex-col'>
									Cámaras de seguridad en exterior del alojamiento, Cámaras de
									seguridad en áreas comunes, Acceso con llave
								</p>
							</li>
						</div>
						<div className='w-full sm:w-1/2 md:w-2/5 flex flex-col m-auto'>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<WifiRoundedIcon color='inherit' />
								Internet
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin'>
									Hay conexión a internet Wi-Fi disponible en todo el
									establecimiento. Gratis.
								</p>
							</li>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<BedRoundedIcon color='inherit' />
								Habitación
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin'>
									Ropa de cama, Armario, Enchufe cerca de la cama, Sofá cama
								</p>
							</li>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<WeekendRoundedIcon color='inherit' />
								Zona de estar
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin'>
									Sofá, TV con canales por cable
								</p>
							</li>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<AppsRoundedIcon color='inherit' />
								Varios
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin flex flex-col'>
									Aire acondicionado, Prohibido fumar en todo el
									establecimiento, Calefacción, Habitaciones familiares
								</p>
							</li>
							<li className='font-semibold flex justify-between items-center w-full h-24 sm:h-20 lg:h-16 text-slate-600 mt-10 border-2 rounded-xl p-2'>
								<RecordVoiceOverRoundedIcon color='inherit' />
								Idiomas
								<p className='text-black text-xs w-1/2 sm:w-3/5 font-thin flex flex-col'>
									Español, Inglés
								</p>
							</li>
						</div>
					</ul>
				</div>
			</main>
		</section>
	)
}

import WifiRoundedIcon from '@mui/icons-material/WifiRounded'
import BedRoundedIcon from '@mui/icons-material/BedRounded'
import WeekendRoundedIcon from '@mui/icons-material/WeekendRounded'
import DeckRoundedIcon from '@mui/icons-material/DeckRounded'
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareParking } from '@fortawesome/free-solid-svg-icons/faSquareParking'
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons/faKitchenSet'
import { faBath } from '@fortawesome/free-solid-svg-icons/faBath'
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons/faCalendarCheck'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons/faClipboardCheck'
import { Footer } from './comon/Footer'
import { RatingCharts } from './comon/RatingChart'

export function Servicios() {
	const video = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/zcomunes.mp4'
	return (
		<section className='w-full h-screen flex flex-col overflow-auto  font-thin font-serif italic text-black pb-32'>
			<div className='w-11/12 mx-auto h-fit my-4 md:my-16 md:pl-6 p-4 bg-creme '>
				<div className='relative h-96'>
					{/* Video como fondo */}
					<video
						className='absolute top-0 left-0 w-full md:w-4/12 h-96 object-cover z-0'
						autoPlay
						playsInline
						loop
					>
						<source src={video} type='video/mp4' />
					</video>
					<div className='absolute top-0 left-0 w-full h-full rounded-lg bg-black opacity-40 z-10'></div>
					{/* Contenido superpuesto */}
					<div className='absolute w-9/12 md:w-1/2 top-2 md:top-24 right-10 md:right-24 z-20 text-white text-center'>
						<h3 className=' text-base p-8 md:p-4 border-2 border-nav md:text-2xl font-bold mb-4 rounded-lg'>
							Nuestros departamentos están completamente amueblados y equipados
							con todas las comodidades necesarias para una estadía confortable
							y placentera.
						</h3>
					</div>
					{/* <video
						className='absolute top-0 right-0 w-4/12 h-96 object-cover z-0'
						autoPlay
						muted
						loop
					>
						<source src={video} type='video/mp4' />
					</video> */}
				</div>

				<ul className='w-full h-auto mx-auto mt-4 mb-20 flex flex-col justify-center sm:flex-row sm:justify-between'>
					<div className='w-full h-full md:h-600 sm:w-1/4 flex flex-col m-auto'>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-5 mb-1'>
							<FontAwesomeIcon
								icon={faSquareParking}
								color='inherit'
								size='xl'
							/>
							<p className='pl-2'>Estacionamiento</p>
						</li>
						<ul className='text-black text-center md:text-start text-xs w-full font-thin'>
							<li>
								Estacionamiento gratuito dentro del edificio ( un auto por
								depto)
							</li>
						</ul>

						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<FontAwesomeIcon icon={faKitchenSet} color='inherit' size='xl' />
							<p className='pl-2'>Cocina</p>
						</li>
						<ul className='text-black text-center md:text-start text-xs w-full font-thin'>
							<li>Horno/ hornalla</li>
							<li>
								Electrodomésticos (pava eléctrica, tostadora, heladera y
								microondas)
							</li>
							<li>Utensilios de cocina (cubiertos, platos, vasos, ollas)</li>
							<li>
								Elementos de limpieza (Detergente, esponja, virulana, ballerina,
								trapo de piso, balde)
							</li>
							<li>Cesto de basura</li>
						</ul>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<FontAwesomeIcon icon={faBath} color='inherit' size='xl' />
							<p className='pl-2'>Baño</p>
						</li>
						<ul className='text-black text-center md:text-start text-xs w-full font-thin'>
							<li>Ducha</li>
							<li>Bidet</li>
							<li>Papel higiénico</li>
							<li>Jabón</li>
							<li>Cesto de basura</li>
						</ul>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<DeckRoundedIcon color='inherit' />
							<p className='pl-2'>Exteriores </p>
						</li>
						<ul className='text-black text-center md:text-start text-xs w-full font-thin'>
							<li>Patio común</li>
							<li>Cocheras</li>
						</ul>
					</div>
					<div className='w-full h-full md:h-600 sm:w-1/4 flex flex-col m-auto'>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 md:mt-5 mb-1'>
							<WifiRoundedIcon color='inherit' />
							<p className='pl-2'>Internet</p>
						</li>
						<ul className='text-black text-xs text-center md:text-start w-full font-thin'>
							<li>Wifi gratuito en departamentos</li>
						</ul>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<BedRoundedIcon color='inherit' />
							<p className='pl-2'>Habitación</p>
						</li>
						<ul className='text-black text-xs text-center md:text-start w-full font-thin'>
							<li>Cama matrimonial</li>
							<li>Placard</li>
							<li>Aire acondicionado</li>
							<li>Ropa de cama</li>
							<li>Veladores</li>
							<li>Mesa de luz</li>
						</ul>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<WeekendRoundedIcon color='inherit' />
							<p className='pl-2'>Living/comedor</p>
						</li>
						<ul className='text-black text-xs text-center md:text-start w-full font-thin'>
							<li>Sofa cama con carrión (para 2 personas)</li>
							<li>Aire acondicionado</li>
							<li>TV por cable</li>
							<li>Mesa y sillas (para 4 personas)</li>
						</ul>
					</div>
					<div className='w-full h-full md:h-600 sm:w-1/4 flex flex-col m-auto'>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 md:mt-5 mb-1'>
							<FontAwesomeIcon
								icon={faClipboardCheck}
								color='inherit'
								size='lg'
							/>

							<p className='pl-2'>Check in</p>
						</li>
						<ul className='text-black text-xs text-center md:text-start w-full font-thin'>
							<li>A partir de las 14:00 hs</li>
						</ul>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<FontAwesomeIcon
								icon={faCalendarCheck}
								color='inherit'
								size='lg'
							/>
							<p className='pl-2'>Check Out</p>
						</li>
						<ul className='text-black text-xs text-center md:text-start w-full font-thin'>
							<li>10:00 hs</li>
						</ul>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<AppsRoundedIcon color='inherit' />
							<p className='pl-2'>General</p>
						</li>
						<ul className='text-black text-xs text-center md:text-start w-full font-thin'>
							<li>Prohibido fumar dentro de los departamentos</li>
							<li>Zona fumadores (zonas comunes del edificio)</li>
							<li>Calefacción (Termotanque o Calefón)</li>
							<li>No se admiten mascotas</li>
						</ul>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<FontAwesomeIcon icon={faVideo} color='inherit' size='lg' />
							<p className='pl-2'>Seguridad</p>
						</li>
						<ul className='text-black text-center md:text-start text-xs w-full font-thin'>
							<li>Cámaras de seguridad en zonas comunes</li>
						</ul>
						<li className='font-semibold text-xs md:text-base flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<RecordVoiceOverRoundedIcon color='inherit' />
							<p className='pl-2'>Idiomas</p>
						</li>
						<ul className='text-black text-xs text-center md:text-start w-full font-thin'>
							<li>Español</li>
							<li>Inglés</li>
						</ul>
					</div>
				</ul>
				{/* <h3 className='text-center font-semibold text-lg md:text-xl text-orange mb-2'>
					Reviews
				</h3> */}
				<RatingCharts />
			</div>
			<Footer />
		</section>
	)
}

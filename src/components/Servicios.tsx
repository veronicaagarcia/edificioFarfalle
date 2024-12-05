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

export function Servicios() {
	const video = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/zcomunes.mp4'
	return (
		<section className='w-full h-full flex flex-col font-thin font-serif italic text-black'>
			<div
				className='w-11/12 mx-auto h-fit pb-12 my-4 md:my-16 md:pb-48 md:pl-6 p-4 md:rounded-lg bg-creme'
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1671716784499-a3d26826d844?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='relative h-96'>
					{/* Video como fondo */}
					<video
						className='absolute top-0 left-0 w-full md:w-4/12 h-96 object-cover z-0 md:z-20 md:rounded-tl-lg md:rounded-bl-lg'
						autoPlay
						playsInline
						loop
						muted
					>
						<source src={video} type='video/mp4' />
					</video>
					<div className='absolute top-0 left-0 w-full h-full rounded-lg bg-black opacity-40 z-10'></div>
					{/* Contenido superpuesto */}
					<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center md:justify-end'>
						<div className='w-9/12 md:w-1/2 md:mr-24 text-white text-center z-20'>
							<h3 className='text-base p-6 sm:p-12 md:p-14 border-2 border-nav md:text-xl lg:text-2xl font-medium mb-4 rounded-lg'>
								Nuestros departamentos están completamente amueblados y
								equipados con todas las comodidades necesarias para una estadía
								confortable y placentera.
							</h3>
						</div>
					</div>
				</div>

				<ul className='w-full h-fit mx-auto mt-4 mb-20 flex flex-col justify-center sm:flex-row sm:justify-between pt-8'>
					<div className='w-full h-auto md:h-600 sm:w-1/4 flex flex-col m-auto text-base md:text-lg not-italic text-opacity-90'>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 md:mt-5 mb-1'>
							<FontAwesomeIcon
								icon={faSquareParking}
								color='inherit'
								size='xl'
							/>
							<p className='pl-2'>Estacionamiento</p>
						</li>
						<ul className='text-black text-center md:text-start'>
							<li>
								Estacionamiento gratuito dentro del edificio ( un auto por
								departamento)
							</li>
						</ul>

						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<FontAwesomeIcon icon={faKitchenSet} color='inherit' size='xl' />
							<p className='pl-2'>Cocina</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
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
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<FontAwesomeIcon icon={faBath} color='inherit' size='xl' />
							<p className='pl-2'>Baño</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Ducha</li>
							<li>Bidet</li>
							<li>Papel higiénico</li>
							<li>Jabón</li>
							<li>Cesto de basura</li>
						</ul>
					</div>
					<div className='w-full h-auto md:h-600 sm:w-1/4 flex flex-col m-auto text-base md:text-lg not-italic text-opacity-90'>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 md:mt-5 mb-1'>
							<WifiRoundedIcon color='inherit' />
							<p className='pl-2'>Internet</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Wifi gratuito en departamentos</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<BedRoundedIcon color='inherit' />
							<p className='pl-2'>Habitación</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Cama matrimonial</li>
							<li>Placard</li>
							<li>Aire acondicionado</li>
							<li>Ropa de cama</li>
							<li>Veladores</li>
							<li>Mesa de luz</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<WeekendRoundedIcon color='inherit' />
							<p className='pl-2'>Living/comedor</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Sofa cama con carrión (para 2 personas)</li>
							<li>Aire acondicionado</li>
							<li>TV por cable</li>
							<li>Mesa y sillas (para 4 personas)</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<DeckRoundedIcon color='inherit' />
							<p className='pl-2'>Exteriores </p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Patio común</li>
							<li>Cocheras</li>
						</ul>
					</div>
					<div className='w-full h-auto md:h-600 sm:w-1/4 flex flex-col m-auto text-base md:text-lg not-italic text-opacity-90'>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 md:mt-5 mb-1'>
							<FontAwesomeIcon
								icon={faClipboardCheck}
								color='inherit'
								size='lg'
							/>

							<p className='pl-2'>Check in</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>A partir de las 14:00 hs</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<FontAwesomeIcon
								icon={faCalendarCheck}
								color='inherit'
								size='lg'
							/>
							<p className='pl-2'>Check Out</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>10:00 hs</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<AppsRoundedIcon color='inherit' />
							<p className='pl-2'>General</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Prohibido fumar dentro de los departamentos</li>
							<li>Zona fumadores (zonas comunes del edificio)</li>
							<li>Calefacción (Termotanque o Calefón)</li>
							<li>No se admiten mascotas</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<FontAwesomeIcon icon={faVideo} color='inherit' size='lg' />
							<p className='pl-2'>Seguridad</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Cámaras de seguridad en zonas comunes</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange mt-10 mb-1'>
							<RecordVoiceOverRoundedIcon color='inherit' />
							<p className='pl-2'>Idiomas</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Español</li>
							<li>Inglés</li>
						</ul>
					</div>
				</ul>
			</div>
			<Footer />
		</section>
	)
}

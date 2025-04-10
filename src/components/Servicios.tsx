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
import ImageGallery from './ImageGaller'

export function Servicios() {
	return (
		<section className='w-full h-full flex flex-col font-thin font-serif italic text-black'>
			<div
				className='w-full mx-auto h-fit pb-12 mb-4 md:my-16 md:pb-48 md:pl-6 md:p-4 md:rounded-lg bg-transparent'
			>
				
				{/* Aca unagaleria de imagenes responsive de no mas de 10 fotos */}
				<ImageGallery />

				<ul className='w-full h-fit mx-auto mt-4 mb-4 md:mb-10 xl:mb-0 flex flex-col justify-center sm:flex-row sm:justify-between pt-6 px-4 md:px-0'>
					<div className='w-full h-auto md:h-600 sm:w-1/4 flex flex-col m-auto text-base md:text-lg not-italic text-opacity-90'>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 md:mt-5 mb-1'>
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

						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 mb-1'>
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
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 mb-1'>
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
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 md:mt-5 mb-1'>
							<WifiRoundedIcon color='inherit' />
							<p className='pl-2'>Internet</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Wifi gratuito en departamentos</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 mb-1'>
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
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 mb-1'>
							<WeekendRoundedIcon color='inherit' />
							<p className='pl-2'>Living/comedor</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Sofa cama con carrión (para 2 personas)</li>
							<li>Aire acondicionado</li>
							<li>TV por cable</li>
							<li>Mesa y sillas (para 4 personas)</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 mb-1'>
							<DeckRoundedIcon color='inherit' />
							<p className='pl-2'>Exteriores </p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Patio común</li>
							<li>Cocheras</li>
						</ul>
					</div>
					<div className='w-full h-auto md:h-600 sm:w-1/4 flex flex-col m-auto text-base md:text-lg not-italic text-opacity-90'>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 md:mt-5 mb-1'>
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
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 mb-1'>
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
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 mb-1'>
							<AppsRoundedIcon color='inherit' />
							<p className='pl-2'>General</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Prohibido fumar dentro de los departamentos</li>
							<li>Zona fumadores (zonas comunes del edificio)</li>
							<li>Calefacción (Termotanque o Calefón)</li>
							<li>No se admiten mascotas</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 mb-1'>
							<FontAwesomeIcon icon={faVideo} color='inherit' size='lg' />
							<p className='pl-2'>Seguridad</p>
						</li>
						<ul className='text-black text-center md:text-start w-full font-thin'>
							<li>Cámaras de seguridad en zonas comunes</li>
						</ul>
						<li className='font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 mb-1'>
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

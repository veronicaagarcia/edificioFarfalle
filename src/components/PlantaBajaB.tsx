import { useState } from 'react'
import { DeptoModel } from './comon/DeptoModel'
import puerta from '../assets/videos/pbb/1puerta.mp4'
import living from '../assets/videos/pbb/2living.mp4'
import tv from '../assets/videos/pbb/3tv.mp4'
import cocina from '../assets/videos/pbb/4cocina.mp4'
import cocina2 from '../assets/videos/pbb/5cocina.mp4'
import habitacion from '../assets/videos/pbb/6habitacion.mp4'
import bano from '../assets/videos/pbb/7bano.mp4'
import bano2 from '../assets/videos/pbb/8bano.mp4'
import lavadero from '../assets/videos/pbb/9lavadero.mp4'
import { Footer } from './comon/Footer'
import Gallery from './comon/Gallery'

export function PbB() {
	const imageNames = [
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1ARYcN4X-wtmyv9k1XdCQQZiDMCYDvirF',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1b4pu_FJ-z_JE51hN2cFXq61bzBy-NO2H',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1_gkdoJ7TgUaV4GOrM_7O54Dve0ktmDtZ',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1jliDWV2-U3UzPZXR07bq0orf0dPF34df',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1g3uejMDVzxAe06iEThoT63p9hs08B6Df',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1sbh9WRMvI4Is9tOlMzSsH-m57Tu4uNcK',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Jky_AsLIf42iTxN0xYT8BeDexYIQSDRm',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1fSvGvz3igiPNguf0WrJ3A08hGmzTzJ15',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1XGz-IGdIelNE6CSrZVMh10MB3dTB8V2s',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1YmfujBudLCj7qCh9MbBjDmR4BxgNP0MK',
	]
	const [selectedImage, setSelectedImage] = useState<number | null>(null)

	const handleImageClick = (index: number) => {
		setSelectedImage(index)
	}

	return (
		<div className='w-full h-screen pb-32 pt-8 overflow-y-auto mb-4'>
			<div className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 p-4'>
				<section className='w-full lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm text-black  p-4 '>
						<h2 className='font-bold font-serif italic text-base md:text-lg text-center  text-orangeDark'>
							Planta Baja B
						</h2>
						<h3 className='text-base text-center md:text-lg font-extralight text-black opacity-80'>
							50m²
						</h3>

						<li>Cama matrimonial</li>
						<li>Sofá cama con carrión para 2 personas</li>
						<li>Placard</li>
						<li>Baño privado (Ducha, bidet, papel higiénico, jabón)</li>
						<li>Patio interno</li>
						<li>Tender</li>
						<li>Mesa y sillas (para 4 personas)</li>
						<li>Aire Acondicionado (frío/calor) en habitación y comedor</li>
						<li>Heladera</li>
						<li>Horno/hornallas</li>
						<li>Electrodomésticos (pava eléctrica, tostadora y microondas)</li>
						<li>Utensilios de cocina (cubiertos, platos, vasos, ollas)</li>
						<li>
							Elementos de limpieza (Detergente, esponja, virulana, ballerina,
							trapo de piso, balde)
						</li>
						<li>Calefón</li>
						<li>Cesto de basura (Cocina y baño)</li>
						<li>Blanquería (toalla/toallón por persona y ropa de cama)</li>
						<li>Wifi gratuito</li>
						<li>TV por cable</li>
						<li>Té y café de cortesía</li>
					</ul>
				</section>
				<div className='w-full pt-1 md:w-7/12 h-fit'>
					<Gallery imageNames={imageNames} onClick={handleImageClick} />
					{/* <DeptoModel
						numVideos={9}
						videoNames={[
							puerta,
							living,
							tv,
							cocina,
							cocina2,
							habitacion,
							bano,
							bano2,
							lavadero,
						]}
						videoSizeMultiplier={1}
						imageNames={imageNames}
					/> */}
				</div>
			</div>
			{selectedImage !== null && (
				<DeptoModel
					numVideos={9}
					videoNames={[
						puerta,
						living,
						tv,
						cocina,
						cocina2,
						habitacion,
						bano,
						bano2,
						lavadero,
					]}
					videoSizeMultiplier={1}
					imageNames={imageNames}
					onClose={() => setSelectedImage(null)} // Esta función cerrará el modelo
				/>
			)}
			<Footer />
		</div>
	)
}

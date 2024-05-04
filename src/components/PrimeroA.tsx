import { DeptoModel } from './comon/DeptoModel'
import entrada from '../assets/videos/1a/1Entrada.mp4'
import cocina from '../assets/videos/1a/2Cocina.mp4'
import living from '../assets/videos/1a/3Living.mp4'
import pasillo from '../assets/videos/1a/4Pasillo.mp4'
import habitacion from '../assets/videos/1a/5Habitacion.mp4'
import bano from '../assets/videos/1a/6Bano.mp4'
import lavadero from '../assets/videos/1a/7Lavadero.mp4'
import { Footer } from './comon/Footer'

export function PrimeroA() {
	const imageNames = [
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=18ooD5HDkYSEzR4RLcsWR2ge56vnnWDdY',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Q-P5qwl-lBzIsnWOLjdWLCGM7WZyozfo',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=13JNpzvHgPy0cEzWauVfdz_Tch-wKRYhT',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1lRdnsKM3J4Hct2aeEkssGBRKyzsOm1YQ',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=16ueGOfVyB7OD42OuZfsfCEzuqKwC3D_q',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Y36_aRoXdiR4petI6epdV9F-Mdm1hZjf',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1uc32KS-nfAInPIglI7ckrLRlwcYaChIN',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1swjgDBjnUUNi92chr9utDUcQ0UV04B7C',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1rUW1qZU4omkP8Ss6yQb9ltXwmjIoKU7k',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1UJhYWduvfwL20iuSwPdetir6eImdTFi6',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1KZGSUfsfL_U9xnKvtqMKw0soXe2h6jro',
	]
	return (
		<div className='w-full h-screen pb-32 pt-8 overflow-y-auto mb-4'>
			<div className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 p-4'>
				<section className='w-full lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm text-black  p-4 '>
						<h2 className='font-bold font-serif pt-6 italic text-base md:text-lg text-center  text-orangeDark'>
							Primero A
						</h2>
						<h3 className='text-base text-center md:text-lg font-extralight text-black opacity-80'>
							80m²
						</h3>

						<li>Cama matrimonial</li>
						<li>Sofá cama con carroñ para 2 personas</li>
						<li>Placard</li>
						<li>Baño privado (Ducha, bidet, papel higiénico, jabón)</li>
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
						<li>Termotanque</li>
						<li>Cesto de basura (Cocina y baño)</li>
						<li>Blanquería (toalla/toallón por persona y ropa de cama)</li>
						<li>Wifi gratuito</li>
						<li>TV por cable</li>
						<li>Té y café de cortesía</li>
					</ul>
				</section>
				<div className='w-full pt-1 md:w-7/12 h-fit'>
					<DeptoModel
						numVideos={7}
						videoNames={[
							entrada,
							cocina,
							living,
							pasillo,
							habitacion,
							bano,
							lavadero,
						]}
						videoSizeMultiplier={1}
						imageNames={imageNames}
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}

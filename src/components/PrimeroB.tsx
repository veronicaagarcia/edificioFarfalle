import { DeptoModel } from './comon/DeptoModel'
import puerta from '../assets/videos/1b/1Puerta.mp4'
import living from '../assets/videos/1b/2Living.mp4'
import tv from '../assets/videos/1b/3LivingTv.mp4'
import cocina from '../assets/videos/1b/4Cocina.mp4'
import habitacion from '../assets/videos/1b/5Habitacion.mp4'
import bano from '../assets/videos/1b/6Bano.mp4'
import entrada from '../assets/videos/1b/EntradaLiving.mp4'
import lavadero from '../assets/videos/1b/7Lavadero.mp4'
import { Footer } from './comon/Footer'

export function PrimeroB() {
	const imageNames = [
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1KIxahCHwxffbHGRUFwJiJvBvM6R96IiI',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1a4JiYbN0BAbJ-NQ-ZeQ75F2P5dhFn7Dc',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1O2KRplTXvn4oOtQRJXOBeIYGj5xgM57D',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1KYH9A4kJjzB753fZtrd1IEoafVBQGeKX',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1q3iDT5rkKuJl9jhE0LtI8JKUY-f2VZvZ',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1fKV-HX5-NzkM-Wy25E9aJwZ3qWDhgBA9',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1AbMg8rTKBxaE9qQNN6Y7m9ETqreun7GP',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1tPNdmdMXjBj2kia__heymh3eIQhNSRek',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1F5dRFP1hsCfm8Bbv-7b1aQhZmKODNMHh',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1EFbzk-IV04Os4JwAn1lS7FM66_9zBwsP',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1VnHUOHVGlFb1T97xEBIWvABb-VPEd0Zh',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1yDN6wOsHtC4r-EQpC7QUiepFyJf1SAXC',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1nj1dM7B3-7pZFTsEfrVxkY0exenvaY48',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1mL7MkKwzA_wdumFFqL-u89c961GwbtYm',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1dX75r9w2jlqr1zdH04kxSnTrTKZApqJj',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=133t5GEH37WlaBW-Lf65J72EnAqVl7Zvf',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1lpMBfSk8jk6uGI4wIHo5Bs1DiUBeZ-eF',
	]
	return (
		<div className='w-full h-screen pb-32 pt-8 overflow-y-auto mb-4'>
			<div className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 p-4'>
				<section className='w-full lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm text-black  p-4 '>
						<h2 className='font-bold font-serif pt-6 italic text-base md:text-lg text-center  text-orangeDark'>
							Primero B
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
						numVideos={8}
						videoNames={[
							puerta,
							living,
							tv,
							cocina,
							habitacion,
							bano,
							entrada,
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

import { useState } from 'react'
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
import Gallery from './comon/Gallery'

export function PrimeroB() {
	interface Media {
		type: 'image' | 'video'
		url: string
	}

	const media: Media[] = [
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1VnHUOHVGlFb1T97xEBIWvABb-VPEd0Zh',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1EFbzk-IV04Os4JwAn1lS7FM66_9zBwsP',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1fKV-HX5-NzkM-Wy25E9aJwZ3qWDhgBA9',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1q3iDT5rkKuJl9jhE0LtI8JKUY-f2VZvZ',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1KYH9A4kJjzB753fZtrd1IEoafVBQGeKX',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1O2KRplTXvn4oOtQRJXOBeIYGj5xgM57D',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1a4JiYbN0BAbJ-NQ-ZeQ75F2P5dhFn7Dc',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1lpMBfSk8jk6uGI4wIHo5Bs1DiUBeZ-eF',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=133t5GEH37WlaBW-Lf65J72EnAqVl7Zvf',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1dX75r9w2jlqr1zdH04kxSnTrTKZApqJj',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1mL7MkKwzA_wdumFFqL-u89c961GwbtYm',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1nj1dM7B3-7pZFTsEfrVxkY0exenvaY48',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1F5dRFP1hsCfm8Bbv-7b1aQhZmKODNMHh',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1tPNdmdMXjBj2kia__heymh3eIQhNSRek',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1yDN6wOsHtC4r-EQpC7QUiepFyJf1SAXC',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1KIxahCHwxffbHGRUFwJiJvBvM6R96IiI',
		},

		// Añade más imágenes aquí...
		{ type: 'video', url: puerta },
		{ type: 'video', url: living },
		{ type: 'video', url: tv },
		{ type: 'video', url: bano },
		{ type: 'video', url: cocina },
		{ type: 'video', url: habitacion },
		{ type: 'video', url: entrada },
		{ type: 'video', url: lavadero },
		// Añade más videos aquí...
	]

	const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(
		null
	)

	const handleMediaClick = (index: number) => {
		setSelectedMediaIndex(index === selectedMediaIndex ? null : index)
	}

	const handleCloseModal = () => {
		setSelectedMediaIndex(null)
	}

	return (
		<div className='w-full h-screen pb-32 pt-8 overflow-y-auto mb-4'>
			<div className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 py-4'>
				<section className='w-full lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm text-black  p-4 '>
						<h2 className='font-bold font-serif italic text-base md:text-lg text-center  text-orangeDark'>
							Primero B
						</h2>
						<h3 className='text-base text-center md:text-lg font-extralight text-black opacity-80'>
							80m²
						</h3>

						<li>Cama matrimonial</li>
						<li>Sofá cama con carrión para 2 personas</li>
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
					<Gallery media={media} onClick={handleMediaClick} />
				</div>
			</div>
			{selectedMediaIndex !== null && (
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
					imageNames={media
						.filter((item) => item.type === 'image')
						.map((item) => item.url)}
					onClose={handleCloseModal}
					initialIndex={selectedMediaIndex}
				/>
			)}
			<Footer />
		</div>
	)
}

import { DeptoModel } from './comon/DeptoModel'
import puerta from '../assets/videos/1b/1Puerta.mp4'
import living from '../assets/videos/1b/2Living.mp4'
import tv from '../assets/videos/1b/3LivingTv.mp4'
import cocina from '../assets/videos/1b/4Cocina.mp4'
import habitacion from '../assets/videos/1b/5Habitacion.mp4'
import bano from '../assets/videos/1b/6Bano.mp4'
import entrada from '../assets/videos/1b/EntradaLiving.mp4'
import lavadero from '../assets/videos/1b/7Lavadero.mp4'

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
		<div className='w-full h-screen overflow-y-auto p-2'>
			<h2 className='font-thin font-serif italic text-base md:text-lg text-center text-orangeDark pt-2'>
				Primero B
			</h2>
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
	)
}

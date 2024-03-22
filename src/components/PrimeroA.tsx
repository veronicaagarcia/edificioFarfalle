import { DeptoModel } from './comon/DeptoModel'
import entrada from '../assets/videos/1a/1Entrada.mp4'
import cocina from '../assets/videos/1a/2Cocina.mp4'
import living from '../assets/videos/1a/3Living.mp4'
import pasillo from '../assets/videos/1a/4Pasillo.mp4'
import habitacion from '../assets/videos/1a/5Habitacion.mp4'
import bano from '../assets/videos/1a/6Bano.mp4'
import lavadero from '../assets/videos/1a/7Lavadero.mp4'

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
		<div className='w-full h-screen overflow-y-auto p-2'>
			<h2 className='font-thin font-serif italic text-base md:text-lg text-center text-orangeDark pt-2'>
				Primero A
			</h2>
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
	)
}

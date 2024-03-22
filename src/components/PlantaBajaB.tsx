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
	return (
		<div className='w-full h-screen overflow-y-auto p-2'>
			<h2 className='font-thin font-serif italic text-base md:text-lg text-center text-orangeDark pt-2'>
				Planta Baja B
			</h2>
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
			/>
		</div>
	)
}

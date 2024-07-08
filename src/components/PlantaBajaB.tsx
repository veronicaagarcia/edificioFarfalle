import { useState } from 'react'
import { DeptoModel } from '../components/comon/DeptoModel'
import Gallery from '../components/comon/Gallery'

export function PbB() {
	interface Media {
		type: 'image' | 'video'
		url: string
	}

	const completo = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/videoPBB.mp4'

	const media: Media[] = [
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1g3uejMDVzxAe06iEThoT63p9hs08B6Df',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1ARYcN4X-wtmyv9k1XdCQQZiDMCYDvirF',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1b4pu_FJ-z_JE51hN2cFXq61bzBy-NO2H',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1jliDWV2-U3UzPZXR07bq0orf0dPF34df',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1YmfujBudLCj7qCh9MbBjDmR4BxgNP0MK',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1XGz-IGdIelNE6CSrZVMh10MB3dTB8V2s',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1sbh9WRMvI4Is9tOlMzSsH-m57Tu4uNcK',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1fSvGvz3igiPNguf0WrJ3A08hGmzTzJ15',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1_gkdoJ7TgUaV4GOrM_7O54Dve0ktmDtZ',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Jky_AsLIf42iTxN0xYT8BeDexYIQSDRm',
		},

		{ type: 'video', url: completo },
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
			<h2 className='font-bold font-serif italic text-base md:text-lg text-center text-orangeDark mt-4'>
				Planta Baja B
			</h2>
			<h3 className='text-base text-center md:text-lg font-extralight text-black opacity-80 mb-4'>
				50m²
			</h3>
			<div className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 py-4'>
				<section className='w-full md:w-1/2 lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm py-4 px-6 text-white bg-gradient-to-b from-nav to-black rounded-md'>
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
					<Gallery media={media} onClick={handleMediaClick} />
				</div>
			</div>
			{selectedMediaIndex !== null && (
				<DeptoModel
					numVideos={1}
					videoNames={[completo]}
					videoSizeMultiplier={1}
					imageNames={media
						.filter((item) => item.type === 'image')
						.map((item) => item.url)}
					onClose={handleCloseModal}
					initialIndex={selectedMediaIndex}
				/>
			)}
		</div>
	)
}

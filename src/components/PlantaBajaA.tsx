import { useState } from 'react'
import { DeptoModel } from './comon/DeptoModel'
import { Gallery } from './comon/Gallery'
import { DeptoIcons } from './comon/DeptoIcons'
import { Footer } from './comon/Footer'

export function PbA() {
	interface Media {
		type: 'image' | 'video'
		url: string
	}
	const completo = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/Completo.mp4'

	const media: Media[] = [
		{ type: 'video', url: completo },
		{
			type: 'image',
			url: '/edificioFarfalle/images/PbA/1.jpg', 
		},
		{ type: 'image', url: '/edificioFarfalle/images/PbA/2.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbA/3.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbA/4.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbA/5.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbA/6.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbA/7.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbA/8.jpg' },
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
		<div className='w-full h-screen pt-12 overflow-y-scroll scrollbar-hide'>
			<div className='py-8 md:py-12 xl:py-16 2xl:py-20'>
			<h2 className='text-lg md:text-xl font-mono font-medium uppercase text-nav text-center'>
				Planta Baja A
			</h2>
			<h3 className='text-base text-center md:text-lg font-bold text-black opacity-80'>
				50m²
			</h3>
			</div>
			<div
				className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 py-4 md:py-8 xl:py-12 bg-gradient-to-bl to-almostWhite via-gray from-nav'
			>
				<section className='w-full md:w-1/2 lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm md:text-base xl:text-lg py-4 md:py-10 px-6 text-black opacity-90'>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Cama matrimonial
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Sofá cama con carrión
							para 2 personas
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Placard
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4 md:mb-0'>•</span>Baño privado
							(Ducha, bidet, papel higiénico, jabón)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Patio interno
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Tender
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Mesa y sillas (para 4
							personas)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4 md:mb-0'>•</span>Aire Acondicionado
							(frío/calor) en habitación y comedor
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Heladera
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Horno/hornallas
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4 md:mb-0'>•</span>Electrodomésticos
							(pava eléctrica, tostadora y microondas)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4 md:mb-0'>•</span>Utensilios de
							cocina (cubiertos, platos, vasos, ollas)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4 md:mb-0'>•</span>
							Elementos de limpieza (Detergente, esponja, virulana, ballerina,
							trapo de piso, balde)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Calefón
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Cesto de basura (Cocina
							y baño)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4 md:mb-0'>•</span>Blanquería
							(toalla/toallón por persona y ropa de cama)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Wifi gratuito
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>TV por cable
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Té y café de cortesía
						</li>
					</ul>
				</section>
				<div className='w-full pt-1 lg:w-[65%] xl:w-7/12 h-fit'>
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
			<DeptoIcons />
			<Footer />
		</div>
	)
}

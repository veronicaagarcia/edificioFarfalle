import { useState } from 'react'
import { DeptoModel } from './comon/DeptoModel'
import Gallery from './comon/Gallery'
import { DeptoIcons } from './comon/DeptoIcons'
import { Footer } from './comon/Footer'

export function PrimeroB() {
	interface Media {
		type: 'image' | 'video'
		url: string
	}
	const completo = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/1B.mp4'
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
			<h2 className='text-2xl md:text-3xl text-center text-orangeSoft text-opacity-90 mb-2 px-3 md:px-28 pt-2 md:pt-3 font-bold'>
				Primero B
			</h2>
			<h3 className='text-base text-center md:text-lg font-semibold text-black opacity-80 mb-4'>
				80m²
			</h3>
			<div
				className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 py-4'
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1670160942428-22ecf8aae0b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBibGFuY29zfGVufDB8MXwwfHx8Mg%3D%3D")',

					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<section className='w-full md:w-1/2 lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm md:text-base py-4 px-6 text-black opacity-90'>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Cama matrimonial
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Sofá cama con carrión para
							2 personas
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Placard
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2 mb-4'>•</span>Baño privado (Ducha,
							bidet, papel higiénico, jabón)
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Tender
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Mesa y sillas (para 4
							personas)
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2 mb-4'>•</span>Aire Acondicionado
							(frío/calor) en habitación y comedor
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Heladera
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Horno/hornallas
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2 mb-4'>•</span>Electrodomésticos
							(pava eléctrica, tostadora y microondas)
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2 mb-4'>•</span>Utensilios de cocina
							(cubiertos, platos, vasos, ollas)
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2 mb-4'>•</span>
							Elementos de limpieza (Detergente, esponja, virulana, ballerina,
							trapo de piso, balde)
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Termotanque
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Cesto de basura (Cocina y
							baño)
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2 mb-4'>•</span>Blanquería
							(toalla/toallón por persona y ropa de cama)
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Wifi gratuito
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>TV por cable
						</li>
						<li className='flex items-center'>
							<span className='text-nav mr-2'>•</span>Té y café de cortesía
						</li>
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
			<DeptoIcons />
			<Footer />
		</div>
	)
}

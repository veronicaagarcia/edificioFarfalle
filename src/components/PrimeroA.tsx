import { useState } from 'react'
import { DeptoModel } from './comon/DeptoModel'
import Gallery from './comon/Gallery'
import { DeptoIcons } from './comon/DeptoIcons'
import { Footer } from './comon/Footer'

export function PrimeroA() {
	interface Media {
		type: 'image' | 'video'
		url: string
	}
	const completo = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/1A.mp4'
	const media: Media[] = [
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=16ueGOfVyB7OD42OuZfsfCEzuqKwC3D_q',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1lRdnsKM3J4Hct2aeEkssGBRKyzsOm1YQ',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1KZGSUfsfL_U9xnKvtqMKw0soXe2h6jro',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1UJhYWduvfwL20iuSwPdetir6eImdTFi6',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1rUW1qZU4omkP8Ss6yQb9ltXwmjIoKU7k',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1swjgDBjnUUNi92chr9utDUcQ0UV04B7C',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1uc32KS-nfAInPIglI7ckrLRlwcYaChIN',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Y36_aRoXdiR4petI6epdV9F-Mdm1hZjf',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=13JNpzvHgPy0cEzWauVfdz_Tch-wKRYhT',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Q-P5qwl-lBzIsnWOLjdWLCGM7WZyozfo',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=18ooD5HDkYSEzR4RLcsWR2ge56vnnWDdY',
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
			<h2 className='text-2xl md:text-3xl text-center text-orange text-opacity-90 mb-2 px-3 md:px-28 pt-3 md:pt-6 font-bold'>
				Primero A
			</h2>
			<h3 className='text-base text-center md:text-lg font-bold text-black opacity-80 mb-4'>
				80m²
			</h3>
			<div
				className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 py-4'
				// style={{
				// 	backgroundImage:
				// 		'url("https://images.unsplash.com/photo-1670160942428-22ecf8aae0b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBibGFuY29zfGVufDB8MXwwfHx8Mg%3D%3D")',

				// 	backgroundSize: 'cover',
				// 	backgroundPosition: 'center',
				// }}
			>
				<section className='w-full md:w-1/2 lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm md:text-base py-4 px-6 text-black opacity-90'>
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
							<span className='text-orange mr-2 mb-4'>•</span>Baño privado
							(Ducha, bidet, papel higiénico, jabón)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Tender
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Mesa y sillas (para 4
							personas)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4'>•</span>Aire Acondicionado
							(frío/calor) en habitación y comedor
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Heladera
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Horno/hornallas
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4'>•</span>Electrodomésticos
							(pava eléctrica, tostadora y microondas)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4'>•</span>Utensilios de
							cocina (cubiertos, platos, vasos, ollas)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4'>•</span>
							Elementos de limpieza (Detergente, esponja, virulana, ballerina,
							trapo de piso, balde)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Termotanque
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2'>•</span>Cesto de basura (Cocina
							y baño)
						</li>
						<li className='flex items-center'>
							<span className='text-orange mr-2 mb-4'>•</span>Blanquería
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

import { useState } from 'react'
import { DeptoModel } from './comon/DeptoModel'
import Gallery from './comon/Gallery'
import { DeptoIcons } from './comon/DeptoIcons'
import { Footer } from './comon/Footer'

export function SegundoB() {
	interface Media {
		type: 'image' | 'video'
		url: string
	}
	const completo = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/2B.mp4'

	const media: Media[] = [
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1nf45gVY0cK6zaRouyXB4lfusLG_xpqfI',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1kKa1JN2gX99gcD_Kuard_DKqG5S3t3ap',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1frw4NHR4QjbVf3nyLji3EF9ChTdWt94e',
		},

		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=18-ZK_tSlKNxJwhnfhdk5fH8sprSLbv3R',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1m-BOrLQ9gli6P7GLvhtrb_LXZcxvOiCg',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1dPclrfbjFC-JZyPYOkK_5nrj7_ESG4TP',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1ugDOvXt24WPH-1nwqm59SUWrL9mWAgyu',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1lhhUO1cKlnLs8suNLhoDQRpxq-wDzlU-',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1TdrLy_k4kTfl1lvIr5cIKxnv0SiHE2PJ',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1t8q3AvLuZvALuSEAzM5Bdz33z6DQIWxj',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1cfFM-1-WBBby9yvFHHzm05piwZCEm3-k',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1rl5LjUmRjHY8fvqk09ysDo1obQeejMKw',
		},
		{
			type: 'image',
			url: 'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1CfLav5VVdlJJcLLzR_h0pkBBzzuJXWoE',
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
				Segundo B
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

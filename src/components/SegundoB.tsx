import { useState } from 'react'
import { DeptoModel } from './comon/DeptoModel'
import Gallery from './comon/Gallery'

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
			<h2 className='font-bold font-serif italic text-base md:text-lg text-center text-orangeDark mt-4'>
				Segundo B
			</h2>
			<h3 className='text-base text-center md:text-lg font-extralight text-black opacity-80 mb-4'>
				80m²
			</h3>
			<div className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 py-4'>
				<section className='w-full md:w-1/2 lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm py-4 px-6 text-white bg-gradient-to-b from-nav to-black rounded-md'>
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

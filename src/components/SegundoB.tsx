import { DeptoModel } from './comon/DeptoModel'
import puerta from '../assets/videos/2b/1Puerta.mp4'
import entrada from '../assets/videos/2b/2Entrando.mp4'
import living from '../assets/videos/2b/3Living.mp4'
import livingFrente from '../assets/videos/2b/4LivingFrente.mp4'
import livingCocina from '../assets/videos/2b/5LivingCocina.mp4'
import cocina from '../assets/videos/2b/6Cocina.mp4'
import habitacionEntrada from '../assets/videos/2b/7EntrandoHabitacion.mp4'
import habitacion from '../assets/videos/2b/8Habitacion.mp4'
import bano from '../assets/videos/2b/9Bano.mp4'
import lavadero from '../assets/videos/2b/10Lavadero.mp4'
import { Footer } from './comon/Footer'

export function SegundoB() {
	const imageNames = [
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1CfLav5VVdlJJcLLzR_h0pkBBzzuJXWoE',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1cfFM-1-WBBby9yvFHHzm05piwZCEm3-k',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1t8q3AvLuZvALuSEAzM5Bdz33z6DQIWxj',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1kKa1JN2gX99gcD_Kuard_DKqG5S3t3ap',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1hcWVEZumt794Ch1ueQzbeazeJ1SR2E36',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1dPclrfbjFC-JZyPYOkK_5nrj7_ESG4TP',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=184tW1K8fvl1ztbR67ihSIOVM9tw3mVLM',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1m-BOrLQ9gli6P7GLvhtrb_LXZcxvOiCg',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=18-ZK_tSlKNxJwhnfhdk5fH8sprSLbv3R',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1nf45gVY0cK6zaRouyXB4lfusLG_xpqfI',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1rl5LjUmRjHY8fvqk09ysDo1obQeejMKw',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1frw4NHR4QjbVf3nyLji3EF9ChTdWt94e',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1TdrLy_k4kTfl1lvIr5cIKxnv0SiHE2PJ',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1d2At5-cWPBM19WduIkVP2N0tzkCADOqq',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1REPfNpHnYJy-v7GjTjSBjpONH7jBOeKl',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1OIcnPXS_K6rJhtzGPfzSfn4qBaPSBwCW',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1lhhUO1cKlnLs8suNLhoDQRpxq-wDzlU-',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1ugDOvXt24WPH-1nwqm59SUWrL9mWAgyu',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1KB-yMSj0l6OIOfyu80hwzpBHzmElHR_r',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1DQHOc6CftVTrt6NTQ0OAK2ylE0dKo0tt',
	]
	return (
		<div className='w-full h-screen pb-32 pt-8 overflow-y-auto mb-4'>
			<div className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 p-4'>
				<section className='w-full lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm text-black  p-4 '>
						<h2 className='font-bold font-serif pt-6 italic text-base md:text-lg text-center  text-orangeDark'>
							Segundo B
						</h2>
						<h3 className='text-base text-center md:text-lg font-extralight text-black opacity-80'>
							80m²
						</h3>

						<li>Cama matrimonial</li>
						<li>Sofá cama con carroñ para 2 personas</li>
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
					<DeptoModel
						numVideos={10}
						videoNames={[
							puerta,
							entrada,
							living,
							livingFrente,
							livingCocina,
							cocina,
							habitacionEntrada,
							habitacion,
							bano,
							lavadero,
						]}
						videoSizeMultiplier={1}
						imageNames={imageNames}
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}

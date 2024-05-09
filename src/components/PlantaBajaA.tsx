import { DeptoModel } from './comon/DeptoModel'
import completo from '../assets/videos/pba/Completo.mp4'
import { Footer } from './comon/Footer'

export function PbA() {
	const imageNames = [
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Ki8P47TmBeMxRH-UJTI24huCM0wjCGeh',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1btivKot0vCI1Zaq9FDLCW2DSoSbkXHZC',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1tTE_iQgReJ_2KRTDe7cfGX3M7CdQ42cD',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=182dKtwes3VI1-n9XbOBFfs6kKLv-XcOC',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1q6fWRsYrZfX8n83q-qU2RB5T7ZnF6znF',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Lj1YCFKLMjAkY_5B9zurQj5YIOruWIHA',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1t1uEhsQ1jVgD3vrsAqecHcnVo_YEKjiu',
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1IKN2uA9tfhwGcl7V4T_rnkPZQY0Lw1Gj',
	]

	return (
		<div className='w-full h-screen pb-32 pt-8 overflow-y-auto mb-4'>
			<div className='w-full h-fit flex flex-col md:flex-row md:justify-around mb-2 p-4'>
				<section className='w-full lg:w-1/3 h-fit mb-24 flex flex-col px-5 pt-2'>
					<ul className='list-disc list-inside text-sm text-black  p-4 '>
						<h2 className='font-bold font-serif pt-6 italic text-base md:text-lg text-center  text-orangeDark'>
							Planta Baja A
						</h2>
						<h3 className='text-base text-center md:text-lg font-extralight text-black opacity-80'>
							50m²
						</h3>
						<li>Cama matrimonial</li>
						<li>Sofá cama con carroñ para 2 personas</li>
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
					<DeptoModel
						numVideos={1}
						videoNames={[completo]}
						videoSizeMultiplier={1}
						imageNames={imageNames}
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}

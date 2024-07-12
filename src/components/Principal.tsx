import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import { RatingCharts } from './comon/RatingChart'
import { Footer } from './comon/Footer'

interface PrincipalProps {
	isMobile: boolean
}

export function Principal({ isMobile }: PrincipalProps) {
	const video = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/principal.mp4'

	return (
		<div className='container mx-auto pt-0 md:pt-8 pb-28 h-min-screen h-full overflow-y-scroll'>
			<section
				className={`${
					isMobile ? ` h-72` : ` h-96 `
				} relative w-full max-w-full overflow-hidden max-h-96 mb-4`}
			>
				<video
					className='w-full object-cover object-center h-96 max-h-96 transition-shadow'
					autoPlay
					playsInline
					loop
				>
					<source src={video} type='video/mp4' />
				</video>
				<div className='absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-almostWhite to-transparent'></div>
			</section>
			<h2
				className={`text-center text-black text-opacity-90 animate-typewriter overflow-hidden border-r-4 border-r-orange-500 mb-8 ${
					isMobile
						? `px-3 pt-2 text-lg whitespace-wrap`
						: `whitespace-nowrap px-28 pt-3 text-xl`
				}`}
			>
				Bienvenidos a <strong className='text-orange'>Edificio Farfalle</strong>
				, tu lugar en la ciudad de La Plata
			</h2>
			<p
				className={`text-justify text-black text-opacity-90 mb-8 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				Ofrecemos una experiencia de alojamiento única en la Ciudad de La Plata.
				Contamos con opciones flexibles y convenientes para aquellos que buscan
				alojamiento a corto plazo. Nuestras unidades están diseñadas para
				brindar comodidad y funcionalidad, ya sea para estancias cortas, o para
				períodos más prolongados. Nuestros departamentos están completamente
				amueblados y equipados con todas las comodidades necesarias para una
				estadía confortable, buscando brindar calidad y confort en nuestro
				servicio para que la estadía sea placentera y te sientas{' '}
				<strong className='text-orange'>como en casa</strong>.
			</p>
			<h2 className='text-xl md:mt-4 font-bold text-orange text-center mb-8'>
				¿Por qué elegirnos?
			</h2>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				<strong className='font-bold'>
					Ubicación Privilegiada y tranquila:
				</strong>{' '}
				Situado en una zona residencial tranquila de La Plata, Edificio Farfalle
				ofrece un escape del bullicio del centro de la ciudad. Disfruta de la
				paz y la tranquilidad mientras sigues estando a poca distancia de los
				principales puntos de interés.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				<strong className='font-bold'>Comodidad y Modernidad:</strong> Nuestros
				departamentos están diseñados para ofrecer el máximo confort con
				instalaciones modernas y elegantes. Cada unidad está completamente
				equipada con todo lo que necesitas para sentirte como en casa,
				incluyendo cocina completa, Wi-Fi gratuito y TV por cable.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				<strong className='font-bold'>Estacionamiento Disponible:</strong> Para
				aquellos que viajan en coche, ofrecemos opciones de estacionamiento
				seguras y convenientes, eliminando el estrés de buscar un lugar para
				aparcar.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				<strong className='font-bold'>Entorno Familiar y Seguro: </strong>{' '}
				Nuestra ubicación en una zona residencial garantiza un entorno seguro y
				familiar, perfecto para huéspedes de todas las edades.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				<strong className='font-bold'>
					Fácil Acceso al Transporte Público:{' '}
				</strong>{' '}
				Aunque no estamos en el centro de la ciudad, estamos bien conectados con
				las principales líneas de transporte público, lo que facilita el acceso
				a cualquier parte de La Plata.
			</p>

			<p
				className={`text-justify text-black text-opacity-90 mb-2 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				<strong className='font-bold'>Relación Calidad-Precio: </strong>{' '}
				Ofrecemos tarifas competitivas y un excelente valor por tu dinero,
				asegurando que recibas una experiencia de alta calidad sin romper el
				banco.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				<strong className='font-bold'>Atmósfera Agradable: </strong> Con un
				diseño interior acogedor y una atmósfera cálida, nuestros departamentos
				están pensados para que te sientas relajado y a gusto desde el momento
				en que entras.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-8 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				<strong className='font-bold'>Servicio Personalizado:</strong> Nos
				enorgullece ofrecer atención personalizada para asegurar que tu estancia
				sea lo más placentera posible. Nuestro personal está siempre dispuesto a
				ayudarte con cualquier necesidad o consulta que puedas tener.
			</p>
			{/* <h2 className='text-xl md:mt-4 font-semibold text-orangeSoft text-center mb-8'>
				Consulta por Ofertas Especiales
			</h2>
			<ul className='list-disc list-inside text-sm md:text-base py-4 px-6 text-black opacity-90'>
				<li
					className={`flex items-center text-justify text-black text-opacity-90 mb-2 ${
						isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
					}`}
				>
					<span className='text-nav mr-2'>•</span>Descuentos por estancias
					prolongadas
				</li>
				<li
					className={`flex items-center text-justify text-black text-opacity-90 mb-2 ${
						isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
					}`}
				>
					<span className='text-nav mr-2'>•</span>Promociones para reservas
					anticipadas
				</li>
				<li
					className={`flex items-center text-justify text-black text-opacity-90 mb-8 ${
						isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
					}`}
				>
					<span className='text-nav mr-2 -mt-6'>•</span>Descuento para Clientes
					Fieles: Agradecemos a nuestros huéspedes recurrentes con un descuento
					especial. Si ya te has hospedado con nosotros, disfruta de tarifas
					reducidas en tu próxima estancia.
				</li>
			</ul> */}
			<h2 className='text-xl md:mt-4 font-bold text-orange text-center mb-8'>
				Opiniones y Valoraciones
			</h2>
			<p
				className={`text-justify text-black text-opacity-90 mb-8 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				Nos enorgullece ofrecer una experiencia de alojamiento excepcional. No
				solo lo decimos nosotros, sino que nuestros huéspedes también lo
				confirman. Consulta las valoraciones y opiniones de quienes ya han
				disfrutado de su estancia con nosotros.
			</p>
			<div className='flex flex-col md:flex-row'>
				<div className='w-full md:w-1/2 '>
					<h3 className='text-lg md:mt-4 font-bold text-black text-start px-3 sm:px-28 mb-8'>
						Booking
					</h3>
					<p
						className={`text-justify text-black text-opacity-90 mb-8 ${
							isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
						}`}
					>
						Edificio Farfalle tiene una puntuación destacada en Booking.com.
						Nuestros huéspedes nos han valorado con una calificación promedio de
						9.4/10. Agradecemos a todos nuestros visitantes por sus maravillosas
						reseñas y comentarios que resaltan nuestra hospitalidad, limpieza y
						excelente ubicación.
					</p>
				</div>
				<div className='w-full md:w-1/2 '>
					<h3 className='text-lg md:mt-4 font-bold text-black text-start px-3 sm:px-28 mb-8'>
						Airbnb
					</h3>
					<p
						className={`text-justify text-black text-opacity-90 mb-8 ${
							isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
						}`}
					>
						En Airbnb, nuestros huéspedes han otorgado a Edificio Farfalle una
						impresionante puntuación de 5/5. Estamos muy contentos de recibir
						sus valoraciones positivas que destacan la comodidad de nuestros
						departamentos y la calidad del servicio que brindamos.
					</p>
				</div>
			</div>
			<div
				className='p-6 relative mb-8'
				// style={{
				// 	backgroundImage:
				// 		'url("https://images.unsplash.com/photo-1543157145-f78c636d023d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGFic3RyYWN0JTIwYmFja2dyb3VuZCUyMGJsYW5jb3N8ZW58MHwwfDB8fHwy")',

				// 	backgroundSize: 'cover',
				// 	backgroundPosition: 'center',
				// }}
			>
				<div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-almostWhite to-transparent'></div>
				<RatingCharts />
				<div className='absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-almostWhite to-transparent'></div>
			</div>

			<h2 className='text-xl font-bold text-orange text-center mb-8'>
				Comparte Tu Experiencia
			</h2>
			<p
				className={`text-justify text-black text-opacity-90 mb-8 ${
					isMobile ? `px-3 pt-2 text-base` : `px-28 pt-3 text-lg`
				}`}
			>
				Si ya te has hospedado con nosotros, nos encantaría escuchar tu opinión.
				Tu feedback nos ayuda a mejorar y a seguir ofreciendo una experiencia de
				calidad. Puedes dejar tu reseña en:{' '}
				<a
					href='https://www.booking.com/hotel/ar/farfalle.es-ar.html#tab-reviews'
					target='_blank'
					rel='noopener noreferrer'
					className=' font-lato'
				>
					Booking
				</a>{' '}
				y{' '}
				<a
					href='https://es-l.airbnb.com/rooms/54102302/reviews?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-05-20&check_out=2024-05-25&source_impression_id=p3_1715699031_Nw6dgILYkxqsos2D&previous_page_section_name=1000&federated_search_id=8006342d-5149-4a1a-bf03-1ebed305d08a'
					target='_blank'
					rel='noopener noreferrer'
					className=' font-lato'
				>
					Airbnb
				</a>
				.
			</p>
			<h3 className='text-lg md:mt-4 font-bold text-black text-start px-3 sm:px-28 mb-8'>
				Reserva Hoy
			</h3>
			<p
				className={`text-justify text-black text-opacity-90 mb-12 ${
					isMobile ? `px-3 text-base` : `px-28 text-lg`
				}`}
			>
				Descubre por ti mismo por qué Edificio Farfalle es la elección preferida
				de tantos viajeros. Reserva hoy y disfruta de una experiencia de
				alojamiento excepcional en La Plata.
			</p>
			<Footer />
		</div>
	)
}

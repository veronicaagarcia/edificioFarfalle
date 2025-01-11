import { useEffect, useRef, useState, useCallback } from 'react'
import { RatingCharts } from './comon/RatingChart'
import { Footer } from './comon/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface PrincipalProps {
  isMobile: boolean
}

export function Principal({ isMobile }: PrincipalProps) {
  const video = '/edificioFarfalle/video.start.mp4'
  const animatedRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  
  const initAOS = useCallback(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    })
  }, [])

  useEffect(() => {
    initAOS()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate')
          } else {
            entry.target.classList.remove('aos-animate')
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    animatedRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      animatedRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [initAOS])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  return (
    <div className='mx-auto w-full h-full md:mt-6'>
      <section
        className={`${
          isMobile ? 'h-72' : 'h-[500px]'
        } relative w-full max-w-screen overflow-hidden max-h-[500px] mb-4`}
      >
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
		<div className='relative'>
		<h1
		ref={(el) => (animatedRefs.current[0] = el)}
		data-aos="fade-up" 
		data-aos-duration="1000"
		data-aos-offset="200" 
          className={`absolute top-[20%] md:top-[35%] text-center w-full text-white mb-8 ${
            isMobile
              ? 'mx-auto pt-2 text-lg whitespace-wrap'
              : 'whitespace-nowrap mx-auto pt-3 text-4xl'
          }`}
        >
          Bienvenidos a  <span className='text-orange italic'>  Edificio Farfalle  </span> 
          tu lugar en la ciudad de La Plata
        </h1>
        <video
          className={`w-full object-cover object-center h-[600px] max-h-[600px] transition-opacity duration-300 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          playsInline
          loop
          muted
          onLoadedData={handleVideoLoad}
          poster="/edificioFarfalle/video-poster.jpg"
        >
          <source src={video} type='video/mp4' />
          Tu navegador no soporta el elemento de video.
        </video>
		</div>
        <div className='absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-almostWhite to-transparent'></div>
      </section>

      <div className='px-3 md:px-28'>
        {/* <h1
          className={`text-center text-black text-opacity-90 animate-typewriter overflow-hidden border-r-4 border-r-orange-500 mb-8 ${
            isMobile
              ? 'mx-auto pt-2 text-lg whitespace-wrap'
              : 'whitespace-nowrap mx-auto pt-3 text-xl'
          }`}
        >
          Bienvenidos a <span className='text-orange italic'> Edificio Farfalle </span>
          tu lugar en la ciudad de La Plata
        </h1> */}
			<p
				className={`text-justify text-black text-opacity-90 mb-8 px-4 md:px-8 ${
					isMobile ? `pt-2 text-base` : `pt-3 text-lg`
				}`}
			>
				Ofrecemos una experiencia de alojamiento única en la Ciudad de La Plata.
				Contamos con opciones flexibles y convenientes para aquellos que buscan
				alojamiento a corto plazo. Nuestras unidades están diseñadas para
				brindar comodidad y funcionalidad, ya sea para estancias cortas, o para
				períodos más prolongados. Nuestros departamentos están completamente
				amueblados y equipados con todas las comodidades necesarias para una
				estadía confortable, buscando brindar calidad y confort en nuestro
				servicio para que la estadía sea placentera y te sientas como en casa.
			</p>
			<h2 
          ref={(el) => (animatedRefs.current[1] = el)}
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-offset="200" 
          className='text-lg md:text-xl mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-8'
        >
          ¿Por qué elegirnos?
        </h2>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 px-4 md:px-8 ${
					isMobile ? `pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				<span className='font-semibold'>
					Ubicación Privilegiada y tranquila:
				</span>{' '}
				Situado en una zona residencial tranquila de La Plata, Edificio Farfalle
				ofrece un escape del bullicio del centro de la ciudad. Disfruta de la
				paz y la tranquilidad mientras sigues estando a poca distancia de los
				principales puntos de interés.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 px-4 md:px-8 ${
					isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				<span className='font-semibold'>Comodidad y Modernidad:</span> Nuestros
				departamentos están diseñados para ofrecer el máximo confort con
				instalaciones modernas y elegantes. Cada unidad está completamente
				equipada con todo lo que necesitas para sentirte como en casa,
				incluyendo cocina completa, Wi-Fi gratuito y TV por cable.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 px-4 md:px-8 ${
					isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				<span className='font-semibold'>Estacionamiento Disponible:</span> Para
				aquellos que viajan en coche, ofrecemos opciones de estacionamiento
				seguras y convenientes, eliminando el estrés de buscar un lugar para
				aparcar.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 px-4 md:px-8 ${
					isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				<span className='font-semibold'>Entorno Familiar y Seguro: </span>{' '}
				Nuestra ubicación en una zona residencial garantiza un entorno seguro y
				familiar, perfecto para huéspedes de todas las edades.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 px-4 md:px-8 ${
					isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				<span className='font-semibold'>
					Fácil Acceso al Transporte Público:{' '}
				</span>{' '}
				Aunque no estamos en el centro de la ciudad, estamos bien conectados con
				las principales líneas de transporte público, lo que facilita el acceso
				a cualquier parte de La Plata.
			</p>

			<p
				className={`text-justify text-black text-opacity-90 mb-2 px-4 md:px-8 ${
					isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				<span className='font-semibold'>Relación Calidad-Precio: </span>{' '}
				Ofrecemos tarifas competitivas y un excelente valor por tu dinero,
				asegurando que recibas una experiencia de alta calidad sin romper el
				banco.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-2 px-4 md:px-8 ${
					isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				<span className='font-semibold'>Atmósfera Agradable: </span> Con un
				diseño interior acogedor y una atmósfera cálida, nuestros departamentos
				están pensados para que te sientas relajado y a gusto desde el momento
				en que entras.
			</p>
			<p
				className={`text-justify text-black text-opacity-90 mb-12 md:mb-20 px-4 md:px-8 ${
					isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				<span className='font-semibold'>Servicio Personalizado:</span> Nos
				enorgullece ofrecer atención personalizada para asegurar que tu estancia
				sea lo más placentera posible. Nuestro personal está siempre dispuesto a
				ayudarte con cualquier necesidad o consulta que puedas tener.
			</p>
			<h2 ref={(el) => (animatedRefs.current[2] = el)}
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-offset="200" className='text-lg md:text-xl mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-8'>
				Opiniones y Valoraciones
			</h2>
			<p
				className={`text-justify text-black text-opacity-90 mb-8 px-4 md:px-8 ${
					isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				Nos enorgullece ofrecer una experiencia de alojamiento excepcional. No
				solo lo decimos nosotros, sino que nuestros huéspedes también lo
				confirman. Consulta las valoraciones y opiniones de quienes ya han
				disfrutado de su estancia con nosotros.
			</p>
			<div className='flex flex-col md:flex-row'>
				<div className='w-full md:w-1/2'>
					<h3 className='text-lg md:mt-4 font-medium text-black text-start px-4 md:px-8   mb-8'>
						Booking
					</h3>
					<p
						className={`text-justify text-black text-opacity-90 mb-8 px-4 md:px-8 ${
							isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
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
					<h3 className='text-lg md:mt-4 font-medium text-black text-start px-4 md:px-8 mb-8'>
						Airbnb
					</h3>
					<p
						className={`text-justify text-black text-opacity-90 mb-8 px-4 md:px-8 ${
							isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
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
				className='p-6 relative mb-12 md:mb-20 bg-gradient-to-tr from-slate-950/80 via-nav/80 to-orange/80'
			>
				<div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-almostWhite to-transparent'></div>
				<RatingCharts />
				<div className='absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-almostWhite to-transparent'></div>
			</div>

			<h2 ref={(el) => (animatedRefs.current[3] = el)}
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-offset="200" className='text-lg md:text-xl mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-8'>
				Comparte Tu Experiencia
			</h2>
			<p
				className={`text-justify text-black text-opacity-90 mb-8 px-4 md:px-8 ${
					isMobile ? ` pt-2 text-base` : ` pt-3 text-lg`
				}`}
			>
				Si ya te has hospedado con nosotros, nos encantaría escuchar tu opinión.
				Tu feedback nos ayuda a mejorar y a seguir ofreciendo una experiencia de
				calidad. Puedes dejar tu reseña en:{' '}
				<a
					href='https://www.booking.com/hotel/ar/farfalle.es-ar.html#tab-reviews'
					target='_blank'
					rel='noopener noreferrer'
					className=' font-lato hover:text-orange'
				>
					Booking
				</a>{' '}
				y{' '}
				<a
					href='https://es-l.airbnb.com/rooms/54102302/reviews?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-05-20&check_out=2024-05-25&source_impression_id=p3_1715699031_Nw6dgILYkxqsos2D&previous_page_section_name=1000&federated_search_id=8006342d-5149-4a1a-bf03-1ebed305d08a'
					target='_blank'
					rel='noopener noreferrer'
					className='font-lato hover:text-orange'
				>
					Airbnb
				</a>
				.
			</p>
			<h3 className='text-lg md:mt-4 font-medium text-black text-start px-4 md:px-8 mb-8'>
				Reserva Hoy
			</h3>
			<p
				className={`text-justify text-black text-opacity-90 mb-12 md:mb-20 px-4 md:px-8 ${
					isMobile ? ` text-base` : ` text-lg`
				}`}
			>
				Descubre por ti mismo por qué Edificio Farfalle es la elección preferida
				de tantos viajeros. Reserva hoy y disfruta de una experiencia de
				alojamiento excepcional en La Plata.
			</p>
			</div>
			<Footer />
		</div>
	)
}

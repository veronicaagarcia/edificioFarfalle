import { Link } from 'react-router-dom'
import ImageLoader from './comon/ImageLoader'
import { Footer } from './comon/Footer'
import { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

export function Departamentos() {
	const pba =
		'/edificioFarfalle/images/PbA.jpg'
	const pbb =
		'/edificioFarfalle/images/PbB.jpg'
	const primeroa =
		'/edificioFarfalle/images/1A.jpeg'
	const primerob =
		'/edificioFarfalle/images/1B.jpeg'
	const segundob =
		'/edificioFarfalle/images/2B.jpeg'

		const animatedRefs = useRef<(HTMLHeadingElement | null)[]>([])
	
		useEffect(() => {
			console.log("Rutas de imágenes:", { pba, pbb, primeroa, primerob, segundob })
    
			AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: false,
			offset: 100,
			})
		
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
		}, [])

	return (
		<section className='pt-12 h-full w-full m-auto'>
			<div className='container mx-auto lg:px-24 mb-12 md:mb-20'>
				<h2 ref={(el) => (animatedRefs.current[0] = el)}
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-offset="200" className='text-lg md:text-xl mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-8'>
					Nuestros Departamentos
				</h2>
				<p className='text-justify text-black text-opacity-90 mb-2 px-8  pt-2 md:pt-3 text-base md:text-lg'>
					En Edificio Farfalle, ofrecemos una variedad de opciones de
					alojamiento perfectas para quienes buscan una estancia acogedora y
					completamente equipada. Nuestros departamentos, con capacidad para
					hasta 4 personas, están diseñados para{' '}
					<span className='text-orange'>
						proporcionar el máximo confort{' '}
					</span>
					durante su visita.
				</p>
				<p className='text-justify text-black text-opacity-90 px-8 pt-2 md:pt-3 text-base md:text-lg mb-12 md:mb-20'>
					Además, incluimos un servicio de cambio de ropa de cama semanal
					(aplicable para estancias mínimas de una semana), garantizando así la
					frescura y limpieza que nuestros huéspedes merecen.
				</p>
				<h3 ref={(el) => (animatedRefs.current[1] = el)}
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-offset="200" className='text-lg md:mt-4 font-medium text-black text-center px-8 mb-8'>
					Galería de Imágenes y Videos
				</h3>
				<p className='text-justify text-black text-opacity-90 mb-12 px-8 text-base md:text-lg'>
					Para ofrecerte una visión más clara de lo que puedes esperar, te
					invitamos a explorar nuestras galerías de imágenes y videos. Haz clic
					en los enlaces de cada departamento para ver más detalles y conocer
					todo lo que ofrecemos.
				</p>
				<div className='mt-8 grid grid-cols-1 sm:grid-cols-2  gap-12 px-8 mb-20 '>
					<div className='bg-white hover:shadow-lg overflow-hidden relative h-fit max-h-96 border-2 border-none rounded-sm hover:border-gray shadow-md shadow-slate-900 transition duration-300 transform hover:scale-105'>
						<ImageLoader src={pba} alt='PB A' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orange/80 opacity-95 p-2 rounded-br-lg'>
									Planta Baja A
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/Pb-A'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-6 font-medium text-neutral-200 transition hover:bg-slate-950 hover:scale-110'
								>
									<span className='text-base font-lato'>Ver</span>
									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
										<div className='relative h-full w-8 bg-white/20'></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white hover:shadow-lg overflow-hidden relative h-fit max-h-96 border-2 border-none rounded-sm hover:border-gray shadow-md shadow-slate-900 transition duration-300 transform hover:scale-105'>
						<ImageLoader src={pbb} alt='PB B' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orange/80 opacity-95 p-2 rounded-br-lg'>
									Planta Baja B
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/Pb-B'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-6 font-medium text-neutral-200 transition hover:bg-slate-950 hover:scale-110'
								>
									<span className='text-base font-lato'>Ver</span>
									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
										<div className='relative h-full w-8 bg-white/20'></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white hover:shadow-lg overflow-hidden relative h-fit max-h-96 border-2 border-none rounded-sm hover:border-gray shadow-md shadow-slate-900 transition duration-300 transform hover:scale-105'>
						<ImageLoader src={primeroa} alt='1 A' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orange/80 opacity-95 p-2 rounded-br-lg'>
									Primero A
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/1-A'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-6 font-medium text-neutral-200 transition hover:bg-slate-950 hover:scale-110'
								>
									<span className='text-base font-lato'>Ver</span>
									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
										<div className='relative h-full w-8 bg-white/20'></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white hover:shadow-lg overflow-hidden relative h-fit max-h-96 border-2 border-none rounded-sm hover:border-gray shadow-md shadow-slate-900 transition duration-300 transform hover:scale-105'>
						<ImageLoader src={primerob} alt='1 B' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orange/80 opacity-95 p-2 rounded-br-lg'>
									Primero B
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/1-B'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-6 font-medium text-neutral-200 transition hover:bg-slate-950 hover:scale-110'
								>
									<span className='text-base font-lato'>Ver</span>
									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
										<div className='relative h-full w-8 bg-white/20'></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white hover:shadow-lg overflow-hidden relative h-fit max-h-96 border-2 border-none rounded-sm hover:border-gray shadow-md shadow-slate-900 transition duration-300 transform hover:scale-105'>
						<ImageLoader src={segundob} alt='2 B' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orange/80 opacity-95 p-2 rounded-br-lg'>
									Segundo B
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/2-B'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-6 font-medium text-neutral-200 transition hover:bg-slate-950 hover:scale-110'
								>
									<span className='text-base font-lato'>Ver</span>
									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
										<div className='relative h-full w-8 bg-white/20'></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	)
}

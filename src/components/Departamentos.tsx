import { Link } from 'react-router-dom'
import ImageLoader from './comon/ImageLoader'
import { Footer } from './comon/Footer'

export function Departamentos() {
	const pba =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Lj1YCFKLMjAkY_5B9zurQj5YIOruWIHA'
	const pbb =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1b4pu_FJ-z_JE51hN2cFXq61bzBy-NO2H'
	const primeroa =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1KZGSUfsfL_U9xnKvtqMKw0soXe2h6jro'
	const primerob =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1O2KRplTXvn4oOtQRJXOBeIYGj5xgM57D'
	const segundob =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1dPclrfbjFC-JZyPYOkK_5nrj7_ESG4TP'
	return (
		<section className='pt-12 pb-32 h-min-screen h-full overflow-y-scroll'>
			<div className='container mx-auto lg:px-24'>
				<h2 className='text-2xl md:text-3xl text-center text-orangeSoft text-opacity-90 mb-8 px-3 md:px-28 pt-2 md:pt-3 font-bold'>
					Nuestros Departamentos
				</h2>
				<p className='text-justify text-black text-opacity-90 mb-2 px-8  pt-2 md:pt-3 text-base md:text-lg'>
					En Edificio Farfalle, ofrecemos una variedad de opciones de
					alojamiento perfectas para quienes buscan una estancia acogedora y
					completamente equipada. Nuestros departamentos, con capacidad para
					hasta 4 personas, están diseñados para{' '}
					<strong className='text-nav'>proporcionar el máximo confort </strong>
					durante su visita.
				</p>
				<p className='text-justify text-black text-opacity-90 mb-8 px-8 pt-2 md:pt-3 text-base md:text-lg'>
					Además, incluimos un servicio de cambio de ropa de cama semanal
					(aplicable para estancias mínimas de una semana), garantizando así la
					frescura y limpieza que nuestros huéspedes merecen.
				</p>
				<h3 className='text-lg md:mt-4 font-semibold text-orangeDark text-start px-8 mb-8'>
					Galería de Imágenes y Videos
				</h3>
				<p className='text-justify text-black text-opacity-90 mb-12 px-8 text-base md:text-lg'>
					Para ofrecerte una visión más clara de lo que puedes esperar, te
					invitamos a explorar nuestras galerías de imágenes y videos. Haz clic
					en los enlaces de cada departamento para ver más detalles y conocer
					todo lo que ofrecemos.
				</p>
				<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-8 mb-20 '>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader src={pba} alt='PB A' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-2 rounded-br-lg'>
									Planta Baja A
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/Pb-A'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-4 font-medium text-neutral-200 transition hover:bg-black hover:scale-110'
								>
									<span className='text-base font-lato'>Ver</span>
									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
										<div className='relative h-full w-8 bg-white/20'></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader src={pbb} alt='PB B' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-2 rounded-br-lg'>
									Planta Baja B
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/Pb-B'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-4 font-medium text-neutral-200 transition hover:bg-black hover:scale-110'
								>
									<span className='text-base font-lato'>Ver</span>
									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
										<div className='relative h-full w-8 bg-white/20'></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader src={primeroa} alt='1 A' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-2 rounded-br-lg'>
									Primero A
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/1-A'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-4 font-medium text-neutral-200 transition hover:bg-black hover:scale-110'
								>
									<span className='text-base font-lato'>Ver</span>
									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
										<div className='relative h-full w-8 bg-white/20'></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader src={primerob} alt='1 B' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-2 rounded-br-lg'>
									Primero B
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/1-B'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-4 font-medium text-neutral-200 transition hover:bg-black hover:scale-110'
								>
									<span className='text-base font-lato'>Ver</span>
									<div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
										<div className='relative h-full w-8 bg-white/20'></div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader src={segundob} alt='2 B' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-2 rounded-br-lg'>
									Segundo B
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/2-B'
									className='group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange px-4 font-medium text-neutral-200 transition hover:bg-black hover:scale-110'
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

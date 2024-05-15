import { Link } from 'react-router-dom'
import ImageLoader from './comon/ImageLoader'
import { Footer } from './comon/Footer'

export function Departamentos() {
	const pba =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1Ki8P47TmBeMxRH-UJTI24huCM0wjCGeh'
	const pbb =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1g3uejMDVzxAe06iEThoT63p9hs08B6Df'
	const primeroa =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=16ueGOfVyB7OD42OuZfsfCEzuqKwC3D_q'
	const primerob =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1EFbzk-IV04Os4JwAn1lS7FM66_9zBwsP'
	const segundob =
		'https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1nf45gVY0cK6zaRouyXB4lfusLG_xpqfI'
	return (
		<section className='pt-12 pb-32 h-min-screen h-full overflow-y-scroll'>
			<div className='container mx-auto px-5'>
				<h2 className='text-xl font-semibold text-black text-center mb-8'>
					Nuestros Departamentos
				</h2>
				<p className='py-4 px-8 text-justify text-xs md:text-base'>
					Ofrecemos diferentes propuestas, ideales para quienes deseen disfrutar
					de una estadía cálida y con todas las comodidades. Todos nuestros
					departamentos son aptos para hasta 4 personas.
				</p>
				<p className='px-8 text-justify text-xs md:text-base mb-4'>
					Ofrecemos cambio de blanqueria semanal (estadía mínima para cambio de
					blanqueria de una semana).
				</p>
				<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-8 mb-20 '>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader src={pba} alt='PB A' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-1 rounded-br-lg'>
									Planta baja A
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/Pb-A'
									className='mt-4 bg-orange hover:bg-orangeDark text-white font-semibold w-14 py-2 px-4 rounded-xl inline-block'
								>
									Ver
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader
							src={pbb}
							alt='PB B'
							// className='w-full h-96 object-cover object-center'
							// loading='lazy'
						/>
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-1 rounded-br-lg'>
									Planta baja B
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/Pb-B'
									className='mt-4 bg-orange hover:bg-orangeDark text-white font-semibold w-14 py-2 px-4 rounded-xl inline-block'
								>
									Ver
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader src={primeroa} alt='1 A' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-1 rounded-br-lg'>
									Primero A
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/1-A'
									className='mt-4 bg-orange hover:bg-orangeDark text-white font-semibold w-14 py-2 px-4 rounded-xl inline-block'
								>
									Ver
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader src={primerob} alt='1 B' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-1 rounded-br-lg'>
									Primero B
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/1-B'
									className='mt-4 bg-orange hover:bg-orangeDark text-white font-semibold w-14 py-2 px-4 rounded-xl inline-block'
								>
									Ver
								</Link>
							</div>
						</div>
					</div>
					<div className='bg-white shadow-lg rounded-lg overflow-hidden relative h-fit max-h-96 border-2 border-creme transition duration-300 transform hover:scale-105'>
						<ImageLoader src={segundob} alt='2 B' />
						<div className='absolute inset-0 flex flex-col justify-between items-center'>
							<div className='self-start'>
								<h3 className='text-lg font-semibold mb-2 text-almostWhite bg-orangeDark opacity-60 p-1 rounded-br-lg'>
									Segundo B
								</h3>
							</div>
							<div className='p-6 text-center'>
								<Link
									to='/edificioFarfalle/Departamentos/2-B'
									className='mt-4 bg-orange hover:bg-orangeDark text-white font-semibold w-14 py-2 px-4 rounded-xl inline-block'
								>
									Ver
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

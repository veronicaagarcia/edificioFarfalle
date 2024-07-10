export function Footer() {
	return (
		<footer className='bg-footer text-white py-3 w-full h-fit -mb-6'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-wrap justify-between'>
					<div className='w-full sm:w-1/2 md:w-1/4 mb-4'>
						<h2 className=' text-base font-semibold mb-2'>Sobre Nosotros</h2>
						<p className=' text-sm'>
							Edificio Farfalle ofrece alojamiento cómodo y moderno en La Plata.
							Nos esforzamos por brindar una experiencia de hospedaje
							excepcional con atención personalizada y servicios de alta
							calidad.
						</p>
					</div>

					<div className='w-full sm:w-1/2 md:w-1/5 mb-4'>
						<h2 className='text-base font-semibold mb-2'>Contacto</h2>
						<p className=' text-sm'>1770 Calle 62, 1900 La Plata, Argentina</p>
						<p className=' text-sm'>Teléfono: +54 221 634-2322</p>
						<p className=' text-sm'>Email: edificiofarfalle@gmail.com</p>
						<p className=' text-sm'>Instagram: @edificiofarfalle</p>
					</div>

					<div className='w-full sm:w-1/2 md:w-1/5 mb-4'>
						<h2 className='text-base font-semibold mb-2'>Enlaces Rápidos</h2>
						<ul className=' text-sm'>
							<li>
								<a
									href='edificioFarfalle/'
									className='text-white hover:underline'
								>
									Inicio
								</a>
							</li>
							<li>
								<a
									href='edificioFarfalle/Departamentos'
									className='text-white hover:underline'
								>
									Departamentos
								</a>
							</li>
							<li>
								<a
									href='edificioFarfalle/Servicios'
									className='text-white hover:underline'
								>
									Servicios
								</a>
							</li>
							<li>
								<a
									href='edificioFarfalle/Contacto'
									className='text-white hover:underline'
								>
									Contacto
								</a>
							</li>
							<li>
								<a
									href='edificioFarfalle/Reservas'
									className='text-white hover:underline'
								>
									Reservas
								</a>
							</li>
						</ul>
					</div>

					<div className='w-full sm:w-1/2 md:w-1/4 mb-4'>
						<h2 className='text-base font-semibold mb-2'>Cómo Llegar</h2>
						<p className=' text-sm'>
							Haz clic en el botón a continuación para obtener direcciones hacia
							el Edificio Farfalle.
						</p>
						<a
							href='https://www.google.com/maps/dir/?api=1&destination=1770+Calle+62,+1904+La+Plata,+Argentina'
							target='_blank'
							className='mt-4 bg-nav text-white py-2 px-4 rounded hover:bg-orange inline-block'
						>
							Cómo llegar
						</a>
					</div>
				</div>
				<div className='mt-2 border-t border-footerLine pt-2 text-center'>
					<p className='text-xs'>
						© 2024 Edificio Farfalle. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	)
}

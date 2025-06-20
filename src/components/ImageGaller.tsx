import React from 'react';

interface Image {
  src: string;
  alt: string;
}

const ImageGallery: React.FC = () => {
  const images: Image[] = [
    { src: '/edificioFarfalle/images/services.webp', alt: 'Imagen 1' },
    { src: '/edificioFarfalle/images/services2.webp', alt: 'Imagen 2' },
    { src: '/edificioFarfalle/images/services3.webp', alt: 'Imagen 3' },
    { src: '/edificioFarfalle/images/services4.webp', alt: 'Imagen 4' },
  ];

  const video = '/edificioFarfalle/video.principal.mp4'
  return (
    <div className="container mx-auto px-3 md:px-20 lg:px-28 py-8">
       <div className='relative h-[650px] mb-4'>	
					<video
						className='absolute -top-8 md:-top-[1px] left-0 w-full md:w-1/2 h-[650px] object-cover object-center z-0 md:z-20 rounded-lg md:rounded-tl-lg md:rounded-bl-lg'
						autoPlay
						playsInline
						loop
						muted
					>
						<source src={video} type='video/mp4' />
					</video>

          <div className='absolute top-0 left-0 w-full h-full rounded-lg z-10 md:bg-slate-950/85' ></div>
					
					<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center md:justify-end'>
						<div className='w-9/12 md:w-1/2 text-white text-center z-20'>
							<h3 className='text-base xl:text-lg p-6 sm:p-12 md:p-10 border-2 border-nav mb-4 rounded-lg bg-slate-950/70 md:bg-transparent w-11/12 mx-auto'>
								Nuestros departamentos están completamente amueblados y
								equipados con todas las comodidades necesarias para una estadía
								confortable y placentera.
							</h3>
						</div>
					</div>
				</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

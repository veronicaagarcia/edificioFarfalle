import { useState } from 'react'

interface ImageLoaderProps {
	src: string
	alt: string
}

function ImageLoader({ src, alt }: ImageLoaderProps) {
	const [isLoaded, setIsLoaded] = useState(false)
	const [error, setError] = useState(false)
  
	const handleLoad = () => {
	setIsLoaded(true)
	}
  
	const handleError = () => {
	setError(true)
	console.error(`Error loading image: ${src}`)
	}
  
	return (
	<>
		{!isLoaded && !error && (
		<div className="animate-pulse bg-gray-200 h-full w-full absolute top-0 left-0"></div>
		)}
		{error && (
		<div className="bg-red-100 text-red-500 h-full w-full absolute top-0 left-0 flex items-center justify-center">
			Error al cargar la imagen
		</div>
		)}
		<img
		src={src}
		alt={alt}
		className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
		onLoad={handleLoad}
		onError={handleError}
		/>
	</>
	)
  }
  
  export default ImageLoader
  

// className='w-full h-96 object-cover object-center'

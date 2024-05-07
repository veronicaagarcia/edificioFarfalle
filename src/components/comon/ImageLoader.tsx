import { useState } from 'react'

interface ImageLoaderProps {
	src: string
	alt: string
}

function ImageLoader({ src, alt }: ImageLoaderProps) {
	const [loading, setLoading] = useState(true)

	const handleLoad = () => {
		setLoading(false)
	}

	const handleError = (error: unknown) => {
		console.error('Error loading image:', error)
		setLoading(false) // Para indicar que la carga ha terminado
	}

	return (
		<div className='relative w-full h-full'>
			{loading && (
				<div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-orangeDark bg-opacity-50 z-10'>
					<span>Cargando...</span>
				</div>
			)}
			<img
				src={src}
				alt={alt}
				onLoad={handleLoad}
				onError={handleError}
				className={`w-full h-auto ${loading ? 'hidden' : 'block'}`}
			/>
		</div>
	)
}

export default ImageLoader

// className='w-full h-96 object-cover object-center'

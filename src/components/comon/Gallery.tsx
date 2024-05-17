// import ImageList from '@mui/material/ImageList'
// import ImageListItem from '@mui/material/ImageListItem'
// import { styled } from '@mui/material/styles'

// interface GalleryProps {
// 	imageNames: string[]
// 	onClick: (index: number) => void // Agregar una función de devolucion de llamada onClick
// }

// const ImageUploader = ({ imageNames, onClick }: GalleryProps) => {
// 	return (
// 		<div className='mt-16'>
// 			<StyledImageList cols={3} rowHeight={200}>
// 				{imageNames.map((image, index) => (
// 					<ImageListItem key={index} onClick={() => onClick(index)}>
// 						{' '}
// 						{/* Llamar a la funcion onClick cuando se haga clic en la imagen */}
// 						<img
// 							src={image}
// 							// alt={`image-${index}`}
// 							style={{
// 								width: '100%',
// 								height: '100%',
// 								objectFit: 'cover',
// 								cursor: 'pointer',
// 							}}
// 						/>
// 					</ImageListItem>
// 				))}
// 			</StyledImageList>
// 		</div>
// 	)
// }

// export function Gallery({ imageNames, onClick }: GalleryProps) {
// 	// Actualizar el tipo de componente
// 	return <ImageUploader imageNames={imageNames} onClick={onClick} />
// }

// const StyledImageList = styled(ImageList)({
// 	width: '100%',
// 	height: 'auto',
// 	display: 'flex',
// 	flexWrap: 'wrap',
// 	justifyContent: 'center',
// 	overflow: 'hidden',
// })

// export default Gallery

import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { styled } from '@mui/material/styles'

interface Media {
	type: 'image' | 'video'
	url: string
}

interface GalleryProps {
	media: Media[]
	onClick: (index: number) => void
}

const ImageUploader = ({ media, onClick }: GalleryProps) => {
	return (
		<div className='mt-16'>
			<StyledImageList cols={3} rowHeight={200}>
				{media.map((item, index) => (
					<ImageListItem key={index} onClick={() => onClick(index)}>
						{item.type === 'image' ? (
							<img
								src={item.url}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									cursor: 'pointer',
								}}
							/>
						) : (
							<video
								className='w-full h-full object-contain object-center cursor-pointer'
								controls
								autoPlay
								playsInline
							>
								<source src={item.url} type='video/mp4' />
							</video>
						)}
					</ImageListItem>
				))}
			</StyledImageList>
		</div>
	)
}

export function Gallery({ media, onClick }: GalleryProps) {
	return <ImageUploader media={media} onClick={onClick} />
}

const StyledImageList = styled(ImageList)({
	width: '100%',
	height: 'auto',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	overflow: 'hidden',
})

export default Gallery

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
		<div className='mt-2 p-4'>
			<StyledImageList cols={3} rowHeight={230}>
				{media.map((item, index) => (
					<ImageListItem key={index} onClick={() => onClick(index)}>
						{item.type === 'image' ? (
							<img
								className='transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'
								src={item.url}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									cursor: 'pointer',
								}}
							/>
						) : (
							// <video
							// 	className='flex w-full h-full object-contain object-center cursor-pointer'
							// 	controls
							// >
							// 	<source src={item.url} type='video/mp4' />
							// </video>
							<video
								className='w-full h-full cursor-pointer'
								controls
								style={{
									objectFit: 'contain',
									display: 'block',
									maxWidth: '100%',
									height: '100%',
								}}
							>
								<source src={item.url} type='video/mp4' />
								Tu navegador no soporta la reproducción de videos.
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

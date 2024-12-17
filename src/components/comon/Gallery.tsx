import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

interface Media {
  type: 'image' | 'video'
  url: string
}

interface GalleryProps {
  media: Media[]
  onClick: (index: number) => void
}

const ImageUploader = ({ media, onClick }: GalleryProps) => {
  const [loadedMedia, setLoadedMedia] = useState<boolean[]>(new Array(media.length).fill(false))

  useEffect(() => {
    media.forEach((item, index) => {
      if (item.type === 'image') {
        const img = new Image()
        img.src = item.url
        img.onload = () => {
          setLoadedMedia(prev => {
            const newState = [...prev]
            newState[index] = true
            return newState
          })
        }
        img.onerror = () => {
          console.error(`Failed to load image: ${item.url}`)
        }
      } else if (item.type === 'video') {
        // For videos, we'll consider them "loaded" immediately
        setLoadedMedia(prev => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }
    })
  }, [media])

  return (
    <div className='mt-2 p-4'>
      <StyledImageList cols={3} rowHeight={270} gap={8}>
        {media.map((item, index) => (
          <ImageListItem key={index} onClick={() => onClick(index)}>
            {item.type === 'image' ? (
              loadedMedia[index] ? (
                <img
                  className='transform transition-transform duration-300 hover:shadow-md hover:shadow-slate-900 rounded-sm mr-12'
                  src={item.url}
                  alt={`Imagen ${index + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse rounded-sm mr-12"></div>
              )
            ) : (
              <div className="relative w-full h-full cursor-pointer rounded-sm hover:shadow-md hover:shadow-slate-900">
                <video
                  className='w-full h-full cursor-pointer rounded-sm hover:shadow-md hover:shadow-slate-900'
                  style={{
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  playsInline
                  preload='metadata'
                  onError={(e) => {
                    console.error('Error al reproducir el video:', e)
                  }}
                >
                  <source src={item.url} type='video/mp4' />
                  Tu navegador no soporta la reproducción de videos.
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white bg-black bg-opacity-50 px-2 py-1 rounded">Video</span>
                </div>
              </div>
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
  minHeight: '60vh',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  overflow: 'hidden',
})

export default Gallery
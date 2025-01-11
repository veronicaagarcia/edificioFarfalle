import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

interface DeptoModelProps {
  numVideos: number
  videoNames: string[]
  imageNames: string[]
  videoSizeMultiplier: number
  onClose: () => void
  initialIndex?: number | null
}

export function DeptoModel({ imageNames, videoNames, initialIndex, onClose }: DeptoModelProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(initialIndex ?? null)

  useEffect(() => {
    setSelectedIndex(initialIndex ?? null)
  }, [initialIndex])

  const handleNextImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex !== null && prevIndex < imageNames.length + videoNames.length - 1) {
        return prevIndex + 1
      }
      return prevIndex
    })
  }

  const handlePrevImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex !== null && prevIndex > 0) {
        return prevIndex - 1
      }
      return prevIndex
    })
  }

  const handleExitFullscreen = () => {
    onClose()
  }

  const isVideo = (index: number) => index < videoNames.length

  return (
    <>
      {selectedIndex !== null && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900 bg-opacity-80 z-50'>
          <div className='absolute inset-0 flex items-center justify-between md:justify-around p-1'>
            <button
              className='text-nav text-2xl font-bold'
              onClick={handlePrevImage}
              disabled={selectedIndex === 0}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {isVideo(selectedIndex) ? (
              <video
                src={videoNames[selectedIndex]}
                className='max-w-100 w-auto h-auto max-h-90 border-nav border-2 hover:shadow-lg bg-slate-900 mx-1 rounded-md'
                controls
                autoPlay
              />
            ) : (
              <img
                src={imageNames[selectedIndex - videoNames.length]}
                alt={`Image ${selectedIndex - videoNames.length + 1}`}
                className='max-w-100 w-10/12 md:w-5/12 h-auto max-h-90 border-nav border-2 hover:shadow-lg bg-black mx-1 rounded-md'
                loading='lazy'
              />
            )}
            <button
              className='text-nav text-2xl font-bold'
              onClick={handleNextImage}
              disabled={selectedIndex === imageNames.length + videoNames.length - 1}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <button
            className='absolute top-4 right-4 text-nav text-2xl'
            onClick={handleExitFullscreen}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </>
  )
}

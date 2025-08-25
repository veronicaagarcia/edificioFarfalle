"use client"

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons"

interface Media {
  type: "image" | "video"
  url: string
}

interface DeptoModelProps {
  numVideos: number
  videoNames: string[]
  imageNames: string[]
  media: Media[]
  videoSizeMultiplier: number
  onClose: () => void
  initialIndex?: number | null
}

export function DeptoModel({ imageNames, videoNames, media, initialIndex, onClose }: DeptoModelProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(initialIndex ?? null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setSelectedIndex(initialIndex ?? null)
    setIsLoading(true)
  }, [initialIndex])

  const handleNextImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex !== null && prevIndex < media.length - 1) {
        setIsLoading(true)
        return prevIndex + 1
      }
      return prevIndex
    })
  }

  const handlePrevImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex !== null && prevIndex > 0) {
        setIsLoading(true)
        return prevIndex - 1
      }
      return prevIndex
    })
  }

  const handleExitFullscreen = () => {
    onClose()
  }

  const getCurrentMedia = (index: number) => media[index]

  const handleMediaLoad = () => {
    setIsLoading(false)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    } else if (e.key === "ArrowRight") {
      handleNextImage()
    } else if (e.key === "ArrowLeft") {
      handlePrevImage()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <>
      {selectedIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-950 bg-opacity-90 z-50 backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-between md:justify-around p-1">
            <button
              className="text-white text-2xl font-bold hover:text-orange transition-colors p-4 z-20"
              onClick={handlePrevImage}
              disabled={selectedIndex === 0}
              aria-label="Imagen anterior"
            >
              <FontAwesomeIcon icon={faArrowLeft} className={selectedIndex === 0 ? "opacity-30" : "opacity-100"} />
            </button>

            <div className="relative flex items-center justify-center w-10/12 md:w-5/12 h-auto">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-md">
                  <div className="w-12 h-12 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {getCurrentMedia(selectedIndex)?.type === "video" ? (
                <video
                  src={getCurrentMedia(selectedIndex)?.url}
                  className="max-w-[70vw] md:max-w-100 w-auto h-auto max-h-90 hover:shadow-lg bg-slate-900 mx-1 rounded-md object-contain"
                  controls
                  autoPlay
                  onLoadedData={handleMediaLoad}
                  muted={true}
                />
              ) : (
                <img
                  src={getCurrentMedia(selectedIndex)?.url || "/placeholder.svg"}
                  alt={`Imagen ${selectedIndex + 1}`}
                  className="max-w-100 w-full h-auto max-h-90 hover:shadow-lg bg-black mx-1 rounded-md"
                  loading="lazy"
                  onLoad={handleMediaLoad}
                />
              )}
            </div>

            <button
              className="text-white text-2xl font-bold hover:text-orange transition-colors p-4 z-20"
              onClick={handleNextImage}
              disabled={selectedIndex === media.length - 1}
              aria-label="Imagen siguiente"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className={selectedIndex === media.length - 1 ? "opacity-30" : "opacity-100"}
              />
            </button>
          </div>

          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-orange transition-colors p-2 z-20"
            onClick={handleExitFullscreen}
            aria-label="Cerrar"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {selectedIndex + 1} / {media.length}
          </div>
        </div>
      )}
    </>
  )
}

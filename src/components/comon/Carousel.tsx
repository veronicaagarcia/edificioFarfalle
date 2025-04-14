"use client"

import type React from "react"
import { useCallback, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import LazyLoad from "react-lazy-load"

interface Media {
  type: "image" | "video"
  url: string
}

interface CarouselProps {
  media: Media[]
  onMediaClick: (index: number) => void
}

export const CustomCarousel: React.FC<CarouselProps> = ({ media, onMediaClick }) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }))
  }, [])

  const renderThumbnail = useCallback((item: Media, index: number) => {
    return (
      <div className="h-16 w-24 overflow-hidden rounded-sm">
        {item.type === "image" ? (
          <img
            src={item.url || "/placeholder.svg"}
            alt={`Miniatura ${index + 1}`}
            className="object-cover h-full w-full transition-transform hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-nav relative">
            <span className="absolute inset-0 bg-black/30 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </span>
            <video src={item.url} className="h-full w-full object-cover">
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        )}
      </div>
    )
  }, [])

  return (
    <div className="w-full lg:w-9/12 mx-auto" data-aos="fade-up" data-aos-duration="1000">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={true}
        showThumbs={true}
        renderThumbs={() => media.map((item, index) => renderThumbnail(item, index))}
        onClickItem={(index) => onMediaClick(index)}
        className="rounded-lg overflow-hidden shadow-lg"
        emulateTouch={true}
        swipeable={true}
        thumbWidth={80}
      >
        {media.map((item, index) => (
          <div key={index} className="h-[60vh] lg:h-[70vh] cursor-pointer rounded-sm shadow-md relative">
            {!loadedImages[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}

            {item.type === "image" ? (
              <LazyLoad height="100%" offset={100}>
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={`Imagen ${index + 1}`}
                  className="object-cover h-full w-full rounded-sm shadow-md"
                  onLoad={() => handleImageLoad(index)}
                />
              </LazyLoad>
            ) : (
              <video
                src={item.url}
                controls
                className="h-full w-full object-cover rounded-sm shadow-md"
                onLoadedData={() => handleImageLoad(index)}
              >
                Tu navegador no soporta el elemento de video.
              </video>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

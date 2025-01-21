import type React from "react"
import { useCallback } from "react"
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
  const renderThumbnail = useCallback((item: Media) => {
    return (
      <div className="h-16 w-24">
        {item.type === "image" ? (
          <img src={item.url || "/placeholder.svg"} alt="thumbnail" className="object-cover h-full w-full" />
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-nav">
            <video src={item.url} className="h-full w-full object-cover">
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        )}
      </div>
    )
  }, [])

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      showThumbs={true}
      renderThumbs={() => media.map((item) => renderThumbnail(item))}
      onClickItem={(index) => onMediaClick(index)}
      className="w-full lg:w-9/12 mx-auto"
    >
      {media.map((item, index) => (
        <div key={index} className="h-[60vh] lg:h-[70vh] cursor-pointer rounded-sm shadow-md">
          {item.type === "image" ? (
            <LazyLoad height="100%" offset={100}>
              <img
                src={item.url || "/placeholder.svg"}
                alt={`Imagen ${index + 1}`}
                className="object-cover h-full w-full rounded-sm shadow-md"
              />
            </LazyLoad>
          ) : (
            <video src={item.url} controls className="h-full w-full object-cover rounded-sm shadow-md">
              Tu navegador no soporta el elemento de video.
            </video>
          )}
        </div>
      ))}
    </Carousel>
  )
}


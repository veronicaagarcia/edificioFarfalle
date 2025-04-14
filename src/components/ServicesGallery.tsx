"use client"

import { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

// Imágenes para la galería
const GALLERY_IMAGES = [
  "/edificioFarfalle/images/services/service1.jpg",
  "/edificioFarfalle/images/services/service2.jpg",
  "/edificioFarfalle/images/services/service3.jpg",
  "/edificioFarfalle/images/services/service4.jpg",
  "/edificioFarfalle/images/services/service5.jpg",
  "/edificioFarfalle/images/services/service6.jpg",
]

export function ServicesGallery() {
  const [imagesLoaded, setImagesLoaded] = useState(0)
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)

  useEffect(() => {
    if (imagesLoaded === GALLERY_IMAGES.length) {
      setAllImagesLoaded(true)
    }
  }, [imagesLoaded])

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1)
  }

  return (
    <div className="w-full lg:w-4/5 mx-auto">
      {!allImagesLoaded && (
        <div className="w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center rounded-lg">
          <div className="text-gray-400">Cargando galería...</div>
        </div>
      )}

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        showIndicators={true}
        className={`rounded-lg overflow-hidden shadow-lg transition-opacity duration-500 ${allImagesLoaded ? "opacity-100" : "opacity-0"}`}
        interval={5000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
      >
        {GALLERY_IMAGES.map((image, index) => (
          <div key={index} className="h-64 md:h-96">
            <img
              src={image || "/placeholder.svg?height=400&width=800"}
              alt={`Servicio ${index + 1}`}
              className="object-cover h-full w-full"
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

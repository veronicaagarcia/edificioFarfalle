"use client"

import { useState, useCallback } from "react"
import { CustomCarousel } from "./Carousel"
import { DeptoModel } from "./DeptoModel"
import { DeptoIcons } from "./DeptoIcons"
import { Footer } from "./Footer"
import { ApartmentFeatures } from "./ApartmentFeatures"

interface Media {
  type: "image" | "video"
  url: string
}

interface ApartmentLayoutProps {
  title: string
  size: string
  media: Media[]
  videoUrl: string
  isUpperFloor?: boolean
}

export function ApartmentLayout({ title, size, media, videoUrl, isUpperFloor = false }: ApartmentLayoutProps) {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)

  const handleMediaClick = useCallback(
    (index: number) => {
      setSelectedMediaIndex(index === selectedMediaIndex ? null : index)
    },
    [selectedMediaIndex]
  )

  const handleCloseModal = useCallback(() => {
    setSelectedMediaIndex(null)
  }, [])

  return (
    <div className="w-full min-h-screen pt-12 overflow-y-auto bg-background">
      <div className="py-10 md:py-14 xl:py-18 2xl:py-22">
        <h2 
          className="text-base xl:text-lg font-lato font-semibold uppercase text-orange text-center"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          {title}
        </h2>
        <h3 className="text-base xl:text-lg text-center font-bold text-black opacity-80">{size}</h3>
      </div>
      
      <div className="w-full mb-12">
        <CustomCarousel media={media} onMediaClick={handleMediaClick} />
      </div>
      
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="p-8 md:p-10 lg:p-12 bg-white/60 rounded-xl shadow-lg backdrop-blur-sm border border-white/20">
          <h4 
            className="text-base xl:text-lg mt-2 md:mt-2 font-lato font-semibold uppercase text-orange text-center mb-10"
            data-aos="fade-up" 
            data-aos-duration="1000"
          >
            Comodidades del departamento
          </h4>
          
          <ApartmentFeatures isUpperFloor={isUpperFloor} />
        </div>
      </div>
      
      {selectedMediaIndex !== null && (
        <DeptoModel
          numVideos={1}
          videoNames={[videoUrl]}
          videoSizeMultiplier={1}
          imageNames={media.filter((item) => item.type === "image").map((item) => item.url)}
          media={media}
          onClose={handleCloseModal}
          initialIndex={selectedMediaIndex}
        />
      )}
      
      <DeptoIcons />
      <Footer />
    </div>
  )
}

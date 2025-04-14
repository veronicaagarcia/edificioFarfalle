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
}

export function ApartmentLayout({ title, size, media, videoUrl }: ApartmentLayoutProps) {
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
      <div className="py-8 md:py-12 xl:py-16 2xl:py-20">
        <h2 
          className="text-lg md:text-xl font-mono font-medium uppercase text-orange/80 text-center"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          {title}
        </h2>
        <h3 className="text-base text-center md:text-lg font-bold text-black opacity-80">{size}</h3>
      </div>
      
      <div className="w-full mb-8">
        <CustomCarousel media={media} onMediaClick={handleMediaClick} />
      </div>
      
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="p-6 md:p-8 lg:p-10 bg-white/50 rounded-lg shadow-sm">
          <h4 
            className="text-lg md:text-xl mt-4 md:mt-4 font-mono font-medium uppercase text-orange/80 text-center mb-8"
            data-aos="fade-up" 
            data-aos-duration="1000"
          >
            Características del departamento
          </h4>
          
          <ApartmentFeatures />
        </div>
      </div>
      
      {selectedMediaIndex !== null && (
        <DeptoModel
          numVideos={1}
          videoNames={[videoUrl]}
          videoSizeMultiplier={1}
          imageNames={media.filter((item) => item.type === "image").map((item) => item.url)}
          onClose={handleCloseModal}
          initialIndex={selectedMediaIndex}
        />
      )}
      
      <DeptoIcons />
      <Footer />
    </div>
  )
}

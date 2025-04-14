"use client"

import { useState, useEffect } from "react"

interface LazyVideoProps {
  src: string
  poster: string
  className?: string
}

export function LazyVideo({ src, poster, className = "" }: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const videoElement = document.getElementById("lazy-video")
    if (videoElement) {
      observer.observe(videoElement)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleVideoLoad = () => {
    setIsLoaded(true)
  }

  return (
    <>
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
      <div id="lazy-video" className="w-full h-full">
        {isIntersecting && (
          <video
            className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            autoPlay
            playsInline
            loop
            muted
            onLoadedData={handleVideoLoad}
            poster={poster}
          >
            <source src={src} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        )}
      </div>
    </>
  )
}

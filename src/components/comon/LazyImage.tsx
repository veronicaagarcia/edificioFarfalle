"use client"

import { useState, useEffect } from "react"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

export function LazyImage({ src, alt, className = "" }: LazyImageProps) {
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

    const imageElement = document.getElementById(`lazy-image-${alt.replace(/\s+/g, "-").toLowerCase()}`)
    if (imageElement) {
      observer.observe(imageElement)
    }

    return () => {
      observer.disconnect()
    }
  }, [alt])

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div id={`lazy-image-${alt.replace(/\s+/g, "-").toLowerCase()}`} className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}

      {isIntersecting && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  )
}

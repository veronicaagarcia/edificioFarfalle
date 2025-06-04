"use client"

import { ApartmentLayout } from "../components/comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function PrimeroA() {
  const completo = "/edificioFarfalle/images/1A/video.mp4"

  const media: Media[] = [
    { type: "image", url: "/edificioFarfalle/images/1A/1.webp" },
    { type: "image", url: "/edificioFarfalle/images/1A/2.webp" },
    { type: "image", url: "/edificioFarfalle/images/1A/3.webp" },
    { type: "image", url: "/edificioFarfalle/images/1A/4.webp" },
    { type: "image", url: "/edificioFarfalle/images/1A/5.webp" },
    { type: "image", url: "/edificioFarfalle/images/1A/6.webp" },
    { type: "image", url: "/edificioFarfalle/images/1A/7.webp" },
    { type: "image", url: "/edificioFarfalle/images/1A/31.webp" },
    { type: "image", url: "/edificioFarfalle/images/1A/41.webp" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Primero A" size="80m²" media={media} videoUrl={completo} isUpperFloor={true}/>
}

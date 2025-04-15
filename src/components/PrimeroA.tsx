"use client"

import { ApartmentLayout } from "./comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function PrimeroA() {
  const completo = "/edificioFarfalle/images/1A/video.mp4"

  const media: Media[] = [
    { type: "image", url: "/edificioFarfalle/images/1A/1.jpg" },
    { type: "image", url: "/edificioFarfalle/images/1A/2.jpg" },
    { type: "image", url: "/edificioFarfalle/images/1A/3.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/1A/4.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/1A/5.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/1A/6.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/1A/7.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/1A/3.jpg" },
    { type: "image", url: "/edificioFarfalle/images/1A/4.jpg" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Primero A" size="80m²" media={media} videoUrl={completo} isUpperFloor={true}/>
}

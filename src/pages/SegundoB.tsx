"use client"

import { ApartmentLayout } from "../components/comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function SegundoB() {
  const completo = "/edificioFarfalle/images/1B/video.mp4"

  const media: Media[] = [
    { type: "image", url: "/edificioFarfalle/images/2B/1.webp" },
    { type: "image", url: "/edificioFarfalle/images/2B/3.webp" },
    { type: "image", url: "/edificioFarfalle/images/2B/2.webp" },
    { type: "image", url: "/edificioFarfalle/images/2B/4.webp" },
    { type: "image", url: "/edificioFarfalle/images/2B/5.webp" },
    { type: "image", url: "/edificioFarfalle/images/2B/6.webp" },
    { type: "image", url: "/edificioFarfalle/images/2B/7.webp" },
    { type: "image", url: "/edificioFarfalle/images/2B/9.webp" },
    { type: "image", url: "/edificioFarfalle/images/2B/8.webp" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Segundo B" size="80m²" media={media} videoUrl={completo} isUpperFloor={true}/>
}

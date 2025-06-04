"use client"

import { ApartmentLayout } from "../components/comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function PrimeroB() {
  const completo = "/edificioFarfalle/images/1B/video.mp4"

  const media: Media[] = [
    { type: "image", url: "/edificioFarfalle/images/1B/1.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/21.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/2.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/4.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/33.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/11.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/6.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/8.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/7.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/9.webp" },
    { type: "image", url: "/edificioFarfalle/images/1B/10.webp" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Primero B" size="80m²" media={media} videoUrl={completo} isUpperFloor={true}/>
}

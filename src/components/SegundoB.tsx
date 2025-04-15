"use client"

import { ApartmentLayout } from "./comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function SegundoB() {
  const completo = "https://newfarfalle.s3.sa-east-1.amazonaws.com/2B.mp4"

  const media: Media[] = [
    { type: "image", url: "/edificioFarfalle/images/2B/1.png" },
    { type: "image", url: "/edificioFarfalle/images/2B/3.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/2B/2.JPG" },
    { type: "image", url: "/edificioFarfalle/images/2B/4.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/2B/5.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/2B/6.JPG" },
    { type: "image", url: "/edificioFarfalle/images/2B/7.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/2B/9.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/2B/8.JPG" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Segundo B" size="80m²" media={media} videoUrl={completo} isUpperFloor={true}/>
}

"use client"

import { ApartmentLayout } from "../components/comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function PrimeroB() {
  const completo = "/edificioFarfalle/images/1B/video.mp4"

  const media: Media[] = [
    { type: "image", url: "/edificioFarfalle/images/1B/1.jpg" },
    { type: "image", url: "/edificioFarfalle/images/1B/2.jpg" },
    { type: "image", url: "/edificioFarfalle/images/1B/2.jpeg" },
    // { type: "image", url: "/edificioFarfalle/images/1B/3.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/1B/4.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/1B/33.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/1B/11.jpg" },
    // { type: "image", url: "/edificioFarfalle/images/1B/5.jpeg" },
    { type: "image", url: "/edificioFarfalle/images/1B/6.JPG" },
    { type: "image", url: "/edificioFarfalle/images/1B/8.JPG" },
    { type: "image", url: "/edificioFarfalle/images/1B/7.JPG" },
    { type: "image", url: "/edificioFarfalle/images/1B/9.jpg" },
    { type: "image", url: "/edificioFarfalle/images/1B/10.jpeg" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Primero B" size="80m²" media={media} videoUrl={completo} isUpperFloor={true}/>
}

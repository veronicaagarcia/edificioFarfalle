"use client"

import { ApartmentLayout } from "./comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function PbB() {
  const completo = "https://newfarfalle.s3.sa-east-1.amazonaws.com/videoPBB.mp4"

  const media: Media[] = [
    { type: "image", url: "/edificioFarfalle/images/PbB/1.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbB/2.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbB/3.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbB/4.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbB/7.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbB/8.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbB/9.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbB/10.jpg" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Planta Baja B" size="50m²" media={media} videoUrl={completo} />
}

"use client"

import { ApartmentLayout } from "../components/comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function PbB() {
  const completo = "/edificioFarfalle/images/PbB/videopbb.mp4"

  const media: Media[] = [
    { type: "image", url: "/edificioFarfalle/images/PbB/1.webp" },
    { type: "image", url: "/edificioFarfalle/images/PbB/2.webp" },
    { type: "image", url: "/edificioFarfalle/images/PbB/3.webp" },
    { type: "image", url: "/edificioFarfalle/images/PbB/4.webp" },
    { type: "image", url: "/edificioFarfalle/images/PbB/7.webp" },
    { type: "image", url: "/edificioFarfalle/images/PbB/8.webp" },
    { type: "image", url: "/edificioFarfalle/images/PbB/9.webp" },
    { type: "image", url: "/edificioFarfalle/images/PbB/10.webp" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Planta Baja B" size="50m²" media={media} videoUrl={completo} />
}

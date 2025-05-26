"use client"

import { ApartmentLayout } from "../components/comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function PbA() {
  const completo = "/edificioFarfalle/images/PbB/videopbb.mp4"

  const media: Media[] = [
    { type: "image", url: "/edificioFarfalle/images/PbA/1.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbA/2.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbA/3.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbA/4.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbA/5.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbA/6.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbA/7.jpg" },
    { type: "image", url: "/edificioFarfalle/images/PbA/8.jpg" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Planta Baja A" size="50m²" media={media} videoUrl={completo} />
}

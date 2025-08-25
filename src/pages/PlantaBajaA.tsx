"use client"

import { ApartmentLayout } from "../components/comon/ApartmentLayout"

interface Media {
  type: "image" | "video"
  url: string
}

export function PbA() {
  const completo = "./images/PbB/videopbb.mp4"

  const media: Media[] = [
    { type: "image", url: "./images/PbA/1.webp" },
    { type: "image", url: "./images/PbA/2.webp" },
    { type: "image", url: "./images/PbA/3.webp" },
    { type: "image", url: "./images/PbA/4.webp" },
    { type: "image", url: "./images/PbA/5.webp" },
    { type: "image", url: "./images/PbA/6.webp" },
    { type: "image", url: "./images/PbA/7.webp" },
    { type: "image", url: "./images/PbA/8.webp" },
    { type: "video", url: completo },
  ]

  return <ApartmentLayout title="Planta Baja A" size="50m²" media={media} videoUrl={completo} />
}

import { useState, useCallback } from "react"
import { CustomCarousel } from "./comon/Carousel"
import { DeptoModel } from "./comon/DeptoModel"
import { DeptoIcons } from "./comon/DeptoIcons"
import { Footer } from "./comon/Footer"

interface Media {
  type: "image" | "video"
  url: string
}
export function PbB() {
	const completo = 'https://newfarfalle.s3.sa-east-1.amazonaws.com/videoPBB.mp4'

	const media: Media[] = [
		
		{
			type: 'image',
			url: '/edificioFarfalle/images/PbB/1.jpg', 
		},
		{ type: 'image', url: '/edificioFarfalle/images/PbB/2.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbB/3.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbB/4.jpg' },
		// { type: 'image', url: '/edificioFarfalle/images/PbB/5.jpg' },
		// { type: 'image', url: '/edificioFarfalle/images/PbB/6.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbB/7.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbB/8.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbB/9.jpg' },
		{ type: 'image', url: '/edificioFarfalle/images/PbB/10.jpg' },
		{ type: 'video', url: completo },
		
	]

	const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)

  const handleMediaClick = useCallback(
    (index: number) => {
      setSelectedMediaIndex(index === selectedMediaIndex ? null : index)
    },
    [selectedMediaIndex],
  )

  const handleCloseModal = useCallback(() => {
    setSelectedMediaIndex(null)
  }, [])

  return (
    <div className="w-full min-h-screen pt-12 overflow-y-auto">
      <div className="py-8 md:py-12 xl:py-16 2xl:py-20">

				<h2 className='text-lg md:text-xl font-mono font-medium uppercase text-orange/80 text-center'>
					Planta Baja B
				</h2>
				<h3 className='text-base text-center md:text-lg font-bold text-black opacity-80'>
					50m²
				</h3>
			</div>
			<div className="w-full mb-8">
        <CustomCarousel media={media} onMediaClick={handleMediaClick} />
      </div>
      <div className="w-full  px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="p-6 md:p-8 lg:p-10">
          <h4 className="text-lg md:text-xl mt-4 md:mt-4 font-mono font-medium uppercase text-orange/80 text-center mb-8">Características del departamento</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm md:text-base text-slate-950">
            <li className="flex items-center">
              <span className="mr-2">•</span>Cama matrimonial
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Sofá cama con carrión para 2 personas
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Placard
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Baño privado (Ducha, bidet, papel higiénico, jabón)
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Patio interno
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Tender
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Mesa y sillas (para 4 personas)
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Aire Acondicionado (frío/calor) en habitación y comedor
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Heladera
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Horno/hornallas
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Electrodomésticos (pava eléctrica, tostadora y microondas)
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Utensilios de cocina (cubiertos, platos, vasos, ollas)
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Elementos de limpieza (Detergente, esponja, virulana, ballerina, trapo de
              piso, balde)
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Calefón
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Cesto de basura (Cocina y baño)
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Blanquería (toalla/toallón por persona y ropa de cama)
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Wifi gratuito
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>TV por cable
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>Té y café de cortesía
            </li>
          </ul>
        </div>
      </div>
      {selectedMediaIndex !== null && (
        <DeptoModel
          numVideos={1}
          videoNames={[completo]}
          videoSizeMultiplier={1}
          imageNames={media.filter((item) => item.type === "image").map((item) => item.url)}
          onClose={handleCloseModal}
          initialIndex={selectedMediaIndex}
        />
      )}
      <DeptoIcons />
      <Footer />
    </div>
  )
}
"use client"

import { useMemo } from "react"

// Lista de características para departamentos de Planta Baja
const GROUND_FLOOR_FEATURES = [
  "Apto para 4 personas",
  "Cama matrimonial",
  "Sofá cama con carrión para 2 personas",
  "Placard",
  "Baño privado (Ducha, bidet, papel higiénico, jabón)",
  "Patio interno",
  "Tender",
  "Mesa y sillas (para 4 personas)",
  "Aire Acondicionado (frío/calor) en habitación y comedor",
  "Heladera",
  "Horno/hornallas",
  "Electrodomésticos (pava eléctrica, tostadora y microondas)",
  "Utensilios de cocina (cubiertos, platos, vasos, ollas)",
  "Elementos de limpieza (Detergente, esponja, virulana, ballerina, trapo de piso, balde)",
  "Calefón",
  "Cesto de basura (Cocina y baño)",
  "Blanquería (toalla/toallón por persona y ropa de cama)",
  "Wifi gratuito",
  "TV por cable",
  "Té y café de cortesía",
]

// Lista de características para departamentos de Primer y Segundo Piso
const UPPER_FLOOR_FEATURES = [
  "Apto para 5 personas",
  "Cama matrimonial",
  "Sofá cama con carrión para 2 personas",
  "Cama individual",
  "Placard",
  "Baño privado (Ducha, bidet, papel higiénico, jabón)",
  "Mesa y sillas (para 5 personas)",
  "Aire Acondicionado (frío/calor) en habitación y comedor",
  "Heladera",
  "Horno/hornallas",
  "Electrodomésticos (pava eléctrica, tostadora y microondas)",
  "Utensilios de cocina (cubiertos, platos, vasos, ollas)",
  "Elementos de limpieza (Detergente, esponja, virulana, ballerina, trapo de piso, balde)",
  "Calefón",
  "Cesto de basura (Cocina y baño)",
  "Blanquería (toalla/toallón por persona y ropa de cama)",
  "Wifi gratuito",
  "TV por cable",
  "Té y café de cortesía",
  "Espacio adicional para trabajo",
]

interface ApartmentFeaturesProps {
  isUpperFloor?: boolean
}

export function ApartmentFeatures({ isUpperFloor = false }: ApartmentFeaturesProps) {

  // Seleccionar las características según el tipo de departamento
  const features = isUpperFloor ? UPPER_FLOOR_FEATURES : GROUND_FLOOR_FEATURES

  // Dividir las características en grupos para animación escalonada
  const featureGroups = useMemo(() => {
    const groups = []
    const itemsPerGroup = Math.ceil(features.length / 3)

    for (let i = 0; i < features.length; i += itemsPerGroup) {
      groups.push(features.slice(i, i + itemsPerGroup))
    }

    return groups
  }, [features])

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm md:text-base text-slate-950">
      {featureGroups.map((group, groupIndex) => (
        <div key={`group-${groupIndex}`} className="space-y-3">
          {group.map((feature, index) => (
            <li
              key={index}
              className="flex items-center"
              data-aos="fade-up"
              data-aos-delay={index * 50 + groupIndex * 100}
            >
              <span className="mr-2 text-orange">•</span>
              {feature}
            </li>
          ))}
        </div>
      ))}
    </ul>
  )
}

"use client"

import { useMemo } from "react"

// Lista de características comunes a todos los departamentos
const APARTMENT_FEATURES = [
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

export function ApartmentFeatures() {
  // Dividir las características en grupos para animación escalonada
  const featureGroups = useMemo(() => {
    const groups = []
    const itemsPerGroup = Math.ceil(APARTMENT_FEATURES.length / 3)

    for (let i = 0; i < APARTMENT_FEATURES.length; i += itemsPerGroup) {
      groups.push(APARTMENT_FEATURES.slice(i, i + itemsPerGroup))
    }

    return groups
  }, [])

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

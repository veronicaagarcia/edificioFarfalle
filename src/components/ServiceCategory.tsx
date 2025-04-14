"use client"

import type { ReactNode } from "react"

interface ServiceCategoryProps {
  icon: ReactNode
  title: string
  items: string[]
  delay?: number
  isLoaded: boolean
}

export function ServiceCategory({ icon, title, items, delay = 0, isLoaded }: ServiceCategoryProps) {
  return (
    <div data-aos={isLoaded ? "fade-up" : ""} data-aos-delay={delay}>
      <li className="font-semibold flex justify-center md:justify-start items-center w-full text-orange/80 mt-10 md:mt-5 mb-1">
        {icon}
        <p className="pl-2">{title}</p>
      </li>
      <ul className="text-black text-center md:text-start w-full font-thin">
        {items.map((item, index) => (
          <li key={index} className="transition-all duration-300 hover:text-orange/80">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

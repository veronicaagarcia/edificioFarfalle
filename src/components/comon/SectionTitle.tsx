import { forwardRef } from "react"

interface SectionTitleProps {
  title: string
}

export const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(({ title }, ref) => {
  return (
    <h2
      ref={ref}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
      className="text-base xl:text-lg mt-4 md:mt-8 font-mono font-medium uppercase text-orange/80 text-center mb-8"
    >
      {title}
    </h2>
  )
})

SectionTitle.displayName = "SectionTitle"

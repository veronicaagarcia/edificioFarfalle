interface FeatureItemProps {
    title: string
    description: string
    isMobile: boolean
    delay?: number
  }
  
  export function FeatureItem({ title, description, isMobile, delay = 0 }: FeatureItemProps) {
    return (
      <div className="mb-4" data-aos="fade-up" data-aos-delay={delay}>
        <p
          className={`text-justify text-black text-opacity-90 px-4 md:px-0 xl:px-8 ${isMobile ? "text-base" : "text-lg"}`}
        >
          <span className="font-semibold">{title}:</span> {description}
        </p>
      </div>
    )
  }
  
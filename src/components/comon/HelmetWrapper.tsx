import { Helmet, HelmetProvider } from 'react-helmet-async'
import { memo } from 'react'

interface PropHelmetWrapper {
	title?: string
	description?: string
	image?: string
	url?: string
	keywords?: string
}

const HelmetWrapper = memo(({ 
	title = "Edificio Farfalle - Alojamiento Temporal", 
	description = "Departamentos temporales modernos en La Plata",
	image = "/images/services.webp",
	url = "https://www.edificiofarfalle.com",
	keywords = "alquiler temporal La Plata, departamentos temporales, alojamiento La Plata"
}: PropHelmetWrapper) => (
	<HelmetProvider>
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
			<link rel='canonical' href={url} />
			
			{/* Open Graph */}
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={`${url}${image}`} />
			<meta property='og:url' content={url} />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='Edificio Farfalle' />
			
			{/* Twitter Card */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={`${url}${image}`} />
		</Helmet>
	</HelmetProvider>
))

HelmetWrapper.displayName = 'HelmetWrapper'

export default HelmetWrapper

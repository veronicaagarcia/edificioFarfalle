// src/components/HelmetWrapper.js
import { Helmet, HelmetProvider } from 'react-helmet-async'

interface PropHelmetWrapper {
	title?: string
	description?: string
}

const HelmetWrapper = ({ title, description }: PropHelmetWrapper) => (
	<HelmetProvider>
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta
				name='keywords'
				content='alquiler temporal, departamentos, vacaciones, alojamiento, edificio farfalle'
			/>
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta
				property='og:image'
				content='https://drive.google.com/thumbnail?authuser=0&sz=w500&id=1_La5MTgeMBxoSJ3wPJgtaHSsIJS979Mf'
			/>
			<meta property='og:url' content='https://www.edificiofarfalle.com' />
			
		</Helmet>
	</HelmetProvider>
)

export default HelmetWrapper

export function Map() {

	return (
		<div className="w-full lg:w-11/12 h-200 md:h-425 lg:h-200 rounded-xl mb-1 overflow-hidden">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.3478124227285!2d-57.96566168420504!3d-34.944556281990845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62f865c2c9f%3A0xe24bc1f422b42ee3!2sC.%2062%201770%2C%20B1904%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1716220573139!5m2!1ses!2sar"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	)
}

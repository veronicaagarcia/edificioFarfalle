// import { useEffect } from 'react'
// import mapboxgl from 'mapbox-gl'

// const initializeMap = () => {
// 	mapboxgl.accessToken =
// 		'pk.eyJ1IjoidmVybzkwMjYiLCJhIjoiY2xzbmEyMXpyMDIzNjJrcGJ6Zm44b3B6eCJ9.pLAc8loQc-pisha9eaGyUg'
// 	return new mapboxgl.Map({
// 		container: 'map',
// 		style: 'mapbox://styles/mapbox/streets-v12',
// 		center: [-57.9631264226935, -34.94458453832025],
// 		zoom: 14,
// 	})
// }

// const addMarkers = (map: mapboxgl.Map) => {
// 	new mapboxgl.Marker()
// 		.setLngLat([-57.9631264226935, -34.94458453832025])
// 		.setPopup(new mapboxgl.Popup().setHTML(`<h3>Edificio Farfalle</h3>`))
// 		.addTo(map)
// }

export function Map() {
	// useEffect(() => {
	// 	const map = initializeMap()
	// 	addMarkers(map)

	// 	// Agregar evento de clic al mapa
	// 	map.on('click', () => {
	// 		// Abrir una nueva ventana del navegador con el mapa de Google Maps en La Plata -34.94458185270848, -57.963126869810374
	// 		window.open(
	// 			`https://www.google.com/maps?q=-34.94458185270848, -57.963126869810374`
	// 		)
	// 	})

	// 	return () => map.remove()
	// }, [])

	return (<>
		{/* <div
			id='map'
			className='w-full lg:w-11/12 h-200 md:h-425 lg:h-200 rounded-xl mb-1'
		></div> */}
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
	</>
	)
}

import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const initializeMap = () => {
	mapboxgl.accessToken =
		'pk.eyJ1IjoidmVybzkwMjYiLCJhIjoiY2xzbmEyMXpyMDIzNjJrcGJ6Zm44b3B6eCJ9.pLAc8loQc-pisha9eaGyUg'
	return new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v12',
		center: [-57.9631264226935, -34.94458453832025],
		zoom: 14,
	})
}

const addMarkers = (map: mapboxgl.Map) => {
	new mapboxgl.Marker()
		.setLngLat([-57.9631264226935, -34.94458453832025])
		.setPopup(new mapboxgl.Popup().setHTML(`<h3>Edificio Farfalle</h3>`))
		.addTo(map)
}

export function Map() {
	useEffect(() => {
		const map = initializeMap()
		addMarkers(map)

		// Agregar evento de clic al mapa
		map.on('click', () => {
			// Abrir una nueva ventana del navegador con el mapa de Google Maps en La Plata -34.94458185270848, -57.963126869810374
			window.open(
				`https://www.google.com/maps?q=-34.94458185270848, -57.963126869810374`
			)
		})

		return () => map.remove()
	}, [])

	return (
		<div
			id='map'
			className='w-full lg:w-11/12 h-200 md:h-425 lg:h-200 rounded-xl mb-1'
		></div>
	)
}

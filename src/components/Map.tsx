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

		return () => map.remove()
	}, [])

	return (
		<div
			id='map'
			className='w-full lg:w-11/12 h-425 lg:h-200 rounded-xl mb-1'
			style={{
				boxShadow: '10px 10px 5px 0px rgba(172,115,100,0.75)',
			}}
		></div>
	)
}

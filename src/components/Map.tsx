import { useContext, useLayoutEffect, useRef } from 'react'
import { PlacesContext } from '../context'
import { Loader } from './Loader'
import mapboxgl from 'mapbox-gl'
import { MapContext } from '../context/map/MapContext'

export function Map() {
	const { isLoading, userLocation, farfalleLocation } =
		useContext(PlacesContext)
	const { setMap } = useContext(MapContext)
	const mapDiv = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new mapboxgl.Map({
				container: mapDiv.current!, // container ID
				style: 'mapbox://styles/mapbox/streets-v12', // style URL
				center: farfalleLocation, // starting position [lng, lat]
				zoom: 14, // starting zoom
			})
			setMap(map)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading])

	if (isLoading) {
		return <Loader />
	}
	return (
		<div
			ref={mapDiv}
			style={{
				height: '100vh',
				width: '100vw',
				position: 'fixed',
				top: 0,
				left: 0,
			}}
		>
			{userLocation?.join(',')}
		</div>
	)
}

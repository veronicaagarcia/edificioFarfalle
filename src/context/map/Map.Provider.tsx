import { Map, Marker, Popup } from 'mapbox-gl'
import { MapContext } from './MapContext'
import { useContext, useReducer } from 'react'
import { MapReducer } from './Map.Reducer'
import mapboxgl from 'mapbox-gl'
import { PlacesContext } from '..'

export interface MapState {
	isMapReady: boolean
	map?: Map
}
const INITIAL_STATE: MapState = {
	isMapReady: false,
	map: undefined,
}
interface Props {
	children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE)
	const { userLocation } = useContext(PlacesContext)

	const setMap = (map: Map) => {
		const myLocationPopup = new Popup().setHTML(
			'<h4>Usted se encuentra aqui</h4>'
		)
		const farfallePopup = new Popup().setHTML('<h4>Edificio Farfalle</h4>')

		new mapboxgl.Marker({
			color: 'var(--orange)',
		})
			.setLngLat([-57.9631264226935, -34.94458453832025])
			.setPopup(farfallePopup)
			.addTo(map)

		if (userLocation !== undefined) {
			new Marker().setLngLat(userLocation).setPopup(myLocationPopup).addTo(map)
		}

		dispatch({ type: 'setMap', payload: map })
	}
	return (
		<MapContext.Provider value={{ ...state, setMap }}>
			{children}
		</MapContext.Provider>
	)
}

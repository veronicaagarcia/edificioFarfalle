import { useEffect, useReducer } from 'react'
import { PlacesContext } from './PlacesContext'
import { PlacesReducer } from './PlacesReducer'
import { getUserLocation } from '../../helpers/getUserLocation'

export interface PlacesState {
	isLoading: boolean
	userLocation?: [number, number]
	farfalleLocation: [number, number]
}

const INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocation: undefined,
	farfalleLocation: [-57.9631264226935, -34.94458453832025],
}

interface Props {
	children: JSX.Element | JSX.Element[]
}

export function PlacesProvider({ children }: Props) {
	const [state, dispatch] = useReducer(PlacesReducer, INITIAL_STATE)

	useEffect(() => {
		getUserLocation().then((lngLat) =>
			dispatch({ type: 'setUserLocation', payload: lngLat })
		)
	}, [])
	return (
		<PlacesContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</PlacesContext.Provider>
	)
}

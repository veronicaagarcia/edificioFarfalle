import { createContext } from 'react'

export interface PlacesContextProps {
    isLoading: boolean
    userLocation?: [number, number]
    farfalleLocation: [number, number]
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps)
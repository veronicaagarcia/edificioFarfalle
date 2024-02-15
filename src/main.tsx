import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PlacesProvider } from './context/index.ts'
import mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"
import { MapProvider } from './context/map/Map.Provider.tsx'

mapboxgl.accessToken =
	'pk.eyJ1IjoidmVybzkwMjYiLCJhIjoiY2xzbmEyMXpyMDIzNjJrcGJ6Zm44b3B6eCJ9.pLAc8loQc-pisha9eaGyUg'

if (!navigator.geolocation) {
	alert('Tu navegador no tiene activada la opcion de Geolocation')
	throw new Error('Tu navegador no tiene activada la opcion de Geolocation')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PlacesProvider>
			<MapProvider>
				<App />
			</MapProvider>
		</PlacesProvider>
	</React.StrictMode>
)

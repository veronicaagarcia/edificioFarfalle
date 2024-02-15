import { MapState } from "./Map.Provider"
import { Map } from "mapbox-gl"
type MacActions = {type: 'setMap', payload: Map }
export const MapReducer = (state: MapState, action: MacActions):MapState => {

switch(action.type){
   
    case 'setMap':
        return {
            ...state,
            isMapReady: true,
            map: action.payload
        }
    default:
        return state
}
}
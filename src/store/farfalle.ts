import { create } from 'zustand'

interface State {
    getStart: () => void
    isStarted: boolean
}

export const useFarfalleStore = create<State>((set) => {
    return{ 
        isStarted: false,
        getStart: () => {
            set({isStarted: true})
        }
    }
})
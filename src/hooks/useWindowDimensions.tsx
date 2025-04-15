// "use client"

// import { useState, useEffect } from "react"

// interface WindowDimensions {
//   width: number
//   height: number
//   isWideScreen: boolean
// }

// export function useWindowDimensions(): WindowDimensions {
//   const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
//     width: window.innerWidth,
//     height: window.innerHeight,
//     isWideScreen: window.innerWidth > window.innerHeight,
//   })

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//         isWideScreen: window.innerWidth > window.innerHeight,
//       })
//     }

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   return windowDimensions
// }
"use client"

import { useState, useEffect } from "react"

interface WindowDimensions {
  width: number
  height: number
  isWideScreen: boolean
}

export function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
    isWideScreen: false,
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isWideScreen: window.innerWidth > window.innerHeight,
      })
    }

    handleResize() // Llamar una vez al montar

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

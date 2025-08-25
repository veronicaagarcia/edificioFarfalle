import { useState, useEffect } from 'react'

interface BreakpointConfig {
  sm: number
  md: number
  lg: number
  xl: number
}

const defaultBreakpoints: BreakpointConfig = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

export function useResponsive(breakpoints: BreakpointConfig = defaultBreakpoints) {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { width } = windowSize

  return {
    ...windowSize,
    isMobile: width < breakpoints.sm,
    isTablet: width >= breakpoints.sm && width < breakpoints.lg,
    isDesktop: width >= breakpoints.lg,
    isWideScreen: width >= breakpoints.xl,
    isLandscape: windowSize.width > windowSize.height
  }
}
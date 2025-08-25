"use client"

import type React from "react"
import { useState, type ReactNode, useCallback, useMemo, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Card } from "@mui/material"
import logoFarfalle from "../../assets/222.png"
import close from "../../assets/close.svg"
import menu from "../../assets/menu.svg"

interface NavLinksProps {
  to?: string
  exact?: boolean
  activeClassName?: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

interface NavbarProps {
  sectionTopRef: React.RefObject<HTMLDivElement>
  isMobile: boolean
}

const departamentosRoutes = [
  "/Departamentos/Pb-A",
  "/Departamentos/Pb-B",
  "/Departamentos/1-A",
  "/Departamentos/1-B",
  "/Departamentos/2-B",
]

export function Navbar({ sectionTopRef, isMobile }: NavbarProps) {
  const [openCloseMenu, setOpenCloseMenu] = useState(false)
  const [isWideScreen, setIsWideScreen] = useState(false)
  const location = useLocation()

  // Detectar si la pantalla es mas ancha que alta
  useEffect(() => {
    const checkScreenDimensions = () => {
      setIsWideScreen(window.innerWidth > window.innerHeight && window.innerWidth < 1200)
    }

    checkScreenDimensions()
    window.addEventListener("resize", checkScreenDimensions)

    return () => {
      window.removeEventListener("resize", checkScreenDimensions)
    }
  }, [])

  const handleOpenCloseMenu = useCallback(() => {
    setOpenCloseMenu((prev) => !prev)
  }, [])

  const NavLinks = useCallback(
    ({ to, exact, activeClassName, className, children, onClick }: NavLinksProps) => {
      const handleClick = () => {
        setOpenCloseMenu(false)
        if (onClick) {
          onClick()
        }
      }

      if (!to) {
        return (
          <span className={className} onClick={handleClick}>
            {children}
          </span>
        )
      }

      return (
        <NavLink
          to={to}
          className={({ isActive }) => {
            // Lógica especial para Departamentos
            const isDepartamentosActive = to === "/Departamentos" && 
              departamentosRoutes.some((route) => location.pathname === route)
            
            // Determinar si debe estar activo
            const shouldBeActive = exact 
              ? (location.pathname === to || isDepartamentosActive)
              : (isActive || isDepartamentosActive)

            // Combinar clases correctamente
            const baseClasses = className || ""
            const activeClasses = shouldBeActive ? (activeClassName || "") : ""
            
            return `${baseClasses} ${activeClasses}`.trim()
          }}
          onClick={handleClick}
          rel="noopener noreferrer"
        >
          {children}
        </NavLink>
      )
    },
    [location.pathname],
  )

  const cardStyle = useMemo(
    () => ({
      height: isMobile ? "18vh" : "22vh",
      width: "100%",
      display: "flex",
      flexDirection: "column" as React.CSSProperties["flexDirection"],
      justifyContent: "center",
      alignItems:"center",
      position: "relative" as const,
      top: "0",
      overflow: "visible",
      padding: isMobile ? 8 :0,
      backgroundColor: "#fefcf9",
      borderRadius: 0,
      minHeight: isMobile ? "120px" : isWideScreen ? "160px" : "165px",
    }),
    [isMobile, isWideScreen],
  );
  
  const navLinksClass = useMemo(
    () =>
      isMobile
        ? `text-background hover:text-black ${openCloseMenu ? "justify-end pb-6 pt-6" : "hidden"}`
        : "text-black hover:scale-105 hover:drop-shadow-lg hover:font-semibold text-base",
    [isMobile, openCloseMenu],
  )

  // Estilos para el contenedor del logo y título
  const logoContainerStyle = useMemo(() => {
    if (isWideScreen) {
      return {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
      }
    }
    return {}
  }, [isWideScreen])

  return (
    <Card ref={sectionTopRef} id="top" style={cardStyle}>
      <div
        className={`flex flex-col w-full h-full lg:-mt-4 ${
          isMobile ? `justify-center items-start` : `items-center justify-center`
        }`}
        style={logoContainerStyle}
      >
        <img
          className={`animate-pulse -mt-2 ${isMobile ? `h-auto w-44 mb-5 -mt-4 -ml-2` : `h-auto w-[200px] `}`}
          src={logoFarfalle || "/placeholder.svg"}
          alt="Logo mariposa"
          loading="lazy"
        />
        <h1 className={`font-great-vibes text-black -mt-16 pb-2 ${isMobile ? `ml-4 text-2xl` : `text-3xl`}`}>
          Edificio Farfalle
        </h1>
      </div>

      <nav
        className={`${
          isMobile
            ? `h-fit absolute bottom-[40%] flex flex-col self-end justify-center p-2 gap-2 ${
                openCloseMenu
                  ? "w-36 h-screen min-h-screen z-50 absolute top-0 border-transparent rounded-tl-sm right-0 p-5 shadow-sm bg-orange pb-36 pt-5"
                  : "w-16 h-16 my-auto mr-3"
              }`
            : "flex items-center w-full bg-gradient-to-b from-orange to-nav opacity-95 justify-around py-3 px-10 z-10" 
        }`}>
        {isMobile && (
          <button
            className="h-fit w-36 flex justify-end absolute top-0 right-4 z-50 transition-all duration-200"
            onClick={handleOpenCloseMenu}
            aria-label={openCloseMenu ? "Cerrar menú" : "Abrir menú"}
          >
            <img
              src={openCloseMenu ? close : menu}
              className={`h-6 w-6 transition-transform duration-200 p-1 rounded hover:bg-white/20 ${
                openCloseMenu ? "mt-4 text-black opacity-95" : "hover:scale-105"
              }`}
              loading="lazy"
              alt={openCloseMenu ? "Cerrar" : "Menú"}
            />
          </button>
        )}

        {/* Menú móvil con animación */}
        {isMobile && (
          <div
            className={`fixed top-0 right-0 h-screen bg-gradient-to-b from-orange via-orange to-nav w-40 z-40 flex flex-col items-end pt-28 px-5 gap-5 transition-all duration-300 ease-in-out shadow-lg ${
              openCloseMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <NavLinks
              className="text-white hover:text-slate-800 hover:bg-white/15 font-medium transition-all duration-300 delay-100 py-2 px-3 rounded-md text-right w-full"
              activeClassName="!text-slate-800 !bg-white/25 !font-semibold"
              exact
              to="/"
            >
              Inicio
            </NavLinks>
            <NavLinks
              className="text-white hover:text-slate-800 hover:bg-white/15 font-medium transition-all duration-300 delay-200 py-2 px-3 rounded-md text-right w-full"
              activeClassName="!text-slate-800 !bg-white/25 !font-semibold"
              exact
              to="/Departamentos"
            >
              Departamentos
            </NavLinks>
            <NavLinks
              className="text-white hover:text-black hover:bg-white/10 font-semibold transition-all duration-300 delay-300 py-2 px-3 rounded-md text-right w-full"
              activeClassName="!text-black !bg-white/20 !font-bold"
              exact
              to="/Servicios"
            >
              Servicios
            </NavLinks>
            <NavLinks
              className="text-white hover:text-black hover:bg-white/10 font-semibold transition-all duration-300 delay-400 py-2 px-3 rounded-md text-right w-full"
              activeClassName="!text-black !bg-white/20 !font-bold"
              exact
              to="/Contacto"
            >
              Contacto
            </NavLinks>
            <NavLinks
              className="text-white hover:text-black hover:bg-white/10 font-semibold transition-all duration-300 delay-500 py-2 px-3 rounded-md text-right w-full"
              activeClassName="!text-black !bg-white/20 !font-bold"
              exact
              to="/Reservas"
            >
              Reservas
            </NavLinks>
          </div>
        )}

        {/* Menú desktop */}
        {!isMobile && (
          <>
            <NavLinks 
              className={navLinksClass} 
              activeClassName="!text-background !scale-105" 
              exact 
              to="/"
            >
              Inicio
            </NavLinks>
            <span className="text-black font-medium text-base" aria-hidden="true">
              |
            </span>
            <NavLinks 
              className={navLinksClass} 
              activeClassName="!text-background !scale-105" 
              exact 
              to="/Departamentos"
            >
              Departamentos
            </NavLinks>
            <span className="text-black font-medium text-base" aria-hidden="true">
              |
            </span>
            <NavLinks 
              className={navLinksClass} 
              activeClassName="!text-background !scale-105" 
              exact 
              to="/Servicios"
            >
              Servicios
            </NavLinks>
            <span className="text-black font-medium text-base" aria-hidden="true">
              |
            </span>
            <NavLinks 
              className={navLinksClass} 
              activeClassName="!text-background !scale-105" 
              exact 
              to="/Contacto"
            >
              Contacto
            </NavLinks>
            <span className="text-black font-medium text-base" aria-hidden="true">
              |
            </span>
            <NavLinks 
              className={navLinksClass} 
              activeClassName="!text-background !scale-105" 
              exact 
              to="/Reservas"
            >
              Reservas
            </NavLinks>
          </>
        )}
      </nav>
    </Card>
  )
}

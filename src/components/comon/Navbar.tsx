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
  // "/edificioFarfalle/Departamentos/Pb-A",
  // "/edificioFarfalle/Departamentos/Pb-B",
  // "/edificioFarfalle/Departamentos/1-A",
  // "/edificioFarfalle/Departamentos/1-B",
  // "/edificioFarfalle/Departamentos/2-B",
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
      const isActive = to ? (exact ? location.pathname === to : location.pathname.startsWith(to)) : false

      const isDepartamentosActive = departamentosRoutes.some((route) => location.pathname === route)
      // const isLinkActive = isActive || (to === "/edificioFarfalle/Departamentos" && isDepartamentosActive)
      const isLinkActive = isActive || (to === "/Departamentos" && isDepartamentosActive)

      const handleClick = () => {
        setOpenCloseMenu(false)
        if (onClick) {
          onClick()
        }
      }

      return to ? (
        <NavLink
          to={to}
          className={`${className} ${isLinkActive ? activeClassName : ""}`}
          onClick={handleClick}
          rel="noopener noreferrer"
        >
          {children}
        </NavLink>
      ) : (
        <span className={className} onClick={handleClick}>
          {children}
        </span>
      )
    },
    [location.pathname],
  )

  const cardStyle = useMemo(
    () => ({
      height: isMobile ? "18vh" : "22vh",
      width: "100%",
      display: "flex",
      flexDirection: isWideScreen ? "row" : "column" as React.CSSProperties["flexDirection"],
      justifyContent: isWideScreen ? "space-between" : "center",
      alignItems: isWideScreen ? "center" : "flex-start",
      position: "relative" as const,
      top: "0",
      overflow: "visible",
      padding: isWideScreen ? "0 2rem" : "0",
    }),
    [isMobile, isWideScreen],
  )

  const navLinksClass = useMemo(
    () =>
      isMobile
        ? `text-white hover:text-black ${openCloseMenu ? "justify-end pb-6 pt-6" : "hidden"}`
        : "text-white hover:scale-110 hover:drop-shadow-lg text-lg font-semibold",
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
        className={`flex flex-col w-full h-full ${
          isMobile ? `justify-center items-start` : `items-center justify-center`
        }`}
        style={logoContainerStyle}
      >
        <img
          className={`animate-pulse -mt-2 ${isMobile ? `h-auto w-44 mb-5 -mt-4 -ml-2` : `h-auto w-[220px] -mt-10`}`}
          src={logoFarfalle || "/placeholder.svg"}
          alt="Logo mariposa"
          loading="lazy"
        />
        <h1 className={`font-great-vibes text-black -mt-16 pb-2 ${isMobile ? `ml-4 text-2xl` : `text-4xl`}`}>
          Edificio Farfalle
        </h1>
      </div>

      <nav
        className={`${
          isMobile
            ? `h-fit absolute bottom-1/4 flex flex-col self-end justify-center p-2 gap-2 ${
                openCloseMenu
                  ? "w-36 h-screen min-h-screen z-50 absolute top-0 border-transparent rounded-tl-sm right-0 p-5 shadow-sm bg-orange pb-36 pt-5"
                  : "w-16 h-16 my-auto mr-3"
              }`
            : "flex items-center w-full bg-gradient-to-b from-orange to-nav justify-around py-6 px-10 -mb-2 z-10 rounded-b-sm"
        }`}
      >
        {isMobile && (
          <button
            className="h-fit w-36 flex justify-end absolute top-0 right-4 z-50"
            onClick={handleOpenCloseMenu}
            aria-label={openCloseMenu ? "Cerrar menú" : "Abrir menú"}
          >
            <img
              src={openCloseMenu ? close : menu}
              className={`h-5 w-5 ${openCloseMenu ? "mt-6 text-slate-950 opacity-95" : ""}`}
              loading="lazy"
              alt={openCloseMenu ? "Cerrar" : "Menú"}
            />
          </button>
        )}

        {/* Menú móvil con animación */}
        {isMobile && (
          <div
            className={`fixed top-0 right-0 h-screen bg-gradient-to-b from-orange via-orange to-nav w-40 z-40 flex flex-col items-end pt-32 px-5 gap-6 transition-transform duration-300 ease-in-out ${
              openCloseMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <NavLinks
              className="text-white hover:text-black font-semibold transition-all duration-300 delay-100"
              activeClassName="text-black"
              exact
              to="/"
            >
              Inicio
            </NavLinks>
            <NavLinks
              className="text-white hover:text-black font-semibold transition-all duration-300 delay-200"
              activeClassName="text-black"
              exact
              to="/Departamentos"
            >
              Departamentos
            </NavLinks>
            <NavLinks
              className="text-white hover:text-black font-semibold transition-all duration-300 delay-300"
              activeClassName="text-black"
              exact
              to="/Servicios"
            >
              Servicios
            </NavLinks>
            <NavLinks
              className="text-white hover:text-black font-semibold transition-all duration-300 delay-400"
              activeClassName="text-black"
              exact
              to="/Contacto"
            >
              Contacto
            </NavLinks>
            <NavLinks
              className="text-white hover:text-black font-semibold transition-all duration-300 delay-500"
              activeClassName="text-black"
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
            <NavLinks className={navLinksClass} activeClassName="text-black" exact to="/">
              Inicio
            </NavLinks>
            <span className="text-white text-xl font-semibold" aria-hidden="true">
              |
            </span>
            <NavLinks className={navLinksClass} activeClassName="text-black" exact to="/Departamentos">
              Departamentos
            </NavLinks>
            <span className="text-white text-xl font-semibold" aria-hidden="true">
              |
            </span>
            <NavLinks className={navLinksClass} activeClassName="text-black" exact to="/Servicios">
              Servicios
            </NavLinks>
            <span className="text-white text-xl font-semibold" aria-hidden="true">
              |
            </span>
            <NavLinks className={navLinksClass} activeClassName="text-black" exact to="/Contacto">
              Contacto
            </NavLinks>
            <span className="text-white text-xl font-semibold" aria-hidden="true">
              |
            </span>
            <NavLinks className={navLinksClass} activeClassName="text-black" exact to="/Reservas">
              Reservas
            </NavLinks>
          </>
        )}
      </nav>
    </Card>
  )
}

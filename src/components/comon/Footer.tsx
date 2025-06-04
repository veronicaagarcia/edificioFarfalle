"use client"

import { NavLink } from "react-router-dom"
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  ExternalLink,
  Home,
  Building,
  Briefcase,
  MessageSquare,
  Calendar,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className=" text-white py-6 md:py-10 w-full font-lato" 
    style={{
      backgroundColor: "#0f172a",
      backgroundImage: "url('/edificioFarfalle/backgrund.png')",
      backgroundRepeat: "repeat",
      backgroundSize: "auto",
      backgroundPosition: "center",
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {/* Sobre Nosotros */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold mb-3 text-orange border-b pb-2">
              Sobre Nosotros
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Edificio Farfalle ofrece alojamiento cómodo y moderno en La Plata. Nos esforzamos por brindar una
              experiencia de hospedaje excepcional con atención personalizada y servicios de alta calidad.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold mb-3 text-orange border-b pb-2">
              Enlaces Rápidos
            </h2>
            <ul className="text-sm space-y-2">
              <li className="flex items-center transition-transform hover:translate-x-1">
                <Home size={16} className="mr-2 text-orange/70" />
                <NavLink to="/" className="text-gray-300 hover:text-orange transition-colors">
                  Inicio
                </NavLink>
              </li>
              <li className="flex items-center transition-transform hover:translate-x-1">
                <Building size={16} className="mr-2 text-orange/70" />
                <NavLink
                  to="/Departamentos"
                  className="text-gray-300 hover:text-orange transition-colors"
                >
                  Departamentos
                </NavLink>
              </li>
              <li className="flex items-center transition-transform hover:translate-x-1">
                <Briefcase size={16} className="mr-2 text-orange/70" />
                <NavLink to="/Servicios" className="text-gray-300 hover:text-orange transition-colors">
                  Servicios
                </NavLink>
              </li>
              <li className="flex items-center transition-transform hover:translate-x-1">
                <MessageSquare size={16} className="mr-2 text-orange/70" />
                <NavLink to="/Contacto" className="text-gray-300 hover:text-orange transition-colors">
                  Contacto
                </NavLink>
              </li>
              <li className="flex items-center transition-transform hover:translate-x-1">
                <Calendar size={16} className="mr-2 text-orange/70" />
                <NavLink to="/Reservas" className="text-gray-300 hover:text-orange transition-colors">
                  Reservas
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold mb-3 text-orange border-b pb-2">Contacto</h2>
            <ul className="text-sm space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-orange/70 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">1770 Calle 62, 1900 La Plata, Argentina</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-orange/70 flex-shrink-0" />
                <a href="tel:+542216342322" className="text-gray-300 hover:text-orange transition-colors">
                  +54 221 634-2322
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-orange/70 flex-shrink-0" />
                <a
                  href="mailto:edificiofarfalle@gmail.com"
                  className="text-gray-300 hover:text-orange transition-colors"
                >
                  edificiofarfalle@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Instagram size={18} className="mr-2 text-orange/70 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/edificiofarfalle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange transition-colors"
                >
                  @edificiofarfalle
                </a>
              </li>
            </ul>
          </div>

          {/* Cómo Llegar */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold mb-3 text-orange border-b pb-2">Cómo Llegar</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Haz clic en el botón a continuación para obtener direcciones hacia el Edificio Farfalle.
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1770+Calle+62,+1904+La+Plata,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-orange text-white hover:text-black py-2 px-3 rounded-md hover:bg-nav inline-flex items-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              <ExternalLink size={14} className="mr-1" />
              Cómo llegar
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-xs text-gray-400">© {currentYear} Edificio Farfalle. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

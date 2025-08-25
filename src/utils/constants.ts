// Site configuration
export const SITE_CONFIG = {
  name: 'Edificio Farfalle',
  description: 'Departamentos temporales modernos en La Plata',
  url: 'https://www.edificiofarfalle.com' as const,
  githubUrl: 'https://veronicaagarcia.github.io/edificioFarfalle/',
  location: {
    city: 'La Plata',
    state: 'Buenos Aires',
    country: 'Argentina'
  },
  contact: {
    phone: '+54-221-XXXXXXX',
    email: 'info@edificiofarfalle.com'
  }
} as const

// Apartment routes
export const APARTMENT_ROUTES = [
  { path: '/Departamentos/Pb-A', name: 'Planta Baja A' },
  { path: '/Departamentos/Pb-B', name: 'Planta Baja B' },
  { path: '/Departamentos/1-A', name: 'Primer Piso A' },
  { path: '/Departamentos/1-B', name: 'Primer Piso B' },
  { path: '/Departamentos/2-B', name: 'Segundo Piso B' }
] as const

// Navigation links
export const NAV_LINKS = [
  { path: '/', label: 'Inicio' },
  { path: '/Departamentos', label: 'Departamentos' },
  { path: '/Servicios', label: 'Servicios' },
  { path: '/Contacto', label: 'Contacto' },
  { path: '/Reservas', label: 'Reservas' }
] as const

// Features list for reusability
export const BUILDING_FEATURES = [
  {
    title: "Ubicación Privilegiada y tranquila",
    description: "Situado en una zona residencial tranquila de La Plata, Edificio Farfalle ofrece un escape del bullicio del centro de la ciudad."
  },
  {
    title: "Comodidad y Modernidad",
    description: "Nuestros departamentos están diseñados para ofrecer el máximo confort con instalaciones modernas y elegantes."
  },
  {
    title: "Estacionamiento Disponible", 
    description: "Para aquellos que viajan en coche, ofrecemos opciones de estacionamiento seguras y convenientes."
  },
  {
    title: "Entorno Familiar y Seguro",
    description: "Nuestra ubicación en una zona residencial garantiza un entorno seguro y familiar."
  },
  {
    title: "Fácil Acceso al Transporte Público",
    description: "Estamos bien conectados con las principales líneas de transporte público de La Plata."
  },
  {
    title: "Relación Calidad-Precio",
    description: "Ofrecemos tarifas competitivas y un excelente valor por tu dinero."
  }
] as const

// SEO keywords by page
export const SEO_KEYWORDS = {
  home: 'alquiler temporal La Plata, departamentos temporales, alojamiento La Plata, edificio farfalle',
  departamentos: 'departamentos amueblados La Plata, apartamentos temporales, alojamiento equipado',
  servicios: 'servicios apartamentos temporales, amenities edificio farfalle, wifi estacionamiento',
  contacto: 'contacto edificio farfalle, reservas departamentos La Plata, información alojamiento',
  reservas: 'reservar departamento temporal, booking apartamentos La Plata, disponibilidad'
} as const
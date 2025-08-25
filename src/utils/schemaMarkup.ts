// Schema markup utilities for SEO

import { SITE_CONFIG, APARTMENT_ROUTES } from './constants';

export interface ApartmentSchema {
  id: string;
  name: string;
  description: string;
  images: string[];
  priceRange: string;
  amenities: string[];
  floorSize?: string;
  bedrooms?: number;
  bathrooms?: number;
}

export class SchemaMarkupGenerator {
  // Generate LodgingBusiness schema for main site
  static generateLodgingBusinessSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.contact.phone,
      email: SITE_CONFIG.contact.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.state,
        addressCountry: 'AR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -34.9214,
        longitude: -57.9544
      },
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'WiFi gratuito',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification', 
          name: 'Estacionamiento',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Cocina equipada',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'TV por cable',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Aire acondicionado',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Calefacción',
          value: true
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '9.4',
        bestRating: '10',
        worstRating: '1',
        ratingCount: '50',
        reviewCount: '45'
      },
      priceRange: '$$',
      currenciesAccepted: 'ARS',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      checkInTime: '15:00',
      checkOutTime: '11:00',
      petsAllowed: false,
      smokingAllowed: false,
      sameAs: [
        'https://www.booking.com/hotel/ar/farfalle.html',
        'https://www.airbnb.com/rooms/54102302'
      ]
    };
  }

  // Generate Apartment schema for individual apartments
  static generateApartmentSchema(apartment: ApartmentSchema) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Apartment',
      '@id': `${SITE_CONFIG.url}/#/Departamentos/${apartment.id}`,
      name: apartment.name,
      description: apartment.description,
      url: `${SITE_CONFIG.url}/#/Departamentos/${apartment.id}`,
      image: apartment.images.map(img => `${SITE_CONFIG.url}${img}`),
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.state,
        addressCountry: 'AR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -34.9214,
        longitude: -57.9544
      },
      floorSize: apartment.floorSize && {
        '@type': 'QuantitativeValue',
        value: apartment.floorSize,
        unitText: 'm²'
      },
      numberOfRooms: apartment.bedrooms,
      numberOfBathroomsTotal: apartment.bathrooms,
      amenityFeature: apartment.amenities.map(amenity => ({
        '@type': 'LocationFeatureSpecification',
        name: amenity,
        value: true
      })),
      offers: {
        '@type': 'Offer',
        priceRange: apartment.priceRange,
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString(),
        url: `${SITE_CONFIG.url}/#/Reservas`
      },
      isPartOf: {
        '@type': 'LodgingBusiness',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url
      }
    };
  }

  // Generate FAQPage schema
  static generateFAQSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Dónde está ubicado el Edificio Farfalle?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Edificio Farfalle está ubicado en una zona residencial tranquila de La Plata, Buenos Aires, Argentina. Ofrecemos un escape del bullicio del centro mientras mantenemos fácil acceso al transporte público.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Qué amenities incluyen los departamentos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Todos nuestros departamentos incluyen WiFi gratuito, cocina completamente equipada, TV por cable, aire acondicionado, calefacción, ropa de cama y toallas. Además, ofrecemos estacionamiento disponible.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Cuál es la política de check-in y check-out?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El check-in es a partir de las 15:00 horas y el check-out hasta las 11:00 horas. Podemos coordinar horarios especiales según disponibilidad.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Aceptan mascotas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Actualmente no aceptamos mascotas en nuestros departamentos para mantener la limpieza y comodidad de todos nuestros huéspedes.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Cómo puedo hacer una reserva?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Puedes hacer una reserva a través de nuestro formulario online, contactándonos directamente, o a través de nuestras plataformas en Booking.com y Airbnb.'
          }
        }
      ]
    };
  }

  // Generate Organization schema
  static generateOrganizationSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/icons/icon-512x512.png`,
      description: SITE_CONFIG.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.state,
        addressCountry: 'AR'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.contact.phone,
        email: SITE_CONFIG.contact.email,
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'English']
      },
      sameAs: [
        'https://www.booking.com/hotel/ar/farfalle.html',
        'https://www.airbnb.com/rooms/54102302'
      ]
    };
  }

  // Generate LocalBusiness schema
  static generateLocalBusinessSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      image: `${SITE_CONFIG.url}/images/services.webp`,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.contact.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dirección del edificio', // Add actual address
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.state,
        postalCode: '1900', // Add actual postal code
        addressCountry: 'AR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -34.9214,
        longitude: -57.9544
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday', 
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '09:00',
        closes: '21:00'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '9.4',
        bestRating: '10',
        worstRating: '1',
        ratingCount: '50'
      }
    };
  }

  // Generate BreadcrumbList schema
  static generateBreadcrumbSchema(path: string) {
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs: Array<{name: string, url: string}> = [
      { name: 'Inicio', url: SITE_CONFIG.url }
    ];

    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      
      let name = segment;
      switch (segment) {
        case 'Departamentos':
          name = 'Departamentos';
          break;
        case 'Servicios':
          name = 'Servicios';
          break;
        case 'Contacto':
          name = 'Contacto';
          break;
        case 'Reservas':
          name = 'Reservas';
          break;
        default:
          // Handle apartment IDs
          const apartment = APARTMENT_ROUTES.find(apt => apt.path.includes(segment));
          if (apartment) {
            name = apartment.name;
          }
      }

      breadcrumbs.push({
        name,
        url: `${SITE_CONFIG.url}/#${currentPath}`
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
  }

  // Inject schema into page
  static injectSchema(schema: object, id?: string) {
    const scriptId = id || 'schema-markup';
    
    // Remove existing schema
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    
    document.head.appendChild(script);
  }
}

// Export apartment data for schema generation
export const APARTMENT_DATA: Record<string, ApartmentSchema> = {
  'Pb-A': {
    id: 'Pb-A',
    name: 'Departamento Planta Baja A',
    description: 'Acogedor departamento en planta baja con fácil acceso y todas las comodidades modernas.',
    images: ['/images/PbA.webp', '/images/PbA/1.webp', '/images/PbA/2.webp'],
    priceRange: '$50-80 USD por noche',
    amenities: ['WiFi gratuito', 'Cocina equipada', 'TV por cable', 'Aire acondicionado', 'Estacionamiento'],
    floorSize: '45',
    bedrooms: 1,
    bathrooms: 1
  },
  'Pb-B': {
    id: 'Pb-B',
    name: 'Departamento Planta Baja B',
    description: 'Departamento moderno en planta baja, ideal para estadías cómodas con excelente ubicación.',
    images: ['/images/PbB.webp', '/images/PbB/1.webp', '/images/PbB/2.webp'],
    priceRange: '$50-80 USD por noche',
    amenities: ['WiFi gratuito', 'Cocina equipada', 'TV por cable', 'Aire acondicionado', 'Estacionamiento'],
    floorSize: '47',
    bedrooms: 1,
    bathrooms: 1
  },
  '1-A': {
    id: '1-A',
    name: 'Departamento Primer Piso A',
    description: 'Departamento luminoso en primer piso con vista agradable y todas las comodidades necesarias.',
    images: ['/images/1A.webp', '/images/1A/1.webp', '/images/1A/2.webp'],
    priceRange: '$55-85 USD por noche',
    amenities: ['WiFi gratuito', 'Cocina equipada', 'TV por cable', 'Aire acondicionado', 'Vista exterior'],
    floorSize: '50',
    bedrooms: 2,
    bathrooms: 1
  },
  '1-B': {
    id: '1-B',
    name: 'Departamento Primer Piso B',
    description: 'Amplio departamento en primer piso con excelente distribución y comodidades premium.',
    images: ['/images/1B.webp', '/images/1B/1.webp', '/images/1B/2.webp'],
    priceRange: '$55-85 USD por noche',
    amenities: ['WiFi gratuito', 'Cocina equipada', 'TV por cable', 'Aire acondicionado', 'Balcón'],
    floorSize: '52',
    bedrooms: 2,
    bathrooms: 1
  },
  '2-B': {
    id: '2-B',
    name: 'Departamento Segundo Piso B',
    description: 'Departamento premium en segundo piso con vistas panorámicas y máximo confort.',
    images: ['/images/2B.webp', '/images/2B/1.webp', '/images/2B/2.webp'],
    priceRange: '$60-90 USD por noche',
    amenities: ['WiFi gratuito', 'Cocina equipada', 'TV por cable', 'Aire acondicionado', 'Vista panorámica', 'Terraza'],
    floorSize: '55',
    bedrooms: 2,
    bathrooms: 1
  }
};

export default SchemaMarkupGenerator;
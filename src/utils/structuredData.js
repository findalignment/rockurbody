/**
 * Structured Data (Schema.org) generators for SEO
 * 
 * These create JSON-LD structured data for better search engine understanding
 */

// Organization Schema
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Rock Your Body',
  description: 'Movement education and structural integration services in Santa Cruz, CA',
  url: 'https://rockyourbody.com',
  logo: 'https://rockyourbody.com/logo.png',
  image: 'https://rockyourbody.com/og-image.jpg',
  telephone: '+1-831-216-6410', // Add your phone number
  email: 'rock@rockyourbody.com', // Add your email
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santa Cruz',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '36.927', // Update with actual coordinates
    longitude: '-122.023',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://facebook.com/rockyourbody', // Add your social media URLs
    'https://instagram.com/rockyourbody',
    'https://linkedin.com/in/rockhudson',
  ],
});

// Person Schema (for About page)
export const getPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rock Hudson',
  jobTitle: 'Movement and Alignment Specialist',
  description: 'Certified structural integration practitioner and movement educator specializing in pain relief and performance enhancement',
  url: 'https://rockyourbody.com/about',
  image: 'https://rockyourbody.com/rock-hudson.jpg',
  worksFor: {
    '@type': 'Organization',
    name: 'Rock Your Body',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santa Cruz',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Anatomy Trains',
    },
  ],
  knowsAbout: [
    'Structural Integration',
    'Movement Education',
    'Fascia Therapy',
    'Posture Correction',
    'Pain Management',
  ],
});

// Service Schema
export const getServiceSchema = (service) => {
  const services = {
    'structural-integration': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Structural Integration',
      provider: {
        '@type': 'HealthAndBeautyBusiness',
        name: 'Rock Your Body',
      },
      areaServed: {
        '@type': 'City',
        name: 'Santa Cruz',
      },
      description: 'Hands-on fascia work combined with movement education to realign how you move so life feels easier. Specializing in pain relief, posture correction, and performance enhancement.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '180',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '180',
          priceCurrency: 'USD',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitText: 'session',
          },
        },
      },
    },
    'movement-education': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Movement Education',
      provider: {
        '@type': 'HealthAndBeautyBusiness',
        name: 'Rock Your Body',
      },
      areaServed: {
        '@type': 'City',
        name: 'Santa Cruz',
      },
      description: 'Personalized movement coaching to help you move better, feel stronger, and prevent injury. Includes assessment, coaching, and follow-up support.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '180',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '180',
          priceCurrency: 'USD',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitText: 'session',
          },
        },
      },
    },
  };

  return services[service] || services['structural-integration'];
};

// Product Schema (for packages)
export const getPackageSchema = (packageData) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: packageData.name,
  description: packageData.description,
  brand: {
    '@type': 'Brand',
    name: 'Rock Your Body',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: packageData.price,
    availability: 'https://schema.org/InStock',
    url: `https://rockyourbody.com/packages#${packageData.slug}`,
  },
  aggregateRating: packageData.rating ? {
    '@type': 'AggregateRating',
    ratingValue: packageData.rating,
    reviewCount: packageData.reviewCount,
  } : undefined,
});

// Blog Article Schema
export const getBlogArticleSchema = (article) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.publishedDate,
  dateModified: article.modifiedDate || article.publishedDate,
  author: {
    '@type': 'Person',
    name: 'Rock Hudson',
    url: 'https://rockyourbody.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Rock Your Body',
    logo: {
      '@type': 'ImageObject',
      url: 'https://rockyourbody.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
});

// FAQ Schema
export const getFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `https://rockyourbody.com${crumb.path}`,
  })),
});

// Local Business Schema (comprehensive)
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['HealthAndBeautyBusiness', 'LocalBusiness'],
  '@id': 'https://rockyourbody.com/#organization',
  name: 'Rock Your Body',
  alternateName: 'Rock Your Body Movement & Alignment',
  description: 'Expert movement education and structural integration in Santa Cruz, CA. Specializing in pain relief, posture correction, and performance enhancement.',
  url: 'https://rockyourbody.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://rockyourbody.com/logo.png',
    width: 600,
    height: 60,
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://rockyourbody.com/og-image.jpg',
    width: 1200,
    height: 630,
  },
  telephone: '+1-XXX-XXX-XXXX',
  email: 'rock@rockyourbody.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '', // Add your street address
    addressLocality: 'Santa Cruz',
    addressRegion: 'CA',
    postalCode: '95060',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.9741,
    longitude: -122.0308,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Santa Cruz',
    },
    {
      '@type': 'City',
      name: 'Capitola',
    },
    {
      '@type': 'City',
      name: 'Aptos',
    },
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://facebook.com/rockyourbody',
    'https://instagram.com/rockyourbody',
    'https://linkedin.com/in/rockhudson',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Structural Integration',
          description: 'Hands-on fascia work combined with movement education',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Movement Education',
          description: 'Personalized movement coaching and training',
        },
      },
    ],
  },
});

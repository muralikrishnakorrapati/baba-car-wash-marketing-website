'use client';
import React from 'react';
import {
  Hero,
  Features,
  About,
  Values,
  PremiumServices,
  WhyChooseUs,
  Pricing,
} from '@/components/Home';

export default function Home() {
  // Local Business Schema
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'AutoWash',
    name: 'BABA CAR WASHING & CLEANING L.L.C',
    image: 'https://www.babacarwash.com/logo.png',
    '@id': 'https://www.babacarwash.com',
    url: 'https://www.babacarwash.com',
    telephone: '+971-XX-XXX-XXXX',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: 'XXXXX',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/babacarwash',
      'https://www.instagram.com/babacarwash',
      'https://twitter.com/babacarwash',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Car Wash Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dust Removal',
            description: 'Professional dust removal service for your vehicle',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Body Wash',
            description: 'Complete exterior body wash and cleaning',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Glass Cleaning',
            description: 'Crystal clear glass cleaning for all windows',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wheel Cleaning',
            description: 'Deep wheel and rim cleaning service',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tire Polishing',
            description: 'Premium tire polishing and protection',
          },
        },
      ],
    },
  };

  // BreadcrumbList Schema
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.babacarwash.com',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Hero />
      <About />
      <Features />
      <Values />
      <WhyChooseUs />
      <Pricing />
      <PremiumServices />
    </>
  );
}

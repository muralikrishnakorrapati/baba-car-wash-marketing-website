import React from 'react';
import { PageHero } from '@/components/About';
import { OurServices } from '@/components/Services';

const ServicesPage = () => {
  return (
    <>
      <PageHero title="Services" backgroundImage="/image4.avif" />
      <OurServices />
    </>
  );
};

export default ServicesPage;

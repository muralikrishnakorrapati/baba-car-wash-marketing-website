import React from 'react';
import {
  PageHero,
  History,
  Director,
  OurValues,
  WhatWeGive,
  WhyChooseUs,
  ClientDetails,
} from '@/components/About';

const AboutPage = () => {
  return (
    <>
      <PageHero title="About Us" backgroundImage="/image4.avif" />
      <History />
      <Director />
      <OurValues />
      <WhatWeGive />
      <WhyChooseUs />
      <ClientDetails />
    </>
  );
};

export default AboutPage;

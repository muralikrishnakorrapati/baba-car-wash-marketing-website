import React from 'react';
import { PageHero } from '@/components/About';
import { CommunitiesGrid } from '@/components/Communities';

const CommunitiesPage = () => {
  return (
    <>
      <PageHero title="Communities" backgroundImage="/image4.avif" />
      <CommunitiesGrid />
    </>
  );
};

export default CommunitiesPage;

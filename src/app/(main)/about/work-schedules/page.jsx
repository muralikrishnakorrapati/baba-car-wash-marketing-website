import React from 'react';
import { PageHero } from '@/components/About';
import { WorkSchedule, StaffTraining } from '@/components/WorkSchedules';

const WorkSchedulesPage = () => {
  return (
    <>
      <PageHero title="Work Schedules" backgroundImage="/image4.avif" />
      <WorkSchedule />
      <StaffTraining />
    </>
  );
};

export default WorkSchedulesPage;

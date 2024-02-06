import BannerPage from '@/components/in/common/BannerPage';
import Advisory from '@/components/in/process/Advisory';
import FullProcess from '@/components/in/process/FullProcess';
import React from 'react';

const page = () => {
  return (
    <div>
      <BannerPage heading="E-VISA APPLICATION PROCESS" />
      <FullProcess />
      <Advisory />
    </div>
  );
};

export default page;


import About from '@/components/australia/home/About';
import Banner from '@/components/australia/home/Banner';
import ChooseEta from '@/components/australia/home/ChooseEta';
import Consultantinfo from '@/components/australia/home/Consultantinfo';
import EligibleCountries from '@/components/australia/home/EligibleCountries';
import Faq from '@/components/australia/home/Faq';
import ProcessingStep from '@/components/australia/home/ProcessingStep';
import Thinktoknow from '@/components/australia/home/Thinktoknow';
import Visainfo from '@/components/australia/home/Visainfo';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Banner
        title="Lorem Ipsum is simply  dummy text of the printing"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        button1="Apply For ETA Visa"
        button2="Do I Need An ETA?"
        link="/australia/application"
      />
      <About/>
      <ProcessingStep />
      <Visainfo />
      <EligibleCountries />
      <Thinktoknow />
      <ChooseEta />
      <Consultantinfo />
      <Faq />
    </div>
  );
};

export default Page;

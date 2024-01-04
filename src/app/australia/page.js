
import ProcessingStep from '@/components/commonWebsiteComponents/ProcessingStep';
import { Banner } from '@/components/commonWebsiteComponents/Banner';
import Faq from '@/components/commonWebsiteComponents/Faq';
import LearnMore from '@/components/commonWebsiteComponents/LearnMore';
import React from 'react';
import { faqData1, learnMoreSectionData, processingData1 } from '@/constant/data';



const Page = () => {
  return (
    <div>
      <Banner
        name="Australia"
        type="visatype"
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link="/australia/application"
      />
      <ProcessingStep processingData={processingData1} />
      <LearnMore learnMoreSectionData={learnMoreSectionData} />
      <Faq faqData={faqData1} />
    </div>
  );
};

export default Page;

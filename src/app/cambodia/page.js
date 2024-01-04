import { Banner } from '@/components/commonWebsiteComponents/Banner'
import Faq from '@/components/commonWebsiteComponents/Faq'
import ProcessingStep from '@/components/commonWebsiteComponents/ProcessingStep'
import { faqData1, learnMoreSectionData, processingData1 } from '@/constant/data'
import React from 'react'
function Page() {
  return (
    <div>

      <Banner
        name="Cambodia"
        type="visatype"
        validity=" Valid for 1 year"
        entries="Single Entries"
        price="$126.67"
        link="/cambodia/application"
      />
       <LearnMore learnMoreSectionData={learnMoreSectionData} />
      <ProcessingStep processingData={processingData1} />
      <Faq faqData={faqData1} />

    </div>
  )
}

export default Page
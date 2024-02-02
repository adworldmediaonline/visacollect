import { Banner } from '@/components/commonWebsiteComponents/Banner'
import Faq from '@/components/commonWebsiteComponents/Faq'
import LearnMore from '@/components/commonWebsiteComponents/LearnMore'
import ProcessingStep from '@/components/commonWebsiteComponents/ProcessingStep'
import { cambodiafaq, learnMoreSectionDataCambodia, processingData1 } from '@/constant/data'
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
       <ProcessingStep processingData={processingData1}
       link="/cambodia/application" />
       <LearnMore learnMoreSectionData={learnMoreSectionDataCambodia} />
     
      <Faq faqData={cambodiafaq} />

    </div>
  )
}

export default Page
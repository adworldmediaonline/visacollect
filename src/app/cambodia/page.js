import { Banner } from '@/components/commonWebsiteComponents/Banner'
import Faq from '@/components/commonWebsiteComponents/Faq'
import ProcessingStep from '@/components/commonWebsiteComponents/ProcessingStep'
import { faqData2, processingdata2 } from '@/constant/data'
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
      <ProcessingStep processingdata={processingdata2} />
      <Faq faqData={faqData2} />

    </div>
  )
}

export default Page
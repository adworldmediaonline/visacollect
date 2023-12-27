import About from '@/components/turkey/home/About'
import Banner from '@/components/turkey/home/Banner'
import ChooseEta from '@/components/turkey/home/ChooseEta'
import EligibleCountries from '@/components/turkey/home/EligibleCountries'
import Faq from '@/components/turkey/home/Faq'
import NewsAndUpdates from '@/components/turkey/home/NewsAndUpdates'
import ProcessingStep from '@/components/turkey/home/ProcessingStep'
import Recommended from '@/components/turkey/home/Recommended'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Banner
        title="Lorem Ipsum is simply  dummy text of the printing"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        button="Apply Now"
        link="/turkey/application"
      />
      <About />
      <ProcessingStep />
      <EligibleCountries />
      <ChooseEta />
      <Recommended />
      <NewsAndUpdates />
      <Faq />
    </div>

  )
}

export default Page
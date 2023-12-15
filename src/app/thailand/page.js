import Contactform from '@/components/thailand/home/Contactform'
import Mainsection from '@/components/thailand/home/Mainsection'
import Quicklooksrilanka from '@/components/thailand/home/Quicklooksrilanka'
import Steps from '@/components/thailand/home/Steps'
import Touristattractions from '@/components/thailand/home/Touristattractions'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Mainsection
        img="/assets/images/thailand/banner.png"
        title="3 Simple Steps To Get Your eVisa Thailand!"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        button="Apply Now"
        linkPath="/"
      />
      <Quicklooksrilanka />
      <Steps />
      <Touristattractions />
      <Contactform />
    </div>
  )
}

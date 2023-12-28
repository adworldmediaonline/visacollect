
import Mainsection from "@/components/srilanka/common/Mainsection";
import Contactform from "@/components/srilanka/home/Contactform";
import Documentissued from "@/components/srilanka/home/Documentissued";
import Overview from "@/components/srilanka/home/Overview";
import Quicklooksrilanka from "@/components/srilanka/home/Quicklooksrilanka";
import Touristattractions from "@/components/srilanka/home/Touristattractions";
import React from "react";

const page = () => {
  return (
    <div>

      <Mainsection
      img="/assets/images/srilanka/home/Mainimage.png"
      title="Lorem Ipsum is simply  dummy text of the printing" 
      para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      button="Apply Now"
      link="/srilanka/apply-individual"
      stripeText="    Important Information: Fully Vaccinated tourist can stay at any type
      of hotel and no on-arrival PCR test required. More details can found
      in the...."
      linkPath="/srilanka/slvisa"
      />
      <Quicklooksrilanka />
      <Overview />
      <Touristattractions />
      <Documentissued/>
     <Contactform/>
    </div>
  );
};

export default page;

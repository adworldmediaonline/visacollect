import ProcessingStep from '@/components/commonWebsiteComponents/ProcessingStep';
import { Banner } from '@/components/commonWebsiteComponents/Banner';
import Faq from '@/components/commonWebsiteComponents/Faq';
import LearnMore from '@/components/commonWebsiteComponents/LearnMore';
import React from 'react';
import {
  faqData1,
  learnMoreSectionDataAustralia,
  processingData1,
} from '@/constant/data';
import Link from 'next/link';

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
        pageTitle={learnMoreSectionDataAustralia?.pageTitle}
        pageName={learnMoreSectionDataAustralia?.pageName}
      />
      {/* <ProcessingStep
        processingData={processingData1}
        link="/australia/application"
      /> */}
      <div className="w-full h-[1px] bg-slate-200"></div>
      <div className="flex">
        <main className="flex-1 py-2">
          <LearnMore learnMoreSectionData={learnMoreSectionDataAustralia} />
        </main>
        <aside className="basis-[300px]  py-12 space-y-4">
          <div>Other links:</div>
          <ul className="flex flex-col gap-3">
            {learnMoreSectionDataAustralia?.otherLinks?.map((link, index) => (
              <li key={index}>
                <Link className="underline text-primary" href={link.path}>
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <Faq faqData={faqData1} />
    </div>
  );
};

export default Page;

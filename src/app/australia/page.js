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
import Divider from '@/components/common/Divider';
import CustomButton from '@/components/common/CustomButton';
import PageReview from './_homePage/PageReview';
import RelatedArticlesSlider from '@/components/commonWebsiteComponents/RelatedArticlesSlider';

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
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <div className="flex">
        <main className="flex-1 py-2 [&_strong]:text-[#595b66] [&_p]:font-normal [&_p]:text-[#343a40] [&_li]:text-[#343a40]">
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
      <div className="mt-16">
        <Divider />
      </div>

      <Faq faqData={learnMoreSectionDataAustralia?.faqData} />
      <PageReview applyLink="#" />
      <RelatedArticlesSlider />
    </div>
  );
};

export default Page;

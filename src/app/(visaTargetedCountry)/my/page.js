import { Banner } from '@/components/commonWebsiteComponents/Banner';
import React from 'react';
import Faq from '@/components/commonWebsiteComponents/Faq';
import LearnMore from '@/components/commonWebsiteComponents/LearnMore';
import Link from 'next/link';
import RelatedArticlesSlider from '@/components/commonWebsiteComponents/RelatedArticlesSlider';
import Divider from '@/components/common/Divider';
import PageReview from '@/components/common/countryHomePage/PageReview';
import { learnMoreSectionDataMalaysia } from '@/constant/countryHomePageData/malaysia';

const Page = () => {
  return (
    <div>
      <Banner
        name="Malaysia"
        type="visatype"
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link="/malaysia/step-one"
        pageTitle={learnMoreSectionDataMalaysia?.pageTitle}
        pageName={learnMoreSectionDataMalaysia?.pageName}
      />
      {/* <ProcessingStep
        processingData={processingData1}
        link="/australia/application"
      /> */}
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 py-2 [&_strong]:text-tertiary [&_p]:font-normal [&_p]:text-[#343a40] [&_li]:text-[#343a40] [&_.link]:text-primaryMain [&_.email-link]:text-primaryMain">
          <LearnMore learnMoreSectionData={learnMoreSectionDataMalaysia} />
        </main>
        <aside className="basis-[300px] py-5 md:py-12 space-y-4">
          <div className="container">
            {' '}
            <div>Other links:</div>
            <ul className="flex flex-col gap-3">
              {learnMoreSectionDataMalaysia?.otherLinks?.map((link, index) => (
                <li key={index}>
                  <Link className="underline text-primary" href={link.path}>
                    {link.linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <div className="mt-16">
        <Divider />
      </div>

      <Faq faqData={learnMoreSectionDataMalaysia?.faqData} />
      {/* Remember: For the most accurate and up-to-date information, it's best to check the official website. */}
      <PageReview applyLink={learnMoreSectionDataMalaysia?.applyNowLink} />
      <RelatedArticlesSlider
        relatedArticles={learnMoreSectionDataMalaysia.relatedArticles}
      />
    </div>
  );
};

export default Page;

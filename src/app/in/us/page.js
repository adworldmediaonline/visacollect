import ProcessingStep from '@/components/commonWebsiteComponents/ProcessingStep';
import React from 'react';
import { Banner } from '@/components/commonWebsiteComponents/Banner';
import Faq from '@/components/commonWebsiteComponents/Faq';
import LearnMore from '@/components/commonWebsiteComponents/LearnMore';
import Link from 'next/link';
import Divider from '@/components/common/Divider';
import PageReview from './_homePage/PageReview';
import RelatedArticlesSlider from '@/components/commonWebsiteComponents/RelatedArticlesSlider';
import { learnMoreSectionDataUs } from '@/constant/countryHomePageData/us';
import Us from '../../homePagesBlog/us.mdx';
import HomePagBlogContainer from '@/components/HomePagBlogContainer';
export default function Page() {
  return (
    <div>
      <Banner
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link="/in/au-Indian-tourist-visa-Australian-citizens/application"
        pageTitle={learnMoreSectionDataUs?.pageTitle}
        pageTitleDescription={learnMoreSectionDataUs?.pageTitleDescription}
        pageName={learnMoreSectionDataUs?.pageName}
      />
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 py-2 [&_strong]:text-tertiary [&_p]:font-normal [&_p]:text-[#343a40] [&_li]:text-[#343a40]">
          <HomePagBlogContainer>
            <Us />
          </HomePagBlogContainer>
        </main>
        <aside className="basis-[300px] py-5 md:py-12 space-y-4">
          <div className="container">
            {' '}
            <div>Other links:</div>
            <ul className="flex flex-col gap-3">
              {learnMoreSectionDataUs?.otherLinks?.map((link, index) => (
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

      <Faq faqData={learnMoreSectionDataUs?.faqData} />
      <PageReview applyLink="#" />
      {/* <RelatedArticlesSlider
        relatedArticles={learnMoreSectionDataUs?.relatedArticles}
      /> */}
    </div>
  );
}

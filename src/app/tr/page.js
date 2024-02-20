import React from 'react';
import { Banner } from '@/components/commonWebsiteComponents/Banner';
import Divider from '@/components/common/Divider';
import PageReview from './_homePage/PageReview';
import TurkeyHomePage from '../mainDirectoryHomePages/turkey.mdx';
// import FaqWithMDX from '@/components/commonWebsiteComponents/FaqWithMDX';
// import { usFaq } from '@/app/faqMdx/usFaq/usFaq';
import PageWrapper from '@/app/blog/components/PageWrapper';
import MainWrapper from '@/app/blog/components/MainWrapper';
import AsideWrapper from '@/app/blog/components/AsideWrapper';
import AsideBlogCard from '@/app/blog/components/AsideBlogCard';
import BlogSlider from '@/components/commonWebsiteComponents/BlogSlider';
import Faq from '@/components/commonWebsiteComponents/Faq';
import { learnMoreSectionDataTurkey } from '@/constant/countryHomePageData/turkey';

const blogs = [
  {
    title:
      'Everything You Need to Know to Stress-Free Travel Planning for Any Trip',
    description:
      'Discover the simplicity of securing your UK to Australia eVisa with ease for a seamless travel experience.',
    slug: '/blog/tips-for-stress-free-travel',
    linkText: 'Read More',
    img: 'https://dummyimage.com/720x400',
  },
  {
    title: 'Happiest City Index - Best Cities to Travel in 2024',
    description:
      'Experience joy in the top cities of 2024! Discover the Happiest City Index for the best travel destinations. Happiness awaits in every corner.',
    slug: '/blog/best-cities-to-travel-in-2024',
    linkText: 'Read More',
    img: 'https://dummyimage.com/720x400',
  },
  {
    title:
      'Top Best Free Game-Changing Social Media Tools and Strategies For Travel Agents',
    description:
      'Experience joy in the top cities of 2024! Discover the Happiest City Index for the best travel destinations. Happiness awaits in every corner.',
    slug: '/blog/strategies-for-travel-agents',
    linkText: 'Read More',
    img: 'https://dummyimage.com/720x400',
  },
  {
    title: 'How to Use Social Media to Attract More Clients as a Travel Agent',
    description:
      'Experience joy in the top cities of 2024! Discover the Happiest City Index for the best travel destinations. Happiness awaits in every corner.',
    slug: '/blog/social-media-travel-agents-for-visa',
    linkText: 'Read More',
    img: 'https://dummyimage.com/720x400',
  },
];
export default async function Page() {
  return (
    <div>
      <Banner
        name="Turkey"
        type="visatype"
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link="/tr/application"
        pageTitle={learnMoreSectionDataTurkey?.mainPageTitle}
        pageName={learnMoreSectionDataTurkey?.pageName}
      />
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <PageWrapper className="mt-10 mb-10">
        <MainWrapper>
          <TurkeyHomePage />
        </MainWrapper>
        <AsideWrapper>
          <ul className="flex flex-col gap-3">
            {blogs?.map(blog => (
              <li key={blog.title}>
                <AsideBlogCard slug={blog.slug} title={blog.title} />
              </li>
            ))}
          </ul>
        </AsideWrapper>
      </PageWrapper>
      <div className="mt-16">
        <Divider />
      </div>

      <div>
        <Faq faqData={learnMoreSectionDataTurkey?.faqData} />
      </div>
      <PageReview applyLink="/tr/application" />
      <BlogSlider blogs={blogs} />
    </div>
  );
}

import { Banner } from '@/components/commonWebsiteComponents/Banner';
import React from 'react';
import Faq from '@/components/commonWebsiteComponents/Faq';
import LearnMore from '@/components/commonWebsiteComponents/LearnMore';
import Link from 'next/link';
import RelatedArticlesSlider from '@/components/commonWebsiteComponents/RelatedArticlesSlider';
import Divider from '@/components/common/Divider';
import PageReview from '@/components/common/countryHomePage/PageReview';
import { learnMoreSectionDataIndia } from '@/constant/countryHomePageData/india';
import Header from '@/components/india/common/Header';
import Footer from '@/components/india/common/Footer';
import BlogSlider from '@/components/commonWebsiteComponents/BlogSlider';

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

const Page = () => {
  return (
    <>
      <Header />
      <div>
        <Banner
          name="India"
          type="visatype"
          validity=" Valid for 1 year"
          entries="Multiple Entries"
          price="$126.67"
          link="/in/visa/step-one"
          pageTitle={learnMoreSectionDataIndia?.pageTitle}
          pageName={learnMoreSectionDataIndia?.pageName}
        />
        {/* <ProcessingStep
        processingData={processingData1}
        link="/australia/application"
      /> */}
        <div className="w-full h-[0.5px] bg-gray-200"></div>
        <div className="flex flex-col md:flex-row">
          <main className="flex-1 py-2 [&_strong]:text-tertiary [&_p]:font-normal [&_p]:text-[#343a40] [&_li]:text-[#343a40] [&_.link]:text-primary [&_.email-link]:text-primary">
            <LearnMore learnMoreSectionData={learnMoreSectionDataIndia} />
          </main>
          <aside className="basis-[300px] py-5 md:py-12 space-y-4">
            <div className="container">
              {' '}
              <div>Other links:</div>
              <ul className="flex flex-col gap-3">
                {learnMoreSectionDataIndia?.otherLinks?.map((link, index) => (
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

        <Faq faqData={learnMoreSectionDataIndia?.faqData} />
        {/* Remember: For the most accurate and up-to-date information, it's best to check the official website. */}
        <PageReview applyLink={learnMoreSectionDataIndia?.applyNowLink} />

        <BlogSlider blogs={blogs} />
      </div>
      <Footer />
    </>
  );
};

export default Page;

import React from 'react';
import Divider from '@/components/common/Divider';
import PageReview from './_homePage/PageReview';
import PageWrapper from '@/app/(blogContent)/blog/components/PageWrapper';
import MainWrapper from '@/app/(blogContent)/blog/components/MainWrapper';
import AsideWrapper from '@/app/(blogContent)/blog/components/AsideWrapper';
import AsideBlogCard from '@/app/(blogContent)/blog/components/AsideBlogCard';
import BlogSlider from '@/components/commonWebsiteComponents/BlogSlider';
import Faq from '@/components/commonWebsiteComponents/Faq';
import Banner2 from '@/components/ui/Banner2';
import { malaysiaMDData } from '@/app/(visaCountries)/mainDirectoryData/malaysiaMDData';

export default async function Page() {
  return (
    <div>
      <Banner2
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link={malaysiaMDData?.applyNow}
        pageTitle={malaysiaMDData?.pageTitle}
        breadcrumb={malaysiaMDData?.breadcrumb}
      />
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <PageWrapper className="mt-10 mb-10">
        <MainWrapper>{malaysiaMDData?.pageContent}</MainWrapper>
        <AsideWrapper>
          <ul className="flex flex-col gap-3">
            {malaysiaMDData?.blogs?.map(blog => (
              <li key={blog.title}>
                <AsideBlogCard
                  slug={blog?.href}
                  title={blog?.metadata?.title ?? 'Title not found'}
                />
              </li>
            ))}
          </ul>
        </AsideWrapper>
      </PageWrapper>
      <PageReview applyLink={malaysiaMDData?.applyNow} />
      <div className="mt-16">
        <Divider />
      </div>

      <div>
        <Faq faqData={malaysiaMDData?.faq ?? []} />
      </div>
      {malaysiaMDData?.blogs?.length > 0 ? (
        <BlogSlider blogs={JSON.stringify(malaysiaMDData?.blogs) ?? []} />
      ) : null}
    </div>
  );
}

export const metadata = {
  // robots: {
  //   index: false,
  //   googleBot: {
  //     index: false,
  //   },
  // },
  title: 'Apply Malayisan Visa Online - Visa Collect',
  description:
    'Get guaranteed approval on your Malaysian visa with Visa Collect, apply for Malaysian visa online and experience a quick, secure, and hassle-free application process.',
  metadataBase: new URL('https://visacollect.com'),

  alternates: {
    canonical: '/my',
  },
  keywords:
    'visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today',

  openGraph: {
    url: '/my',
  },
};

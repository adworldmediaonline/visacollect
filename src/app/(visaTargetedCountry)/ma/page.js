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
import { morroccoMDData } from '@/app/(visaCountries)/mainDirectoryData/morroccoMDData';

export default function Page() {
  return (
    <div>
      <Banner2
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link={morroccoMDData?.applyNow}
        pageTitle={morroccoMDData?.pageTitle}
        breadcrumb={morroccoMDData?.breadcrumb}
      />
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <PageWrapper className="mt-10 mb-10">
        <MainWrapper>{morroccoMDData?.pageContent}</MainWrapper>
        <AsideWrapper>
          <ul className="flex flex-col gap-3">
            {morroccoMDData?.blogs?.map(blog => (
              <li key={blog?.title}>
                <AsideBlogCard
                  slug={blog?.href}
                  title={blog?.metadata?.title ?? 'Title not found'}
                />
              </li>
            ))}
          </ul>
        </AsideWrapper>
      </PageWrapper>
      <div className="mt-16">
        <Divider />
      </div>

      <div>
        <Faq faqData={morroccoMDData?.faq ?? []} />
      </div>
      <PageReview applyLink={morroccoMDData?.applyNow} />
      {morroccoMDData?.blogs.length > 0 ? (
        <BlogSlider blogs={JSON.stringify(morroccoMDData?.blogs) ?? []} />
      ) : null}
    </div>
  );
}

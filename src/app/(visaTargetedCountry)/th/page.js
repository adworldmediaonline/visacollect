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
import { thailandMDData } from '@/app/(visaCountries)/mainDirectoryData/thailandMDData';

export default async function Page() {
  return (
    <div>
      <Banner2
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link={thailandMDData?.applyNow}
        pageTitle={thailandMDData?.pageTitle}
        breadcrumb={thailandMDData?.breadcrumb}
      />
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <PageWrapper className="mt-10 mb-10">
        <MainWrapper>{thailandMDData?.pageContent}</MainWrapper>
        <AsideWrapper>
          <ul className="flex flex-col gap-3">
            {thailandMDData?.blogs?.map(blog => (
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
      <div className="mt-16">
        <Divider />
      </div>

      <div>
        <Faq faqData={thailandMDData?.faq ?? []} />
      </div>
      <PageReview applyLink={thailandMDData?.applyNow} />
      <BlogSlider blogs={JSON.stringify(thailandMDData?.blogs) ?? []} />
    </div>
  );
}

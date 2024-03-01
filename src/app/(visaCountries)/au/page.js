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
import { australiaMDData } from '../mainDirectoryData/australiaMDData';

export default async function Page() {
  return (
    <div>
      <Banner2
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link={australiaMDData?.applyNow}
        pageTitle={australiaMDData?.pageTitle}
      />
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <PageWrapper className="mt-10 mb-10">
        <MainWrapper>{australiaMDData?.pageContent}</MainWrapper>
        <AsideWrapper>
          <ul className="flex flex-col gap-3">
            {australiaMDData?.blogs?.map(blog => (
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
        <Faq faqData={australiaMDData?.faq ?? []} />
      </div>
      <PageReview applyLink={australiaMDData?.applyNow} />
      <BlogSlider blogs={australiaMDData?.blogs ?? []} />
    </div>
  );
}

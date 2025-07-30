import AsideBlogCard from '@/app/(blogContent)/blog/components/AsideBlogCard';
import AsideWrapper from '@/app/(blogContent)/blog/components/AsideWrapper';
import MainWrapper from '@/app/(blogContent)/blog/components/MainWrapper';
import PageWrapper from '@/app/(blogContent)/blog/components/PageWrapper';
import { japanMDData } from '@/app/(visaCountries)/mainDirectoryData/japanMDData';
import Divider from '@/components/common/Divider';
import BlogSlider from '@/components/commonWebsiteComponents/BlogSlider';
import Faq from '@/components/commonWebsiteComponents/Faq';
import Banner2 from '@/components/ui/Banner2';
import PageReview from './_homePage/PageReview';

export default function Page() {
  return (
    <div>
      <Banner2
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link={japanMDData?.applyNow}
        pageTitle={japanMDData?.pageTitle}
        breadcrumb={japanMDData?.breadcrumb}
      />
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <PageWrapper className="mt-10 mb-10">
        <MainWrapper>{japanMDData?.pageContent}</MainWrapper>
        <AsideWrapper>
          <ul className="flex flex-col gap-3">
            {japanMDData?.blogs?.map(blog => (
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
      <PageReview applyLink={japanMDData?.applyNow} />
      <div className="mt-16">
        <Divider />
      </div>

      <div>
        <Faq faqData={japanMDData?.faq ?? []} />
      </div>
      {japanMDData?.blogs.length > 0 ? (
        <BlogSlider blogs={JSON.stringify(japanMDData?.blogs) ?? []} />
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
  title: 'apply japan visa online - visa collect',
  description:
    'get guaranteed approval on your japan visa with visa collect, apply for japan visa online and experience a quick, secure, and hassle-free application process.',
  metadataBase: new URL('https://www.visacollect.com'),

  alternates: {
    canonical: '/jp',
  },
  keywords:
    'visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, online visa services apply today',

  openGraph: {
    url: '/jp',
  },
};

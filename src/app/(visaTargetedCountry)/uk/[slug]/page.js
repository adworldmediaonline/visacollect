import AsideBlogCard from '@/app/(blogContent)/blog/components/AsideBlogCard';
import AsideWrapper from '@/app/(blogContent)/blog/components/AsideWrapper';
import MainWrapper from '@/app/(blogContent)/blog/components/MainWrapper';
import PageWrapper from '@/app/(blogContent)/blog/components/PageWrapper';
import PageReview from '@/app/components/homePage/PageReview';
import Divider from '@/components/common/Divider';
import { Banner } from '@/components/commonWebsiteComponents/Banner';
import BlogSlider from '@/components/commonWebsiteComponents/BlogSlider';
import FaqWithMDX from '@/components/commonWebsiteComponents/FaqWithMDX';

import { visaPromotedInUk } from '@/app/(visaTargetedCountryContent)/content/visaTargetedCountry';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  try {
    const slug = params.slug;
    const promotedVisa = visaPromotedInUk?.find(
      visa => visa.targetedCountry.slug === slug
    );

    if (!promotedVisa) notFound();

    const { targetedCountry } = promotedVisa;
    return {
      ...(targetedCountry?.metadata
        ? targetedCountry.metadata
        : {
            title: 'title is missing!',
            description: 'description is missing!',
          }),
    };
  } catch (error) {
    console.log(error);
    return {
      title: 'not found',
      description: 'the page you are looking for does not exist',
    };
  }
}

export default async function Page({ params }) {
  const slug = params.slug;
  const promotedVisa = visaPromotedInUk?.find(
    visa => visa.targetedCountry.slug === slug
  );

  if (!promotedVisa) notFound();

  const { targetedCountry } = promotedVisa;

  const blogs = targetedCountry?.relatedBlogs.filter(
    blog => blog.slug !== slug
  );
  return (
    <div>
      <Banner
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link={targetedCountry?.applyNow ?? '#'}
        pageTitle={targetedCountry?.pageTitle ?? ''}
        pageTitleDescription={targetedCountry?.pageTitleDescription ?? ''}
        breadcrumb={`${targetedCountry?.code} > ${targetedCountry?.slug}`}
      />
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <PageWrapper className="mt-10 mb-10">
        <MainWrapper>{targetedCountry?.countryPage ?? ''}</MainWrapper>
        {blogs?.length > 0 ? (
          <AsideWrapper className="sticky top-24">
            <ul className="flex flex-col gap-3">
              {blogs.map((blog, index) => (
                <li key={index}>
                  <AsideBlogCard
                    slug={blog.href}
                    title={blog?.metadata?.title ?? ''}
                  />
                </li>
              ))}
            </ul>
          </AsideWrapper>
        ) : null}
      </PageWrapper>
      <div className="mt-16">
        <Divider />
      </div>

      <div className="flex justify-center">
        <FaqWithMDX
          faqData={targetedCountry?.faq}
          titleText={targetedCountry?.faqTitle ?? 'FAQ'}
        />
      </div>
      <PageReview applyLink="/in/visa/step-one" />
      <BlogSlider blogs={JSON.stringify(blogs) ?? []} />
    </div>
  );
}

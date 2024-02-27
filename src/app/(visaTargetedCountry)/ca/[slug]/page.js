import React from 'react';
import { Banner } from '@/components/commonWebsiteComponents/Banner';
import Divider from '@/components/common/Divider';
import FaqWithMDX from '@/components/commonWebsiteComponents/FaqWithMDX';
import BlogSlider from '@/components/commonWebsiteComponents/BlogSlider';
import PageReview from '@/app/components/homePage/PageReview';
import { notFound } from 'next/navigation';
import { visaPromotedInCanada } from '@/app/(visaTargetedCountryContent)/content/visaTargetedCountry';
import PageWrapper from '@/app/(blogContent)/blog/components/PageWrapper';
import MainWrapper from '@/app/(blogContent)/blog/components/MainWrapper';
import AsideWrapper from '@/app/(blogContent)/blog/components/AsideWrapper';
import AsideBlogCard from '@/app/(blogContent)/blog/components/AsideBlogCard';

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

export async function generateMetadata({ params }) {
  try {
    const slug = params.slug;
    const promotedVisa = visaPromotedInCanada?.find(
      visa => visa.targetedCountry.slug === slug
    );

    if (!promotedVisa) notFound();

    const { targetedCountry } = promotedVisa;
    return {
      ...(targetedCountry?.metadata
        ? targetedCountry.metadata
        : {
            title: 'Title is missing!',
            description: 'Description is missing!',
          }),
    };
  } catch (error) {
    console.log(error);
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }
}

export default async function Page({ params }) {
  const slug = params.slug;
  const promotedVisa = visaPromotedInCanada?.find(
    visa => visa.targetedCountry.slug === slug
  );

  if (!promotedVisa) notFound();

  const { targetedCountry } = promotedVisa;

  return (
    <div>
      <Banner
        validity=" Valid for 1 year"
        entries="Multiple Entries"
        price="$126.67"
        link="/in/au-Indian-tourist-visa-Australian-citizens/application"
        pageTitle={targetedCountry?.pageTitle ?? ''}
        pageTitleDescription={targetedCountry?.pageTitleDescription ?? ''}
        breadcrumb={`${targetedCountry?.code} > ${targetedCountry?.slug}`}
      />
      <div className="w-full h-[0.5px] bg-gray-200"></div>
      <PageWrapper className="mt-10 mb-10">
        <MainWrapper>{targetedCountry?.countryPage ?? ''}</MainWrapper>
        <AsideWrapper className="sticky top-24">
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

      <div className="flex justify-center">
        <FaqWithMDX
          faqData={targetedCountry?.faq}
          titleText={targetedCountry?.faqTitle}
        />
      </div>
      <PageReview applyLink="/in/visa/step-one" />
      <BlogSlider blogs={blogs} />
    </div>
  );
}

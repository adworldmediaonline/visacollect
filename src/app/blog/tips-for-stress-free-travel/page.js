import Image from 'next/image';
import StressFreeGB from '../../generalCommonBlog/tips-for-stress-free-travel.mdx';
import AsideBlogCard from '../components/AsideBlogCard';
import AsideWrapper from '../components/AsideWrapper';
import BlogContentHero from '../components/BlogContentHero';
import MainWrapper from '../components/MainWrapper';
import PageWrapper from '../components/PageWrapper';
import { stressFreeTravel } from '@/constant/images';
import AsideWrapperTitle from '../components/AsideWrapperTitle';
import BlogCardSmall from '../components/BlogCardSmall';
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
export default function Page() {
  return (
    <PageWrapper className="mt-10 mb-10">
      <MainWrapper>
        <StressFreeGB />
      </MainWrapper>
      <AsideWrapper>
        <AsideWrapperTitle>Popular Articles</AsideWrapperTitle>
        <div className="flex flex-col gap-3">
          {blogs?.slice(0, 3)?.map(blog => (
            <BlogCardSmall
              key={blog.title}
              description={blog.description}
              slug={blog.slug}
            />
          ))}
          s
        </div>
      </AsideWrapper>
    </PageWrapper>
  );
}

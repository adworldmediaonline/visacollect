import HomePageTitle from '@/components/common/countryHomePage/HomePageTitle';
import Banner3 from '@/components/ui/Banner3';
import PageWrapper from './components/PageWrapper';
import MainWrapper from './components/MainWrapper';
import { getAllPostsMeta } from '@/lib/mdx';
import FilterBlogs from './filter-blogs';

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <>
      <Banner3 breadcrumb="blog" className="pb-0" />
      <PageWrapper>
        <MainWrapper>
          <HomePageTitle
            pageTitle="Take a journey through visa-related blogs to uncover the recent trends"
            className="font-bold text-primary"
          />
          <FilterBlogs defaultValue="generalBlogs" defaultPosts={posts} />
        </MainWrapper>
      </PageWrapper>
    </>
  );
}

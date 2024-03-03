import HomePageTitle from '@/components/common/countryHomePage/HomePageTitle';
import Banner3 from '@/components/ui/Banner3';
import PageWrapper from './components/PageWrapper';
import MainWrapper from './components/MainWrapper';

export default function BlogPage() {
  return (
    <>
      <Banner3 breadcrumb="blog" className="pb-0" />
      <PageWrapper>
        <MainWrapper>
          <HomePageTitle pageTitle="Take a journey through visa-related blogs to uncover the recent trends" />
        </MainWrapper>
      </PageWrapper>
    </>
  );
}

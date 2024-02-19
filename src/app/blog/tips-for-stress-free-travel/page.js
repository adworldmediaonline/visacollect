import StressFreeGB from '../../generalCommonBlog/tips-for-stress-free-travel.mdx';
import AsideBlogCard from '../components/AsideBlogCard';
import AsideWrapper from '../components/AsideWrapper';
import MainWrapper from '../components/MainWrapper';
import PageWrapper from '../components/PageWrapper';

export default function Page() {
  return (
    <PageWrapper>
      <MainWrapper>
        <StressFreeGB />
      </MainWrapper>
      <AsideWrapper>
        <AsideBlogCard slug="test" title="hello" />
      </AsideWrapper>
    </PageWrapper>
  );
}

import AsideWrapper from './AsideWrapper';
import MainWrapper from './MainWrapper';
import PageWrapper from './PageWrapper';
import AsideWrapperTitle from './AsideWrapperTitle';
import BlogCardSmall from './BlogCardSmall';
import BlogHeroImage from '../../BlogContentHero';
import { imageNotFound } from '@/app/(visaCountries)/mainDirectoryHomePagesBlog/images/blogImages';

export default function BlogPreview2({
  asideTitle,
  img,
  content,
  relatedBlogs,
}) {
  return (
    <PageWrapper className="mt-10 mb-10">
      <MainWrapper>{content}</MainWrapper>
      {asideTitle && (
        <AsideWrapper>
          <AsideWrapperTitle>{asideTitle}</AsideWrapperTitle>
          <div className="flex flex-col gap-3">
            {relatedBlogs?.slice(0, 3)?.map((blog, index) => (
              <BlogCardSmall
                key={blog?.metadata?.title ? blog.metadata.title : index}
                {...blog}
              />
            ))}
          </div>
        </AsideWrapper>
      )}
    </PageWrapper>
  );
}

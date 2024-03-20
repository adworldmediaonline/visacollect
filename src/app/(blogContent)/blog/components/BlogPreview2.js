import AsideWrapper from './AsideWrapper';
import MainWrapper from './MainWrapper';
import PageWrapper from './PageWrapper';
import AsideWrapperTitle from './AsideWrapperTitle';
import BlogCardSmall from './BlogCardSmall';
import BlogHeroImage from '../../BlogContentHero';
import { imageNotFound } from '@/app/(visaCountries)/mainDirectoryHomePagesBlog/images/blogImages';
import ContactUs2 from '@/components/ui/contact-us-2';
import BlogPreview2PageHero from './BlogPreview2PageHero';

export default function BlogPreview2({
  asideTitle,
  content,
  relatedBlogs,
  cta,
  meta,
}) {
  return (
    <>
      <div className="container">
        <BlogPreview2PageHero className="mt-8 mb-10">
          <h1 className="text-3xl font-semibold text-primary">
            {meta?.pageTitle}
          </h1>
        </BlogPreview2PageHero>
        <PageWrapper className="mt-10 mb-10">
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
          {cta && (
            <AsideWrapper className="basis-[300px] bg-primary/10">
              <ContactUs2 />
            </AsideWrapper>
          )}
          <MainWrapper containerClassName="pl-4">{content}</MainWrapper>
        </PageWrapper>
      </div>
    </>
  );
}

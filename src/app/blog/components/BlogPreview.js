import AsideWrapper from '../components/AsideWrapper';
import MainWrapper from '../components/MainWrapper';
import PageWrapper from '../components/PageWrapper';
import AsideWrapperTitle from '../components/AsideWrapperTitle';
import BlogCardSmall from '../components/BlogCardSmall';

export default function BlogPreview({ blogs, asideTitle, blogPage }) {
  return (
    <PageWrapper className="mt-10 mb-10">
      <MainWrapper>{blogPage}</MainWrapper>
      <AsideWrapper>
        <AsideWrapperTitle>{asideTitle}</AsideWrapperTitle>
        <div className="flex flex-col gap-3">
          {blogs?.slice(0, 3)?.map(blog => (
            <BlogCardSmall
              key={blog.title}
              description={blog.description}
              slug={blog.slug}
            />
          ))}
        </div>
      </AsideWrapper>
    </PageWrapper>
  );
}

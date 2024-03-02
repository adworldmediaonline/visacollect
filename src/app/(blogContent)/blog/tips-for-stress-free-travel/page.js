import StressFreeGB from '../../generalCommonBlog/tips-for-stress-free-travel.mdx';
import BlogPreview from '../components/BlogPreview';

export default function Page() {
  return (
    <>
      <BlogPreview
        blogs={JSON.stringify([]) ?? []}
        asideTitle="Popular Articles"
        blogPage={<StressFreeGB />}
      />
    </>
  );
}

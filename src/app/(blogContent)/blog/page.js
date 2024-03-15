import HomePageTitle from '@/components/common/countryHomePage/HomePageTitle';
import Banner3 from '@/components/ui/Banner3';
import PageWrapper from './components/PageWrapper';
import MainWrapper from './components/MainWrapper';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/mdx';
import BlogCard from './components/BlogCard';

// function fetchAllBlogFiles() {
//   const blogDirectory = path.join(
//     process.cwd(),
//     'src/app/(blogContent)/generalCommonBlog'
//   );
//   const fileNames = fs.readdirSync(blogDirectory);
//   const blogFiles = fileNames.map(fileName => {
//     const fullPath = path.join(blogDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const { data } = matter(fileContents);

//     return {
//       slug: fileName.replace(/\.mdx$/, ''),
//       metadata: data,
//     };
//   });
//   return blogFiles;
// }

export default async function BlogPage() {
  const posts = await getAllPostsMeta();
  console.log(posts);

  return (
    <>
      <Banner3 breadcrumb="blog" className="pb-0" />
      <PageWrapper>
        <MainWrapper>
          <HomePageTitle
            pageTitle="Take a journey through visa-related blogs to uncover the recent trends"
            className="font-bold text-primary"
          />
          {/* <div className="w-16 h-1 mb-20 bg-primary"></div> */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts?.map(post => (
              <BlogCard imgSrc="" post={post} key={post.slug} />
            ))}
          </div>
        </MainWrapper>
      </PageWrapper>
    </>
  );
}

import HomePageTitle from '@/components/common/countryHomePage/HomePageTitle';
import Banner3 from '@/components/ui/Banner3';
import PageWrapper from './components/PageWrapper';
import MainWrapper from './components/MainWrapper';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/mdx';

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
          <HomePageTitle pageTitle="Take a journey through visa-related blogs to uncover the recent trends" />
          {posts?.map(post => (
            <div key={post.slug} className="divide-y divide-red-600">
              <Link
                href={`/blog/${post.slug}`}
                className="text-lg hover:text-primary"
              >
                {post?.title}
              </Link>
            </div>
          ))}
        </MainWrapper>
      </PageWrapper>
    </>
  );
}

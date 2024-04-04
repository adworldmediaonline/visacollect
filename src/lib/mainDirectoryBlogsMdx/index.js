import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { components } from '@/components/mdx-remote';
import LinkText from '@/components/LinkText';
import BlogContentHero from '@/app/(blogContent)/blog/components/BlogContentHero';

export const rootDirectoryDestinations = path.join(
  process.cwd(),
  'src/app/(visaCountries)/mainDirectoryHomePagesBlog'
);

console.log(rootDirectoryDestinations);

export const getPostBySlug = async (slug, rootDirectory) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, realSlug, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    // components: { ...components, LinkText, BlogContentHero },
    components: {
      ...components,
      LinkText,
      BlogContentHero,
    },

    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async rootDirectory => {
  const directories = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const directory of directories) {
    const files = fs.readdirSync(path.join(rootDirectory, directory));
    const fileName = files.find(file => file.endsWith('.mdx'));
    const { meta } = await getPostBySlug(
      fileName,
      path.join(rootDirectory, directory)
    );
    posts.push(meta);
  }
  console.log(posts);
  return posts;
};

import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import LinkText from '@/components/LinkText';
import { components } from '@/components/mdx-remote';
import BlogContentHero from '@/app/(blogContent)/blog/components/BlogContentHero';

const rootDirectory = path.join(
  process.cwd(),
  'src/app/(blogContent)/generalCommonBlog'
);

export const getPostBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    components: { ...components, LinkText, BlogContentHero },

    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};

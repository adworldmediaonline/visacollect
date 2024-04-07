import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { components } from '@/components/mdx-remote';
import LinkText from '@/components/LinkText';
import BlogContentHero from '@/app/(blogContent)/blog/components/BlogContentHero';

// export const rootDirectoryDestinations = path.join(
//   process.cwd(),
//   'src/app/(visaCountries)/mainDirectoryHomePagesBlog'
// );

// const rootDirectory = path.join(
//   process.cwd(),
//   'src/app/(blogContent)/generalCommonBlog'
// );
const rootDirectory = path.join(
  process.cwd(),
  'src/app/(visaCountries)/mainDirectoryHomePagesBlog/morocco'
);

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory, { withFileTypes: true });

  const mdxFiles = files.reduce((acc, file) => {
    if (file.isDirectory()) {
      acc = acc.concat(
        fs
          .readdirSync(path.join(rootDirectory, file.name), {
            withFileTypes: true,
          })
          .filter(
            nestedFile => nestedFile.isFile() && nestedFile.name.match(/\.mdx$/)
          )
          .map(nestedFile => path.join(file.name, nestedFile.name))
      );
    } else if (file.isFile() && file.name.match(/\.mdx$/)) {
      acc.push(file.name);
    }

    return acc;
  }, []);

  const posts = await Promise.all(
    mdxFiles.map(async file => {
      const fileContent = await fs.promises.readFile(
        path.join(rootDirectory, file),
        { encoding: 'utf8' }
      );

      const { frontmatter } = await compileMDX({
        source: fileContent,
        components,
        options: {
          parseFrontmatter: true,
        },
      });

      return { ...frontmatter, slug: path.basename(file, '.mdx') };
    })
  );

  return posts;
};

export const getPostBySlug = async (slug, directory = rootDirectory) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(directory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
    },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

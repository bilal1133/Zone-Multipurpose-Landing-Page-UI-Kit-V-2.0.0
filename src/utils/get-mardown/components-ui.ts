import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// config
import { COMPONENTS_DIRECTORY } from '../../../src/config';

// ----------------------------------------------------------------------

const slugs = fs.readdirSync(join(COMPONENTS_DIRECTORY));

// ----------------------------------------------------------------------

export function getAllComponents() {
  const components = slugs.map((slug) => {
    const fileContents = fs.readFileSync(join(COMPONENTS_DIRECTORY, slug), 'utf-8');

    const { data: frontmatter } = matter(fileContents);

    return {
      slug: slug.replace('.mdx', ''),
      frontmatter,
    };
  });
  return components;
}

// ----------------------------------------------------------------------

export function getComponentData(slug: string) {
  const fileContents = fs.readFileSync(join(COMPONENTS_DIRECTORY, slug + '.mdx'), 'utf-8');

  const { data: frontmatter, content } = matter(fileContents);

  return {
    frontmatter,
    slug,
    content,
  };
}

// ----------------------------------------------------------------------

export function getAllComponentSlugs() {
  const paths = slugs.map((slug) => ({
    params: {
      slug: slug.replace('.mdx', ''),
    },
  }));
  return paths;
}

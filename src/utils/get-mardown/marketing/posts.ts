import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// config
import { MARKETING_POSTS_DIRECTORY } from '../../../config';

// ----------------------------------------------------------------------

const slugs = fs.readdirSync(join(MARKETING_POSTS_DIRECTORY));

// ----------------------------------------------------------------------

export function getAllPosts() {
  const posts = slugs.map((slug) => {
    const fileContents = fs.readFileSync(join(MARKETING_POSTS_DIRECTORY, slug), 'utf-8');

    const { data: frontmatter } = matter(fileContents);

    return {
      slug: slug.replace('.md', ''),
      frontmatter,
    };
  });
  return posts;
}

// ----------------------------------------------------------------------

export function getPostData(slug: string) {
  const fileContents = fs.readFileSync(join(MARKETING_POSTS_DIRECTORY, slug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(fileContents);

  return {
    frontmatter,
    slug,
    content,
  };
}

// ----------------------------------------------------------------------

export function getAllPostSlugs() {
  const paths = slugs.map((slug) => ({
    params: {
      slug: slug.replace('.md', ''),
    },
  }));
  return paths;
}

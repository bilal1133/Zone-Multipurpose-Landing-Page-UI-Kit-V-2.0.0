import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// config
import { CASE_STUDIES_DIRECTORY } from '../../../config';

// ----------------------------------------------------------------------

const slugs = fs.readdirSync(join(CASE_STUDIES_DIRECTORY));

// ----------------------------------------------------------------------

export function getAllCaseStudies() {
  const caseStudies = slugs.map((slug) => {
    const fileContents = fs.readFileSync(join(CASE_STUDIES_DIRECTORY, slug), 'utf-8');

    const { data: frontmatter } = matter(fileContents);

    return {
      slug: slug.replace('.md', ''),
      frontmatter,
    };
  });
  return caseStudies;
}

// ----------------------------------------------------------------------

export function getCaseStudyData(slug: string) {
  const fileContents = fs.readFileSync(join(CASE_STUDIES_DIRECTORY, slug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(fileContents);

  return {
    frontmatter,
    slug,
    content,
  };
}

// ----------------------------------------------------------------------

export function getCaseStudiesSlugs() {
  const paths = slugs.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  return paths;
}

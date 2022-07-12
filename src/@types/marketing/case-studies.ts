import { MDXRemoteSerializeResult } from 'next-mdx-remote';
//
import { SocialLinks } from '../socials';

// ----------------------------------------------------------------------

export type CaseStudyFrontmatter = {
  title: string;
  description: string;
  category: string;
  coverImg: string;
  heroImg: string;
  createdAt: Date | string | number;
  galleryImgs: string[];
  website: string;
  socialLinks?: SocialLinks;
};

export type CaseStudyProps = {
  slug: string;
  content: MDXRemoteSerializeResult;
  frontmatter: CaseStudyFrontmatter;
};

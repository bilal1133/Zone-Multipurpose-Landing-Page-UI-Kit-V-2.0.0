import { MDXRemoteSerializeResult } from 'next-mdx-remote';
//
import { AuthorProps } from './author';
import { SocialLinks } from './socials';

// ----------------------------------------------------------------------

type PostFrontmatter = {
  title: string;
  description: string;
  category: string;
  coverImg: string;
  heroImg: string;
  createdAt: Date | string | number;
  duration: string;
  favorited: boolean;
  shareLinks?: SocialLinks;
  author: AuthorProps;
  tags: string[];
};

export type BlogPostProps = {
  slug: string;
  content: MDXRemoteSerializeResult;
  frontmatter: PostFrontmatter;
};

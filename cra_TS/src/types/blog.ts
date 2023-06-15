import { IAuthorProps } from './author';
import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IBlogTagsProps = {
  label: string;
  path: string;
};

export type IBlogCategoryProps = {
  label: string;
  path: string;
};

export type IBlogPostProps = {
  id: string;
  title: string;
  heroImg: string;
  category: string;
  coverImg: string;
  duration: string;
  favorited: boolean;
  description: string;
  author: IAuthorProps;
  tags?: IBlogTagsProps[];
  shareLinks?: ISocialLinks;
  createdAt: Date | string | number;
};

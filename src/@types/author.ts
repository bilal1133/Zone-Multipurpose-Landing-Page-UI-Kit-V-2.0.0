import { SocialLinks } from './socials';

// ----------------------------------------------------------------------

export type AuthorProps = {
  name: string;
  role: string;
  picture: string;
  about: string;
  quotes: string;
  phoneNumber: string;
  verified: boolean;
  ratings: number;
  reviews: number;
  socialLinks: SocialLinks;
};

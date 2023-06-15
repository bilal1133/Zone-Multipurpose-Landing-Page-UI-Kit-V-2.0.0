import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IAuthorProps = {
  name: string;
  role: string;
  picture: string;
  about: string;
  quotes: string;
  phoneNumber?: string;
  verified?: boolean;
  ratings?: number;
  reviews?: number;
  socialLinks?: ISocialLinks;
};

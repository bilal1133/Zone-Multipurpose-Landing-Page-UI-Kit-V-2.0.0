import { SocialLinks } from './socials';

// ----------------------------------------------------------------------

export type TeamMemberProps = {
  id: string;
  name: string;
  role: string;
  photo: string;
  socialLinks?: SocialLinks;
};

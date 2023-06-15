import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ITeamMemberProps = {
  id: string;
  name: string;
  role: string;
  photo: string;
  socialLinks?: ISocialLinks;
};

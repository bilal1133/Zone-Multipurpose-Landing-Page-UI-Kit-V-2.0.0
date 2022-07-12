import { SocialLinks } from '../socials';
import { OfficeMapProps, CountriesProps } from '../map';

// ----------------------------------------------------------------------

export type JobByCompanyProps = {
  id: string;
  companyLogo: string;
  companyName: string;
  totalJobs: number;
};

export type JobByCategoryProps = {
  id: string;
  name: string;
  icon: string;
  totalJobs: number;
};

export type JobByCountryProps = {
  id: string;
  location: string;
  coverImg: string;
  totalJobs: number;
};

export type JobProps = {
  id: string;
  companyLogo: string;
  companyName: string;
  level: string;
  type: string;
  salary: string | number;
  experience: string | number;
  isUrgent: boolean;
  category: string;
  content: string;
  views: number;
  createdAt: Date | string | number;
  deadline: Date | string | number;
  slug: string;
  location: string;
  otherBenefits: string[];
  skills: string[];
  favorited: boolean;
  locationMap: OfficeMapProps[];
  includes: {
    label: string;
    enabled: boolean;
  }[];
  languages: string[];
  shareLinks: SocialLinks;
};

export type JobFiltersProps = {
  filterKeyword: string | null;
  filterCategories: string | null;
  filterLocation: CountriesProps | null;
  filterType: string[];
  filterLevel: string[];
  filterBenefits: string[];
  filterSalary: number[];
};

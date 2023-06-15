import { IOfficeMapProps, ICountriesProps } from './contact';
import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IJobByCompanyProps = {
  id: string;
  companyLogo: string;
  companyName: string;
  totalJobs: number;
};

export type IJobByCategoryProps = {
  id: string;
  name: string;
  icon: string;
  totalJobs: number;
};

export type IJobByCountryProps = {
  id: string;
  location: string;
  coverImg: string;
  totalJobs: number;
};

export type IJobProps = {
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
  locationMap: IOfficeMapProps[];
  languages: string[];
  shareLinks: ISocialLinks;
};

export type IJobFiltersProps = {
  filterKeyword: string | null;
  filterCategories: string | null;
  filterLocation: ICountriesProps | null;
  filterType: string[];
  filterLevel: string[];
  filterBenefits: string[];
  filterSalary: number[];
};

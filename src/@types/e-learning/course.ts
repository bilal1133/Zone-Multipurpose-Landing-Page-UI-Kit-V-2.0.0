//
import { SocialLinks } from '../socials';
import { CountriesProps } from '../map';

// ----------------------------------------------------------------------

export type CourseTeacherProp = {
  id: string;
  name: string;
  role: string;
  ratings: number;
  picture: string;
  courses: number;
  reviews: number;
  students: number;
};

export type CourseLessonProp = {
  id: string;
  title: string;
  duration: number;
  videoPath: string;
  isUnLock: boolean;
  description: string;
};

export type CourseByCategoryProps = {
  id: string;
  name: string;
  students: number;
};

export type CourseProps = {
  id: string;
  slug: string;
  price: number;
  level: string;
  ratings: number;
  quizzes: number;
  reviews: number;
  coverImg: string;
  category: string;
  skills: string[];
  students: number;
  priceSale: number;
  resources: number;
  totalHours: number;
  description: string;
  bestSeller: boolean;
  languages: string[];
  learnList: string[];
  shareLinks: SocialLinks;
  lessons: CourseLessonProp[];
  teachers: CourseTeacherProp[];
  createdAt: Date | string | number;
};

export type CourseFiltersProps = {
  filterFee: string[];
  filterLevel: string[];
  filterDuration: string[];
  filterCategories: string[];
  filterRating: string | null;
  filterLanguage: CountriesProps[];
};

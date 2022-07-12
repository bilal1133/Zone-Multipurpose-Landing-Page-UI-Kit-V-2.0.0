import { sub } from 'date-fns';
//
import { role } from './role';
import { email } from './email';
import { video } from './video';
import { boolean } from './boolean';
import { company } from './company';
import { phoneNumber } from './phoneNumber';
import { firstName, lastName, fullName } from './name';
import { price, rating, age, percent } from './number';
import { fullAddress, country, countries } from './address';
import {
  jobTitle,
  tourName,
  sentence,
  blogTitle,
  brandsName,
  courseTitle,
  description,
  jobCategories,
} from './text';

// ----------------------------------------------------------------------

const _mock = {
  id: (index: number) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  email: (index: number) => email[index],
  phoneNumber: (index: number) => phoneNumber[index],
  time: (index: number) => sub(new Date(), { days: index, hours: index }),
  boolean: (index: number) => boolean[index],
  role: (index: number) => role[index],
  company: (index: number) => company[index],
  address: {
    fullAddress: (index: number) => fullAddress[index],
    country: (index: number) => country[index],
  },
  name: {
    firstName: (index: number) => firstName[index],
    lastName: (index: number) => lastName[index],
    fullName: (index: number) => fullName[index],
  },
  text: {
    blogTitle: (index: number) => blogTitle[index],
    courseTitle: (index: number) => courseTitle[index],
    jobTitle: (index: number) => jobTitle[index],
    jobCategories: (index: number) => jobCategories[index],
    tourName: (index: number) => tourName[index],
    brandsName: (index: number) => brandsName[index],
    sentence: (index: number) => sentence[index],
    description: (index: number) => description[index],
  },
  number: {
    percent: (index: number) => percent[index],
    rating: (index: number) => rating[index],
    age: (index: number) => age[index],
    price: (index: number) => price[index],
  },
  image: {
    avatar: (index: number) =>
      `https://zone-assets-api.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`,
    company: (index: number) =>
      `https://zone-assets-api.vercel.app/assets/images/companies/company_${index + 1}.png`,
    marketing: (index: number) =>
      `https://zone-assets-api.vercel.app/assets/images/marketing/marketing_${index + 1}.jpg`,
    //
    travel: (index: number) =>
      `https://zone-assets-api.vercel.app/assets/images/travel/travel_${index + 1}.jpg`,
    travelLarge: (index: number) =>
      `https://zone-assets-api.vercel.app/assets/images/travel/travel_hero_${index + 1}.jpg`,
    //
    career: (index: number) =>
      `https://zone-assets-api.vercel.app/assets/images/career/career_${index + 1}.jpg`,
    course: (index: number) =>
      `https://zone-assets-api.vercel.app/assets/images/e-learning/course_${index + 1}.jpg`,
  },
  video,
  countries,
  jobTitle,
  jobCategories,
  shareLinks: {
    facebook: `facebook/user-name`,
    instagram: `instagram/user-name`,
    linkedin: `linkedin/user-name`,
    twitter: `twitter/user-name`,
  },
};

export default _mock;

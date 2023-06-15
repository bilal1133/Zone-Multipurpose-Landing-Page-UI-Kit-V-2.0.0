import { sub } from 'date-fns';
//
import {
  role,
  email,
  video,
  boolean,
  company,
  phoneNumber,
  //
  firstName,
  lastName,
  fullName,
  //
  price,
  rating,
  age,
  percent,
  //
  fullAddress,
  country,
  //
  jobTitle,
  tourName,
  sentence,
  blogTitle,
  brandsName,
  courseTitle,
  description,
  jobCategories,
} from './assets';

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
    avatar: (index: number) => `/assets/images/avatar/avatar_${index + 1}.jpg`,
    company: (index: number) => `/assets/images/company/company_${index + 1}.png`,
    marketing: (index: number) => `/assets/images/marketing/marketing_${index + 1}.jpg`,
    travel: (index: number) => `/assets/images/travel/travel_${index + 1}.jpg`,
    career: (index: number) => `/assets/images/career/career_${index + 1}.jpg`,
    course: (index: number) => `/assets/images/course/course_${index + 1}.jpg`,
    product: (index: number) => `/assets/images/product/product_${index + 1}.png`,
  },
  video: (index: number) => video[index],
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

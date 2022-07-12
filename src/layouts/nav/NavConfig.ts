// routes
import Routes from '../../routes';
// _data
import { _tours, _jobs, _courses } from '../../../_data/mock';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'Marketing',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Landing', path: Routes.marketing.landing },
      { title: 'Services', path: Routes.marketing.services },
      { title: 'Case Studies', path: Routes.marketing.caseStudies },
      { title: 'Case Study', path: Routes.marketing.caseStudy('case-study-01') },
      { title: 'Blog Posts', path: Routes.marketing.posts },
      { title: 'Blog Post', path: Routes.marketing.post('post-01') },
      { title: 'About', path: Routes.marketing.about },
      { title: 'Contact', path: Routes.marketing.contact },
    ],
  },
  {
    order: '3',
    subheader: 'Career',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Landing', path: Routes.career.landing },
      { title: 'Jobs', path: Routes.career.jobs },
      { title: 'Job', path: Routes.career.job(_jobs[0].id) },
      { title: 'Blog Posts', path: Routes.career.posts },
      { title: 'Blog Post', path: Routes.career.post('post-01') },
      { title: 'About', path: Routes.career.about },
      { title: 'Contact', path: Routes.career.contact },
    ],
  },
  {
    order: '5',
    subheader: 'Common',
    items: [
      { title: 'Login', path: Routes.loginIllustration },
      { title: 'Login Cover', path: Routes.loginCover },
      { title: 'Register', path: Routes.registerIllustration },
      { title: 'Register Cover', path: Routes.registerCover },
      { title: 'Reset Password', path: Routes.resetPassword },
      { title: 'Verify Code', path: Routes.verifyCode },
      { title: '404 Error', path: Routes.page404 },
      { title: '500 Error', path: Routes.page500 },
      { title: 'Maintenance', path: Routes.maintenance },
      { title: 'ComingSoon', path: Routes.comingsoon },
      { title: 'Pricing 01', path: Routes.pricing01 },
      { title: 'Pricing 02', path: Routes.pricing02 },
      { title: 'Checkout', path: Routes.checkout },
      { title: 'Support', path: Routes.support },
    ],
  },
  {
    order: '4',
    subheader: 'E-Learning',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_course.jpg',
    items: [
      { title: 'Landing', path: Routes.eLearning.landing },
      { title: 'Courses', path: Routes.eLearning.courses },
      { title: 'Course', path: Routes.eLearning.course(_courses[0].id) },
      { title: 'Blog Posts', path: Routes.eLearning.posts },
      { title: 'Blog Post', path: Routes.eLearning.post('post-01') },
      { title: 'About', path: Routes.eLearning.about },
      { title: 'Contact', path: Routes.eLearning.contact },
    ],
  },
  {
    order: '2',
    subheader: 'Travel',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Landing', path: Routes.travel.landing },
      { title: 'Tours', path: Routes.travel.tours },
      { title: 'Tour', path: Routes.travel.tour(_tours[0].id) },
      { title: 'Checkout', path: Routes.travel.checkout },
      { title: 'Checkout Complete', path: Routes.travel.checkoutComplete },
      { title: 'Blog Posts', path: Routes.travel.posts },
      { title: 'Blog Post', path: Routes.travel.post('post-01') },
      { title: 'About', path: Routes.travel.about },
      { title: 'Contact', path: Routes.travel.contact },
    ],
  },
  {
    order: '6',
    subheader: 'Coming Soon',
    items: [
      { title: 'Item1', path: '' },
      { title: 'Item2', path: '' },
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'Components', path: Routes.componentsUI },
  {
    title: 'Pages',
    path: Routes.pages,
    children: [PageLinks[0], PageLinks[4], PageLinks[1], PageLinks[3], PageLinks[2], PageLinks[5]],
  },
  { title: 'Documentation', path: Routes.docs },
];

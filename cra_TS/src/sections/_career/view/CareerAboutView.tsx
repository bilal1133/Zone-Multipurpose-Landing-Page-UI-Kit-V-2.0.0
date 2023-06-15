// @mui
import { Divider } from '@mui/material';
// _mock
import { _blogCareerPosts, _testimonials, _members, _brandsColor } from 'src/_mock';
//
import TeamCareer from '../../team/career';
import NewsletterCareer from '../../newsletter/career';
import OurClientsCareer from '../../our-clients/career';
import { BlogCareerLatestPosts } from '../../blog/career';
import TestimonialCareer from '../../testimonial/career';
import { CareerAbout, CareerAboutOurVision } from '../about';

// ----------------------------------------------------------------------

export default function CareerAboutView() {
  return (
    <>
      <CareerAbout />

      <CareerAboutOurVision />

      <Divider orientation="vertical" sx={{ height: 80, width: 2, mx: 'auto' }} />

      <TeamCareer members={_members} />

      <TestimonialCareer testimonials={_testimonials} />

      <OurClientsCareer brands={_brandsColor} />

      <BlogCareerLatestPosts posts={_blogCareerPosts.slice(0, 5)} />

      <NewsletterCareer />
    </>
  );
}

// _mock
import { _blogTravelPosts, _testimonials, _members, _brands } from 'src/_mock';
//
import TeamTravel from '../../team/travel';
import NewsletterTravel from '../../newsletter/travel';
import OurClientsTravel from '../../our-clients/travel';
import { BlogTravelLatestPosts } from '../../blog/travel';
import TestimonialTravel from '../../testimonial/travel';
import { TravelAbout, TravelAboutOurMission } from '../about';

// ----------------------------------------------------------------------

export default function TravelAboutView() {
  return (
    <>
      <TravelAbout />

      <TravelAboutOurMission />

      <TeamTravel members={_members} />

      <TestimonialTravel testimonials={_testimonials} />

      <OurClientsTravel brands={_brands} />

      <BlogTravelLatestPosts posts={_blogTravelPosts.slice(0, 4)} />

      <NewsletterTravel />
    </>
  );
}

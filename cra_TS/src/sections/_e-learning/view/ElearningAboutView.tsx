// _mock
import { _blogCoursePosts, _testimonials, _members, _brandsColor } from 'src/_mock';
//
import { TeamElearningAbout } from '../../team/e-learning';
import NewsletterElearning from '../../newsletter/e-learning';
import OurClientsElearning from '../../our-clients/e-learning';
import { BlogElearningLatestPosts } from '../../blog/e-learning';
import TestimonialElearning from '../../testimonial/e-learning';
import { ElearningAbout, ElearningAboutHero, ElearningAboutCoreValues } from '../about';

// ----------------------------------------------------------------------

export default function ElearningAboutView() {
  return (
    <>
      <ElearningAboutHero />

      <ElearningAbout />

      <ElearningAboutCoreValues />

      <TeamElearningAbout members={_members} />

      <OurClientsElearning brands={_brandsColor} />

      <TestimonialElearning testimonials={_testimonials} />

      <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 4)} />

      <NewsletterElearning />
    </>
  );
}

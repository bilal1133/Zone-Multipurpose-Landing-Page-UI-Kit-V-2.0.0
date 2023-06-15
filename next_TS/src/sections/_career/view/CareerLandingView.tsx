// _mock
import {
  _jobs,
  _blogCareerPosts,
  _brandsColor,
  _testimonials,
  _jobsByCompanies,
  _jobsByCategories,
  _jobsByCountries,
} from 'src/_mock';
//
import NewsletterCareer from '../../newsletter/career';
import OurClientsCareer from '../../our-clients/career';
import { BlogCareerLatestPosts } from '../../blog/career';
import DownloadAppCareer from '../../download-app/career';
import TestimonialCareer from '../../testimonial/career';
import {
  CareerLandingHero,
  CareerLandingStep,
  CareerLandingFeaturedJobs,
  CareerLandingTopCompanies,
  CareerLandingConnections,
  CareerLandingHotCategories,
  CareerLandingForRecruiters,
} from '../landing';

// ----------------------------------------------------------------------

export default function CareerLandingView() {
  return (
    <>
      <CareerLandingHero />

      <CareerLandingStep />

      <CareerLandingFeaturedJobs jobs={_jobs.slice(-6)} />

      <CareerLandingTopCompanies companies={_jobsByCompanies} />

      <CareerLandingHotCategories categories={_jobsByCategories} />

      <CareerLandingConnections countries={_jobsByCountries} />

      <CareerLandingForRecruiters />

      <TestimonialCareer testimonials={_testimonials} />

      <OurClientsCareer brands={_brandsColor} />

      <BlogCareerLatestPosts posts={_blogCareerPosts.slice(0, 5)} />

      <DownloadAppCareer />

      <NewsletterCareer />
    </>
  );
}

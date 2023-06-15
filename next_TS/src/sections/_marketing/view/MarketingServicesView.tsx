// _mock
import { _blogMarketingPosts, _testimonials } from 'src/_mock';
//
import NewsletterMarketing from '../../newsletter/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import {
  MarketingServices,
  MarketingServicesHero,
  MarketingServicesInclude,
  MarketingServicesBenefits,
  MarketingServicesHowItWork,
} from '../services';

// ----------------------------------------------------------------------

export default function MarketingServicesView() {
  return (
    <>
      <MarketingServicesHero />

      <MarketingServices />

      <MarketingServicesInclude />

      <MarketingServicesBenefits />

      <MarketingServicesHowItWork />

      <TestimonialMarketing testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_blogMarketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}

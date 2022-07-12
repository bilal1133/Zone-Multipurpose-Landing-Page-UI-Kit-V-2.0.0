import { ReactElement } from 'react';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/marketing/posts';
import { getAllCaseStudies } from '../../src/utils/get-mardown/marketing/case-studies';
// @types
import { BlogPostProps } from '../../src/@types/blog';
import { CaseStudyProps } from '../../src/@types/marketing';
// _data
import { _testimonials, _brands, _members, _pricingMarketing } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { PricingMarketing } from '../../src/sections/pricing';
import { TeamMarketingLangding } from '../../src/sections/team';
import { BlogMarketingLatestPosts } from '../../src/sections/blog';
import { NewsletterMarketing } from '../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../src/sections/testimonials';
import { OurClientsMarketingLanding } from '../../src/sections/our-clients';
import {
  MarketingFaqs,
  MarketingFreeSEO,
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingProcess,
  MarketingLandingServices,
  MarketingLandingCaseStudies,
} from '../../src/sections/@marketing';

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
  caseStudies: CaseStudyProps[];
};

export default function MarketingLandingPage({ posts, caseStudies }: Props) {
  return (
    <Page title="Landing - Marketing">
      <MarketingLandingHero />

      <OurClientsMarketingLanding brands={_brands} />

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingProcess />

      <MarketingLandingCaseStudies caseStudies={caseStudies.slice(-6)} />

      <TeamMarketingLangding members={_members} />

      <PricingMarketing plans={_pricingMarketing} />

      <MarketingFaqs />

      <TestimonialsMarketing testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={posts.slice(0, 4)} />

      <MarketingFreeSEO />

      <NewsletterMarketing />
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingLandingPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
      caseStudies: getAllCaseStudies(),
    },
  };
}

import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/marketing/posts';
// @types
import { BlogPostProps } from '../../src/@types/blog';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { NewsletterMarketing } from '../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../src/sections/testimonials';
import { BlogMarketingLatestPosts } from '../../src/sections/blog';
import {
  MarketingFreeSEO,
  MarketingServices,
  MarketingServicesHero,
  MarketingServicesInclude,
  MarketingServicesHowItWork,
  MarketingServicesBenefits,
} from '../../src/sections/@marketing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
};

export default function MarketingServicesPage({ posts }: Props) {
  return (
    <Page title="Services - Marketing">
      <RootStyle>
        <MarketingServicesHero />

        <MarketingServices />

        <MarketingServicesInclude />

        <MarketingServicesBenefits />

        <MarketingServicesHowItWork />

        <TestimonialsMarketing testimonials={_testimonials} />

        <BlogMarketingLatestPosts posts={posts.slice(0, 4)} />

        <MarketingFreeSEO />

        <NewsletterMarketing />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingServicesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}

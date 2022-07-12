import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// _data
import { _testimonials, _members, _brandsColor } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { TeamMarketingAbout } from '../../src/sections/team';
import { NewsletterMarketing } from '../../src/sections/newsletter';
import { OurClientsMarketingAbout } from '../../src/sections/our-clients';
import { TestimonialsMarketing } from '../../src/sections/testimonials';
import {
  MarketingFaqs,
  MarketingAbout,
  MarketingFreeSEO,
  MarketingAboutStory,
  MarketingAboutOurVision,
  MarketingAboutCoreValues,
} from '../../src/sections/@marketing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutUsPage() {
  return (
    <Page title="About Us - Marketing">
      <RootStyle>
        <MarketingAbout />

        <MarketingAboutOurVision />

        <MarketingAboutCoreValues />

        <MarketingAboutStory />

        <TeamMarketingAbout members={_members} />

        <TestimonialsMarketing testimonials={_testimonials} />

        <OurClientsMarketingAbout brands={_brandsColor} />

        <MarketingFaqs />

        <MarketingFreeSEO />

        <NewsletterMarketing />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingAboutUsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

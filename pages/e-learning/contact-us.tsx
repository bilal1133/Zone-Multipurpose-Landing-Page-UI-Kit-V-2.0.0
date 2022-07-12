import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { NewsletterElearning } from '../../src/sections/newsletter';
import { ElearningContactInfo, ElearningContactForm } from '../../src/sections/@e-learning';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function ElearningContactUsPage() {
  return (
    <Page title="Contact Us - E-Learning">
      <RootStyle>
        <ElearningContactInfo />

        <ElearningContactForm />

        <NewsletterElearning />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ElearningContactUsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

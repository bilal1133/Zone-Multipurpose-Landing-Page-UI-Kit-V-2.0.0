import { ReactElement } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Stack } from '@mui/material';
// layouts
import Layout from '../src/layouts';
// components
import { Page, Image } from '../src/components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(15, 2.5),
  [theme.breakpoints.up('sm')]: {
    height: '100vh',
  },
}));

// ----------------------------------------------------------------------

export default function MaintenancePage() {
  return (
    <Page title="Maintenance">
      <RootStyle>
        <Stack alignItems="center" sx={{ maxWidth: 480 }}>
          <Typography variant="h3" paragraph>
            Website Currently Under Maintenance
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            We are currently working hard on this page!
          </Typography>

          <Image
            alt="maintenance"
            src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_maintenance.svg"
            sx={{ maxWidth: 320, my: { xs: 6, sm: 8 } }}
          />

          <NextLink href="/" passHref>
            <Button size="large" variant="contained">
              Go to Home
            </Button>
          </NextLink>
        </Stack>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MaintenancePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};

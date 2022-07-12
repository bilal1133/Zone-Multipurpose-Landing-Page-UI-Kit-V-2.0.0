import { ReactElement } from 'react';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Button, Typography } from '@mui/material';
// layouts
import Layout from '../src/layouts';
// components
import { Page, Image } from '../src/components';
import { MotionContainer, varBounce } from '../src/components/animate';

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

export default function PageNotFound() {
  return (
    <MotionContainer>
      <Page title="404 Page Not Found">
        <RootStyle>
          <Stack alignItems="center" sx={{ maxWidth: 480 }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                Page Not Found!
              </Typography>
            </m.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography>

            <m.div variants={varBounce().in}>
              <Image
                alt="404"
                src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_404.svg"
                sx={{ maxWidth: 320, my: { xs: 6, sm: 8 } }}
              />
            </m.div>

            <NextLink href="/" passHref>
              <Button size="large" variant="contained">
                Go to Home
              </Button>
            </NextLink>
          </Stack>
        </RootStyle>
      </Page>
    </MotionContainer>
  );
}

// ----------------------------------------------------------------------

PageNotFound.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};

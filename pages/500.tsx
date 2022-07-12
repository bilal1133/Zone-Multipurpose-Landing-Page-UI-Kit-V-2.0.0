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

export default function Page500() {
  return (
    <MotionContainer>
      <Page title="500 Internal Server Error">
        <RootStyle>
          <Stack alignItems="center" sx={{ maxWidth: 480 }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                500 Internal Server Error
              </Typography>
            </m.div>
            <Typography sx={{ color: 'text.secondary' }}>
              There was an error, please try again later.
            </Typography>

            <m.div variants={varBounce().in}>
              <Image
                alt="500"
                src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_500.svg"
                sx={{
                  maxWidth: 320,
                  my: { xs: 6, sm: 8 },
                }}
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

Page500.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};

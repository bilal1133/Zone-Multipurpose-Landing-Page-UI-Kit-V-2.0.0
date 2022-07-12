import { ReactElement } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Stack, Divider, Container, Typography } from '@mui/material';
// routes
import Routes from '../../src/routes';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, Image } from '../../src/components';
import { AuthWithSocial, LoginForm } from '../../src/sections/auth';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(22, 0),
  },
}));

// ----------------------------------------------------------------------

export default function LoginIllustrationPage() {
  return (
    <Page title="Login Illustration">
      <RootStyle>
        <Container>
          <Grid container spacing={5} justifyContent="space-between">
            <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Image
                alt="login"
                src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_login.svg"
              />
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
              <Stack
                spacing={4}
                sx={{
                  p: 4,
                  textAlign: { xs: 'center', md: 'left' },
                  borderRadius: 2,
                  boxShadow: (theme) => theme.customShadows.z24,
                }}
              >
                <div>
                  <Typography variant="h3" paragraph>
                    Login
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Don’t have an account?
                    <NextLink href={Routes.registerIllustration} passHref>
                      <Link variant="subtitle2" color="primary">
                        {''} Get started
                      </Link>
                    </NextLink>
                  </Typography>
                </div>

                <LoginForm />

                <Divider sx={{ '& .MuiDivider-wrapper': { flexShrink: 0 } }}>
                  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                    or continue with
                  </Typography>
                </Divider>

                <AuthWithSocial />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

LoginIllustrationPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};

// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, Divider, Typography } from '@mui/material';
// routes
import Routes from '../../src/routes';
// components
import { Page } from '../../src/components';
import { Logo } from '../../src/components';
import { AuthWithSocial, AuthCarousel, RegisterForm } from '../../src/sections/auth';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    overflow: 'hidden',
    height: '100vh',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(5, 2.5),
  [theme.breakpoints.up('md')]: {
    maxWidth: 480,
    padding: theme.spacing(8, 10),
  },
}));

// ----------------------------------------------------------------------

export default function RegisterCoverPage() {
  return (
    <Page title="Register Cover">
      <RootStyle>
        <ContentStyle>
          <Logo sx={{ display: { xs: 'block', md: 'inline-block' } }} />

          <Stack
            sx={{
              pb: 5,
              pt: { xs: 5, md: 10 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h3" paragraph>
              Get Started
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Already have an account?
              <NextLink href={Routes.loginCover} passHref>
                <Link variant="subtitle2" color="primary">
                  {''} Login
                </Link>
              </NextLink>
            </Typography>
          </Stack>

          <AuthWithSocial />

          <Divider sx={{ py: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
              OR
            </Typography>
          </Divider>

          <RegisterForm />
        </ContentStyle>

        <AuthCarousel title={`Manage The Job \n More Effectively`} />
      </RootStyle>
    </Page>
  );
}

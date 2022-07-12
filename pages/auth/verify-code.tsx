import { ReactElement } from 'react';
// next
import NextLink from 'next/link';
// icons
import chevronLeft from '@iconify/icons-carbon/chevron-left';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Typography } from '@mui/material';
// routes
import Routes from '../../src/routes';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, Iconify, Image } from '../../src/components';
// sections
import { VerifyCodeForm } from '../../src/sections/auth';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  padding: theme.spacing(20, 2.5),
  [theme.breakpoints.up('sm')]: {
    height: '100vh',
  },
}));

// ----------------------------------------------------------------------

export default function VerifyCodePage() {
  return (
    <Page title="Verify Code">
      <RootStyle>
        <NextLink href={Routes.loginCover} passHref>
          <Button
            color="inherit"
            startIcon={<Iconify icon={chevronLeft} sx={{ width: 16, height: 16 }} />}
            sx={{
              zIndex: 9,
              position: 'absolute',
              top: { xs: 80, sm: 120 },
              left: { xs: 8, sm: 24 },
            }}
          >
            Back
          </Button>
        </NextLink>

        <Box sx={{ maxWidth: 480 }}>
          <Image
            alt="email inbox"
            src="https://zone-assets-api.vercel.app/assets/icons/ic_email_inbox.svg"
            sx={{ mb: 5, width: 96, height: 96, mx: 'auto' }}
          />

          <Typography variant="h3" paragraph>
            Check Your Email
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            We have emailed a 6-digit confirmation code to acb@domain, please enter the code in
            below box to verify your email.
          </Typography>

          <VerifyCodeForm />

          <Typography variant="body2" align="center">
            Don’t have a code? {''}
            <Link variant="subtitle2" underline="none" onClick={() => {}}>
              Resend code
            </Link>
          </Typography>
        </Box>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

VerifyCodePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};

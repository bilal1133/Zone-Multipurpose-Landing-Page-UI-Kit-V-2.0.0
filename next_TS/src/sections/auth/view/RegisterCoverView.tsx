// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Typography, Box } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Logo from 'src/components/logo';
//
import { AuthWithSocial, AuthCarousel, AuthRegisterForm } from '../components';

// ----------------------------------------------------------------------

export default function RegisterCoverView() {
  return (
    <Stack direction="row" sx={{ minHeight: 1 }}>
      <Box
        sx={{
          width: { xs: 1, md: 480 },
          p: (theme) => ({
            xs: theme.spacing(5, 2),
            md: theme.spacing(8, 10),
          }),
        }}
      >
        <Logo />

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
            {`Already have an account? `}
            <Link component={NextLink} href={paths.loginCover} variant="subtitle2" color="primary">
              Login
            </Link>
          </Typography>
        </Stack>

        <AuthWithSocial />

        <Divider sx={{ py: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            OR
          </Typography>
        </Divider>

        <AuthRegisterForm />
      </Box>

      <AuthCarousel
        title={`Manage The Job \n More Effectively`}
        images={[
          '/assets/images/travel/travel_post_01.jpg',
          '/assets/images/travel/travel_post_03.jpg',
        ]}
      />
    </Stack>
  );
}

// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/image';
//
import { AuthWithSocial, AuthRegisterForm } from '../components';

// ----------------------------------------------------------------------

export default function RegisterIllustrationView() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pb: 10,
        minHeight: 1,
        pt: { xs: 12, md: 21 },
      }}
    >
      <Grid container spacing={5} justifyContent="space-between">
        {isMdUp && (
          <Grid xs={12} md={7}>
            <Image
              visibleByDefault
              disabledEffect
              alt="register"
              src="/assets/illustrations/illustration_login.svg"
            />
          </Grid>
        )}

        <Grid xs={12} md={5} lg={4}>
          <Stack
            spacing={4}
            sx={{
              p: 4,
              borderRadius: 2,
              textAlign: { xs: 'center', md: 'left' },
              boxShadow: (theme) => theme.customShadows.z24,
            }}
          >
            <div>
              <Typography variant="h3" paragraph>
                Get Started
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`Already have an account? `}
                <Link
                  component={NextLink}
                  href={paths.loginIllustration}
                  variant="subtitle2"
                  color="primary"
                >
                  Login
                </Link>
              </Typography>
            </div>

            <AuthRegisterForm />

            <Divider>
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                or continue with
              </Typography>
            </Divider>

            <AuthWithSocial />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

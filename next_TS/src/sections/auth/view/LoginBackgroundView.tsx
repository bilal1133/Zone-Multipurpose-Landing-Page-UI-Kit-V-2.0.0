// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, Divider, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// routes
import { paths } from 'src/routes/paths';
// utils
import { bgGradient } from 'src/utils/cssStyles';
//
import { AuthWithSocial, AuthLoginForm } from '../components';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 2),
}));

// ----------------------------------------------------------------------

export default function LoginBackgroundView() {
  return (
    <StyledRoot>
      <Stack
        spacing={4}
        sx={{
          p: 4,
          width: 1,
          mx: 'auto',
          flexShrink: 0,
          maxWidth: 400,
          borderRadius: 2,
          bgcolor: 'background.default',
          textAlign: { xs: 'center', md: 'left' },
          boxShadow: (theme) => theme.customShadows.z24,
        }}
      >
        <div>
          <Typography variant="h3" paragraph>
            Login
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`Don’t have an account? `}
            <Link
              component={NextLink}
              href={paths.registerBackground}
              variant="subtitle2"
              color="primary"
            >
              Get started
            </Link>
          </Typography>
        </div>

        <AuthLoginForm />

        <Divider>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            or continue with
          </Typography>
        </Divider>

        <AuthWithSocial />
      </Stack>
    </StyledRoot>
  );
}

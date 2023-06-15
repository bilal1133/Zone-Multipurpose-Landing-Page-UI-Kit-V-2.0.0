import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Typography } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
//
import { AuthResetPasswordForm } from '../components';

// ----------------------------------------------------------------------

export default function ResetPasswordView() {
  return (
    <>
      <Image
        alt="reset password"
        src="/assets/icons/ic_lock_password.svg"
        sx={{ mb: 5, width: 96, height: 96, mx: 'auto' }}
      />

      <Typography variant="h3" paragraph>
        Forgot Your Password?
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
        Please enter the email address associated with your account and We will email you a link to
        reset your password.
      </Typography>

      <AuthResetPasswordForm />

      <Link
        component={RouterLink}
        to={paths.loginCover}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: 'auto',
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify icon="carbon:chevron-left" width={16} sx={{ mr: 1 }} />
        Return to sign in
      </Link>
    </>
  );
}

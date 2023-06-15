import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Typography } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
//
import { AuthVerifyCodeForm } from '../components';

// ----------------------------------------------------------------------

export default function VerifyCodeView() {
  return (
    <>
      <Image
        alt="email inbox"
        src="/assets/icons/ic_email_inbox.svg"
        sx={{ mb: 5, width: 96, height: 96, mx: 'auto' }}
      />

      <Typography variant="h3">Check Your Email</Typography>

      <Typography variant="body2" sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
        We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below
        box to verify your email.
      </Typography>

      <AuthVerifyCodeForm />

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        {`Don’t have a code? `}
        <Link variant="subtitle2" underline="none">
          Resend code
        </Link>
      </Typography>

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

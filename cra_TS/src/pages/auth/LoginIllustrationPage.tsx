import { Helmet } from 'react-helmet-async';
// sections
import { LoginIllustrationView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

export default function LoginIllustrationPage() {
  return (
    <>
      <Helmet>
        <title>Login Illustration | ZONE UI</title>
      </Helmet>

      <LoginIllustrationView />
    </>
  );
}

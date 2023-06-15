import { Helmet } from 'react-helmet-async';
// sections
import { RegisterIllustrationView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

export default function RegisterIllustrationPage() {
  return (
    <>
      <Helmet>
        <title>Register Illustration | ZONE UI</title>
      </Helmet>

      <RegisterIllustrationView />
    </>
  );
}

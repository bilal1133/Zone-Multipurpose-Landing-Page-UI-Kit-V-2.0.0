import { Helmet } from 'react-helmet-async';
// sections
import { LoginCoverView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

export default function LoginCoverPage() {
  return (
    <>
      <Helmet>
        <title>Login Cover | ZONE UI</title>
      </Helmet>

      <LoginCoverView />
    </>
  );
}

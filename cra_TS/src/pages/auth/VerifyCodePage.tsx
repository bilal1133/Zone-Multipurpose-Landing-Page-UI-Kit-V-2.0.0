import { Helmet } from 'react-helmet-async';
// sections
import { VerifyCodeView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

export default function VerifyCodePage() {
  return (
    <>
      <Helmet>
        <title>Verify Code | ZONE UI</title>
      </Helmet>

      <VerifyCodeView />
    </>
  );
}

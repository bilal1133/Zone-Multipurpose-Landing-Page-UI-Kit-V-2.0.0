// next
import Head from 'next/head';
// layouts
import CompactLayout from 'src/layouts/compact';
// sections
import { VerifyCodeView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

VerifyCodePage.getLayout = (page: React.ReactElement) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function VerifyCodePage() {
  return (
    <>
      <Head>
        <title>Verify Code | ZONE UI</title>
      </Head>

      <VerifyCodeView />
    </>
  );
}

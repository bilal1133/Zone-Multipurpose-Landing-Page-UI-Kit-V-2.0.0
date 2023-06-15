// next
import Head from 'next/head';
// layouts
import SimpleLayout from 'src/layouts/simple';
// sections
import { LoginIllustrationView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

LoginIllustrationPage.getLayout = (page: React.ReactElement) => <SimpleLayout>{page}</SimpleLayout>;

// ----------------------------------------------------------------------

export default function LoginIllustrationPage() {
  return (
    <>
      <Head>
        <title>Login Illustration | ZONE UI</title>
      </Head>

      <LoginIllustrationView />
    </>
  );
}

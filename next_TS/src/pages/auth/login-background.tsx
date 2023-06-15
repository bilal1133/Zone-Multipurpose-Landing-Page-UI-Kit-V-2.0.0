// next
import Head from 'next/head';
// layouts
import SimpleLayout from 'src/layouts/simple';
// sections
import { LoginBackgroundView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

LoginBackgroundPage.getLayout = (page: React.ReactElement) => <SimpleLayout>{page}</SimpleLayout>;

// ----------------------------------------------------------------------

export default function LoginBackgroundPage() {
  return (
    <>
      <Head>
        <title>Login Background | ZONE UI</title>
      </Head>

      <LoginBackgroundView />
    </>
  );
}

// next
import Head from 'next/head';
// layouts
import SimpleLayout from 'src/layouts/simple';
// sections
import { RegisterIllustrationView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

RegisterIllustrationPage.getLayout = (page: React.ReactElement) => (
  <SimpleLayout>{page}</SimpleLayout>
);

// ----------------------------------------------------------------------

export default function RegisterIllustrationPage() {
  return (
    <>
      <Head>
        <title>Register Illustration | ZONE UI</title>
      </Head>

      <RegisterIllustrationView />
    </>
  );
}

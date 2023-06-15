// next
import Head from 'next/head';
// layouts
import SimpleLayout from 'src/layouts/simple';
// sections
import { RegisterBackgroundView } from 'src/sections/auth/view';

// ----------------------------------------------------------------------

RegisterBackgroundPage.getLayout = (page: React.ReactElement) => (
  <SimpleLayout>{page}</SimpleLayout>
);

// ----------------------------------------------------------------------

export default function RegisterBackgroundPage() {
  return (
    <>
      <Head>
        <title>Register Background | ZONE UI</title>
      </Head>

      <RegisterBackgroundView />
    </>
  );
}

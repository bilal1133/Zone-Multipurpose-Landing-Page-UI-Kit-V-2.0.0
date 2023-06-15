// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CareerLandingView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

CareerLandingPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerLandingPage() {
  return (
    <>
      <Head>
        <title>Landing | ZONE UI</title>
      </Head>

      <CareerLandingView />
    </>
  );
}

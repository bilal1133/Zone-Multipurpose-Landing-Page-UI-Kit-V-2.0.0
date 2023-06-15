// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { TravelLandingView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

TravelLandingPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function TravelLandingPage() {
  return (
    <>
      <Head>
        <title>Landing | ZONE UI</title>
      </Head>

      <TravelLandingView />
    </>
  );
}

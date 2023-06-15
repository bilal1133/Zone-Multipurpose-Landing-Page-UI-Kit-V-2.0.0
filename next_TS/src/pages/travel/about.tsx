// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { TravelAboutView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

TravelAboutPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function TravelAboutPage() {
  return (
    <>
      <Head>
        <title>About Us | ZONE UI</title>
      </Head>

      <TravelAboutView />
    </>
  );
}

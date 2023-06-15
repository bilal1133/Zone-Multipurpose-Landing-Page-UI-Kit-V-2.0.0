// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { TravelToursView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

TravelToursPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function TravelToursPage() {
  return (
    <>
      <Head>
        <title>Tours | ZONE UI</title>
      </Head>

      <TravelToursView />
    </>
  );
}

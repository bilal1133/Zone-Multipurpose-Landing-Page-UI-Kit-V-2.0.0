// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { TravelPostView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

TravelPostPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function TravelPostPage() {
  return (
    <>
      <Head>
        <title>The A-Z Of Event Post | ZONE UI</title>
      </Head>

      <TravelPostView />
    </>
  );
}

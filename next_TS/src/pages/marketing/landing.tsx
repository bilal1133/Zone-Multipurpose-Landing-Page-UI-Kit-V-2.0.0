// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingLandingView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingLandingPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingLandingPage() {
  return (
    <>
      <Head>
        <title>Landing | ZONE UI</title>
      </Head>

      <MarketingLandingView />
    </>
  );
}

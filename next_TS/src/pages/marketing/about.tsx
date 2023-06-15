// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingAboutView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingAboutPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingAboutPage() {
  return (
    <>
      <Head>
        <title>About Us | ZONE UI</title>
      </Head>

      <MarketingAboutView />
    </>
  );
}

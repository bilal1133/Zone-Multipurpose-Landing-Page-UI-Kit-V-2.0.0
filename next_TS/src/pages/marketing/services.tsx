// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingServicesView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingServicesPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingServicesPage() {
  return (
    <>
      <Head>
        <title>Services | ZONE UI</title>
      </Head>

      <MarketingServicesView />
    </>
  );
}

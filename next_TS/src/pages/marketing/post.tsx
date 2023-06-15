// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingPostView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingPostPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingPostPage() {
  return (
    <>
      <Head>
        <title>The A-Z Of Event Post | ZONE UI</title>
      </Head>

      <MarketingPostView />
    </>
  );
}

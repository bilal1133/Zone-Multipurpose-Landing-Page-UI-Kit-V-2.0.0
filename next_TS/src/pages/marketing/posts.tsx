// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingBlogView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingBlogPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingBlogPage() {
  return (
    <>
      <Head>
        <title>Blog | ZONE UI</title>
      </Head>

      <MarketingBlogView />
    </>
  );
}

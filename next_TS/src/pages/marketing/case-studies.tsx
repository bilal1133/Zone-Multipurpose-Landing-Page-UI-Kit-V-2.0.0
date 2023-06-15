// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingCaseStudiesView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingCaseStudiesPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | ZONE UI</title>
      </Head>

      <MarketingCaseStudiesView />
    </>
  );
}

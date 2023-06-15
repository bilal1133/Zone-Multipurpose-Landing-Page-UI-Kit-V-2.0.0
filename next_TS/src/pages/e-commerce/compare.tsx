// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceCompareView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceComparePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function EcommerceComparePage() {
  return (
    <>
      <Head>
        <title>Compare | ZONE UI</title>
      </Head>

      <EcommerceCompareView />
    </>
  );
}

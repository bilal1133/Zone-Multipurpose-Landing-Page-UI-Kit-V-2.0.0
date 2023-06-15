// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceOrderCompletedView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceOrderCompletedPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function EcommerceOrderCompletedPage() {
  return (
    <>
      <Head>
        <title>Order Completed | ZONE UI</title>
      </Head>

      <EcommerceOrderCompletedView />
    </>
  );
}

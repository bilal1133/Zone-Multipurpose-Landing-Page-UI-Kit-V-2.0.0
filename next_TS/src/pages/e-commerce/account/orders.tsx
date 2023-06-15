// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceAccountOrdersView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceAccountOrdersPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function EcommerceAccountOrdersPage() {
  return (
    <>
      <Head>
        <title>Account: Orders | ZONE UI</title>
      </Head>

      <EcommerceAccountOrdersView />
    </>
  );
}

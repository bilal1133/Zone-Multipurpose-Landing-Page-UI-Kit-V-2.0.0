// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceProductsView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceProductsPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function EcommerceProductsPage() {
  return (
    <>
      <Head>
        <title>Products | ZONE UI</title>
      </Head>

      <EcommerceProductsView />
    </>
  );
}

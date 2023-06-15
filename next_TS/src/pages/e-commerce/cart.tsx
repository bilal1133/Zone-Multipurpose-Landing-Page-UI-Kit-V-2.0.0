// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceCartView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceCartPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function EcommerceCartPage() {
  return (
    <>
      <Head>
        <title>Cart | ZONE UI</title>
      </Head>

      <EcommerceCartView />
    </>
  );
}

// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceAccountPaymentView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceAccountPaymentPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function EcommerceAccountPaymentPage() {
  return (
    <>
      <Head>
        <title>Account: Payment | ZONE UI</title>
      </Head>

      <EcommerceAccountPaymentView />
    </>
  );
}

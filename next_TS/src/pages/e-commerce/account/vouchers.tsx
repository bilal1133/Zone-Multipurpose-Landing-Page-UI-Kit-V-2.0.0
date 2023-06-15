// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceAccountVouchersView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceAccountVouchersPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function EcommerceAccountVouchersPage() {
  return (
    <>
      <Head>
        <title>Account: Vouchers | ZONE UI</title>
      </Head>

      <EcommerceAccountVouchersView />
    </>
  );
}

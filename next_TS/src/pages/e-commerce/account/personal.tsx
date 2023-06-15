// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceAccountPersonalView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceAccountPersonalPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function EcommerceAccountPersonalPage() {
  return (
    <>
      <Head>
        <title>Account: Personal | ZONE UI</title>
      </Head>

      <EcommerceAccountPersonalView />
    </>
  );
}

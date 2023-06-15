// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceProductView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceProductPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function EcommerceProductPage() {
  return (
    <>
      <Head>
        <title>Apple iPhone | ZONE UI</title>
      </Head>

      <EcommerceProductView />
    </>
  );
}

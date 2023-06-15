// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { TravelCheckoutView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

TravelCheckoutPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function TravelCheckoutPage() {
  return (
    <>
      <Head>
        <title>Checkout | ZONE UI</title>
      </Head>

      <TravelCheckoutView />
    </>
  );
}

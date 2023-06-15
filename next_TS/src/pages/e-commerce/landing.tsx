// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceLandingView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceLandingPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function EcommerceLandingPage() {
  return (
    <>
      <Head>
        <title>Landing | ZONE UI</title>
      </Head>

      <EcommerceLandingView />
    </>
  );
}

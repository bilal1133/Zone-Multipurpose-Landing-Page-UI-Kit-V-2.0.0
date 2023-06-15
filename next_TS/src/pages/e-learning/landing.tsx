// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { ElearningLandingView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

ElearningLandingPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ElearningLandingPage() {
  return (
    <>
      <Head>
        <title>Landing | ZONE UI</title>
      </Head>

      <ElearningLandingView />
    </>
  );
}

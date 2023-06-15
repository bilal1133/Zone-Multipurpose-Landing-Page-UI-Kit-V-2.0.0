// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { ElearningAboutView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

ElearningAboutPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ElearningAboutPage() {
  return (
    <>
      <Head>
        <title>About Us | ZONE UI</title>
      </Head>

      <ElearningAboutView />
    </>
  );
}

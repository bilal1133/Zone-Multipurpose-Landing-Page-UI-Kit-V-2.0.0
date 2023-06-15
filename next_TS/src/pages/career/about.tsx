// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CareerAboutView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

CareerAboutPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerAboutPage() {
  return (
    <>
      <Head>
        <title>About Us | ZONE UI</title>
      </Head>

      <CareerAboutView />
    </>
  );
}

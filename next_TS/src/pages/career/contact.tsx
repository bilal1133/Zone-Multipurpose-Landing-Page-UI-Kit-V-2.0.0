// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CareerContactView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

CareerContactPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | ZONE UI</title>
      </Head>

      <CareerContactView />
    </>
  );
}

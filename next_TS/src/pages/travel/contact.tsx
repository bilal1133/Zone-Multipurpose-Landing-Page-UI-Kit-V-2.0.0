// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { TravelContactView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

TravelContactPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function TravelContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | ZONE UI</title>
      </Head>

      <TravelContactView />
    </>
  );
}

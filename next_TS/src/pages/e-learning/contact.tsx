// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { ElearningContactView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

ElearningContactPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ElearningContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | ZONE UI</title>
      </Head>

      <ElearningContactView />
    </>
  );
}

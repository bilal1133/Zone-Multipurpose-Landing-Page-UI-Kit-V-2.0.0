// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CareerPostView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

CareerPostPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerPostPage() {
  return (
    <>
      <Head>
        <title>The A-Z Of Event Post | ZONE UI</title>
      </Head>

      <CareerPostView />
    </>
  );
}

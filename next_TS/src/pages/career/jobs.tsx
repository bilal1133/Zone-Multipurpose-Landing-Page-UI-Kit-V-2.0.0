// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CareerJobsView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

CareerJobsPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerJobsPage() {
  return (
    <>
      <Head>
        <title>Jobs | ZONE UI</title>
      </Head>

      <CareerJobsView />
    </>
  );
}

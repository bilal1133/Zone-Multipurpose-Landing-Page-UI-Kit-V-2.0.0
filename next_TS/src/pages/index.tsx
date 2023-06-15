// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import HomeView from 'src/sections/_home/view';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>The starting point for your next project | ZONE UI</title>
      </Head>

      <HomeView />
    </>
  );
}

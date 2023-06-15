// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { TravelBlogView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

TravelBlogPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function TravelBlogPage() {
  return (
    <>
      <Head>
        <title>Blog | ZONE UI</title>
      </Head>

      <TravelBlogView />
    </>
  );
}

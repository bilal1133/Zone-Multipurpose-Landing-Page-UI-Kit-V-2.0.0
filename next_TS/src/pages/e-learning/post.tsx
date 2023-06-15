// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { ElearningPostView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

ElearningPostPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ElearningPostPage() {
  return (
    <>
      <Head>
        <title>The A-Z Of Event Post | ZONE UI</title>
      </Head>

      <ElearningPostView />
    </>
  );
}

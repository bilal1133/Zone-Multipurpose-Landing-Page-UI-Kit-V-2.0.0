// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { SupportView } from 'src/sections/support/view';

// ----------------------------------------------------------------------

SupportPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support | ZONE UI</title>
      </Head>

      <SupportView />
    </>
  );
}

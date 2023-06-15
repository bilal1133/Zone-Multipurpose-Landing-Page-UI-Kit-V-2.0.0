// next
import Head from 'next/head';
// layouts
import CompactLayout from 'src/layouts/compact';
// sections
import { Error404View } from 'src/sections/error/view';

// ----------------------------------------------------------------------

Page404.getLayout = (page: React.ReactElement) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Head>
        <title>404 Page Not Found | ZONE UI</title>
      </Head>

      <Error404View />
    </>
  );
}

// next
import Head from 'next/head';
// layouts
import CompactLayout from 'src/layouts/compact';
// sections
import { Error500View } from 'src/sections/error/view';

// ----------------------------------------------------------------------

Page500.getLayout = (page: React.ReactElement) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <>
      <Head>
        <title>500 Internal Server Error | ZONE UI</title>
      </Head>

      <Error500View />
    </>
  );
}

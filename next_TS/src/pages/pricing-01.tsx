// next
import Head from 'next/head';
// layouts
import SimpleLayout from 'src/layouts/simple';
// sections
import { Pricing01View } from 'src/sections/pricing/view';

// ----------------------------------------------------------------------

Pricing01Page.getLayout = (page: React.ReactElement) => <SimpleLayout>{page}</SimpleLayout>;

// ----------------------------------------------------------------------

export default function Pricing01Page() {
  return (
    <>
      <Head>
        <title>Pricing 01 | ZONE UI</title>
      </Head>

      <Pricing01View />
    </>
  );
}

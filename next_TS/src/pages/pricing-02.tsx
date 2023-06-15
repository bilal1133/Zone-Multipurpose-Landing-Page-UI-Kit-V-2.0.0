// next
import Head from 'next/head';
// layouts
import SimpleLayout from 'src/layouts/simple';
// sections
import { Pricing02View } from 'src/sections/pricing/view';

// ----------------------------------------------------------------------

Pricing02Page.getLayout = (page: React.ReactElement) => <SimpleLayout>{page}</SimpleLayout>;

// ----------------------------------------------------------------------

export default function Pricing02Page() {
  return (
    <>
      <Head>
        <title>Pricing 02 | ZONE UI</title>
      </Head>

      <Pricing02View />
    </>
  );
}

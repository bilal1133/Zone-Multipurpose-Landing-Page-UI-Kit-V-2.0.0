// next
import Head from 'next/head';
// layouts
import CompactLayout from 'src/layouts/compact';
// sections
import { MaintenanceView } from 'src/sections/status/view';

// ----------------------------------------------------------------------

MaintenancePage.getLayout = (page: React.ReactElement) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function MaintenancePage() {
  return (
    <>
      <Head>
        <title>Maintenance | ZONE UI</title>
      </Head>

      <MaintenanceView />
    </>
  );
}

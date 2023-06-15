import { Helmet } from 'react-helmet-async';
// sections
import { CareerJobsView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

export default function CareerJobsPage() {
  return (
    <>
      <Helmet>
        <title>Jobs | ZONE UI</title>
      </Helmet>

      <CareerJobsView />
    </>
  );
}

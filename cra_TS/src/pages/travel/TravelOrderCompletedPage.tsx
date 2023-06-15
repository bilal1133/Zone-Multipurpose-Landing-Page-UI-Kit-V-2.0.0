import { Helmet } from 'react-helmet-async';
// sections
import { TravelOrderCompletedView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelOrderCompletedPage() {
  return (
    <>
      <Helmet>
        <title>Order Completed | ZONE UI</title>
      </Helmet>

      <TravelOrderCompletedView />
    </>
  );
}

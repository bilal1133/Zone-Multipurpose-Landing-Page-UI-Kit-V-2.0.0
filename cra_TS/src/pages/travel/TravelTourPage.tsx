import { Helmet } from 'react-helmet-async';
// sections
import { TravelTourView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelTourPage() {
  return (
    <>
      <Helmet>
        <title>Italian Delights - 12 Days | ZONE UI</title>
      </Helmet>

      <TravelTourView />
    </>
  );
}

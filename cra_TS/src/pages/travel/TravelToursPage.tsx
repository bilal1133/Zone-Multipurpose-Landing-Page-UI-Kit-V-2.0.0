import { Helmet } from 'react-helmet-async';
// sections
import { TravelToursView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelToursPage() {
  return (
    <>
      <Helmet>
        <title>Tours | ZONE UI</title>
      </Helmet>

      <TravelToursView />
    </>
  );
}

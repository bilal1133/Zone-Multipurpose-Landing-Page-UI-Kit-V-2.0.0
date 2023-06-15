import { Helmet } from 'react-helmet-async';
// sections
import { CareerLandingView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

export default function CareerLandingPage() {
  return (
    <>
      <Helmet>
        <title>Landing | ZONE UI</title>
      </Helmet>

      <CareerLandingView />
    </>
  );
}

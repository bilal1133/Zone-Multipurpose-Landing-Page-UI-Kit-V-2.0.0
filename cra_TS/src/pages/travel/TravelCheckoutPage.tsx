import { Helmet } from 'react-helmet-async';
// sections
import { TravelCheckoutView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelCheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Checkout | ZONE UI</title>
      </Helmet>

      <TravelCheckoutView />
    </>
  );
}

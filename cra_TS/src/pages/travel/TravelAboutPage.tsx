import { Helmet } from 'react-helmet-async';
// sections
import { TravelAboutView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelAboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | ZONE UI</title>
      </Helmet>

      <TravelAboutView />
    </>
  );
}

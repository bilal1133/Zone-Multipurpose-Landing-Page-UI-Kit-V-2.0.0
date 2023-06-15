import { Helmet } from 'react-helmet-async';
// sections
import { TravelContactView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | ZONE UI</title>
      </Helmet>

      <TravelContactView />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
// sections
import { CareerContactView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

export default function CareerContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | ZONE UI</title>
      </Helmet>

      <CareerContactView />
    </>
  );
}

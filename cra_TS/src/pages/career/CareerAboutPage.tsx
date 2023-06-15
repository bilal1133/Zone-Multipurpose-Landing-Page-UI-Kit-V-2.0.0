import { Helmet } from 'react-helmet-async';
// sections
import { CareerAboutView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

export default function CareerAboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | ZONE UI</title>
      </Helmet>

      <CareerAboutView />
    </>
  );
}

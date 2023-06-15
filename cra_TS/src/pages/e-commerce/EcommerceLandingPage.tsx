import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceLandingView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceLandingPage() {
  return (
    <>
      <Helmet>
        <title>Landing | ZONE UI</title>
      </Helmet>

      <EcommerceLandingView />
    </>
  );
}

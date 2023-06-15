import { Helmet } from 'react-helmet-async';
// sections
import { ElearningAboutView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningAboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | ZONE UI</title>
      </Helmet>

      <ElearningAboutView />
    </>
  );
}

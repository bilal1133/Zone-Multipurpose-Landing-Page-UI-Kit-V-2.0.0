import { Helmet } from 'react-helmet-async';
// sections
import { ElearningContactView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | ZONE UI</title>
      </Helmet>

      <ElearningContactView />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceAccountPersonalView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceAccountPersonalPage() {
  return (
    <>
      <Helmet>
        <title>Account: Personal | ZONE UI</title>
      </Helmet>

      <EcommerceAccountPersonalView />
    </>
  );
}

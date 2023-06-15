import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceCartView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceCartPage() {
  return (
    <>
      <Helmet>
        <title>Cart | ZONE UI</title>
      </Helmet>

      <EcommerceCartView />
    </>
  );
}

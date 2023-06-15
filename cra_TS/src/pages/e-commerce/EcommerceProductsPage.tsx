import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceProductsView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceProductsPage() {
  return (
    <>
      <Helmet>
        <title>Products | ZONE UI</title>
      </Helmet>

      <EcommerceProductsView />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceProductView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceProductPage() {
  return (
    <>
      <Helmet>
        <title>Apple iPhone | ZONE UI</title>
      </Helmet>

      <EcommerceProductView />
    </>
  );
}

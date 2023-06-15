import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceAccountPaymentView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceAccountPaymentPage() {
  return (
    <>
      <Helmet>
        <title>Account: Payment | ZONE UI</title>
      </Helmet>

      <EcommerceAccountPaymentView />
    </>
  );
}

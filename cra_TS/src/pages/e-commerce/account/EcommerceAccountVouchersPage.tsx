import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceAccountVouchersView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceAccountVouchersPage() {
  return (
    <>
      <Helmet>
        <title>Account: Vouchers | ZONE UI</title>
      </Helmet>

      <EcommerceAccountVouchersView />
    </>
  );
}

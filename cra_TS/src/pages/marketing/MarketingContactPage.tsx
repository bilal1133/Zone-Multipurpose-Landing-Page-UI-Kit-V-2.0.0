import { Helmet } from 'react-helmet-async';
// sections
import { MarketingContactView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

export default function MarketingContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | ZONE UI</title>
      </Helmet>

      <MarketingContactView />
    </>
  );
}

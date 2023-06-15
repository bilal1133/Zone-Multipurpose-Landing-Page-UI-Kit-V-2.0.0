import { Helmet } from 'react-helmet-async';
// sections
import { MarketingLandingView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

export default function MarketingLandingPage() {
  return (
    <>
      <Helmet>
        <title>Landing | ZONE UI</title>
      </Helmet>

      <MarketingLandingView />
    </>
  );
}

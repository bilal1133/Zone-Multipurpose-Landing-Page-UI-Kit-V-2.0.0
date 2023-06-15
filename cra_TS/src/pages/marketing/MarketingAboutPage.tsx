import { Helmet } from 'react-helmet-async';
// sections
import { MarketingAboutView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

export default function MarketingAboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | ZONE UI</title>
      </Helmet>

      <MarketingAboutView />
    </>
  );
}

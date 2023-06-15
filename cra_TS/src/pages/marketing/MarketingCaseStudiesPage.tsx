import { Helmet } from 'react-helmet-async';
// sections
import { MarketingCaseStudiesView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies | ZONE UI</title>
      </Helmet>

      <MarketingCaseStudiesView />
    </>
  );
}

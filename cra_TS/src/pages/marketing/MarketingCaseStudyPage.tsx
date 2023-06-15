import { Helmet } from 'react-helmet-async';
// sections
import { MarketingCaseStudyView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyPage() {
  return (
    <>
      <Helmet>
        <title>Bank of America - Case Study | ZONE UI</title>
      </Helmet>

      <MarketingCaseStudyView />
    </>
  );
}

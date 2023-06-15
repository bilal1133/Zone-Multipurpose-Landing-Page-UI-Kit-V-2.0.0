import { Helmet } from 'react-helmet-async';
// sections
import { MarketingPostView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

export default function MarketingPostPage() {
  return (
    <>
      <Helmet>
        <title>The A-Z Of Event Post | ZONE UI</title>
      </Helmet>

      <MarketingPostView />
    </>
  );
}

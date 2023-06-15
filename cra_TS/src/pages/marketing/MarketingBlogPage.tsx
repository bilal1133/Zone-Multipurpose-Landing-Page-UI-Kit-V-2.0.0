import { Helmet } from 'react-helmet-async';
// sections
import { MarketingBlogView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

export default function MarketingBlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | ZONE UI</title>
      </Helmet>

      <MarketingBlogView />
    </>
  );
}

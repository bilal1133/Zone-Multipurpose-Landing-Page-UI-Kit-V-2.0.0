import { Helmet } from 'react-helmet-async';
// sections
import { TravelBlogView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelBlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | ZONE UI</title>
      </Helmet>

      <TravelBlogView />
    </>
  );
}

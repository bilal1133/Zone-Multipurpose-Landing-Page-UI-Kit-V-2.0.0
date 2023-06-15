import { Helmet } from 'react-helmet-async';
// sections
import { TravelPostView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelPostPage() {
  return (
    <>
      <Helmet>
        <title>The A-Z Of Event Post | ZONE UI</title>
      </Helmet>

      <TravelPostView />
    </>
  );
}

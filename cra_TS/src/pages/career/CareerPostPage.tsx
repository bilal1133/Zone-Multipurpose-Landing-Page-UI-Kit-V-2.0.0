import { Helmet } from 'react-helmet-async';
// sections
import { CareerPostView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

export default function CareerPostPage() {
  return (
    <>
      <Helmet>
        <title>The A-Z Of Event Post | ZONE UI</title>
      </Helmet>

      <CareerPostView />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
// sections
import { ElearningPostView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningPostPage() {
  return (
    <>
      <Helmet>
        <title>The A-Z Of Event Post | ZONE UI</title>
      </Helmet>

      <ElearningPostView />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
// sections
import { ElearningBlogView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningBlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | ZONE UI</title>
      </Helmet>

      <ElearningBlogView />
    </>
  );
}

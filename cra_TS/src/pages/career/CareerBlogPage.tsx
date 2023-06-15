import { Helmet } from 'react-helmet-async';
// sections
import { CareerBlogView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

export default function CareerBlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | ZONE UI</title>
      </Helmet>

      <CareerBlogView />
    </>
  );
}

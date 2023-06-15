import { Helmet } from 'react-helmet-async';
// sections
import { Error500View } from 'src/sections/error/view';

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <>
      <Helmet>
        <title>500 Internal Server Error | ZONE UI</title>
      </Helmet>

      <Error500View />
    </>
  );
}

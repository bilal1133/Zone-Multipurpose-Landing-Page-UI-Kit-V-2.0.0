import { Helmet } from 'react-helmet-async';
// sections
import { Pricing01View } from 'src/sections/pricing/view';

// ----------------------------------------------------------------------

export default function Pricing01Page() {
  return (
    <>
      <Helmet>
        <title>Pricing 01 | ZONE UI</title>
      </Helmet>

      <Pricing01View />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
// sections
import { Pricing02View } from 'src/sections/pricing/view';

// ----------------------------------------------------------------------

export default function Pricing02Page() {
  return (
    <>
      <Helmet>
        <title>Pricing 02 | ZONE UI</title>
      </Helmet>

      <Pricing02View />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
// sections
import { SupportView } from 'src/sections/support/view';

// ----------------------------------------------------------------------

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support | ZONE UI</title>
      </Helmet>

      <SupportView />
    </>
  );
}

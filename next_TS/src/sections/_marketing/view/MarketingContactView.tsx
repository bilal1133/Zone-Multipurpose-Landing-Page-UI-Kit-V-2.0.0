//
import NewsletterMarketing from '../../newsletter/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import ContactMarketing from '../../contact/marketing';

// ----------------------------------------------------------------------

export default function MarketingContactView() {
  return (
    <>
      <ContactMarketing />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}

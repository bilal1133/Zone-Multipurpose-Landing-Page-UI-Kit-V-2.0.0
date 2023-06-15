import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// routes
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export default function Index() {
  const { pathname, push } = useRouter();

  useEffect(() => {
    if (pathname === paths.eCommerce.account.root) {
      push(paths.eCommerce.account.personal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

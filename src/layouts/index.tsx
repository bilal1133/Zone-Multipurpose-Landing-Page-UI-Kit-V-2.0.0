import { ReactNode } from 'react';
// next
import dynamic from 'next/dynamic';
//
const Header = dynamic(() => import('./header/Header'), { ssr: false });
const HeaderSimple = dynamic(() => import('./header/HeaderSimple'), { ssr: false });
const Footer = dynamic(() => import('./footer/Footer'), { ssr: false });
const FooterSimple = dynamic(() => import('./footer/FooterSimple'), { ssr: false });

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  transparentHeader?: boolean;
  disabledHeader?: boolean;
  disabledFooter?: boolean;
  simpleHeader?: boolean;
  simpleFooter?: boolean;
};

export default function Layout({
  children,
  transparentHeader,
  disabledHeader,
  disabledFooter,
  simpleHeader,
  simpleFooter,
}: Props) {
  return (
    <>
      {disabledHeader ? null : (
        <>
          {simpleHeader ? (
            <HeaderSimple transparent={transparentHeader} />
          ) : (
            <Header transparent={transparentHeader} />
          )}
        </>
      )}

      {children}

      {disabledFooter ? null : <>{simpleFooter ? <FooterSimple /> : <Footer />}</>}
    </>
  );
}

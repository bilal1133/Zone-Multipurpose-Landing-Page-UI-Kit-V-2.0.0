// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
//
import Header from './Header';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function SimpleLayout({ children }: Props) {
  const isOffset = useOffSetTop();

  return (
    <>
      <Header isOffset={isOffset} />

      {children}
    </>
  );
}

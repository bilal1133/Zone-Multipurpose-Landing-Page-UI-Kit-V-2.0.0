import { Outlet } from 'react-router-dom';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
//
import Header from './Header';

// ----------------------------------------------------------------------

export default function SimpleLayout() {
  const isOffset = useOffSetTop();

  return (
    <>
      <Header isOffset={isOffset} />

      <Outlet />
    </>
  );
}

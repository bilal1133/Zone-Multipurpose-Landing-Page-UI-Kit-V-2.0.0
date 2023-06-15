import { Outlet } from 'react-router-dom';
// @mui
import { Stack, Container } from '@mui/material';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
//
import Header from './Header';

// ----------------------------------------------------------------------

export default function CompactLayout() {
  const isOffset = useOffSetTop();

  return (
    <>
      <Header isOffset={isOffset} />

      <Container component="main">
        <Stack
          sx={{
            py: 12,
            m: 'auto',
            maxWidth: 480,
            minHeight: '100vh',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <Outlet />
        </Stack>
      </Container>
    </>
  );
}

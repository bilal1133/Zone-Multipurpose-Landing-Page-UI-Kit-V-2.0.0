// @mui
import { Stack, Container } from '@mui/material';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
//
import Header from './Header';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function CompactLayout({ children }: Props) {
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
          {children}
        </Stack>
      </Container>
    </>
  );
}

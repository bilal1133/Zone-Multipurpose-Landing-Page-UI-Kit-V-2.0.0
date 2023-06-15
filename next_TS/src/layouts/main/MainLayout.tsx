// next
import { useRouter } from 'next/router';
// @mui
import { Box } from '@mui/material';
// config
import { HEADER } from 'src/config-global';
//
import Header from './header/Header';
import Footer from './footer/Footer';

// ----------------------------------------------------------------------

const pathsOnDark = ['/career/landing', '/travel/landing'];

const spacingLayout = [...pathsOnDark, '/', '/e-learning/landing', '/marketing/landing'];

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { pathname } = useRouter();

  const actionPage = (arr: string[]) => arr.some((path) => pathname === path);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header headerOnDark={actionPage(pathsOnDark)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {!actionPage(spacingLayout) && <Spacing />}
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

// ----------------------------------------------------------------------

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_MAIN_DESKTOP },
      }}
    />
  );
}

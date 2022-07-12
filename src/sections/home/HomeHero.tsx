import { useRef } from 'react';
// icons
import launchIcon from '@iconify/icons-carbon/launch';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, Grid } from '@mui/material';
// hooks
import { useBoundingClientRect } from '../../hooks';
// routes
import Routes from '../../routes';
// components
import { Image, Iconify } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    height: '100vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <RootStyle>
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12} md={5}>
            <Stack
              spacing={5}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              justifyContent="center"
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h1">
                Create Your <br /> Website Today with
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {''} ZONE
                </Box>
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                The ZONE is built on top of MUI, a powerful library that provides flexible,
                customizable, and easy-to-use components.
              </Typography>

              <Button
                color="inherit"
                size="large"
                variant="contained"
                endIcon={<Iconify icon={launchIcon} />}
                target="_blank"
                rel="noopener"
                href={Routes.figmaPreview}
              >
                figma workspace
              </Button>

              <Stack direction="row" spacing={2.5}>
                {['figma', 'javascript', 'typescript', 'material', 'react'].map((icon) => (
                  <Image
                    key={icon}
                    alt={icon}
                    src={`https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_${icon}.svg`}
                    sx={{ width: 32, height: 32 }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          maxWidth: 1280,
          position: 'absolute',
          bottom: { md: '20%', lg: 40 },
          right: { md: -110, xl: 0 },
          display: { xs: 'none', md: 'block' },
          width: { md: `calc(100% - ${offsetLeft}px)` },
        }}
      >
        <Image
          alt="home-hero"
          src="https://zone-assets-api.vercel.app/assets/images/home/home_hero.png"
        />
      </Box>
    </RootStyle>
  );
}

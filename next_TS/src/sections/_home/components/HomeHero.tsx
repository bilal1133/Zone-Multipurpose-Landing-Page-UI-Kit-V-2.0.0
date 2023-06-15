import { useRef } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// config
import { HEADER } from 'src/config-global';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP}px)`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <StyledRoot>
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid xs={12} md={5}>
            <Stack
              spacing={5}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h1">
                Create Your <br /> Website Today with
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {` ZONE`}
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
                endIcon={<Iconify icon="carbon:launch" />}
                target="_blank"
                rel="noopener"
                href={paths.figmaPreview}
              >
                figma workspace
              </Button>

              <Stack spacing={3}>
                <Typography variant="overline">AVAILABLE FOR</Typography>
                <Stack direction="row" spacing={2.5}>
                  {['js', 'ts', 'figma', 'cra', 'nextjs'].map((icon) => (
                    <SvgColor
                      key={icon}
                      src={`/assets/icons/platforms/ic_${icon}.svg`}
                      sx={{ width: 24, height: 24 }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      {isMdUp && (
        <Box
          sx={{
            maxWidth: 1280,
            position: 'absolute',
            bottom: { md: '20%', lg: 40 },
            right: { md: -110, xl: 0 },
            width: { md: `calc(100% - ${offsetLeft}px)` },
          }}
        >
          <Image
            visibleByDefault
            disabledEffect
            alt="home hero"
            src="/assets/images/home/home_hero.png"
          />
        </Box>
      )}
    </StyledRoot>
  );
}

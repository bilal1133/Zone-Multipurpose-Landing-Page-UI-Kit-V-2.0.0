// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Stack, Fab } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 100%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  maxWidth: 564,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    zIndex: 9,
    position: 'absolute',
    color: theme.palette.common.white,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutOurVision() {
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" sx={{ position: 'relative' }}>
        <StyledTypography
          variant="h2"
          sx={{
            mb: 5,
            top: { md: 80 },
          }}
        >
          Our Vision
        </StyledTypography>

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'relative', width: 1, borderRadius: 2, overflow: 'hidden' }}
        >
          <Fab
            color="primary"
            sx={{
              zIndex: 9,
              position: 'absolute',
            }}
          >
            <Iconify icon="carbon:play" width={24} />
          </Fab>

          <StyledOverlay />

          <Image alt="hero" src="/assets/images/marketing/marketing_post_01.jpg" ratio="16/9" />
        </Stack>

        <StyledTypography
          variant="h5"
          sx={{
            mt: 5,
            bottom: { md: 80 },
            opacity: { md: 0.72 },
          }}
        >
          Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada.
        </StyledTypography>
      </Stack>
    </Container>
  );
}

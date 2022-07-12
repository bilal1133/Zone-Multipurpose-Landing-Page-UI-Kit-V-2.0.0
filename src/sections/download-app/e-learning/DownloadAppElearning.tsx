// @mui
import { alpha, styled } from '@mui/material/styles';
import { Container, Typography, Stack, Grid, Divider } from '@mui/material';
// components
import { Image, AppStoreButton, SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function DownloadAppElearning() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent={{ lg: 'space-between' }}>
          <Grid item xs={12} md={6} lg={5}>
            <Stack
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Typography variant="h2"> Download App </Typography>
              <Typography sx={{ color: 'text.secondary', mt: 3, mb: 8 }}>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
              </Typography>
            </Stack>

            <Stack
              alignItems="center"
              sx={{
                py: 5,
                borderRadius: 2,
                mb: { xs: 8, md: 0 },
                px: { xs: 3, md: 5 },
                border: (theme) => `solid 1px ${theme.palette.divider}`,
              }}
            >
              <Stack spacing={3} direction="row" alignItems="center">
                <SvgIconStyle
                  src="https://zone-assets-api.vercel.app/assets/icons/ic_qrcode.svg"
                  sx={{ width: 120, height: 120, color: 'grey.900' }}
                />
                <Typography variant="h6">
                  Scan QR code to
                  <br /> install on your device
                </Typography>
              </Stack>
              <Divider sx={{ my: 5, width: 1, borderStyle: 'dashed' }} />
              <AppStoreButton direction={{ xs: 'column', sm: 'row' }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Image
              alt="mobile app"
              src="https://zone-assets-api.vercel.app/assets/images/e-learning/course_download_app.png"
              sx={{
                maxWidth: 564,
                filter: (theme) =>
                  `drop-shadow(0 48px 80px ${alpha(theme.palette.common.black, 0.24)})`,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

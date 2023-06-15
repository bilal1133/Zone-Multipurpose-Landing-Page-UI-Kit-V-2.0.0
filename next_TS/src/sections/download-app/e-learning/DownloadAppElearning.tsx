// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  StackProps,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  margin: theme.spacing(1),
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  '& .MuiButton-startIcon': {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function DownloadAppElearning() {
  return (
    <Container sx={{ py: { xs: 8, md: 15 } }}>
      <Grid container spacing={3} justifyContent={{ lg: 'space-between' }}>
        <Grid xs={12} md={6} lg={5}>
          <Stack
            sx={{
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Typography variant="h2"> Download App </Typography>

            <Typography sx={{ color: 'text.secondary', mt: 3, mb: 8 }}>
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
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
              <SvgColor
                src="/assets/icons/ic_qrcode.svg"
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

        <Grid xs={12} md={6} lg={6}>
          <Image
            alt="mobile app"
            src="/assets/images/course/course_download_app.png"
            sx={{
              maxWidth: 564,
              filter: (theme) =>
                `drop-shadow(0 48px 80px ${alpha(theme.palette.common.black, 0.24)})`,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }: StackProps) {
  return (
    <Stack direction="row" flexWrap="wrap" {...other}>
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}

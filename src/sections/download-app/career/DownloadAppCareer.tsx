// @mui
import { alpha, styled } from '@mui/material/styles';
import { Container, Typography, Stack, Box } from '@mui/material';
// components
import { Image, AppStoreButton } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  },
  [theme.breakpoints.up('md')]: { padding: theme.spacing(21, 0) },
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    textAlign: 'unset',
    paddingLeft: theme.spacing(10),
    borderRadius: Number(theme.shape.borderRadius) * 3,
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function DownloadAppCareer() {
  return (
    <RootStyle>
      <Container>
        <ContentStyle>
          <Stack
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              maxWidth: { md: 380 },
              my: { xs: 8, md: 15 },
            }}
          >
            <Typography variant="h2"> Download App </Typography>
            <Typography sx={{ mt: 3, mb: 6 }}>
              Now finding the new job just got even easier with our new app!
            </Typography>

            <AppStoreButton />
          </Stack>

          <Box
            sx={{
              mt: { md: 10 },
              right: { md: -40 },
              mx: { xs: 'auto', md: 'unset' },
              position: { md: 'absolute' },
            }}
          >
            <Image
              alt="mobile app"
              src="https://zone-assets-api.vercel.app/assets/images/career/career_download_app.png"
              sx={{
                width: { xs: 402 * 1.15, lg: 402 * 1.3 },
                height: { xs: 570 * 1.15, lg: 570 * 1.3 },
              }}
            />
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

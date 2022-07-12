// icons
import emailIcon from '@iconify/icons-carbon/email';
import licenseGlobal from '@iconify/icons-carbon/license-global';
// @mui
import { styled } from '@mui/material/styles';
import {
  Grid,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  StackProps,
  FilledInput,
  InputAdornment,
  FilledInputProps,
} from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// components
import { Image, BgOverlay, Iconify } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(20, 0),
  },
}));

const BarStyle = styled((props: StackProps) => (
  <Stack
    spacing={2.5}
    alignItems={{ md: 'center' }}
    direction={{ xs: 'column', md: 'row' }}
    {...props}
  />
))(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    ...cssStyles().bgBlur({
      blur: 4,
      opacity: 0.08,
      color: theme.palette.grey[500],
    }),
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  },
}));

const InputStyle = styled((props: FilledInputProps) => <FilledInput fullWidth {...props} />)(
  ({ theme }) => ({
    color: theme.palette.common.white,
    '& .MuiFilledInput-input': {
      ...theme.typography.body2,
      paddingTop: 18,
      paddingBottom: 18,
      '&:placeholder': {
        color: theme.palette.grey[500],
      },
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'transparent',
      '& .MuiFilledInput-input': {
        paddingTop: 14,
        paddingBottom: 14,
      },
      '&.Mui-focused, &:hover': {
        backgroundColor: 'transparent',
      },
    },
  })
);

// ----------------------------------------------------------------------

export default function MarketingServicesHero() {
  return (
    <RootStyle>
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                mb: 5,
                mx: 'auto',
                maxWidth: 480,
                textAlign: 'center',
                color: 'common.white',
              }}
            >
              <Typography variant="h1">Offline SEO</Typography>
              <Typography sx={{ opacity: 0.72 }}>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                venenatis ante odio sit amet eros.
              </Typography>
            </Stack>

            <ServicesForm />
          </Grid>
        </Grid>
      </Container>

      <BgOverlay />

      <Image
        alt="hero"
        src="https://zone-assets-api.vercel.app/assets/images/marketing/marketing_services_hero.jpg"
        sx={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1 }}
      />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

function ServicesForm() {
  return (
    <BarStyle>
      <Stack
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
        divider={
          <Divider
            orientation="vertical"
            sx={{
              height: 28,
              display: { xs: 'none', md: 'block' },
            }}
          />
        }
        spacing={2.5}
        sx={{ width: 1 }}
      >
        <InputStyle
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon={emailIcon} sx={{ width: 24, height: 24, color: 'grey.500' }} />
            </InputAdornment>
          }
          placeholder="Email"
        />

        <InputStyle
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon={licenseGlobal} sx={{ width: 24, height: 24, color: 'grey.500' }} />
            </InputAdornment>
          }
          placeholder="Website URL"
        />
      </Stack>

      <Button
        variant="contained"
        size="large"
        sx={{
          flexShrink: 0,
          width: { xs: 1, md: 'auto' },
        }}
      >
        Analyse
      </Button>
    </BarStyle>
  );
}

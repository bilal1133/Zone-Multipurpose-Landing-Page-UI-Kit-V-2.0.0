// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Stack,
  Button,
  Container,
  InputBase,
  Typography,
  InputBaseProps,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
    imgUrl: '/assets/images/marketing/marketing_services_hero.jpg',
  }),
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(20, 0),
  },
}));

const StyledInput = styled((props: InputBaseProps) => <InputBase fullWidth {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body1,
    height: 56,
    paddingLeft: theme.spacing(1.5),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
  })
);

// ----------------------------------------------------------------------

export default function MarketingServicesHero() {
  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={8}>
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

            <MarketingServicesHeroForm />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function MarketingServicesHeroForm() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
      <StyledInput
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="carbon:email" width={24} sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        placeholder="Email"
      />

      <StyledInput
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="carbon:license-global" width={24} sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        placeholder="Website URL"
      />

      <Button fullWidth={!isMdUp} size="large" variant="contained" sx={{ flexShrink: 0 }}>
        Analyse
      </Button>
    </Stack>
  );
}

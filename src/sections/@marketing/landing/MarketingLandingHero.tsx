// icons
import playIcon from '@iconify/icons-carbon/play';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Button, Box } from '@mui/material';
// components
import { Iconify, Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  return (
    <RootStyle>
      <Container>
        <Grid container columnSpacing={10} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} lg={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Stack spacing={5}>
              <Typography variant="overline" sx={{ color: 'primary.main' }}>
                Digital Marketing
              </Typography>

              <Typography variant="h1">Boosts Your Website Traffic</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                venenatis ante odio sit amet eros.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent={{ xs: 'center', md: 'unset' }}
                spacing={3}
              >
                <Button variant="contained" size="large">
                  Try For Free
                </Button>

                <Button
                  disableRipple
                  color="inherit"
                  size="large"
                  startIcon={
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: (theme) => `solid 2px ${alpha(theme.palette.primary.main, 0.24)}`,
                      }}
                    >
                      <Iconify
                        icon={playIcon}
                        sx={{ width: 24, height: 24, color: 'primary.main' }}
                      />
                    </Box>
                  }
                  sx={{
                    px: 0,
                    '&:hover': { bgcolor: 'transparent' },
                  }}
                >
                  See Our Work
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="marketing-market"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_marketing_market.svg"
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

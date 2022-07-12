// next
import NextLink from 'next/link';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Box, Container, Typography, Button, Stack } from '@mui/material';
// routes
import Routes from '../../../routes';
// components
import { Iconify, Image } from '../../../components';

// ----------------------------------------------------------------------

const LISTS = [
  'First Class Flights',
  '5 Star Accommodations',
  'Inclusive Packages',
  'Latest Model Vehicles',
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingServices() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} lg={5}>
            <Image
              alt="services"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_services.svg"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Stack spacing={3} sx={{ mb: 5 }}>
              <Typography variant="h2">Offline SEO</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non,
                turpis. Nunc nonummy metus. Donec elit libero, sodales nec
              </Typography>

              <Stack spacing={1}>
                {LISTS.map((text) => (
                  <Stack key={text} direction="row" alignItems="center">
                    <Box
                      component="span"
                      sx={{
                        mr: 2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                      }}
                    />
                    {text}
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <NextLink href={Routes.marketing.caseStudies} passHref>
              <Button
                size="large"
                color="inherit"
                variant="outlined"
                endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
              >
                Check Our Work
              </Button>
            </NextLink>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

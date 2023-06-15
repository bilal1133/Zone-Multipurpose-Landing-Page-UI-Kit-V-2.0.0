import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Container, Typography, Button, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const LISTS = [
  'First Class Flights',
  '5 Star Accommodations',
  'Inclusive Packages',
  'Latest Model Vehicles',
];

// ----------------------------------------------------------------------

export default function MarketingServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <Image alt="services" src="/assets/illustrations/illustration_services.svg" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Offline SEO</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Aenean commodo ligula eget dolor. Sed hendrerit. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer
              lacinia.
            </Typography>

            <Stack spacing={2}>
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

          <Button
            component={RouterLink}
            to={paths.marketing.caseStudies}
            size="large"
            color="inherit"
            variant="outlined"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            Check Our Work
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

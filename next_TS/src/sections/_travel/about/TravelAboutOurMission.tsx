// @mui
import { Stack, Container, Typography, Card, Unstable_Grid2 as Grid } from '@mui/material';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const VISIONS = [
  {
    name: 'Vestibulum',
    description: 'In dui magna, posuere eget, vestibulum et, tempor auctor, justo.',
  },
  {
    name: 'Fusce',
    description: 'Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
  },
  { name: 'Praesent', description: 'Suspendisse feugiat. Quisque id odio.' },
];

// ----------------------------------------------------------------------

export default function TravelAboutOurVision() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 466,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h2">Our Mission</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.
        </Typography>
      </Stack>

      <Grid
        container
        spacing={{ xs: 8, md: 3 }}
        justifyContent="space-between"
        alignItems={{ md: 'center' }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Image alt="vision" src="/assets/illustrations/illustration_vision.svg" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack alignItems={{ md: 'flex-end' }} sx={{ position: 'relative' }}>
            {VISIONS.map((vision, index) => {
              const { name, description } = vision;

              const firstVision = index === 0;

              const secondVision = index === 1;

              const thirdVision = index === 2;

              return (
                <Card
                  key={name}
                  sx={{
                    p: 4,
                    mt: 4,
                    width: { md: 'calc(50% - 16px)' },
                    ...(firstVision && {
                      top: { md: 0 },
                      left: { md: 0 },
                      bottom: { md: 0 },
                      my: { md: 'auto' },
                      boxShadow: { md: 0 },
                      maxHeight: { md: 304 },
                      display: { md: 'flex' },
                      position: { md: 'absolute' },
                      flexDirection: { md: 'column' },
                      justifyContent: { md: 'center' },
                    }),
                    ...(secondVision && {
                      boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                    }),
                    ...(thirdVision && {
                      boxShadow: { md: 0 },
                    }),
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{ color: 'text.disabled', opacity: 0.24, mb: 3 }}
                  >
                    {`0${index + 1}`}
                  </Typography>

                  <Typography variant="h4" paragraph>
                    {name}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                </Card>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

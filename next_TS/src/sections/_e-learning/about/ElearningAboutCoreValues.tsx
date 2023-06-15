// @mui
import { Typography, Container, Stack, Box, Unstable_Grid2 as Grid } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Customer Satisfaction',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:3d-curve-auto-colon',
  },
  {
    title: 'Transparency',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:chat-bot',
  },
  {
    title: 'Reputation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:airport-location',
  },
  {
    title: 'Cooperation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:event',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAboutCoreValues() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 15 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Core Values</Typography>

          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 540 } }}>
            Etiam ultricies nisi vel augue. Suspendisse potenti. Sed mollis, eros et ultrices
            tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Phasellus viverra
            nulla ut metus varius laoreet.
          </Typography>
        </Stack>

        <Grid container spacing={8}>
          {CORE_VALUES.map((value) => (
            <Grid
              key={value.title}
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Iconify icon={value.icon} width={48} sx={{ color: 'primary.main' }} />

              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

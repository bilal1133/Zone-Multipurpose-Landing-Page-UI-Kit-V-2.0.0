// @mui
import { Typography, Container, Button, Box } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const STEPS = [
  {
    title: 'Create an account',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: '/assets/icons/ic_resume_job.svg',
  },
  {
    title: 'Complete your profile',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: '/assets/icons/ic_resume_job.svg',
  },
  {
    title: 'Search your job',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: '/assets/icons/ic_search_job.svg',
  },
];

// ----------------------------------------------------------------------

export default function CareerLandingStep() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Container>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          For Candidates
        </Typography>

        <Typography variant="h2" sx={{ my: 3 }}>
          Explore Thousands of Jobs
        </Typography>

        <Typography sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto' }}>
          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper
          velit.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            my: { xs: 8, md: 10 },
            gap: { xs: 8, md: 5 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {STEPS.map((value, index) => (
            <div key={value.title}>
              <SvgColor
                src={value.icon}
                sx={{ width: 80, height: 80, mx: 'auto', color: 'primary.main' }}
              />
              <Typography
                variant="overline"
                sx={{ mt: 4, display: 'block', color: 'text.disabled' }}
              >
                Step {index + 1}
              </Typography>

              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                {value.title}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.description}
              </Typography>
            </div>
          ))}
        </Box>

        <Button
          variant="contained"
          size="large"
          color="inherit"
          startIcon={<Iconify icon="carbon:cloud-upload" />}
        >
          Upload Your CV
        </Button>
      </Container>
    </Box>
  );
}

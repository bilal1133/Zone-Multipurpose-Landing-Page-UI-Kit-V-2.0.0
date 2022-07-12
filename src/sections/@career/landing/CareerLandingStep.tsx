// icons
import cloudUpload from '@iconify/icons-carbon/cloud-upload';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Button, Box } from '@mui/material';
// components
import { Iconify, SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const STEPS = [
  {
    title: 'Create an account',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_resume_job.svg',
  },
  {
    title: 'Complete your profile',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_resume_job.svg',
  },
  {
    title: 'Search your job',
    description: 'Nunc nonummy metus. Donec elit libero.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_search_job.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function CareerLandingStep() {
  return (
    <RootStyle>
      <Container>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          For Candidates
        </Typography>

        <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
          Explore Thousands of Jobs
        </Typography>

        <Typography sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto' }}>
          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper
          velit.
        </Typography>

        <Box
          sx={{
            my: { xs: 8, md: 10 },
            display: 'grid',
            gap: { xs: 8, md: 5 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {STEPS.map((value, index) => (
            <StepItem key={value.title} value={value} index={index} />
          ))}
        </Box>

        <Button variant="contained" size="large" startIcon={<Iconify icon={cloudUpload} />}>
          Upload Your CV
        </Button>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type StepItemProps = {
  value: {
    icon: string;
    title: string;
    description: string;
  };
  index: number;
};

function StepItem({ value, index }: StepItemProps) {
  return (
    <div>
      <SvgIconStyle
        src={value.icon}
        sx={{ width: 80, height: 80, mx: 'auto', color: 'primary.main' }}
      />
      <Typography variant="overline" sx={{ mt: 4, display: 'block', color: 'text.disabled' }}>
        Step {index + 1}
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
        {value.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {value.description}
      </Typography>
    </div>
  );
}

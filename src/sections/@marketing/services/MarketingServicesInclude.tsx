// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box } from '@mui/material';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Search Engine Optimization',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Social Media Strategy',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Real Time and Data',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Online Media Management',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Reporting & Analysis',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_report.svg',
  },
  {
    title: 'Penalty Recovery',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_file.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Services Include</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            rowGap: { xs: 8, md: 10 },
            columnGap: 10,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {CORE_VALUES.map((value) => (
            <div key={value.title}>
              <SvgIconStyle
                src={value.icon}
                color="info"
                sx={{ width: 64, height: 64, mx: 'auto', bgcolor: 'primary.main' }}
              />
              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}

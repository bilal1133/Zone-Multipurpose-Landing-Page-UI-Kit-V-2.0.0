// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Search Engine Optimization',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Social Media Strategy',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Real Time and Data',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Online Media Management',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Reporting & Analysis',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Penalty Recovery',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/assets/icons/ic_file.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Services Include</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
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
  );
}

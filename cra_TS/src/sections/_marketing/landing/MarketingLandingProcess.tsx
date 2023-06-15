// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Container, Typography, Card, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const SERVICES = [
  {
    name: 'Planning',
    icon: '/assets/icons/ic_sketch_design.svg',
  },
  {
    name: 'Research',
    icon: '/assets/icons/ic_search.svg',
  },
  {
    name: 'Optimizing',
    icon: '/assets/icons/ic_optimization.svg',
  },
  {
    name: 'Results',
    icon: '/assets/icons/ic_analysis.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingProcess() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Work Flow
        </Typography>

        <Typography variant="h2">Working Process</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'flex-end',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  service: {
    name: string;
    icon: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon } = service;

  return (
    <Card
      sx={{
        p: 2,
        color: (theme) => theme.palette[COLORS[index]].darker,
        bgcolor: (theme) => theme.palette[COLORS[index]].light,
        boxShadow: (theme) => `-8px 12px 32px 0px ${alpha(theme.palette[COLORS[index]].main, 0.2)}`,
        ...(index === 1 && {
          mb: { md: 2.5 },
        }),
        ...(index === 2 && {
          mb: { md: 5 },
        }),
        ...(index === 3 && {
          mb: { md: 7.5 },
        }),
      }}
    >
      <SvgColor src={icon} sx={{ width: 64, height: 64, opacity: 0.48 }} />

      <Typography variant="h5" sx={{ mt: 3, textAlign: 'right' }}>
        {name}
      </Typography>
    </Card>
  );
}

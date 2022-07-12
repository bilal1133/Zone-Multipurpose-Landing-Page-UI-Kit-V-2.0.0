// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Container, Typography, Card, Box } from '@mui/material';
// components
import { Iconify, SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const SERVICES = [
  {
    name: 'Planning',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_sketch_design.svg',
  },
  {
    name: 'Research',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_search.svg',
  },
  {
    name: 'Optimizing',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_optimization.svg',
  },
  {
    name: 'Results',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_analysis.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingProcess() {
  return (
    <RootStyle>
      <Container>
        <Stack
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

          <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
            Working Process
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Stack>

        <Box
          sx={{
            alignItems: 'flex-end',
            display: 'grid',
            gap: 4,
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
    </RootStyle>
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
      <SvgIconStyle src={icon} sx={{ width: 64, height: 64, opacity: 0.48 }} />

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={1}
        sx={{ mt: 3, typography: 'h5' }}
      >
        {name}
        {index !== 3 && (
          <Iconify icon={directionStraightRight} sx={{ width: 22, height: 22, ml: 1 }} />
        )}
      </Stack>
    </Card>
  );
}

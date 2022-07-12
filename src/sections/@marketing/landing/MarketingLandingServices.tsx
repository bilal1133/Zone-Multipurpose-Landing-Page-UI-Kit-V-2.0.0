// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Card, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// components
import { Iconify, TextMaxLine, SvgIconStyle } from '../../../components';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'] as const;

const SERVICES = [
  {
    name: 'SEO',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_seo.svg',
    text: 'Nunc nonummy metus. Donec elit libero',
    path: Routes.marketing.services,
  },
  {
    name: 'Email Marketing',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_mail.svg',
    text: 'Nunc nonummy metus. Donec elit libero',
    path: Routes.marketing.services,
  },
  {
    name: 'Search Engine Oprimization',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_analysis.svg',
    text: 'Nunc nonummy metus. Donec elit libero',
    path: Routes.marketing.services,
  },
  {
    name: 'Social Marketing',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_bullhorn.svg',
    text: 'Nunc nonummy metus. Donec elit libero',
    path: Routes.marketing.services,
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
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
            Our Services
          </Typography>

          <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
            We Provide
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Stack>

        <Box
          sx={{
            alignItems: 'center',
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
    text: string;
    path: string;
    icon: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon, text, path } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 0 && {
          boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        }),
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
        ...(index === 3 && {
          boxShadow: (theme) => ({ md: theme.customShadows.z4 }),
        }),
      }}
    >
      {/* <Image alt={icon} src={icon} sx={{ width: 88, height: 88, mx: 'auto' }} /> */}
      <SvgIconStyle
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[COLORS[index]].main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6">{name}</TextMaxLine>
        <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </TextMaxLine>
      </Stack>

      <NextLink href={path} passHref>
        <IconButtonAnimate color="primary">
          <Iconify icon={directionStraightRight} />
        </IconButtonAnimate>
      </NextLink>
    </Card>
  );
}

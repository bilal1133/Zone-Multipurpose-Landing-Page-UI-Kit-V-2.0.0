// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Online Media',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'primary',
  },
  {
    title: 'Design',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'success',
  },
  {
    title: 'Marketing',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'secondary',
  },
  {
    title: 'HR & Recruiting',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'secondary',
  },
  {
    title: 'Management',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'success',
  },
  {
    title: 'Branding',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesBenefits() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Benefits Achieved
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          }}
        >
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(0, 3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
            ))}
          </Stack>

          {isMdUp && <Image alt="benefits" src="/assets/illustrations/illustration_benefits.svg" />}

          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(-3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type BenefitItemProps = {
  index: number;
  reverse?: boolean;
  benefit: {
    title: string;
    description: string;
    iconColor: string;
  };
};

function BenefitItem({ benefit, reverse, index }: BenefitItemProps) {
  const { title, description, iconColor } = benefit;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          ...(iconColor === 'secondary' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
          }),
          ...(iconColor === 'success' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
          }),
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h5">{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

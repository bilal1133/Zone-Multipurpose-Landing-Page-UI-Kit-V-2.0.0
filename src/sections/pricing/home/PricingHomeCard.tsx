// icons
import chevronRight from '@iconify/icons-carbon/chevron-right';
import closeOutline from '@iconify/icons-carbon/close-outline';
import checkmarkOutline from '@iconify/icons-carbon/checkmark-outline';
// @mui
import { Card, Link, Stack, Button, Divider, Typography } from '@mui/material';
// @types
import Routes from '../../../routes';
// @types
import { PricingHomeProps } from '../../../@types/pricing';
// components
import { Iconify, TextIconLabel, Image } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  plan: PricingHomeProps;
};

export default function PricingHomeCard({ plan }: Props) {
  const { license, commons, options, icons, price } = plan;

  const plusLicense = license === 'Plus';

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: 0,
        ...(plusLicense && {
          py: { md: 8 },
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      <Stack spacing={5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
            {license}
          </Typography>

          <Stack direction="row" spacing={0.5}>
            <Typography variant="h4">$</Typography>
            <Typography variant="h3">{price}</Typography>
          </Stack>
        </Stack>

        {license === 'Standard' ? (
          <Image alt="standard" src={icons?.[0]} sx={{ width: 32, height: 32 }} />
        ) : (
          <Stack direction="row" spacing={1.5}>
            {icons.map((icon) => (
              <Image key={icon} alt={icon} src={icon} sx={{ width: 32, height: 32 }} />
            ))}
          </Stack>
        )}

        <Stack spacing={2.5}>
          {commons.map((option) => (
            <Stack key={option} spacing={1.5} direction="row" alignItems="center">
              <Iconify
                icon={checkmarkOutline}
                sx={{ color: 'primary.main', width: 20, height: 20 }}
              />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

          {options.map((option) => (
            <TextIconLabel
              key={option.title}
              icon={
                <Iconify
                  icon={option.disabled ? closeOutline : checkmarkOutline}
                  sx={{
                    mr: 1.5,
                    width: 20,
                    height: 20,
                    color: 'primary.main',
                    ...(option.disabled && { color: 'currentColor' }),
                  }}
                />
              }
              value={option.title}
              sx={{
                ...(option.disabled && { color: 'text.disabled' }),
              }}
            />
          ))}
        </Stack>

        <Stack alignItems="flex-end" spacing={3}>
          <Button
            size="large"
            fullWidth
            variant="contained"
            color={plusLicense ? 'primary' : 'inherit'}
            target="_blank"
            rel="noopener"
            href={Routes.minimalDashboard}
          >
            Choose Package
          </Button>

          <Link
            color="text.secondary"
            underline="always"
            target="_blank"
            rel="noopener"
            variant="body3"
            href={Routes.license}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Read license
            <Iconify icon={chevronRight} sx={{ width: 16, height: 16, ml: 1 }} />
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}

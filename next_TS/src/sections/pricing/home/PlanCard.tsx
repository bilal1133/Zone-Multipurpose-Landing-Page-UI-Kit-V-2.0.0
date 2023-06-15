// @mui
import { Card, Link, Stack, Button, Divider, Typography } from '@mui/material';
// types
import { paths } from 'src/routes/paths';
// types
import { IPricingHomeProps } from 'src/types/pricing';
// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import Label from 'src/components/label';

// ----------------------------------------------------------------------

type Props = {
  plan: IPricingHomeProps;
};

export default function PlanCard({ plan }: Props) {
  const { license, commons, options, icons, price } = plan;

  const standardLicense = license === 'Standard';

  const plusLicense = license === 'Plus';

  const extendedLicense = license === 'Extended';

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: (theme) => theme.customShadows.z8,
        ...(plusLicense && {
          py: 10,
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      {plusLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 40, left: 40 }}>
          POPULAR
        </Label>
      )}

      <Stack spacing={5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase' }}>
            {license}
          </Typography>

          <Stack direction="row" spacing={0.5}>
            <Typography variant="h4" component="span">
              $
            </Typography>
            <Typography variant="h3" component="span">
              {price}
            </Typography>
          </Stack>
        </Stack>

        {license === 'Standard' ? (
          <Image alt="standard" src={icons[0]} sx={{ width: 24, height: 24 }} />
        ) : (
          <Stack direction="row" spacing={1.5}>
            {icons.map((icon) => (
              <Image key={icon} alt={icon} src={icon} sx={{ width: 24, height: 24 }} />
            ))}
          </Stack>
        )}

        <Stack spacing={2.5}>
          {commons.map((option) => (
            <Stack key={option} spacing={1.5} direction="row" alignItems="center">
              <Iconify
                icon="carbon:checkmark-outline"
                sx={{ color: 'primary.main', width: 20, height: 20 }}
              />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

          {options.map((option) => (
            <Stack
              key={option.title}
              direction="row"
              alignItems="center"
              sx={{
                typography: 'body2',
                ...(option.disabled && { color: 'text.disabled' }),
              }}
            >
              <Iconify
                icon={option.disabled ? 'carbon:close-outline' : 'carbon:checkmark-outline'}
                sx={{
                  mr: 2,
                  color: 'primary.main',
                  ...(option.disabled && { color: 'currentColor' }),
                }}
              />
              {option.title}
            </Stack>
          ))}
        </Stack>

        <Stack alignItems="flex-end" spacing={3}>
          <Button
            size="large"
            fullWidth
            variant={standardLicense ? 'outlined' : 'contained'}
            color={extendedLicense ? 'primary' : 'inherit'}
            target="_blank"
            rel="noopener"
            href={paths.zoneStore}
          >
            Choose Package
          </Button>

          <Link
            color="text.secondary"
            target="_blank"
            rel="noopener"
            variant="body2"
            href={paths.license}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Read license
            <Iconify icon="carbon:chevron-right" width={16} sx={{ ml: 1 }} />
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}

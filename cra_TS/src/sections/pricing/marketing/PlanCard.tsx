// @mui
import { Card, Stack, Button, Typography } from '@mui/material';
// types
import { IPricingMarketingProps } from 'src/types/pricing';
//
import Image from 'src/components/image';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  plan: IPricingMarketingProps;
};

export default function PlanCard({ plan }: Props) {
  const { license, icon, options, price, caption } = plan;

  const basicLicense = license === 'Basic';

  const starterLicense = license === 'Starter';

  const premiumLicense = license === 'Premium';

  return (
    <Card
      sx={{
        p: 5,
        pt: 8,
        boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        ...(starterLicense && {
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      {starterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 24, left: 32 }}>
          POPULAR
        </Label>
      )}

      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography variant="h4" component="div" sx={{ color: 'primary.main', mb: 2 }}>
            {license}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h3" component="span">{`$${price}`}</Typography>
            <Typography variant="h5" component="span" sx={{ color: 'text.disabled' }}>
              /mo
            </Typography>
          </Stack>
        </div>

        <Image alt="icon" src={icon} sx={{ width: 64, height: 64 }} />
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        {caption}
      </Typography>

      <Stack spacing={2} sx={{ my: 5 }}>
        {options.map((option) => (
          <Stack key={option} direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:checkmark" sx={{ mr: 2, color: 'primary.main' }} /> {option}
          </Stack>
        ))}
      </Stack>

      <Button
        fullWidth
        size="large"
        color={(premiumLicense && 'primary') || 'inherit'}
        variant={(basicLicense && 'outlined') || 'contained'}
      >
        Choose Package
      </Button>
    </Card>
  );
}

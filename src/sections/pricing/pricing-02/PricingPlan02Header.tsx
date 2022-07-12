// @mui
import { Stack, Typography } from '@mui/material';
// @types
import { Pricing02Props } from '../../../@types/pricing';
// components
import { Label, Image } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  plan: Pricing02Props;
};

export default function PricingPlan02Header({ plan }: Props) {
  const { license, caption, price, icon } = plan;

  const startLicense = plan.license === 'Start';
  const proLicense = plan.license === 'Pro';

  return (
    <Stack
      spacing={2}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      sx={{
        px: 3,
        py: 5,
        position: 'relative',
        ...(proLicense && {
          bgcolor: { md: 'primary.lighter' },
          borderRadius: '16px 16px 0 0',
        }),
      }}
    >
      {proLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          POPULAR
        </Label>
      )}

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {license}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0.5}
        sx={{
          ...(proLicense && {
            color: { md: 'primary.main' },
          }),
        }}
      >
        {!startLicense && <Typography variant="h4">$</Typography>}
        <Typography variant="h3">{price}</Typography>
        {!startLicense && <Typography variant="subtitle2">/mo</Typography>}
      </Stack>

      <Image alt={icon} src={icon} sx={{ width: 80, height: 80 }} />

      <Typography variant="body3" sx={{ color: 'text.secondary' }}>
        {caption}
      </Typography>
    </Stack>
  );
}

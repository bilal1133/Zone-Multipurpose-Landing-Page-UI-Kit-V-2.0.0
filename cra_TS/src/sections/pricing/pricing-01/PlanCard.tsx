// @mui
import { Card, Stack, Button, Typography } from '@mui/material';
// types
import { IPricing01Props } from 'src/types/pricing';
// components
import Label from 'src/components/label';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

type Props = {
  plan: IPricing01Props;
};

export default function PlanCard({ plan }: Props) {
  const { license, icon, options, price } = plan;

  const basicLicense = license === 'Basic';

  const starterLicense = license === 'Starter';

  const premiumLicense = license === 'Premium';

  return (
    <Card
      sx={{
        p: 5,
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z8,
        ...(starterLicense && {
          py: 8,
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      {starterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          POPULAR
        </Label>
      )}

      <Stack spacing={5} alignItems="center">
        <Typography variant="overline" component="div" sx={{ color: 'text.secondary' }}>
          {license}
        </Typography>

        <Image alt={icon} src={icon} sx={{ width: 80, height: 80 }} />

        <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
          {!basicLicense && (
            <Typography variant="h4" component="span">
              $
            </Typography>
          )}

          <Typography variant="h3" component="span">
            {price}
          </Typography>

          {!basicLicense && (
            <Typography variant="subtitle2" component="span">
              /mo
            </Typography>
          )}
        </Stack>

        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          {options.map((option) => (
            <Typography
              key={option.title}
              variant={option.disabled ? 'body2' : 'subtitle2'}
              sx={{
                ...(option.disabled && {
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }),
              }}
            >
              {option.title}
            </Typography>
          ))}
        </Stack>

        <Button
          fullWidth
          disabled={basicLicense}
          size="large"
          variant={basicLicense ? 'outlined' : 'contained'}
          color={premiumLicense ? 'primary' : 'inherit'}
        >
          {basicLicense && 'Current Plan'}
          {starterLicense && 'Choose Starter'}
          {premiumLicense && 'Choose Premium'}
        </Button>
      </Stack>
    </Card>
  );
}

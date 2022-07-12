// icons
import checkmarkIcon from '@iconify/icons-carbon/checkmark';
// @mui
import { Card, Stack, Button, Typography } from '@mui/material';
// @types
import { PricingMarketingProps } from '../../../@types/pricing';
//
import { Iconify, Label, TextIconLabel, Image } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  plan: PricingMarketingProps;
};

export default function PricingMarketingCard({ plan }: Props) {
  const { license, icon, options, price, caption } = plan;

  const basicLicense = license === 'Basic';
  const starterLicense = license === 'Starter';
  const premiumLicense = license === 'Premium';

  return (
    <Card
      sx={{
        p: 5,
        pt: 8,
        ...(basicLicense && {
          boxShadow: (theme) => ({ md: theme.customShadows.z4 }),
        }),
        ...(premiumLicense && {
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
          <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
            {license}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h3">{`$${price}`}</Typography>
            <Typography variant="h5" sx={{ color: 'text.disabled' }}>
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
        {options.map((option, index) => (
          <TextIconLabel
            key={index}
            icon={
              <Iconify
                icon={checkmarkIcon}
                sx={{ width: 20, height: 20, mr: 2, color: 'primary.main' }}
              />
            }
            value={option}
          />
        ))}
      </Stack>

      <Button fullWidth size="large" variant="contained" href="#">
        Get Started
      </Button>
    </Card>
  );
}

// icons
import checkmarkIcon from '@iconify/icons-carbon/checkmark';
// @mui
import { Box, Stack, Button } from '@mui/material';
// @types
import { Pricing02Props } from '../../../@types/pricing';
// components
import { Iconify } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  plan: Pricing02Props;
};

export default function PricingPlan02ContentDesktop({ plan }: Props) {
  const { options, license } = plan;

  const startLicense = license === 'Start';
  const proLicense = license === 'Pro';
  const businessLicense = license === 'Business';

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
      }}
    >
      {options.map((option) => {
        const { title, disabled } = option;

        return (
          <Stack
            key={title}
            alignItems="center"
            justifyContent="center"
            sx={{
              height: 72,
              color: 'text.secondary',
              borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
              ...(proLicense && {
                bgcolor: 'primary.lighter',
              }),
            }}
          >
            {disabled ? (
              '-'
            ) : (
              <Iconify icon={checkmarkIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
            )}
          </Stack>
        );
      })}

      <Stack
        sx={{
          py: 5,
          ...(proLicense && {
            bgcolor: 'primary.lighter',
            borderRadius: '0 0 16px 16px',
          }),
        }}
      >
        <Button
          size="large"
          variant={businessLicense ? 'outlined' : 'contained'}
          color={businessLicense ? 'inherit' : 'primary'}
          sx={{ mx: 'auto' }}
        >
          {startLicense && 'Start Free Trial'}
          {proLicense && 'Choose Pro'}
          {businessLicense && 'Contact Sale'}
        </Button>
      </Stack>
    </Box>
  );
}

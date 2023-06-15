// @mui
import { Box, Stack, Button } from '@mui/material';
// types
import { IPricing02Props } from 'src/types/pricing';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  plan: IPricing02Props;
};

export default function PlanContentDesktop({ plan }: Props) {
  const { options, license } = plan;

  const startLicense = license === 'Start';

  const proLicense = license === 'Pro';

  const businessLicense = license === 'Business';

  return (
    <Box>
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
                bgcolor: 'background.neutral',
              }),
            }}
          >
            {disabled ? (
              '-'
            ) : (
              <Iconify
                icon="carbon:checkmark"
                sx={{ width: 24, height: 24, color: 'primary.main' }}
              />
            )}
          </Stack>
        );
      })}

      <Stack
        sx={{
          py: 5,
          ...(proLicense && {
            bgcolor: 'background.neutral',
            borderRadius: '0 0 16px 16px',
          }),
        }}
      >
        <Button
          size="large"
          variant={proLicense ? 'contained' : 'outlined'}
          color="inherit"
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

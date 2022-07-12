import { useState } from 'react';
// icons
import chevronUp from '@iconify/icons-carbon/chevron-up';
import checkmarkIcon from '@iconify/icons-carbon/checkmark';
import chevronDown from '@iconify/icons-carbon/chevron-down';
import closeOutline from '@iconify/icons-carbon/close-outline';
// @mui
import { Link, Stack, Button, Collapse, Typography } from '@mui/material';
// @types
import { Pricing02Props } from '../../../@types/pricing';
// components
import { Iconify } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  plan: Pricing02Props;
};

export default function PricingPlan02ContentMobile({ plan }: Props) {
  const [open, setOpen] = useState(false);

  const { options } = plan;

  const startLicense = plan.license === 'Start';
  const proLicense = plan.license === 'Pro';
  const businessLicense = plan.license === 'Business';

  return (
    <Stack
      spacing={5}
      sx={{
        px: 3,
        pb: 5,
        display: { md: 'none' },
      }}
    >
      <div>
        <Link
          variant="subtitle2"
          color={open ? 'primary' : 'inherit'}
          onClick={() => setOpen(!open)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            ...(open && {
              mb: 5,
            }),
          }}
        >
          {open ? 'Hide' : 'Show'} all feature
          <Iconify icon={open ? chevronUp : chevronDown} sx={{ width: 20, height: 20, ml: 1 }} />
        </Link>

        <Collapse in={open}>
          <Stack spacing={2}>
            {options.map((option) => {
              const { title, disabled } = option;
              return (
                <Stack
                  key={title}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="body2"
                    sx={{
                      ...(disabled && {
                        color: 'text.disabled',
                      }),
                    }}
                  >
                    {title}
                  </Typography>

                  <Iconify
                    icon={disabled ? closeOutline : checkmarkIcon}
                    sx={{
                      width: 20,
                      height: 20,
                      color: 'primary.main',
                      ...(disabled && {
                        color: 'text.disabled',
                      }),
                    }}
                  />
                </Stack>
              );
            })}
          </Stack>
        </Collapse>
      </div>

      <Button
        fullWidth
        size="large"
        variant={businessLicense ? 'outlined' : 'contained'}
        color={businessLicense ? 'inherit' : 'primary'}
      >
        {startLicense && 'Start Free Trial'}
        {proLicense && 'Choose Pro'}
        {businessLicense && 'Contact Sale'}
      </Button>
    </Stack>
  );
}

import { useState } from 'react';
// @mui
import { Link, Stack, Button, Collapse, Typography } from '@mui/material';
// types
import { IPricing02Props } from 'src/types/pricing';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  plan: IPricing02Props;
};

export default function PlanContentMobile({ plan }: Props) {
  const [open, setOpen] = useState(false);

  const { options } = plan;

  const startLicense = plan.license === 'Start';

  const proLicense = plan.license === 'Pro';

  const businessLicense = plan.license === 'Business';

  return (
    <Stack spacing={5} sx={{ px: 3, pb: 5 }}>
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
          <Iconify icon={open ? 'carbon:chevron-up' : 'carbon:chevron-down'} sx={{ ml: 1 }} />
        </Link>

        <Collapse unmountOnExit in={open}>
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
                    icon={disabled ? 'carbon:close-outline' : 'carbon:checkmark'}
                    sx={{
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
        variant={proLicense ? 'contained' : 'outlined'}
        color="inherit"
      >
        {startLicense && 'Start Free Trial'}
        {proLicense && 'Choose Pro'}
        {businessLicense && 'Contact Sale'}
      </Button>
    </Stack>
  );
}

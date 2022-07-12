// icons
import securityIcon from '@iconify/icons-carbon/security';
// @mui
import { styled } from '@mui/material/styles';
import { Switch, Divider, Typography, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { Label, Iconify } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    height: '100%',
    padding: theme.spacing(5, 4),
    borderLeft: `dashed 1px ${theme.palette.divider}`,
  },
}));

// ----------------------------------------------------------------------

export default function CheckoutSummary() {
  return (
    <RootStyle>
      <Typography variant="h5" sx={{ mb: 5 }}>
        Summary
      </Typography>

      <Stack spacing={2.5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Subscription
          </Typography>
          <Label color="error" variant="filled">
            PREMIUM
          </Label>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Billed Monthly
          </Typography>
          <Switch color="success" defaultChecked />
        </Stack>

        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
          <Typography variant="h4">$</Typography>
          <Typography variant="h3">9.99</Typography>
          <Typography variant="subtitle2">/mo</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Total Billed</Typography>
          <Typography variant="h6">$9.99*</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', mb: 1 }} />
      </Stack>

      <Typography
        variant="caption"
        sx={{
          mt: 1,
          display: 'block',
          textAlign: 'right',
          color: 'text.secondary',
        }}
      >
        * Plus applicable taxes
      </Typography>

      <LoadingButton fullWidth size="large" variant="contained" sx={{ mt: 5, mb: 3 }}>
        Upgrade My Plan
      </LoadingButton>

      <Stack alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify icon={securityIcon} sx={{ width: 24, height: 24, color: 'primary.main' }} />
          <Typography variant="subtitle2">Secure credit card payment</Typography>
        </Stack>
        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          This is a secure 128-bit SSL encrypted payment
        </Typography>
      </Stack>
    </RootStyle>
  );
}

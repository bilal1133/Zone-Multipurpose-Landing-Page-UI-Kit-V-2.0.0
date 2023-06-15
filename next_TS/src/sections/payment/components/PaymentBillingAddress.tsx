// @mui
import { Typography, TextField, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export default function PaymentBillingAddress() {
  return (
    <div>
      <Typography variant="h5">Billing Address</Typography>

      <Stack spacing={2.5} mt={5}>
        <TextField fullWidth label="Person name" />
        <TextField fullWidth label="Phone number" />
        <TextField fullWidth label="Email" />
        <TextField fullWidth label="Address" />
      </Stack>
    </div>
  );
}

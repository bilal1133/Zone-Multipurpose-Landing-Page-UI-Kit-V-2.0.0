// @mui
import { Stack, TextField } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceAccountNewCardForm() {
  return (
    <Stack spacing={2.5}>
      <TextField
        label="Card Number"
        placeholder="XXXX XXXX XXXX XXXX"
        InputLabelProps={{ shrink: true }}
      />

      <TextField label="Card Holder" placeholder="JOHN DOE" InputLabelProps={{ shrink: true }} />

      <Stack spacing={2} direction="row">
        <TextField
          fullWidth
          label="Expiration Date"
          placeholder="MM/YY"
          InputLabelProps={{ shrink: true }}
        />
        <TextField fullWidth label="CVV/CVC" placeholder="***" InputLabelProps={{ shrink: true }} />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        sx={{ typography: 'caption', color: 'text.disabled' }}
      >
        <Iconify icon="carbon:locked" sx={{ mr: 0.5 }} />
        Your transaction is secured with SSL encryption
      </Stack>
    </Stack>
  );
}

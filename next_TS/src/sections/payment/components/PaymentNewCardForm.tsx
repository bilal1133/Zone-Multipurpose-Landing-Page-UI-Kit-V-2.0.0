// @mui
import {
  Stack,
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogProps,
  DialogActions,
  DialogContent,
} from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

interface Props extends DialogProps {
  onClose: VoidFunction;
}

export default function PaymentNewCardForm({ onClose, ...other }: Props) {
  return (
    <Dialog maxWidth="xs" onClose={onClose} {...other}>
      <DialogTitle> Add new card </DialogTitle>

      <DialogContent sx={{ overflow: 'unset' }}>
        <Stack spacing={2.5}>
          <TextField
            label="Card Number"
            placeholder="XXXX XXXX XXXX XXXX"
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Card Holder"
            placeholder="JOHN DOE"
            InputLabelProps={{ shrink: true }}
          />

          <Stack spacing={2} direction="row">
            <TextField
              fullWidth
              label="Expiration Date"
              placeholder="MM/YY"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="CVV/CVC"
              placeholder="***"
              InputLabelProps={{ shrink: true }}
            />
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
      </DialogContent>

      <DialogActions>
        <Button color="inherit" variant="outlined" onClick={onClose}>
          Cancel
        </Button>

        <Button color="inherit" variant="contained" onClick={onClose}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// icons
import informationIcon from '@iconify/icons-carbon/information';
// @mui
import { Stack, Button, Tooltip, TextField, InputAdornment } from '@mui/material';
// components
import { Iconify } from '../../components';

// ----------------------------------------------------------------------

type CheckoutNewCardFormProps = {
  onCancel: VoidFunction;
};

export default function CheckoutNewCardForm({ onCancel }: CheckoutNewCardFormProps) {
  return (
    <Stack spacing={2} sx={{ py: 3 }}>
      <TextField fullWidth size="small" label="Name on card" />

      <TextField fullWidth size="small" label="Card number" />

      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
        <TextField size="small" label="MM/YY" />
        <TextField
          size="small"
          label="CVV"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip
                  title="Three-digit number on the back of your VISA card"
                  placement="top"
                  arrow
                >
                  <div>
                    <Iconify icon={informationIcon} sx={{ mt: 0.75, width: 20, height: 20 }} />
                  </div>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button fullWidth color="inherit" variant="contained" onClick={onCancel}>
          Cancel
        </Button>

        <Button fullWidth variant="contained">
          Create
        </Button>
      </Stack>
    </Stack>
  );
}

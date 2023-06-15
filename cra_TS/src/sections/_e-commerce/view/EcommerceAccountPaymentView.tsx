// @mui
import { Box, Stack, Button, Divider, Typography } from '@mui/material';
// _mock
import _mock from 'src/_mock';
//
import { EcommerceAccountLayout } from '../layout';
import { EcommerceAccountPaymentCard, EcommerceAccountNewCardForm } from '../account/payment';

// ----------------------------------------------------------------------

const CARD_OPTIONS = [
  {
    id: _mock.id(1),
    value: 'paypal',
    label: 'Paypal',
    cardNumber: '2904 1902 1802 1234',
    cardHolder: _mock.name.fullName(1),
    expirationDate: '08/24',
    isPrimary: false,
  },
  {
    id: _mock.id(2),
    value: 'mastercard',
    label: 'Mastercard',
    cardNumber: '2904 1902 1802 5678',
    cardHolder: _mock.name.fullName(2),
    expirationDate: '08/24',
    isPrimary: true,
  },
  {
    id: _mock.id(3),
    value: 'visa',
    label: 'Visa',
    cardNumber: '2904 1902 1802 7890',
    cardHolder: _mock.name.fullName(3),
    expirationDate: '08/24',
    isPrimary: false,
  },
];

// ----------------------------------------------------------------------

export default function EcommerceAccountPaymentView() {
  return (
    <EcommerceAccountLayout>
      <Stack spacing={5}>
        <Stack spacing={3}>
          <Typography variant="h5">Payment Method</Typography>

          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          >
            {CARD_OPTIONS.map((card) => (
              <EcommerceAccountPaymentCard key={card.id} card={card} />
            ))}
          </Box>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

        <Stack spacing={3}>
          <Typography variant="h5">Add New Card</Typography>

          <EcommerceAccountNewCardForm />

          <Button color="inherit" size="large" variant="contained" sx={{ alignSelf: 'flex-end' }}>
            Save
          </Button>
        </Stack>
      </Stack>
    </EcommerceAccountLayout>
  );
}

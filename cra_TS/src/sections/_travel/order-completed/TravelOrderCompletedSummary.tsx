// @mui
import { Typography, Stack, Divider } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
import { fCurrency } from 'src/utils/formatNumber';
// components
import Iconify, { IconifyProps } from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelOrderCompletedSummary() {
  return (
    <Stack
      spacing={3}
      sx={{
        p: 5,
        borderRadius: 2,
        border: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      <Typography variant="h5">Booking Details</Typography>

      <LineItem icon="carbon:calendar" label="Departure day" value={fDate(new Date())} />

      <LineItem icon="carbon:events" label="Guests" value="2 guest" />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <LineItem icon="carbon:cube" label="Booking code" value="KU_H8SDM" />

      <LineItem icon="carbon:calendar" label="Booking day" value={fDate(new Date())} />

      <LineItem icon="carbon:receipt" label="Total" value={fCurrency(1112)} />

      <LineItem icon="carbon:purchase" label="Payment method" value="Paypal" />
    </Stack>
  );
}

// ----------------------------------------------------------------------

type LineItemProps = {
  icon: IconifyProps;
  label: string;
  value: any;
};

function LineItem({ icon, label, value }: LineItemProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ typography: 'body2', color: 'text.secondary' }}
    >
      <Iconify icon={icon} width={24} sx={{ mr: 1 }} /> {label}
      <Typography
        variant="subtitle2"
        sx={{ color: 'text.primary', flexGrow: 1, textAlign: 'right' }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Typography, Stack, Box, Button, Divider, Card } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// @types
import { TourProps } from '../../../@types/travel';
//
import { TravelTourFilterGuests, TravelTourFilterTime } from '../filters';

// ----------------------------------------------------------------------

type Props = {
  tour: TourProps;
};

export default function TravelTourReserveForm({ tour }: Props) {
  const router = useRouter();

  const [departureDay, setDepartureDay] = useState<Date | null>(null);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
  });

  const { price, priceSale } = tour;

  const totalGuests = guests.adults + guests.children;

  const handleChangeReserve = () => {
    router.push(Routes.travel.checkout);
  };

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" sx={{ typography: 'h4' }}>
          {priceSale > 0 && (
            <Box sx={{ color: 'grey.500', textDecoration: 'line-through', mr: 1 }}>
              {fCurrency(priceSale)}
            </Box>
          )}
          {fCurrency(price)}
          <Typography variant="body2" component="span" sx={{ color: 'text.disabled' }}>
            /Tour
          </Typography>
        </Stack>

        <Stack spacing={1.5}>
          <Box sx={{ bgcolor: 'grey.5008', py: 0.5, borderRadius: 1 }}>
            <TravelTourFilterTime departureDay={departureDay} setDepartureDay={setDepartureDay} />
          </Box>
          <Box sx={{ bgcolor: 'grey.5008', py: 0.5, borderRadius: 1 }}>
            <TravelTourFilterGuests guests={guests} setGuests={setGuests} />
          </Box>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Service charge
          </Typography>
          <Typography variant="body1">{fCurrency(priceSale)}</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Discount
          </Typography>
          <Typography variant="body1">-</Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">{fCurrency(priceSale)}</Typography>
        </Stack>

        <Button
          size="large"
          variant="contained"
          disabled={!departureDay || totalGuests === 0}
          onClick={handleChangeReserve}
        >
          Reserve
        </Button>
      </Stack>
    </Card>
  );
}

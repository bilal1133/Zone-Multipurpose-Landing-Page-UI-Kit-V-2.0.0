import { useState } from 'react';
// @mui
import { Stack, Button, Divider, StackProps } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
//
import { TravelFilterTime, TravelFilterGuests, TravelFilterLocation } from './components';

// ----------------------------------------------------------------------

export default function TravelFilters({ sx, ...other }: StackProps) {
  const [departureDay, setDepartureDay] = useState<Date | null>(null);

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
  });

  const handleChangeDepartureDay = (newValue: Date | null) => {
    setDepartureDay(newValue);
  };

  const handleIncrementGuests = (guest?: string) => {
    if (guest === 'children') {
      setGuests({ ...guests, children: guests.children + 1 });
    } else {
      setGuests({ ...guests, adults: guests.adults + 1 });
    }
  };

  const handleDecreaseGuests = (guest?: string) => {
    if (guest === 'children') {
      setGuests({ ...guests, children: guests.children - 1 });
    } else {
      setGuests({ ...guests, adults: guests.adults - 1 });
    }
  };

  return (
    <Stack
      spacing={2.5}
      alignItems={{ md: 'center' }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{ p: 4, borderRadius: 2, bgcolor: 'background.neutral', ...sx }}
      {...other}
    >
      <TravelFilterLocation />

      <Divider flexItem orientation="vertical" />

      <TravelFilterTime
        departureDay={departureDay}
        onChangeDepartureDay={handleChangeDepartureDay}
      />

      <Divider flexItem orientation="vertical" />

      <TravelFilterGuests
        guests={guests}
        onDecreaseGuests={handleDecreaseGuests}
        onIncrementGuests={handleIncrementGuests}
      />

      <Button
        size="large"
        color="secondary"
        variant="contained"
        sx={{
          px: 0,
          flexShrink: 0,
          minWidth: { xs: 1, md: 48 },
        }}
      >
        <Iconify icon="carbon:search" />
      </Button>
    </Stack>
  );
}

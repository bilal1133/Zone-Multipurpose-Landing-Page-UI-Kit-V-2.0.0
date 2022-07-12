import { Dispatch, SetStateAction } from 'react';
// icons
import eventsIcon from '@iconify/icons-carbon/events';
import calendarIcon from '@iconify/icons-carbon/calendar';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Grid, Stack, Divider, Typography, Avatar } from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// @types
import { TourProps } from '../../../@types/travel';
// components
import { Image, RatingLabel, Iconify, TextMaxLine } from '../../../components';
//
import { TravelTourFilterGuests, TravelTourFilterTime } from '../filters';

// ----------------------------------------------------------------------

const resetInputStyles = {
  '& .MuiFilledInput-root': {
    padding: 0,
  },
  '& .MuiFilledInput-input': {
    height: '26px !important',
  },
  '& .MuiInputAdornment-root': {
    display: 'none',
  },
};

// ----------------------------------------------------------------------

type Props = {
  tour: TourProps;
  guests: {
    adults: number;
    children: number;
  };
  setGuests: Dispatch<
    SetStateAction<{
      adults: number;
      children: number;
    }>
  >;
  departureDay: Date | null;
  setDepartureDay: Dispatch<SetStateAction<Date | null>>;
  isSubmitting: boolean;
};

export default function TravelCheckOutSummary({
  tour,
  guests,
  setGuests,
  departureDay,
  setDepartureDay,
  isSubmitting,
}: Props) {
  const { coverImg, slug, ratings, reviews, price, tourGuide } = tour;

  return (
    <Card>
      <Stack sx={{ p: 4, pb: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Image alt={slug} src={coverImg} ratio="1/1" sx={{ borderRadius: 2 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextMaxLine variant="h5">{slug}</TextMaxLine>

            <RatingLabel ratings={ratings} reviews={reviews} sx={{ mt: 2 }} />

            <Divider sx={{ borderStyle: 'dashed', my: 2.5 }} />

            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Avatar src={tourGuide.picture} />
              <div>
                <Typography variant="body3" sx={{ color: 'text.disabled' }}>
                  Tour guide by
                </Typography>
                <Typography variant="subtitle2">{tourGuide.name}</Typography>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack sx={{ p: 4, pb: 3 }}>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderStyle: 'dashed', display: { xs: 'none', sm: 'block' } }}
            />
          }
          sx={{
            p: 2.5,
            borderRadius: 2,
            color: 'text.disabled',
            bgcolor: 'background.neutral',
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ width: 1 }}>
            <Iconify icon={eventsIcon} sx={{ width: 24, height: 24, flexShrink: 0 }} />
            <Stack spacing={0.5}>
              <Typography variant="caption">Departure day</Typography>
              <TravelTourFilterGuests
                guests={guests}
                setGuests={setGuests}
                sx={{ ...resetInputStyles }}
              />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1.5} sx={{ width: 1 }}>
            <Iconify icon={calendarIcon} sx={{ width: 24, height: 24, flexShrink: 0 }} />
            <Stack spacing={0.5}>
              <Typography variant="caption">Guests</Typography>
              <TravelTourFilterTime
                departureDay={departureDay}
                setDepartureDay={setDepartureDay}
                sx={{ ...resetInputStyles }}
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 3, mb: 2 }}
        >
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Service charge
          </Typography>
          <Typography variant="body1">{fCurrency(price)}</Typography>
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
          <Typography variant="h5">{fCurrency(price)}</Typography>
        </Stack>

        <LoadingButton type="submit" size="large" variant="contained" loading={isSubmitting}>
          Complete Booking
        </LoadingButton>
      </Stack>
    </Card>
  );
}

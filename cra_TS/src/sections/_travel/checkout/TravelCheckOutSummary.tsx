// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Stack, Divider, Typography, Avatar, Box, Link } from '@mui/material';
// utils
import { fCurrency, fShortenNumber } from 'src/utils/formatNumber';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// types
import { ITourProps } from 'src/types/tour';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
//
import { TravelFilterGuests, TravelFilterTime } from '../tour/filters/components';

// ----------------------------------------------------------------------

type Props = {
  tour: ITourProps;
  guests: {
    adults: number;
    children: number;
  };
  isSubmitting: boolean;
  departureDay: Date | null;
  onDecreaseGuests: (guest?: string) => void;
  onIncrementGuests: (guest?: string) => void;
  onChangeDepartureDay: (newValue: Date | null) => void;
};

export default function TravelCheckOutSummary({
  tour,
  guests,
  departureDay,
  isSubmitting,
  onDecreaseGuests,
  onIncrementGuests,
  onChangeDepartureDay,
}: Props) {
  const isSmUp = useResponsive('up', 'sm');

  const { coverImg, slug, ratings, reviews, price, tourGuide } = tour;

  return (
    <Card>
      <Box
        sx={{
          p: 4,
          pb: 0,
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          },
        }}
      >
        <Image alt={slug} src={coverImg} ratio="1/1" sx={{ borderRadius: 2 }} />

        <Stack>
          <TextMaxLine variant="h5" sx={{ mb: 2 }}>
            {slug}
          </TextMaxLine>

          <Stack spacing={0.5} direction="row" alignItems="center">
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

            <Box sx={{ typography: 'h6' }}>
              {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
            </Box>

            {reviews && (
              <Link variant="body2" sx={{ color: 'text.secondary' }}>
                ({fShortenNumber(reviews)} reviews)
              </Link>
            )}
          </Stack>

          <Divider sx={{ borderStyle: 'dashed', my: 2.5 }} />

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Avatar src={tourGuide.picture} />

            <div>
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                Tour guide by
              </Typography>

              <Typography variant="subtitle2">{tourGuide.name}</Typography>
            </div>
          </Stack>
        </Stack>
      </Box>

      <Stack sx={{ p: 4, pb: 3 }}>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            p: 2.5,
            borderRadius: 2,
            color: 'text.disabled',
            bgcolor: 'background.neutral',
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ width: 1 }}>
            <Iconify icon="carbon:events" width={24} />

            <Stack spacing={0.5}>
              <Typography variant="caption">Departure day</Typography>
              <TravelFilterGuests
                startAdornment={null}
                guests={guests}
                onDecreaseGuests={onDecreaseGuests}
                onIncrementGuests={onIncrementGuests}
                sx={{ height: 'unset', color: 'text.primary' }}
              />
            </Stack>
          </Stack>

          {isSmUp && <Divider flexItem orientation="vertical" sx={{ borderStyle: 'dashed' }} />}

          <Stack direction="row" spacing={1.5} sx={{ width: 1 }}>
            <Iconify icon="carbon:calendar" width={24} />
            <Stack spacing={0.5}>
              <Typography variant="caption">Guests</Typography>
              <TravelFilterTime
                departureDay={departureDay}
                onChangeDepartureDay={onChangeDepartureDay}
                sx={{
                  height: 'unset',
                  color: 'text.primary',
                  '& .MuiInputAdornment-root': { display: 'none' },
                }}
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
          <Typography variant="body2">{fCurrency(price)}</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Discount
          </Typography>
          <Typography variant="body2">-</Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">{fCurrency(price)}</Typography>
        </Stack>

        <LoadingButton
          type="submit"
          size="large"
          variant="contained"
          color="inherit"
          loading={isSubmitting}
        >
          Complete Booking
        </LoadingButton>
      </Stack>
    </Card>
  );
}

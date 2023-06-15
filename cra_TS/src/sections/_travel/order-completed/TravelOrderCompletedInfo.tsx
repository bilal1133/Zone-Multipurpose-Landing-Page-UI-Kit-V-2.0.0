// @mui
import { Typography, Stack, Avatar, Box, Link } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Iconify from 'src/components/iconify';
// types
import { ITourProps } from 'src/types/tour';

// ----------------------------------------------------------------------

type Props = {
  tour: ITourProps;
};

export default function TravelOrderCompletedInfo({ tour }: Props) {
  const { slug, ratings, reviews, tourGuide } = tour;

  return (
    <Stack
      spacing={2}
      direction={{ xs: 'column', md: 'row' }}
      justifyContent={{ md: 'space-between' }}
    >
      <Stack spacing={2}>
        <Typography variant="h5">{slug}</Typography>

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
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Avatar src={tourGuide?.picture} />
        <div>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Tour guide by
          </Typography>
          <Typography variant="subtitle2">{tourGuide?.name}</Typography>
        </div>
      </Stack>
    </Stack>
  );
}

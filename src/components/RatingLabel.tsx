// icons
import starFilled from '@iconify/icons-carbon/star-filled';
// @mui
import { Typography, Stack, Link, StackProps } from '@mui/material';
// utils
import { fShortenNumber } from '../utils/formatNumber';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  ratings: number;
  reviews?: number;
}

export default function RatingLabel({ reviews, ratings, ...other }: Props) {
  return (
    <Stack spacing={0.5} direction="row" alignItems="center" {...other}>
      <Iconify icon={starFilled} sx={{ width: 20, height: 20, color: 'warning.main' }} />
      <Typography variant="h6">{Number.isInteger(ratings) ? `${ratings}.0` : ratings}</Typography>

      {reviews && (
        <Link variant="body2" sx={{ color: 'text.secondary' }}>
          ({fShortenNumber(reviews)} reviews)
        </Link>
      )}
    </Stack>
  );
}

// @mui

import { Paper, Stack, Rating, Button, RadioGroup, Typography } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Iconify from 'src/components/iconify';
//
import { ReviewProgress } from '../components';

// ----------------------------------------------------------------------

type Props = {
  reviewsNumber: number;
  ratingsNumber: number;
  onOpenForm: VoidFunction;
};

export default function ReviewSummary({ reviewsNumber, ratingsNumber, onOpenForm }: Props) {
  return (
    <Paper variant="outlined" sx={{ p: 4, pr: 3, borderRadius: 2 }}>
      <Stack spacing={3}>
        <Stack spacing={3} direction="row" alignItems="center">
          <Typography variant="h1"> {ratingsNumber}</Typography>

          <Stack spacing={0.5}>
            <Rating value={ratingsNumber} readOnly precision={0.1} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {fShortenNumber(reviewsNumber)} reviews
            </Typography>
          </Stack>
        </Stack>

        <RadioGroup>
          <ReviewProgress />
        </RadioGroup>

        <Button
          size="large"
          fullWidth
          startIcon={<Iconify icon="carbon:edit" width={24} />}
          onClick={onOpenForm}
        >
          Write a Review
        </Button>
      </Stack>
    </Paper>
  );
}

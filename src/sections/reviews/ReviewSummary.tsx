import { ChangeEvent } from 'react';
// icons
import starIcon from '@iconify/icons-carbon/star';
import editIcon from '@iconify/icons-carbon/edit';
import starFilled from '@iconify/icons-carbon/star-filled';
// @mui
import {
  Box,
  Paper,
  Stack,
  Radio,
  Rating,
  Button,
  RadioGroup,
  Typography,
  LinearProgress,
  FormControlLabel,
} from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import { Iconify } from '../../components';

// ----------------------------------------------------------------------

const RATINGS = [
  { value: '5start', number: 5212 },
  { value: '4start', number: 2442 },
  { value: '3start', number: 523 },
  { value: '2start', number: 423 },
  { value: '1start', number: 80 },
];

// ----------------------------------------------------------------------

type Props = {
  reviews: number;
  ratings: number;
  filter: string | null;
  onChangeFilters: (event: ChangeEvent<HTMLInputElement>) => void;
  onOpenForm: VoidFunction;
};

export default function ReviewSummary({
  reviews,
  ratings,
  filter,
  onOpenForm,
  onChangeFilters,
}: Props) {
  const totals = RATINGS.map((rating) => rating.number).reduce(
    (accumulator: number, curr: number) => accumulator + curr
  );

  return (
    <>
      <Paper variant="outlined" sx={{ p: 4, pr: 3, borderRadius: 2 }}>
        <Stack spacing={3}>
          <Stack spacing={3} direction="row" alignItems="center">
            <Typography variant="h1"> {ratings}</Typography>
            <Stack spacing={0.5}>
              <Rating value={ratings} readOnly precision={0.1} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {fShortenNumber(reviews)} reviews
              </Typography>
            </Stack>
          </Stack>

          <RadioGroup value={filter} onChange={onChangeFilters}>
            <Stack spacing={0.5}>
              {RATINGS.map((rating, index) => (
                <ProgressItem
                  key={rating.value}
                  rating={rating}
                  index={index}
                  totals={totals}
                  selected={filter === rating.value}
                />
              ))}
            </Stack>
          </RadioGroup>
          <Button
            size="large"
            fullWidth
            startIcon={<Iconify icon={editIcon} sx={{ width: 24, height: 24 }} />}
            onClick={onOpenForm}
          >
            Write a Review
          </Button>
        </Stack>
      </Paper>
    </>
  );
}

// ----------------------------------------------------------------------

type ProgressItemProps = {
  rating: {
    value: string;
    number: number;
  };
  index: number;
  totals: number;
  selected: boolean;
};

export function ProgressItem({ rating, totals, index, selected }: ProgressItemProps) {
  const { value, number } = rating;

  return (
    <FormControlLabel
      value={value}
      control={<Radio sx={{ display: 'none' }} />}
      label={
        <Stack alignItems="center" direction="row">
          <Stack direction="row" alignItems="center">
            <Box sx={{ width: 12, typography: 'subtitle1', textAlign: 'center', mr: 0.5 }}>
              {5 - index}
            </Box>
            <Iconify icon={selected ? starFilled : starIcon} sx={{ width: 16, height: 16 }} />
          </Stack>

          <LinearProgress
            color="inherit"
            variant="determinate"
            value={(number / totals) * 100}
            sx={{
              mx: 2,
              width: 1,
              height: 6,
              '&:before': { opacity: 1, bgcolor: 'grey.50012' },
              '& .MuiLinearProgress-bar': {
                ...(!selected && {
                  bgcolor: 'text.disabled',
                }),
              },
            }}
          />

          <Typography
            variant="body2"
            sx={{
              minWidth: 40,
              color: 'text.disabled',
              ...(selected && {
                color: 'text.primary',
                fontWeight: 'fontWeightBold',
              }),
            }}
          >
            {fShortenNumber(number)}
          </Typography>
        </Stack>
      }
      sx={{
        mx: 0,
        '&:hover': { opacity: 0.48 },
        '& .MuiFormControlLabel-label': {
          width: 1,
        },
      }}
    />
  );
}

// @mui
import { Stack, RadioGroup, StackProps } from '@mui/material';
//
import ReviewProgressItem from './ReviewProgressItem';

// ----------------------------------------------------------------------

const RATINGS = [
  { value: '5start', number: 5212 },
  { value: '4start', number: 2442 },
  { value: '3start', number: 523 },
  { value: '2start', number: 423 },
  { value: '1start', number: 80 },
];

// ----------------------------------------------------------------------

export default function ReviewProgress({ ...other }: StackProps) {
  const totals = RATINGS.map((rating) => rating.number).reduce(
    (accumulator: number, curr: number) => accumulator + curr
  );

  return (
    <RadioGroup>
      <Stack spacing={2} {...other}>
        {RATINGS.map((rating, index) => (
          <ReviewProgressItem key={rating.value} rating={rating} index={index} totals={totals} />
        ))}
      </Stack>
    </RadioGroup>
  );
}

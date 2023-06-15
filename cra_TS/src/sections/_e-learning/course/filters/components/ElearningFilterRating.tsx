// @mui
import { Radio, FormControlLabel, RadioGroup, Stack, Rating } from '@mui/material';

// ----------------------------------------------------------------------

const RATINGS = ['up_4_stars', 'up_3_stars', 'up_2_stars'];

type Props = {
  filterRating: string | null;
  onChangeRating: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ElearningFilterRating({ filterRating, onChangeRating }: Props) {
  return (
    <RadioGroup value={filterRating} onChange={onChangeRating}>
      <Stack spacing={2} alignItems="flex-start">
        {RATINGS.map((rating) => (
          <FormControlLabel
            key={rating}
            value={rating}
            control={<Radio sx={{ display: 'none' }} />}
            label={
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  ...(filterRating === rating && {
                    fontWeight: 'fontWeightSemiBold',
                  }),
                }}
              >
                <Rating
                  size="small"
                  value={3}
                  readOnly
                  sx={{
                    mr: 1,
                    ...(filterRating === rating && {
                      opacity: 0.48,
                    }),
                  }}
                />
                & Up
              </Stack>
            }
            sx={{
              m: 0,
              '&:hover': { opacity: 0.48 },
            }}
          />
        ))}
      </Stack>
    </RadioGroup>
  );
}

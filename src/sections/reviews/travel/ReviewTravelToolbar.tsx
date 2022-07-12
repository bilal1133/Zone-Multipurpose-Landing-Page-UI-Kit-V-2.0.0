// @mui
import {
  Stack,
  Button,
  Select,
  MenuItem,
  Typography,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

const MenuProps = {
  PaperProps: {
    sx: {
      px: 1,
      '& .MuiList-root': {
        py: 0.5,
      },
    },
  },
};

// ----------------------------------------------------------------------

type Props = {
  sort: string;
  totalReview: number;
  onOpenReview: VoidFunction;
  onChangeSort: (event: SelectChangeEvent) => void;
};

export default function ReviewTravelToolbar({
  sort,
  totalReview,
  onOpenReview,
  onChangeSort,
}: Props) {
  return (
    <Stack
      spacing={5}
      alignItems={{ md: 'center' }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{ mb: 5 }}
    >
      <Typography variant="h4" sx={{ width: 1 }}>
        {totalReview} Reviews
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" flexShrink={0}>
        <FormControl
          variant="filled"
          sx={{
            minWidth: 160,
            '& .MuiFilledInput-input': { py: '11px' },
          }}
        >
          <Select value={sort} onChange={onChangeSort} MenuProps={MenuProps}>
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value} sx={{ width: 200, my: 0.5 }}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button size="large" variant="contained" color="inherit" onClick={onOpenReview}>
          Write a Review
        </Button>
      </Stack>
    </Stack>
  );
}

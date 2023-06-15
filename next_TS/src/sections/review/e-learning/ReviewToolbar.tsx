// @mui
import { Stack, Select, MenuItem, Typography, FormControl, SelectChangeEvent } from '@mui/material';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

const inputStyle = {
  width: { md: 140 },
  '& .MuiSelect-select': {
    py: 1.35,
  },
};

const MenuProps = {
  PaperProps: {
    sx: {
      px: 1,
    },
  },
};

// ----------------------------------------------------------------------

type Props = {
  sort: string;
  onChangeSort: (event: SelectChangeEvent) => void;
};

export default function ReviewToolbar({ sort, onChangeSort }: Props) {
  return (
    <Stack spacing={5} alignItems="center" direction="row" sx={{ mb: 5 }}>
      <Typography variant="h4" sx={{ width: 1 }}>
        Reviews
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" flexShrink={0}>
        <FormControl hiddenLabel variant="filled" size="small" sx={inputStyle}>
          <Select value={sort} onChange={onChangeSort} MenuProps={MenuProps}>
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}

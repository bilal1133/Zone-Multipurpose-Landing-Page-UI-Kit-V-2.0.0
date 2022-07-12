// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// ----------------------------------------------------------------------

const DURATIONS = ['0 - 1 Hour', '1 - 3 Hours', '3 - 6 Hours', '6 - 18 Hours', '18+ Hours'];

const inputStyle = {
  '& .MuiFilledInput-input': { py: 2 },
};

const ITEM_HEIGHT = 40;

const MenuProps = {
  PaperProps: {
    sx: {
      px: 1,
      maxHeight: ITEM_HEIGHT * 5,
      '& .MuiList-root': {
        py: 0.5,
      },
    },
  },
};

const placeholder = (
  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
    All Duration
  </Typography>
);

// ----------------------------------------------------------------------

type Props = {
  filterDuration: string[];
  onChangeDuration: (event: SelectChangeEvent<string[]>) => void;
};

export default function ElearningCourseDurationFilter({ filterDuration, onChangeDuration }: Props) {
  return (
    <FormControl fullWidth variant="filled" sx={{ ...inputStyle }}>
      <Select
        multiple
        displayEmpty
        value={filterDuration}
        onChange={onChangeDuration}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return placeholder;
          }
          return (
            <Typography variant="subtitle2" component="span">
              {selected.join(', ')}
            </Typography>
          );
        }}
      >
        {DURATIONS.map((duration) => (
          <MenuItem key={duration} value={duration} sx={{ p: 0, my: 0.5 }}>
            <Checkbox size="small" checked={filterDuration.includes(duration)} />
            {duration}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

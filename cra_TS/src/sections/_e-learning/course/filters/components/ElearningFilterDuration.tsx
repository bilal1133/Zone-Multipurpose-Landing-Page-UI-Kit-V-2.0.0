// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//
import { inputStyle, menuItemStyle, MenuProps } from '../styles';

// ----------------------------------------------------------------------

const DURATIONS = ['0 - 1 Hour', '1 - 3 Hours', '3 - 6 Hours', '6 - 18 Hours', '18+ Hours'];

// ----------------------------------------------------------------------

type Props = {
  filterDuration: string[];
  onChangeDuration: (event: SelectChangeEvent<string[]>) => void;
};

export default function ElearningFilterDuration({ filterDuration, onChangeDuration }: Props) {
  return (
    <FormControl fullWidth variant="filled" sx={inputStyle}>
      <Select
        multiple
        displayEmpty
        value={filterDuration}
        onChange={onChangeDuration}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                All Duration
              </Typography>
            );
          }
          return (
            <Typography variant="subtitle2" component="span">
              {selected.join(', ')}
            </Typography>
          );
        }}
      >
        {DURATIONS.map((duration) => (
          <MenuItem key={duration} value={duration} sx={menuItemStyle}>
            <Checkbox size="small" checked={filterDuration.includes(duration)} />
            {duration}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

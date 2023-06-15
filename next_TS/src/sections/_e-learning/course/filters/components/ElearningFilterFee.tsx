// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//
import { inputStyle, menuItemStyle, MenuProps } from '../styles';

// ----------------------------------------------------------------------

const FEES = ['Free', 'Paid'];

// ----------------------------------------------------------------------

type Props = {
  filterFee: string[];
  onChangeFee: (event: SelectChangeEvent<string[]>) => void;
};

export default function ElearningFilterFee({ filterFee, onChangeFee }: Props) {
  return (
    <FormControl fullWidth variant="filled" sx={inputStyle}>
      <Select
        multiple
        displayEmpty
        value={filterFee}
        onChange={onChangeFee}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                All Fee
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
        {FEES.map((type) => (
          <MenuItem key={type} value={type} sx={menuItemStyle}>
            <Checkbox size="small" checked={filterFee.includes(type)} />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

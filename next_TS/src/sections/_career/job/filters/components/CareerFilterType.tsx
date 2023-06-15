// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//
import { inputStyle, menuItemStyle, MenuProps } from '../styles';

// ----------------------------------------------------------------------

const JOB_TYPES = ['Part time', 'Full time', 'Freelance'];

// ----------------------------------------------------------------------

type Props = {
  filterType: string[];
  onChangeJobType: (event: SelectChangeEvent<string[]>) => void;
};

export default function CareerFilterType({ filterType, onChangeJobType }: Props) {
  return (
    <FormControl fullWidth hiddenLabel variant="filled" sx={inputStyle}>
      <Select
        multiple
        displayEmpty
        value={filterType}
        onChange={onChangeJobType}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                Job type
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
        {JOB_TYPES.map((type) => (
          <MenuItem key={type} value={type} sx={menuItemStyle}>
            <Checkbox size="small" disableRipple checked={filterType.includes(type)} />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//
import { inputStyle, menuItemStyle, MenuProps } from '../styles';

// ----------------------------------------------------------------------

const JOB_LEVELS = [
  'Manager',
  'Intern/Student',
  'No experience',
  'Senior',
  'Supervisor',
  'Director',
];

// ----------------------------------------------------------------------

type Props = {
  filterLevel: string[];
  onChangeJobType: (event: SelectChangeEvent<string[]>) => void;
};

export default function CareerFilterLevel({ filterLevel, onChangeJobType }: Props) {
  return (
    <FormControl fullWidth hiddenLabel variant="filled" sx={inputStyle}>
      <Select
        multiple
        displayEmpty
        value={filterLevel}
        onChange={onChangeJobType}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                All levels
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
        {JOB_LEVELS.map((type) => (
          <MenuItem key={type} value={type} sx={menuItemStyle}>
            <Checkbox size="small" disableRipple checked={filterLevel.includes(type)} />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

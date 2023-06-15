// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//
import { inputStyle, menuItemStyle, MenuProps } from '../styles';

// ----------------------------------------------------------------------

const JOB_BENEFITS = [
  'Free parking',
  'Bonus commission',
  'Travel',
  'Training',
  'Device support',
  'Health care',
];

// ----------------------------------------------------------------------

type Props = {
  filterBenefits: string[];
  onChangeJobBenefits: (event: SelectChangeEvent<string[]>) => void;
};

export default function CareerFilterBenefits({ filterBenefits, onChangeJobBenefits }: Props) {
  return (
    <FormControl fullWidth hiddenLabel variant="filled" sx={inputStyle}>
      <Select
        multiple
        displayEmpty
        value={filterBenefits}
        onChange={onChangeJobBenefits}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                Benefits
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
        {JOB_BENEFITS.map((type) => (
          <MenuItem key={type} value={type} sx={menuItemStyle}>
            <Checkbox size="small" disableRipple checked={filterBenefits.includes(type)} />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

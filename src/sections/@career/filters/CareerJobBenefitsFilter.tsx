// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// ----------------------------------------------------------------------

const JOB_BENEFITS = [
  'Free parking',
  'Bonus commission',
  'Travel',
  'Training',
  'Device support',
  'Health care',
];

const inputStyle = {
  maxWidth: { xs: 1, md: 120 },
  '& .MuiFilledInput-input': { py: { xs: '15px', md: 0.5 } },
  '& .MuiSvgIcon-root': { color: 'text.disabled', width: 18, height: 18 },
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
    Benefits
  </Typography>
);

// ----------------------------------------------------------------------

type Props = {
  filterBenefits: string[];
  onChangeJobBenefits: (event: SelectChangeEvent<string[]>) => void;
};

export default function CareerJobBenefitsFilter({ filterBenefits, onChangeJobBenefits }: Props) {
  return (
    <FormControl variant="filled" sx={{ ...inputStyle }}>
      <Select
        multiple
        displayEmpty
        value={filterBenefits}
        onChange={onChangeJobBenefits}
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
        {JOB_BENEFITS.map((type) => (
          <MenuItem
            key={type}
            value={type}
            sx={{
              p: 0,
              my: 0.5,
              width: { xs: 1, md: 200 },
            }}
          >
            <Checkbox size="small" checked={filterBenefits.includes(type)} />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

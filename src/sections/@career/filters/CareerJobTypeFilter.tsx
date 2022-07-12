// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// ----------------------------------------------------------------------

const JOB_TYPES = ['Part time', 'Full time', 'Freelance'];

const inputStyle = {
  maxWidth: { xs: 1, md: 120 },
  '& .MuiFilledInput-input': { py: { xs: '15px', md: 0.5 } },
  '& .MuiSvgIcon-root': { color: 'text.disabled', width: 18, height: 18 },
};

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

const placeholder = (
  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
    Job type
  </Typography>
);

// ----------------------------------------------------------------------

type Props = {
  filterType: string[];
  onChangeJobType: (event: SelectChangeEvent<string[]>) => void;
};

export default function CareerJobTypeFilter({ filterType, onChangeJobType }: Props) {
  return (
    <FormControl variant="filled" sx={{ ...inputStyle }}>
      <Select
        multiple
        displayEmpty
        value={filterType}
        onChange={onChangeJobType}
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
        {JOB_TYPES.map((type) => (
          <MenuItem
            key={type}
            value={type}
            sx={{
              p: 0,
              my: 0.5,
              width: { xs: 1, md: 160 },
            }}
          >
            <Checkbox size="small" checked={filterType.includes(type)} />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

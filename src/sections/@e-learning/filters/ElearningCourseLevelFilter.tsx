// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// ----------------------------------------------------------------------

const LEVELS = ['Beginner', 'Intermediate', 'Expert'];

const inputStyle = {
  '& .MuiFilledInput-input': { py: 2 },
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
    All levels
  </Typography>
);

// ----------------------------------------------------------------------

type Props = {
  filterLevel: string[];
  onChangeLevel: (event: SelectChangeEvent<string[]>) => void;
};

export default function ElearningCourseLevelFilter({ filterLevel, onChangeLevel }: Props) {
  return (
    <FormControl fullWidth variant="filled" sx={{ ...inputStyle }}>
      <Select
        multiple
        displayEmpty
        value={filterLevel}
        onChange={onChangeLevel}
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
        {LEVELS.map((type) => (
          <MenuItem key={type} value={type} sx={{ p: 0, my: 0.5 }}>
            <Checkbox size="small" checked={filterLevel.includes(type)} />
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

// @mui
import { Box, Autocomplete, Checkbox, TextField } from '@mui/material';
// _mock
import _mock from 'src/_mock';

// ----------------------------------------------------------------------

type Props = {
  filterCategories: string[];
  onChangeCategory: (keyword: string[]) => void;
};

export default function ElearningFilterCategories({ filterCategories, onChangeCategory }: Props) {
  return (
    <Autocomplete
      multiple
      limitTags={1}
      disableCloseOnSelect
      options={_mock.jobCategories}
      getOptionLabel={(option) => option}
      value={filterCategories}
      onChange={(event, value) => onChangeCategory(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          variant="filled"
          placeholder="All Categories"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            sx: { pb: 1 },
          }}
        />
      )}
      ChipProps={{ color: 'info', size: 'small' }}
      renderOption={(props, option, { selected }) => (
        <Box component="li" {...props} sx={{ p: '0 !important' }}>
          <Checkbox size="small" disableRipple checked={selected} />
          {option}
        </Box>
      )}
    />
  );
}

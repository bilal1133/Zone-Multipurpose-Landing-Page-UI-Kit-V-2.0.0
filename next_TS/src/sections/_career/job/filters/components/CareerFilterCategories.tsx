// @mui
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
// _mock
import _mock from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  filterCategories: string | null;
  onChangeCategory: (keyword: string | null) => void;
};

export default function CareerFilterCategories({ filterCategories, onChangeCategory }: Props) {
  return (
    <Autocomplete
      sx={{ width: 1 }}
      options={_mock.jobCategories}
      getOptionLabel={(option) => option}
      value={filterCategories}
      onChange={(event, value) => onChangeCategory(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          variant="filled"
          placeholder="Categories"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  width={24}
                  icon="carbon:inventory-management"
                  sx={{ color: 'text.disabled', mr: 1 }}
                />
              </InputAdornment>
            ),
            sx: { pb: 1 },
          }}
        />
      )}
    />
  );
}

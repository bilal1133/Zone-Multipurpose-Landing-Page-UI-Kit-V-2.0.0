// @mui
import { Autocomplete, InputAdornment, InputBase } from '@mui/material';
// assets
import { countries } from 'src/assets/data';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelFilterLocation() {
  return (
    <Autocomplete
      sx={{ width: 1 }}
      popupIcon={null}
      options={countries}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <InputBase
          {...params.InputProps}
          inputProps={params.inputProps}
          fullWidth
          placeholder="Where we go?"
          startAdornment={
            <InputAdornment position="start">
              <Iconify width={24} icon="carbon:location" sx={{ color: 'text.disabled', mr: 1 }} />
            </InputAdornment>
          }
          sx={{ height: 44, typography: 'subtitle1', color: 'inherit' }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props}>
          <Image
            disabledEffect
            alt="flag country"
            src={`https://flagcdn.com/${option.code.toLowerCase()}.svg`}
            sx={{ mr: 1, width: 24, height: 24, flexShrink: 0, borderRadius: '50%' }}
          />
          {option.label}
        </li>
      )}
    />
  );
}

// @mui
import { Theme } from '@mui/material/styles';
import { Autocomplete, InputAdornment, TextField, SxProps } from '@mui/material';
// types
import { ICountriesProps } from 'src/types/contact';
// assets
import { countries } from 'src/assets/data';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  filterLocation: ICountriesProps | null;
  onChangeLocation: (keyword: ICountriesProps | null) => void;
  sx?: SxProps<Theme>;
};

export default function CareerFilterLocations({ filterLocation, onChangeLocation, sx }: Props) {
  return (
    <Autocomplete
      sx={{ width: 1 }}
      options={countries}
      getOptionLabel={(option) => option.label}
      value={filterLocation}
      onChange={(event, value) => onChangeLocation(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          variant="filled"
          placeholder="Locations"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:location" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            ),
            sx: { pb: 1, ...sx },
          }}
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

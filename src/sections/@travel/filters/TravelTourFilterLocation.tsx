import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// icons
import locationIcon from '@iconify/icons-carbon/location';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Autocomplete, InputAdornment } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';
// _data
import _mock from '../../../../_data/mock';
// components
import { Image, Iconify } from '../../../components';
import { InputStyle } from './TravelTourBarFilters';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  width: '100%',
  '& .MuiAutocomplete-root': {
    '& .MuiFilledInput-root': {
      padding: '0 12px',
    },
  },
}));

// ----------------------------------------------------------------------

export default function TravelTourFilterLocation() {
  return (
    <RootStyle>
      <Autocomplete
        autoHighlight
        options={_mock.countries}
        getOptionLabel={(option) => option.label}
        filterOptions={createFilterOptions({
          stringify: (option) => option.label + option.code,
        })}
        renderInput={(params) => (
          <InputStyle
            {...params}
            variant="filled"
            placeholder="Where we go?"
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    icon={locationIcon}
                    sx={{ width: 24, height: 24, color: 'text.disabled', flexShrink: 0, mr: 1 }}
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.label, inputValue);
          const parts: {
            text: string;
            highlight: boolean;
          }[] = parse(option.label, matches);
          return (
            <Box component="li" {...props}>
              <Image
                alt="flag country"
                src={`https://flagcdn.com/${option.code.toLowerCase()}.svg`}
                sx={{
                  mr: 1,
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  borderRadius: '50%',
                }}
              />
              {parts.map((part, index) => (
                <Box
                  key={index}
                  component="span"
                  sx={{
                    ...(part.highlight && {
                      fontWeight: 'fontWeightBold',
                    }),
                  }}
                >
                  {part.text}
                </Box>
              ))}
            </Box>
          );
        }}
      />
    </RootStyle>
  );
}

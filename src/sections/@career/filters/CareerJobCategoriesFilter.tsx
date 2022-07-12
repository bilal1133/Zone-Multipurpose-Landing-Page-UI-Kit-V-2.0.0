import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// icons
import inventoryManagement from '@iconify/icons-carbon/inventory-management';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Autocomplete, InputAdornment, TextField } from '@mui/material';
// _data
import _mock from '../../../../_data/mock';
// components
import { Iconify, SearchNotFound } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  width: '100%',
  '& .MuiAutocomplete-root': {
    '& .MuiInputAdornment-root': {
      marginTop: '0 !important',
    },
    '& .MuiFilledInput-root': {
      height: 56,
      padding: '0 12px',
    },
  },
}));

// ----------------------------------------------------------------------

type Props = {
  filterCategories: string | null;
  onChangeCategory: (keyword: string | null) => void;
};

export default function CareerJobCategoriesFilter({ filterCategories, onChangeCategory }: Props) {
  return (
    <RootStyle>
      <Autocomplete
        autoHighlight
        options={_mock.jobCategories}
        getOptionLabel={(option) => option}
        value={filterCategories}
        onChange={(event, value) => onChangeCategory(value)}
        noOptionsText={<SearchNotFound keyword={filterCategories} />}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder="Categories"
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    icon={inventoryManagement}
                    sx={{ width: 24, height: 24, color: 'text.disabled', flexShrink: 0, mr: 1 }}
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option, inputValue);
          const parts: {
            text: string;
            highlight: boolean;
          }[] = parse(option, matches);
          return (
            <Box component="li" {...props}>
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

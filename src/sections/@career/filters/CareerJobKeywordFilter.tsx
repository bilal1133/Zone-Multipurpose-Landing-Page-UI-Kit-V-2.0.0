import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// icons
import searchIcon from '@iconify/icons-carbon/search';
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
  filterKeyword: string | null;
  onChangeKeyword: (keyword: string | null) => void;
};

export default function CareerJobKeywordFilter({ filterKeyword, onChangeKeyword }: Props) {
  return (
    <RootStyle>
      <Autocomplete
        autoHighlight
        options={_mock.jobTitle}
        getOptionLabel={(option) => option}
        value={filterKeyword}
        onChange={(event, value) => onChangeKeyword(value)}
        noOptionsText={<SearchNotFound keyword={filterKeyword} />}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder="Job title, keywords..."
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    icon={searchIcon}
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
            text: string | null;
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

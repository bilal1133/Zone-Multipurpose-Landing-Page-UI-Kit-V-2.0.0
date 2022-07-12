import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Autocomplete, TextField, Checkbox, Chip } from '@mui/material';
// _data
import _mock from '../../../../_data/mock';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  '& .MuiAutocomplete-root': {
    '& .MuiFilledInput-root': {
      minHeight: 56,
      padding: '12px',
    },
  },
}));

// ----------------------------------------------------------------------

type Props = {
  filterCategories: string[];
  onChangeCategory: (keyword: string[]) => void;
};

export default function ElearningCourseCategoriesFilter({
  filterCategories,
  onChangeCategory,
}: Props) {
  return (
    <RootStyle>
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
            variant="filled"
            placeholder="All Categories"
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
            }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option}
              label={option}
              size="small"
              sx={{
                bgcolor: 'text.primary',
                color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                '& .MuiChip-deleteIcon': {
                  opacity: 0.48,
                  color: 'currentColor',
                  '&:hover': {
                    opacity: 0.72,
                    color: 'currentColor',
                  },
                },
              }}
            />
          ))
        }
        renderOption={(props, option, { inputValue, selected }) => {
          const matches = match(option, inputValue);
          const parts: {
            text: string;
            highlight: boolean;
          }[] = parse(option, matches);
          return (
            <Box component="li" sx={{ my: 1, p: '0 !important' }} {...props}>
              <Checkbox size="small" checked={selected} />

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

import searchIcon from '@iconify/icons-carbon/search';
// @mui
import { InputAdornment, FilledInput, FilledInputProps } from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

export default function SearchInput({ sx, ...other }: FilledInputProps) {
  return (
    <FilledInput
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <Iconify icon={searchIcon} sx={{ width: 24, height: 24, color: 'text.disabled' }} />
        </InputAdornment>
      }
      placeholder="Search..."
      sx={{
        '& .MuiFilledInput-input': { py: '18px' },
        ...sx,
      }}
      {...other}
    />
  );
}

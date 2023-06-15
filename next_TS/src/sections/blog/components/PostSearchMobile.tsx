// @mui
import { TextField, InputAdornment, Box } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostSearchMobile() {
  const isMdDown = useResponsive('down', 'md');

  return (
    <>
      {isMdDown && (
        <Box sx={{ px: 2, pb: 3 }}>
          <TextField
            fullWidth
            hiddenLabel
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
    </>
  );
}

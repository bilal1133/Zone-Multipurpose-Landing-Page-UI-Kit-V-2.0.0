// @mui
import { Stack, Button } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  return (
    <Stack direction="row" spacing={2}>
      <Button fullWidth size="large" color="inherit" variant="outlined">
        <Iconify icon="logos:google-icon" width={24} />
      </Button>

      <Button fullWidth size="large" color="inherit" variant="outlined">
        <Iconify icon="carbon:logo-facebook" width={24} sx={{ color: '#1877F2' }} />
      </Button>

      <Button color="inherit" fullWidth variant="outlined" size="large">
        <Iconify icon="carbon:logo-github" width={24} sx={{ color: 'text.primary' }} />
      </Button>
    </Stack>
  );
}

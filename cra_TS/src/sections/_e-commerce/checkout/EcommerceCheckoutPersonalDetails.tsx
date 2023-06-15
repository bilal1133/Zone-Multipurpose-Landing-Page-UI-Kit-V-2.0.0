import { useState } from 'react';
// @mui
import { Box, Stack, Button, Typography, InputAdornment, IconButton } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutPersonalDetails() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Stack direction="row" flexWrap="wrap" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="subtitle2" sx={{ mr: 1 }}>
          Sign in with
        </Typography>

        <Button
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon="carbon:logo-facebook" sx={{ color: '#1877F2' }} />}
          sx={{ m: 1 }}
        >
          Facebook
        </Button>

        <Button
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon="logos:google-icon" />}
          sx={{ m: 1 }}
        >
          Google
        </Button>

        <Button
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon="carbon:email" />}
          sx={{ m: 1 }}
        >
          Continue with Email
        </Button>
      </Stack>

      <Box
        rowGap={2.5}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        <RHFTextField name="firstName" label="First Name" />

        <RHFTextField name="lastName" label="Last Name" />

        <RHFTextField name="emailAddress" label="Email Address" />

        <RHFTextField name="phoneNumber" label="Phone Number" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Iconify icon={showPassword ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
}

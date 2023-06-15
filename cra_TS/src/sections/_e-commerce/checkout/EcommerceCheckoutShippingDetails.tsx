// @mui
import { Box } from '@mui/material';
// assets
import { countries } from 'src/assets/data';
// components
import { RHFTextField, RHFSelect } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutShippingDetails() {
  return (
    <Box
      rowGap={2.5}
      columnGap={2}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
    >
      <RHFTextField name="streetAddress" label="Street address" />

      <RHFTextField name="zipCode" label="ZIP Code" />

      <RHFTextField name="city" label="City" />

      <RHFSelect native name="country" label="Country">
        <option value="" />
        {countries.map((country) => (
          <option key={country.code} value={country.label}>
            {country.label}
          </option>
        ))}
      </RHFSelect>
    </Box>
  );
}

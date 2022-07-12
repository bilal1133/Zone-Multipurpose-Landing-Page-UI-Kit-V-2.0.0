import { Controller, Control, FieldPath } from 'react-hook-form';
// @mui
import { Stack, Switch, Collapse, TextField, Typography, FormControlLabel } from '@mui/material';
// @types
import { CheckoutFormValuesProps } from '../../../@types/travel';

// ----------------------------------------------------------------------

type Props = {
  control: Control<CheckoutFormValuesProps>;
  sameBilling: boolean;
  onChangeSameBilling: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function TravelCheckOutShippingForm({
  control,
  sameBilling,
  onChangeSameBilling,
}: Props) {
  return (
    <Stack spacing={5}>
      <section>
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 3, display: 'block' }}>
          Billing Address
        </Typography>

        <Stack spacing={2.5}>
          <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
            <Field control={control} name="billingAddress.firstName" label="First Name" />
            <Field control={control} name="billingAddress.lastName" label="Last Name" />
          </Stack>
          <Field control={control} name="billingAddress.fullAddress" label="Full Address" />
          <Field control={control} name="billingAddress.fullAddress2" label="Full Address2" />
        </Stack>
      </section>

      <section>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            Shipping Address
          </Typography>
          <FormControlLabel
            control={<Switch checked={sameBilling} onChange={onChangeSameBilling} />}
            label="Same as Billing Address"
            labelPlacement="start"
          />
        </Stack>

        <Collapse
          in={!sameBilling}
          sx={{
            ...(!sameBilling && { mt: 3 }),
          }}
        >
          <Stack spacing={2.5}>
            <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
              <Field control={control} name="shippingAddress.firstName" label="First Name" />
              <Field control={control} name="shippingAddress.lastName" label="Last Name" />
            </Stack>
            <Field control={control} name="shippingAddress.fullAddress" label="Full Address" />
            <Field control={control} name="shippingAddress.fullAddress2" label="Full Address2" />
          </Stack>
        </Collapse>
      </section>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type FieldProps = {
  control: Control<CheckoutFormValuesProps>;
  name: FieldPath<CheckoutFormValuesProps>;
  label: string;
};

function Field({ control, name, label, ...other }: FieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
      {...other}
    />
  );
}

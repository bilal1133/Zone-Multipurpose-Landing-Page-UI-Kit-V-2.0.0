import { Controller, Control, FieldPath } from 'react-hook-form';
// @mui
import { styled } from '@mui/material/styles';
import {
  Radio,
  Paper,
  Stack,
  TextField,
  RadioGroup,
  Typography,
  FormControlLabel,
} from '@mui/material';
// utils
import { _paymentMethods } from '../../../../_data/mock';
// @types
import { CheckoutFormValuesProps } from '../../../@types/travel';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

type OptionStyleProps = {
  selected: boolean;
};

const OptionStyle = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<OptionStyleProps>(({ selected, theme }) => ({
  border: `solid 1px ${theme.palette.divider}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  transition: theme.transitions.create('all', {
    duration: theme.transitions.duration.shortest,
  }),
  ...(selected && {
    boxShadow: theme.customShadows.z24,
  }),
}));

// ----------------------------------------------------------------------

type Props = {
  control: Control<CheckoutFormValuesProps>;
};

export default function TravelCheckOutPaymentForm({ control }: Props) {
  return (
    <Controller
      name="paymentMethods.methods"
      control={control}
      render={({ field }) => (
        <RadioGroup {...field}>
          <Stack spacing={3}>
            {_paymentMethods.map((method) => {
              const { value, label, caption, icons } = method;

              const isSelected = value === field.value;
              const hasChildren = value === 'credit_card';

              return (
                <OptionStyle key={value} selected={isSelected}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: 1, pl: 1, py: 3, pr: 2.5 }}
                  >
                    <FormControlLabel
                      value={value}
                      control={<Radio />}
                      label={
                        <Stack spacing={0.5} sx={{ ml: 1 }}>
                          <Typography variant="h6">{label}</Typography>
                          <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                            {caption}
                          </Typography>
                        </Stack>
                      }
                      sx={{ mx: 0, flexGrow: 1 }}
                    />
                    <Stack direction="row" spacing={1}>
                      {icons.map((icon) => (
                        <Image key={icon} alt={icon} src={icon} sx={{ width: 36, height: 24 }} />
                      ))}
                    </Stack>
                  </Stack>

                  {hasChildren && isSelected && (
                    <Stack spacing={2} sx={{ px: 3, pb: 3 }}>
                      <Field
                        control={control}
                        name="paymentMethods.card.cardNumber"
                        label="Card Number"
                        placeholder="XXXX XXXX XXXX XXXX"
                      />
                      <Field
                        control={control}
                        name="paymentMethods.card.cardHolder"
                        label="Card Holder"
                        placeholder="JOHN DOE"
                      />
                      <Stack spacing={2} direction="row">
                        <Field
                          control={control}
                          name="paymentMethods.card.expirationDate"
                          label="Expiration Date"
                          placeholder="MM/YY"
                        />
                        <Field
                          control={control}
                          name="paymentMethods.card.ccv"
                          label="CVV/CVC"
                          placeholder="***"
                        />
                      </Stack>
                    </Stack>
                  )}
                </OptionStyle>
              );
            })}
          </Stack>
        </RadioGroup>
      )}
    />
  );
}

// ----------------------------------------------------------------------

type FieldProps = {
  control: Control<CheckoutFormValuesProps>;
  name: FieldPath<CheckoutFormValuesProps>;
  label: string;
  placeholder?: string;
};
function Field({ control, name, placeholder, label, ...other }: FieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          placeholder={placeholder}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
      {...other}
    />
  );
}

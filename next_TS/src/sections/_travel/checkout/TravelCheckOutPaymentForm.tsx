// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { alpha } from '@mui/material/styles';
import { Radio, Stack, RadioGroup, FormControlLabel, Box } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const PAYMENT_OPTIONS = [
  {
    label: 'Paypal',
    value: 'paypal',
    description: 'You will be redirected to PayPal website to complete your purchase securely.',
  },
  {
    label: 'Credit / Debit',
    value: 'creditcard',
    description: 'We support Mastercard, Visa, Discover and Stripe.',
  },
];

// ----------------------------------------------------------------------

export default function TravelCheckOutPaymentForm() {
  const { control } = useFormContext();

  return (
    <Controller
      name="paymentMethods.methods"
      control={control}
      render={({ field }) => (
        <RadioGroup {...field}>
          <Stack spacing={3}>
            {PAYMENT_OPTIONS.map((option, index) => (
              <OptionItem
                key={index}
                option={option}
                selected={option.value === field.value}
                isCredit={option.value === 'creditcard' && option.value === field.value}
              />
            ))}
          </Stack>
        </RadioGroup>
      )}
    />
  );
}

// ----------------------------------------------------------------------

type OptionItemProps = {
  option: {
    value: string;
    label: string;
    description: string;
  };
  isCredit: boolean;
  selected: boolean;
};

function OptionItem({ option, isCredit, selected }: OptionItemProps) {
  const { value, label, description } = option;

  const renderLabel = (
    <Stack direction="row" alignItems="center">
      <Stack spacing={0.5} flexGrow={1}>
        <Box component="span" sx={{ typography: 'subtitle1' }}>
          {label}
        </Box>

        <Box component="span" sx={{ typography: 'caption', color: 'text.secondary' }}>
          {description}
        </Box>
      </Stack>

      <Stack spacing={1} direction="row" alignItems="center">
        {value === 'creditcard' ? (
          <>
            <Iconify icon="logos:mastercard" width={24} />,
            <Iconify icon="logos:visa" width={24} />
          </>
        ) : (
          <Iconify icon="logos:paypal" width={24} />
        )}
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        borderRadius: 1,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...(selected && {
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
        }),
      }}
    >
      <FormControlLabel
        value={value}
        control={
          <Radio
            disableRipple
            checkedIcon={<Iconify width={24} icon="carbon:checkmark-outline" />}
            sx={{ mx: 1 }}
          />
        }
        label={renderLabel}
        sx={{
          m: 0,
          py: 2,
          pr: 2.5,
          width: 1,
          '& .MuiFormControlLabel-label': {
            width: 1,
          },
        }}
      />

      {isCredit && <NewCardForm />}
    </Box>
  );
}

// ----------------------------------------------------------------------

function NewCardForm() {
  return (
    <Stack spacing={2.5} sx={{ px: 3, pb: 3 }}>
      <RHFTextField
        name="paymentMethods.card.cardNumber"
        label="Card Number"
        placeholder="XXXX XXXX XXXX XXXX"
      />

      <RHFTextField
        name="paymentMethods.card.cardHolder"
        label="Card Holder"
        placeholder="JOHN DOE"
      />

      <Stack spacing={2} direction="row">
        <RHFTextField
          name="paymentMethods.card.expirationDate"
          label="Expiration Date"
          placeholder="MM/YY"
        />
        <RHFTextField name="paymentMethods.card.ccv" label="CVV/CVC" placeholder="***" />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        sx={{ typography: 'caption', color: 'text.disabled' }}
      >
        <Iconify icon="carbon:locked" sx={{ mr: 0.5 }} />
        Your transaction is secured with SSL encryption
      </Stack>
    </Stack>
  );
}

import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  TextField,
  Typography,
  ToggleButton,
  FormHelperText,
  Slider as MUISlider,
} from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const SERVICES = ['Email marketing', 'SEO', ' Social Marketing', 'Research'];

const FormSchema = Yup.object().shape({
  services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
  email: Yup.string().required('Email is required').email('That is not an email'),
  compnany: Yup.string().required('Compnany is required'),
  website: Yup.string().required('Website is required'),
});

type FormValuesProps = {
  services: string[];
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  compnany: string;
  website: string;
  budget: number | number[];
  message: string;
};

// ----------------------------------------------------------------------

export default function MarketingContactForm() {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValuesProps>({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      services: [],
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      compnany: '',
      website: '',
      budget: [2000, 10000],
      message: '',
    },
  });

  const onSubmit = async (data: FormValuesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5} alignItems="flex-start">
        <Controller
          name="services"
          control={control}
          render={({ field, fieldState: { error } }) => {
            // Using with lodash https://lodash.com/docs/4.17.15#xor
            // const onSelected = (service: string) => xor(field.value, [service]);

            const onSelected = (service: string) =>
              field.value.includes(service)
                ? field.value.filter((value) => value !== service)
                : [...field.value, service];

            return (
              <div>
                <Stack direction="row" flexWrap="wrap">
                  {SERVICES.map((service) => (
                    <ToggleButton
                      {...field}
                      key={service}
                      color="standard"
                      selected={field.value.includes(service)}
                      onChange={() => field.onChange(onSelected(service))}
                      sx={{
                        py: 0.5,
                        px: 2,
                        m: 0.5,
                        typography: 'body2',
                        '&.Mui-selected': {
                          bgcolor: 'text.primary',
                          color: (theme) =>
                            theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                          '&:hover': {
                            bgcolor: 'text.primary',
                          },
                        },
                      }}
                    >
                      {service}
                    </ToggleButton>
                  ))}
                </Stack>

                {error && (
                  <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                    {(error as any)?.message}
                  </FormHelperText>
                )}
              </div>
            );
          }}
        />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="First Name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Last Name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Email"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Phone number"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <Controller
            name="compnany"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Compnany"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="website"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Website"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Stack spacing={5} sx={{ py: 2, width: 1 }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Your Budget
          </Typography>

          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <MUISlider
                {...field}
                valueLabelDisplay="on"
                max={20000}
                step={1000}
                valueLabelFormat={(value) => fCurrency(value)}
              />
            )}
          />
        </Stack>

        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={4}
              label="Message"
              error={Boolean(error)}
              helperText={error?.message}
              sx={{ pb: 2.5 }}
            />
          )}
        />

        <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
          Send Request
        </LoadingButton>
      </Stack>
    </form>
  );
}

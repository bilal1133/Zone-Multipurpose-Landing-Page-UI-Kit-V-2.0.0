import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import { Grid, Stack, TextField, Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().required('Email is required').email('That is not an email'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

type FormValuesProps = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function CareerContactForm() {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValuesProps>({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      fullName: '',
      subject: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValuesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
              <Typography variant="h3">Drop Us A Line</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                We normally respond within 2 business days
              </Typography>
            </Stack>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2.5} alignItems="flex-start">
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Full name"
                      error={Boolean(error)}
                      helperText={error?.message}
                    />
                  )}
                />

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
                  name="subject"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Subject"
                      error={Boolean(error)}
                      helperText={error?.message}
                    />
                  )}
                />

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

                <Stack alignItems="center" width={1}>
                  <LoadingButton
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    Send Message
                  </LoadingButton>
                </Stack>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

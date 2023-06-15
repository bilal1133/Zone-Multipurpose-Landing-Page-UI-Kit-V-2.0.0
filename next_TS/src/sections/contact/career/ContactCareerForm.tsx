import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// components
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactCareerForm() {
  const CareerContactSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().required('Email is required').email('That is not an email'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const defaultValues = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(CareerContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      sx={{
        py: 10,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid xs={12} md={8}>
          <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
            <Typography variant="h3">Drop Us A Line</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              We normally respond within 2 business days
            </Typography>
          </Stack>

          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2.5}>
              <RHFTextField name="fullName" label="Full name" />

              <RHFTextField name="email" label="Email" />

              <RHFTextField name="subject" label="Subject" />

              <RHFTextField name="message" multiline rows={4} label="Message" sx={{ pb: 2.5 }} />

              <Stack alignItems="center" width={1}>
                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  color="inherit"
                  loading={isSubmitting}
                >
                  Send Message
                </LoadingButton>
              </Stack>
            </Stack>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

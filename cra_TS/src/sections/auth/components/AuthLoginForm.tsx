import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Link, IconButton, InputAdornment } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
};

export default function AuthLoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('That is not an email'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password should be of minimum 6 characters length'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5} alignItems="flex-end">
        <RHFTextField name="email" label="Email address" />

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

        <Link
          component={RouterLink}
          to={paths.resetPassword}
          variant="body2"
          underline="always"
          color="text.secondary"
        >
          Forgot password?
        </Link>

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  Button,
  Rating,
  Dialog,
  Typography,
  DialogProps,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormHelperText,
} from '@mui/material';
// components
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = {
  rating: number | null;
  review: string;
  name: string;
  email: string;
};

interface Props extends DialogProps {
  onClose: VoidFunction;
}

// ----------------------------------------------------------------------

export default function ReviewNewForm({ onClose, ...other }: Props) {
  const defaultValues = {
    rating: null,
    review: '',
    name: '',
    email: '',
  };

  const NewReviewSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    rating: Yup.mixed().required('Rating is required'),
    review: Yup.string().required('Review is required'),
    email: Yup.string().required('Email is required').email('That is not an email'),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewReviewSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      onClose();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog fullWidth maxWidth="sm" onClose={onClose} {...other}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle sx={{ typography: 'h3', pb: 3 }}>Review</DialogTitle>

        <DialogContent sx={{ py: 0 }}>
          <Stack spacing={2.5}>
            <div>
              <Typography variant="subtitle2" gutterBottom>
                Your rating:
              </Typography>

              <Controller
                name="rating"
                control={control}
                render={({ field }) => <Rating {...field} value={Number(field.value)} />}
              />

              {!!errors.rating && <FormHelperText error> {errors.rating?.message}</FormHelperText>}
            </div>

            <RHFTextField multiline rows={3} name="review" label="Review *" />

            <RHFTextField name="name" label="Name *" />

            <RHFTextField name="email" label="Email address *" />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose} color="inherit">
            Cancel
          </Button>

          <LoadingButton color="inherit" type="submit" variant="contained" loading={isSubmitting}>
            Post Review
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}

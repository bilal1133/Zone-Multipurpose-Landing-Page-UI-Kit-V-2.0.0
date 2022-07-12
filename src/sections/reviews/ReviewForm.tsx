import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  Paper,
  Button,
  Rating,
  TextField,
  PaperProps,
  Typography,
  FormHelperText,
} from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled((props: PaperProps) => <Paper variant="outlined" {...props} />)(
  ({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: Number(theme.shape.borderRadius) * 2,
  })
);

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  rating: Yup.mixed().required('Rating is required'),
  review: Yup.string().required('Review is required'),
  email: Yup.string().required('Email is required').email('That is not an email'),
});

type FormValuesProps = {
  rating: number | null;
  review: string;
  name: string;
  email: string;
};

type Props = {
  onClose: VoidFunction;
};

export default function ReviewElearningForm({ onClose }: Props) {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValuesProps>({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      rating: null,
      review: '',
      name: '',
      email: '',
    },
  });

  const onSubmit = async (data: FormValuesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(
      JSON.stringify(
        {
          ...data,
          rating: Number(data.rating),
        },
        null,
        2
      )
    );
    reset();
    onClose();
  };

  return (
    <RootStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2.5}>
          <div>
            <Typography variant="h3" paragraph>
              Review
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Your rating about this tour:
            </Typography>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => <Rating {...field} value={Number(field.value)} />}
            />
            {Boolean(errors.rating) && (
              <FormHelperText sx={{ px: 2 }} error>
                {errors.rating?.message}
              </FormHelperText>
            )}
          </div>

          <Controller
            name="review"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                multiline
                fullWidth
                rows={3}
                label="Review *"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Name *"
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
                label="Email address *"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            justifyContent="flex-end"
            sx={{ width: 1 }}
          >
            <Button variant="outlined" onClick={onClose} color="inherit">
              Cancel
            </Button>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              Post Review
            </LoadingButton>
          </Stack>
        </Stack>
      </form>
    </RootStyle>
  );
}

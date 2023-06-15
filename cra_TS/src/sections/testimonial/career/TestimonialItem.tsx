// @mui
import { Typography, Stack, Rating, StackProps } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  testimonial: ITestimonialProps;
}

export default function TestimonialItem({ testimonial, sx, ...other }: Props) {
  const { name, review, role, rating } = testimonial;

  return (
    <Stack
      alignItems="center"
      sx={{
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Rating value={rating} readOnly />

      <Typography
        sx={{
          my: 3,
          lineHeight: 1.75,
          fontSize: { md: 20 },
        }}
      >
        {review}
      </Typography>

      <Typography variant="h6">{name}</Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {role}
      </Typography>
    </Stack>
  );
}

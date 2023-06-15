// @mui
import { Typography, Stack, Box, StackProps } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  testimonial: ITestimonialProps;
}

export default function TestimonialItem({ testimonial, sx, ...other }: Props) {
  const { name, review } = testimonial;

  return (
    <Stack
      alignItems={{
        xs: 'center',
        md: 'flex-start',
      }}
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
        ...sx,
      }}
      {...other}
    >
      <Iconify width={48} icon="carbon:quotes" sx={{ opacity: 0.48, color: 'primary.main' }} />

      <Typography
        sx={{
          mt: 2,
          mb: 5,
          lineHeight: 1.75,
          fontSize: { md: 20 },
        }}
      >
        {review}
      </Typography>

      <Stack spacing={1.5} alignItems="center" direction="row">
        <Box sx={{ width: 8, height: 9, bgcolor: 'primary.main', borderRadius: '50%' }} />
        <Typography variant="h6">{name}</Typography>
      </Stack>
    </Stack>
  );
}

// @mui
import { Typography, Stack, Avatar, StackProps } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  testimonial: ITestimonialProps;
}

export default function TestimonialItem({ testimonial, ...other }: Props) {
  const { name, role, avatar, review } = testimonial;

  return (
    <Stack
      spacing={{
        xs: 5,
        md: 10,
      }}
      direction={{
        xs: 'column',
        md: 'row',
      }}
      {...other}
    >
      <Typography
        sx={{
          fontSize: { md: 20 },
          lineHeight: 1.75,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {review}
      </Typography>

      <Stack sx={{ flexShrink: 0, textAlign: 'center' }}>
        <Avatar alt={name} src={avatar} sx={{ width: 96, height: 96, mx: 'auto' }} />

        <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {role}
        </Typography>
      </Stack>
    </Stack>
  );
}

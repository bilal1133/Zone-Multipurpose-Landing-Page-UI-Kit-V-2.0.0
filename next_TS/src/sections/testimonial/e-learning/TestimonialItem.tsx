// @mui
import { Typography, Stack, Avatar } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type TestimonialItemContentProps = {
  testimonial: ITestimonialProps;
};

export function TestimonialItemContent({ testimonial }: TestimonialItemContentProps) {
  const { review } = testimonial;

  return (
    <Stack alignItems="center">
      <Iconify
        icon="carbon:quotes"
        sx={{ width: 48, height: 48, opacity: 0.48, color: 'primary.main' }}
      />

      <Typography
        sx={{
          mt: 2,
          mb: 5,
          lineHeight: 1.75,
          fontSize: { xs: 20, md: 24 },
          fontFamily: (theme) => theme.typography.h1.fontFamily,
        }}
      >
        {review}
      </Typography>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type TestimonialItemThumbnailProps = {
  testimonial: ITestimonialProps;
  isSelected: boolean;
};

export function TestimonialItemThumbnail({
  testimonial,
  isSelected,
}: TestimonialItemThumbnailProps) {
  const { avatar } = testimonial;

  return (
    <Stack
      sx={{
        width: 96,
        height: 96,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        src={avatar}
        sx={{
          width: 48,
          height: 48,
          opacity: 0.48,
          cursor: 'pointer',
          transition: (theme) => theme.transitions.create('all'),
          ...(isSelected && {
            opacity: 1,
            transform: 'scale(2)',
          }),
        }}
      />
    </Stack>
  );
}

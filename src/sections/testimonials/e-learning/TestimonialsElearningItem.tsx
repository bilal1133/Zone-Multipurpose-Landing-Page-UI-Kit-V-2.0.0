// icons
import quotesIcon from '@iconify/icons-carbon/quotes';
// @mui
import { Typography, Stack, Avatar } from '@mui/material';
// @types
import { TestimonialProps } from '../../../@types/testimonial';
// components
import { Iconify } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  testimonial: TestimonialProps;
  isSelected?: boolean;
};

export function TestimonialsElearningContentItem({ testimonial }: Props) {
  const { review } = testimonial;

  return (
    <Stack alignItems="center">
      <Iconify
        icon={quotesIcon}
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

export function TestimonialsElearningThumbnailItem({ testimonial, isSelected }: Props) {
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

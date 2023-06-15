import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Unstable_Grid2 as Grid } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';
// components
import Carousel, { CarouselDots, CarouselArrows } from 'src/components/carousel';
//
import TestimonialItem from './TestimonialItem';

// ----------------------------------------------------------------------

type Props = {
  testimonials: ITestimonialProps[];
};

export default function TestimonialMarketing({ testimonials }: Props) {
  const theme = useTheme();

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: { xs: 8, md: 10 },
      },
    }),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
      <Container
        sx={{
          position: 'relative',
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack spacing={2} sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Testimonials
          </Typography>

          <Typography variant="h2">Who Love Our Work</Typography>
        </Stack>

        <CarouselArrows
          onNext={handleNext}
          onPrev={handlePrev}
          leftButtonProps={{ sx: { display: { xs: 'none', md: 'block' } } }}
          rightButtonProps={{ sx: { display: { xs: 'none', md: 'block' } } }}
        >
          <Grid container spacing={10} justifyContent="center">
            <Grid xs={12} md={8}>
              <Carousel ref={carouselRef} {...carouselSettings}>
                {testimonials.map((testimonial) => (
                  <TestimonialItem key={testimonial.id} testimonial={testimonial} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </CarouselArrows>
      </Container>
    </Box>
  );
}

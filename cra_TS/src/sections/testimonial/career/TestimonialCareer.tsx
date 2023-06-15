import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Container, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// types
import { ITestimonialProps } from 'src/types/testimonial';
// components
import Carousel, { CarouselArrows, CarouselDots } from 'src/components/carousel';
//
import TestimonialItem from './TestimonialItem';

// ----------------------------------------------------------------------

type Props = {
  testimonials: ITestimonialProps[];
};

export default function TestimonialCareer({ testimonials }: Props) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    dots: !isMdUp,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: 8,
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
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 5, textAlign: 'center' }}>
              What Our Customer Say
            </Typography>

            <Carousel ref={carouselRef} {...carouselSettings}>
              {testimonials.map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </Carousel>
          </Grid>
        </Grid>

        {isMdUp && (
          <CarouselArrows
            spacing={2}
            justifyContent="center"
            onNext={handleNext}
            onPrev={handlePrev}
            sx={{ mt: 10, width: 1 }}
          />
        )}
      </Container>
    </Box>
  );
}

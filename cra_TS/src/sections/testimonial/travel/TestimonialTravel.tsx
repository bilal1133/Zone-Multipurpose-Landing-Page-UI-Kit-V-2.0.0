import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Container, Unstable_Grid2 as Grid } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/image';
import Carousel, { CarouselArrows, CarouselDots } from 'src/components/carousel';
//
import TestimonialItem from './TestimonialItem';

// ----------------------------------------------------------------------

type Props = {
  testimonials: ITestimonialProps[];
};

export default function TestimonialTravel({ testimonials }: Props) {
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
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            What Our Customer Say
          </Typography>

          <Carousel ref={carouselRef} {...carouselSettings}>
            {testimonials.map((testimonial) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            ))}
          </Carousel>
        </Grid>

        {isMdUp && (
          <Grid xs={12} md={6}>
            <Image
              alt="travel testimonial"
              src="/assets/images/travel/travel_testimonial.png"
              sx={{ maxWidth: 296, ml: 'auto' }}
            />
          </Grid>
        )}
      </Grid>

      {isMdUp && (
        <CarouselArrows
          spacing={2}
          justifyContent={{ xs: 'center', md: 'unset' }}
          onNext={handleNext}
          onPrev={handlePrev}
          sx={{ mt: 10 }}
        />
      )}
    </Container>
  );
}

import { useRef, useEffect, useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Unstable_Grid2 as Grid } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';
// components
import Carousel, { CarouselArrows } from 'src/components/carousel';
//
import { TestimonialItemContent, TestimonialItemThumbnail } from './TestimonialItem';

// ----------------------------------------------------------------------

type Props = {
  testimonials: ITestimonialProps[];
};

export default function TestimonialElearning({ testimonials }: Props) {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  const [carouselContent, setCarouselContent] = useState<Carousel>();

  const [carouselThumbnail, setCarouselThumbnail] = useState<Carousel>();

  const carouselRef1 = useRef<Carousel | null>(null);

  const carouselRef2 = useRef<Carousel | null>(null);

  useEffect(() => {
    setCarouselContent(carouselRef1.current || undefined);
    setCarouselThumbnail(carouselRef2.current || undefined);
  }, [selected]);

  const carouselContentSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setSelected(next),
  };

  const carouselThumbnailSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    centerMode: true,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current: number, next: number) => setSelected(next),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef2.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef2?.current?.slickNext();
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        textAlign: 'center',
        overflow: 'hidden',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 5 }}>
              What Our Customer Say
            </Typography>

            <CarouselArrows
              onNext={handleNext}
              onPrev={handlePrev}
              leftButtonProps={{ sx: { display: { xs: 'none', md: 'inline-flex' } } }}
              rightButtonProps={{ sx: { display: { xs: 'none', md: 'inline-flex' } } }}
            >
              <Carousel
                {...carouselContentSettings}
                asNavFor={carouselThumbnail}
                ref={carouselRef1}
              >
                {testimonials.map((testimonial) => (
                  <TestimonialItemContent key={testimonial.id} testimonial={testimonial} />
                ))}
              </Carousel>

              <Box sx={{ mb: 3, mx: 'auto', maxWidth: { xs: 360, sm: 420 } }}>
                <Carousel
                  {...carouselThumbnailSettings}
                  asNavFor={carouselContent}
                  ref={carouselRef2}
                >
                  {testimonials.map((testimonial, index) => (
                    <TestimonialItemThumbnail
                      key={testimonial.id}
                      testimonial={testimonial}
                      isSelected={selected === index}
                    />
                  ))}
                </Carousel>
              </Box>
            </CarouselArrows>

            {testimonials.map(
              (testimonial, index) =>
                selected === index && (
                  <Stack key={testimonial.id} spacing={0.5}>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {testimonial.role}
                    </Typography>
                  </Stack>
                )
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

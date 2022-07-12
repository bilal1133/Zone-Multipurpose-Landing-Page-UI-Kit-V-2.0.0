import Slider from 'react-slick';
import { useRef, useEffect, useState } from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Grid, Container, Stack, Box } from '@mui/material';
// @types
import { TestimonialProps } from '../../../@types/testimonial';
// components
import { CarouselArrows } from '../../../components';
//
import {
  TestimonialsElearningContentItem,
  TestimonialsElearningThumbnailItem,
} from './TestimonialsElearningItem';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  testimonials: TestimonialProps[];
};

export default function TestimonialsElearning({ testimonials }: Props) {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  const [carouselContent, setCarouselContent] = useState<Slider>();
  const [carouselThumbnail, setCarouselThumbnail] = useState<Slider>();

  const carouselRef1 = useRef<Slider | null>(null);
  const carouselRef2 = useRef<Slider | null>(null);

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

  const handlePrevious = () => {
    carouselRef2.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef2?.current?.slickNext();
  };

  return (
    <RootStyle>
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 5 }}>
              What Our Customer Say
            </Typography>

            <CarouselArrows onNext={handleNext} onPrevious={handlePrevious}>
              <Slider {...carouselContentSettings} asNavFor={carouselThumbnail} ref={carouselRef1}>
                {testimonials.map((testimonial) => (
                  <TestimonialsElearningContentItem
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Slider>

              <Box sx={{ mb: 3, mx: 'auto', maxWidth: { xs: 360, sm: 420 } }}>
                <Slider
                  {...carouselThumbnailSettings}
                  asNavFor={carouselContent}
                  ref={carouselRef2}
                >
                  {testimonials.map((testimonial, index) => (
                    <TestimonialsElearningThumbnailItem
                      key={testimonial.id}
                      testimonial={testimonial}
                      isSelected={selected === index}
                    />
                  ))}
                </Slider>
              </Box>
            </CarouselArrows>

            {testimonials.map(
              (testimonial, index) =>
                selected === index && (
                  <Stack key={testimonial.id} spacing={0.5}>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                      {testimonial.role}
                    </Typography>
                  </Stack>
                )
            )}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

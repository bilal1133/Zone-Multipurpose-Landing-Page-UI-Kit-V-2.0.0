import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Box } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import _mock from 'src/_mock';
// components
import Carousel, { CarouselArrows } from 'src/components/carousel';
//
import TopicItem from './TopicItem';

// ----------------------------------------------------------------------

const CATEGORIES = [
  'Marketing',
  'Community',
  'Tutorials',
  'Business',
  'Management',
  'Sports',
  'Travel',
  'Design',
];

export const TOPICS = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  cover: _mock.image.travel(index + 4),
  totalPost: index + 10,
  category: CATEGORIES[index],
}));

// ----------------------------------------------------------------------

export default function BlogTravelTrendingTopics() {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ bgcolor: 'background.neutral' }}>
      <Container
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Stack
          direction="row"
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Trending Topics</Typography>

          {isMdUp && <CarouselArrows onNext={handleNext} onPrev={handlePrev} spacing={2} />}
        </Stack>

        <Carousel ref={carouselRef} {...carouselSettings}>
          {TOPICS.map((topic) => (
            <TopicItem key={topic.id} topic={topic} />
          ))}
        </Carousel>

        {!isMdUp && (
          <CarouselArrows
            spacing={2}
            justifyContent="center"
            onNext={handleNext}
            onPrev={handlePrev}
            sx={{ mt: 8, width: 1 }}
          />
        )}
      </Container>
    </Box>
  );
}

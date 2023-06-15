import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Stack, Typography, Box } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// types
import { ICourseProps } from 'src/types/course';
// components
import Carousel, { CarouselArrows } from 'src/components/carousel';
//
import { ElearningCourseItem } from '../course/item';

// ----------------------------------------------------------------------

type Props = {
  courses: ICourseProps[];
};

export default function ElearningLandingFeaturedCourses({ courses }: Props) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
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
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ md: 'flex-end' }}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Stack spacing={3} flexGrow={1}>
          <Typography variant="h2">Featured Courses</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.
          </Typography>
        </Stack>

        {isMdUp && <CarouselArrows spacing={2} onNext={handleNext} onPrev={handlePrev} />}
      </Stack>

      <Box
        sx={{
          position: 'relative',
          ml: { md: -2 },
          width: { md: 'calc(100% + 32px)' },
        }}
      >
        <CarouselArrows
          onNext={handleNext}
          onPrev={handlePrev}
          leftButtonProps={{
            sx: {
              left: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(isMdUp && { display: 'none' }),
            },
          }}
          rightButtonProps={{
            sx: {
              right: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(isMdUp && { display: 'none' }),
            },
          }}
        >
          <Carousel ref={carouselRef} {...carouselSettings}>
            {courses.map((course) => (
              <Box
                key={course.id}
                sx={{
                  px: 2,
                  pt: { xs: 8, md: 10 },
                  pb: { xs: 10, md: 15 },
                }}
              >
                <ElearningCourseItem course={course} vertical />
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Stack, Typography, Box } from '@mui/material';
// @types
import { CourseProps } from '../../../@types/e-learning';
// components
import { CarouselArrows } from '../../../components';
// sections
import ElearningCourseItem from '../courses/ElearningCourseItem';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  courses: CourseProps[];
};

export default function ElearningLandingFeaturedCourses({ courses }: Props) {
  const theme = useTheme();

  const carouselRef = useRef<Slider | null>(null);

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

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <Container>
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

          <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          />
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
            onPrevious={handlePrevious}
            sx={{
              '& .arrow': {
                display: { md: 'none' },
                '& button, &button:hover': {
                  bgcolor: 'common.white',
                  color: 'text.primary',
                },
              },
            }}
          >
            <Slider ref={carouselRef} {...carouselSettings}>
              {courses.map((course) => (
                <Box
                  key={course.id}
                  sx={{
                    px: 2,
                    pt: { xs: 8, md: 10 },
                    pb: { xs: 8, md: 15 },
                  }}
                >
                  <ElearningCourseItem course={course} vertical />
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Box>
      </Container>
    </RootStyle>
  );
}

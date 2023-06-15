import { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button, Typography } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// routes
import { paths } from 'src/routes/paths';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Iconify from 'src/components/iconify';
import Carousel, { CarouselDots, CarouselArrows } from 'src/components/carousel';
//
import PostItem from './PostItem';
import PostItemCarouse from './PostItemCarouse';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function BlogTravelLandingLatestPosts({ posts }: Props) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      width: 1,
      bottom: 80,
      position: 'absolute',
    }),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ bgcolor: 'grey.900' }}>
      {!isMdUp && (
        <Typography variant="h2" sx={{ pt: 10, pb: 8, color: 'common.white', textAlign: 'center' }}>
          Latest Posts
        </Typography>
      )}

      <Box
        gap={{ xs: 8, md: 0 }}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        <Box sx={{ overflow: 'hidden', position: 'relative' }}>
          <CarouselArrows
            onNext={handleNext}
            onPrev={handlePrev}
            leftButtonProps={{ sx: { color: 'common.white' } }}
            rightButtonProps={{ sx: { color: 'common.white' } }}
          >
            <Carousel ref={carouselRef} {...carouselSettings}>
              {posts.map((post) => (
                <PostItemCarouse key={post.id} post={post} />
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>

        <Box
          sx={{
            px: { xs: 2.5, sm: 5, md: 8, lg: 15 },
          }}
        >
          {isMdUp && (
            <Typography variant="h2" sx={{ color: 'common.white', py: 10 }}>
              Latest Posts
            </Typography>
          )}

          <Stack spacing={3}>
            {posts.slice(0, 3).map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </Stack>

          <Box
            sx={{
              mt: { xs: 8, md: 5 },
              mb: 10,
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Button
              component={RouterLink}
              to={paths.travel.posts}
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              View All
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

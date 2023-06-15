import { useRef, useState } from 'react';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Image from 'src/components/image';
import Carousel, { CarouselDots, CarouselArrows } from 'src/components/carousel';
//
import PostItem from './PostItem';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(10, 0),
  '& .slick-list': {
    borderRadius: Number(theme.shape.borderRadius) * 2,
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0, 10, 0),
  },
}));

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function BlogMarketingFeaturedPosts({ posts }: Props) {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current: number, next: number) => setSelected(next),
    ...CarouselDots({
      rounded: true,
      sx: { mt: 5 },
    }),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <StyledRoot>
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <CarouselArrows
          onNext={handleNext}
          onPrev={handlePrev}
          leftButtonProps={{
            sx: {
              mt: -8,
              left: 2,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.main' },
            },
          }}
          rightButtonProps={{
            sx: {
              mt: -8,
              right: 2,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.main' },
            },
          }}
        >
          <Carousel ref={carouselRef} {...carouselSettings}>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </Carousel>
        </CarouselArrows>
      </Container>

      {posts.map(
        (post, index) =>
          selected === index && (
            <Image
              key={post.id}
              alt="post cover"
              src={post.coverImg}
              sx={{ position: 'absolute', top: 0, width: 1, height: 1 }}
            />
          )
      )}

      <StyledOverlay />
    </StyledRoot>
  );
}

import { useRef } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// _mock
import { _productsCarousel } from 'src/_mock';
// components
import Carousel, { CarouselDots } from 'src/components/carousel';
//
import { EcommerceProductItemHero } from '../product/item';

// ----------------------------------------------------------------------

export default function EcommerceLandingHero() {
  const theme = useTheme();

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    dots: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      rounded: true,
      sx: {
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 40,
        mx: 'auto',
        position: 'absolute',
      },
    }),
  };

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 8 },
      }}
    >
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Carousel ref={carouselRef} {...carouselSettings}>
          {_productsCarousel.map((product) => (
            <EcommerceProductItemHero key={product.id} product={product} />
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}

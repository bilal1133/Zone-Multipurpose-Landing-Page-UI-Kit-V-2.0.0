// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Image from 'src/components/image';
import Carousel, { CarouselDots } from 'src/components/carousel';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    width: 1,
    flexGrow: 1,
    display: 'block',
    position: 'relative',
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

type AuthCarouselProps = {
  title: string;
  images: string[];
};

export default function AuthCarousel({ title, images }: AuthCarouselProps) {
  const theme = useTheme();

  const carouselSettings = {
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      rounded: true,
      sx: {
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 80,
        mx: 'auto',
        position: 'absolute',
      },
    }),
  };

  return (
    <StyledRoot>
      <StyledOverlay />

      <Typography
        variant="h2"
        sx={{
          p: 10,
          width: 1,
          left: 0,
          bottom: 80,
          zIndex: 10,
          textAlign: 'center',
          position: 'absolute',
          color: 'common.white',
          whiteSpace: 'pre-line',
        }}
      >
        {title}
      </Typography>

      <Carousel {...carouselSettings}>
        {images.map((img) => (
          <Box key={img}>
            <Image alt={img} src={img} sx={{ width: 1, height: '100vh' }} />
          </Box>
        ))}
      </Carousel>
    </StyledRoot>
  );
}

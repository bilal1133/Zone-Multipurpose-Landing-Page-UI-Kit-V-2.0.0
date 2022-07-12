import Slider from 'react-slick';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// components
import { Image, BgOverlay, CarouselDots } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    width: 1,
    flexGrow: 1,
    display: 'block',
    position: 'relative',
  },
}));

// ----------------------------------------------------------------------

type AuthCarouselProps = {
  title: string;
};

export default function AuthCarousel({ title }: AuthCarouselProps) {
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
    <RootStyle>
      <BgOverlay />

      <Typography
        variant="h2"
        sx={{
          p: 10,
          bottom: 80,
          zIndex: 10,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        {title}
      </Typography>

      <Slider {...carouselSettings}>
        {['auth01', 'auth02'].map((img) => (
          <Box key={img}>
            <Image
              alt={img}
              src={`https://zone-assets-api.vercel.app/assets/images/auth/${img}.jpg`}
              sx={{ width: 1, height: '100vh' }}
            />
          </Box>
        ))}
      </Slider>
    </RootStyle>
  );
}

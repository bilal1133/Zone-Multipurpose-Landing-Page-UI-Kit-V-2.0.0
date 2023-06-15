// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, Container } from '@mui/material';
// types
import { IBrandProps } from 'src/types/brand';
// components
import SvgColor from 'src/components/svg-color';
import Carousel from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = {
  brands: IBrandProps[];
};

export default function CustomerElearning({ brands }: Props) {
  const theme = useTheme();

  const carouselSettings = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">We Work With</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Quisque aliquet, libero consequat elementum convallis.
        </Typography>
      </Stack>

      <Carousel {...carouselSettings}>
        {brands.map((brand) => (
          <SvgColor key={brand.id} src={brand.image} sx={{ width: 106, height: 32 }} />
        ))}
      </Carousel>
    </Container>
  );
}

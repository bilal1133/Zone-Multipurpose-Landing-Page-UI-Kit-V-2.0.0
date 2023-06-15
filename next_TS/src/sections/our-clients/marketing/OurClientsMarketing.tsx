// @mui
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
// types
import { IBrandProps } from 'src/types/brand';
// components
import SvgColor from 'src/components/svg-color';
import Carousel from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = {
  brands: IBrandProps[];
};

export default function OurClientsMarketing({ brands }: Props) {
  const theme = useTheme();

  const carouselSettings = {
    speed: 5000,
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplaySpeed: 5000,
    rtl: Boolean(theme.direction === 'rtl'),
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
        pt: { xs: 5, md: 10 },
      }}
    >
      <Carousel {...carouselSettings}>
        {brands.map((brand) => (
          <SvgColor
            key={brand.id}
            src={brand.image}
            sx={{ width: 106, height: 32, color: 'grey.500', opacity: 0.8 }}
          />
        ))}
      </Carousel>
    </Container>
  );
}

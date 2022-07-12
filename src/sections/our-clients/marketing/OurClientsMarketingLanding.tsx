import Slider from 'react-slick';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
// @types
import { BrandProps } from '../../../@types/brand';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  brands: BrandProps[];
};

export default function OurClientsMarketingLanding({ brands }: Props) {
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
    <Container>
      <Slider {...carouselSettings}>
        {brands.map((brand) => (
          <SvgIconStyle
            key={brand.id}
            src={brand.image}
            sx={{ width: 106, height: 32, color: 'grey.500', opacity: 0.8 }}
          />
        ))}
      </Slider>
    </Container>
  );
}

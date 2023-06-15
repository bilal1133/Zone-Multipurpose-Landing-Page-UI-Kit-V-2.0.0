import { useRef, useEffect, useState } from 'react';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Stack, Typography, Button, Avatar, Box } from '@mui/material';
// utils
import { fCurrency } from 'src/utils/formatNumber';
import { bgGradient, bgBlur } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// types
import { ITourProps } from 'src/types/tour';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { CarouselDots } from 'src/components/carousel';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  backgroundColor: alpha(theme.palette.common.black, 0.24),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

type Props = {
  tours: ITourProps[];
};

export default function TravelLandingHero({ tours }: Props) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const [selected, setSelected] = useState(1);

  const [carouselContent, setCarouselContent] = useState<Carousel>();

  const [carouselThumbnail, setCarouselThumbnail] = useState<Carousel>();

  const carouselRef1 = useRef<Carousel | null>(null);

  const carouselRef2 = useRef<Carousel | null>(null);

  useEffect(() => {
    setCarouselContent(carouselRef1.current || undefined);
    setCarouselThumbnail(carouselRef2.current || undefined);
  }, [selected]);

  const carouselContentSettings = {
    initialSlide: selected,
    speed: 500,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setSelected(next),
    ...CarouselDots({
      rounded: true,
      sx: {
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 64,
        position: 'absolute',
        display: { md: 'none' },
      },
    }),
  };

  const carouselThumbnailSettings = {
    arrows: false,
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0px',
    verticalSwiping: true,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current: number, next: number) => setSelected(next),
  };

  return (
    <Box sx={{ minHeight: { md: '100vh' }, position: 'relative' }}>
      {!!tours.length && (
        <Carousel {...carouselContentSettings} asNavFor={carouselThumbnail} ref={carouselRef1}>
          {tours.map((tour) => (
            <CarouselItem key={tour.id} tour={tour} />
          ))}
        </Carousel>
      )}

      {isMdUp && (
        <Stack
          spacing={2}
          justifyContent="center"
          sx={{
            top: 0,
            height: 1,
            maxWidth: 220,
            position: 'absolute',
            right: { xs: 20, lg: '6%', xl: '10%' },
          }}
        >
          {!!tours.length && (
            <Carousel {...carouselThumbnailSettings} asNavFor={carouselContent} ref={carouselRef2}>
              {tours.map((tour, index) => (
                <ThumbnailItem key={tour.id} tour={tour} isSelected={selected === index} />
              ))}
            </Carousel>
          )}
        </Stack>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  tour: ITourProps;
};

function CarouselItem({ tour }: CarouselItemProps) {
  const { slug, location, heroImg, ratings, price, duration } = tour;

  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        position: 'relative',
        color: 'common.white',
        justifyContent: 'center',
      }}
    >
      {/* Content */}
      <Stack
        alignItems="center"
        sx={{
          zIndex: 9,
          py: { xs: 20, md: 0 },
          position: { md: 'absolute' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'info.main', mb: 5 }}>
          {location}
        </Typography>

        <Typography variant="h1" sx={{ maxWidth: 480 }}>
          {slug}
        </Typography>

        <Stack
          alignItems="center"
          spacing={{ xs: 2.5, md: 5 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{ my: 5 }}
        >
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:time" width={24} sx={{ mr: 1, color: 'primary.main' }} />
            {duration}
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:star" width={24} sx={{ mr: 1, color: 'primary.main' }} />
            {`${ratings} reviews`}
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:currency" width={24} sx={{ mr: 1, color: 'primary.main' }} />
            {`Starting at ${fCurrency(price)}`}
          </Stack>
        </Stack>

        <Button variant="contained" size="large">
          Book Now
        </Button>
      </Stack>

      {/* Background */}
      <Box
        sx={{
          width: 1,
          height: 1,
          position: {
            xs: 'absolute',
            md: 'relative',
          },
        }}
      >
        <StyledOverlay />

        <Image
          alt="hero"
          src={heroImg}
          sx={{
            height: { xs: 1, md: '100vh' },
          }}
        />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ThumbnailItemProps = {
  tour: ITourProps;
  isSelected?: boolean;
};

function ThumbnailItem({ tour, isSelected }: ThumbnailItemProps) {
  const theme = useTheme();

  const { continent, heroImg, location } = tour;

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2.5}
      sx={{
        px: 2,
        py: 1.5,
        cursor: 'pointer',
        color: 'common.white',
        ...(isSelected && {
          borderRadius: 2,
          ...bgBlur({
            opacity: 0.08,
            color: theme.palette.common.white,
          }),
        }),
      }}
    >
      <Avatar src={heroImg} sx={{ width: 48, height: 48 }} />

      <Stack spacing={0.5}>
        <TextMaxLine variant="h6" line={1}>
          {location}
        </TextMaxLine>

        <Stack direction="row" alignItems="center">
          <Iconify icon="carbon:location" sx={{ mr: 1, color: 'primary.main' }} />
          <TextMaxLine variant="caption" line={1} sx={{ opacity: 0.48 }}>
            {continent}
          </TextMaxLine>
        </Stack>
      </Stack>
    </Stack>
  );
}

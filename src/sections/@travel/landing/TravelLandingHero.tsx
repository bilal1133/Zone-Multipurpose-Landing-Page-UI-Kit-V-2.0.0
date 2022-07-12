import Slider from 'react-slick';
import { useRef, useEffect, useState } from 'react';
// icons
import locationIcon from '@iconify/icons-carbon/location';
import timeIcon from '@iconify/icons-carbon/time';
import starIcon from '@iconify/icons-carbon/star';
import currencyIcon from '@iconify/icons-carbon/currency';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Stack, Typography, Button, Avatar, Box } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// @utils
import { fCurrency } from '../../../utils/formatNumber';
// @types
import { TourProps } from '../../../@types/travel';
// components
import {
  Image,
  Iconify,
  BgOverlay,
  TextMaxLine,
  CarouselDots,
  TextIconLabel,
} from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  tours: TourProps[];
};

export default function TravelLandingHero({ tours }: Props) {
  const theme = useTheme();

  const [selected, setSelected] = useState(1);

  const [carouselContent, setCarouselContent] = useState<Slider>();

  const [carouselThumbnail, setCarouselThumbnail] = useState<Slider>();

  const carouselRef1 = useRef<Slider | null>(null);

  const carouselRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setCarouselContent(carouselRef1.current || undefined);
    setCarouselThumbnail(carouselRef2.current || undefined);
  }, [selected]);

  const carouselContentSettings = {
    initialSlide: selected,
    dots: true,
    speed: 1440,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setSelected(next),
    ...CarouselDots({
      sx: {
        display: { md: 'none' },
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 64,
        position: 'absolute',
      },
    }),
  };

  const carouselThumbnailSettings = {
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    vertical: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
    focusOnSelect: true,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current: number, next: number) => setSelected(next),
  };

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      {!!tours.length && (
        <Slider {...carouselContentSettings} asNavFor={carouselThumbnail} ref={carouselRef1}>
          {tours.map((tour, index) => (
            <ContentItem key={tour.id} tour={tour} isSelected={selected === index} />
          ))}
        </Slider>
      )}

      <Stack
        spacing={2}
        justifyContent="center"
        sx={{
          top: 0,
          height: 1,
          maxWidth: 220,
          position: 'absolute',
          display: { xs: 'none', md: 'flex' },
          right: { xs: 20, lg: '6%', xl: '10%' },
        }}
      >
        {!!tours.length && (
          <Slider {...carouselThumbnailSettings} asNavFor={carouselContent} ref={carouselRef2}>
            {tours.map((tour, index) => (
              <ThumbnailItem key={tour.id} tour={tour} isSelected={selected === index} />
            ))}
          </Slider>
        )}
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ItemProps = {
  tour: TourProps;
  isSelected?: boolean;
};

function ContentItem({ tour }: ItemProps) {
  const theme = useTheme();
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
        <Typography variant="overline" sx={{ color: 'secondary.main', mb: 5 }}>
          {location}
        </Typography>

        <Typography variant="h1" sx={{ maxWidth: 480 }}>
          {slug}
        </Typography>

        <Stack
          alignItems="center"
          spacing={{ xs: 2.5, md: 5 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            my: 5,
            '& svg': {
              mr: 1,
              width: 24,
              height: 24,
              color: 'primary.main',
            },
          }}
        >
          <TextIconLabel
            icon={<Iconify icon={timeIcon} />}
            value={duration}
            sx={{ typography: 'subtitle2' }}
          />

          <TextIconLabel
            icon={<Iconify icon={starIcon} />}
            value={`${ratings} reviews`}
            sx={{ typography: 'subtitle2' }}
          />

          <TextIconLabel
            icon={<Iconify icon={currencyIcon} />}
            value={`Starting at ${fCurrency(price)}`}
            sx={{ typography: 'subtitle2' }}
          />
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
        <BgOverlay
          startColor={alpha(theme.palette.grey[900], 0.48)}
          endColor={alpha(theme.palette.grey[900], 0.48)}
        />
        <BgOverlay />
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

function ThumbnailItem({ tour, isSelected }: ItemProps) {
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
          ...cssStyles().bgBlur({
            blur: 8,
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
        <TextIconLabel
          icon={
            <Iconify
              icon={locationIcon}
              sx={{ width: 20, height: 20, mr: 1, color: 'primary.main' }}
            />
          }
          value={
            <TextMaxLine variant="caption" line={1} sx={{ opacity: 0.48 }}>
              {continent}
            </TextMaxLine>
          }
        />
      </Stack>
    </Stack>
  );
}

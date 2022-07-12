import { useRef } from 'react';
import Slider from 'react-slick';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Stack, Card, Button } from '@mui/material';
// routes
import Routes from '../../../routes';
// hooks
import { useBoundingClientRect } from '../../../hooks';
// @types
import { JobByCountryProps } from '../../../@types/career';
// components
import { CarouselArrows, Image, Iconify, SvgIconStyle } from '../../../components';
import { varHover, varTranHover } from '../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    padding: theme.spacing(15, 0),
  },
}));

const ContainerStyle = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    marginBottom: 0,
    position: 'absolute',
    height: 'calc(100% - 320px)',
  },
}));

const CarouselArrowsStyle = styled(CarouselArrows)(({ theme }) => ({
  position: 'unset',
  justifyContent: 'center',
  '& button': {
    borderRadius: '50%',
    border: `solid 1px ${theme.palette.divider}`,
  },
}));

// ----------------------------------------------------------------------

type Props = {
  countries: JobByCountryProps[];
};

export default function CareerLangdingConnections({ countries }: Props) {
  const theme = useTheme();

  const carouselRef = useRef<Slider | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const carouselSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <ContainerStyle>
        <SvgIconStyle
          src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_map.svg"
          sx={{
            top: -40,
            left: -64,
            width: 780,
            height: 646,
            opacity: 0.64,
            position: 'absolute',
            color: 'text.disabled',
            display: { xs: 'none', md: 'block' },
          }}
        />

        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Stack
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                pt: { md: 8 },
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Typography variant="h2">Global Connections</Typography>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla neque dolor,
                sagittis eget, iaculis quis.
              </Typography>
              <NextLink href={Routes.career.jobs} passHref>
                <Button
                  size="large"
                  variant="contained"
                  endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
                >
                  View All Jobs
                </Button>
              </NextLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </ContainerStyle>

      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        <Slider ref={carouselRef} {...carouselSettings}>
          {countries.map((country) => (
            <Box
              key={country.id}
              sx={{
                ml: '-1px',
                py: 8,
                pr: { xs: 2, md: 4 },
                pl: { xs: 2, md: 0 },
                color: 'common.white',
              }}
            >
              <JobByCountryItem key={country.id} country={country} />
            </Box>
          ))}
        </Slider>

        <CarouselArrowsStyle onNext={handleNext} onPrevious={handlePrevious} />
      </Box>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type JobByCountryItemProp = {
  country: JobByCountryProps;
};

function JobByCountryItem({ country }: JobByCountryItemProp) {
  const { location, coverImg, totalJobs } = country;
  return (
    <NextLink href={Routes.career.jobs} passHref>
      <Card
        component={m.div}
        whileHover="hover"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Box sx={{ overflow: 'hidden' }}>
          <m.div variants={varHover(1.1)} transition={varTranHover()}>
            <Image src={coverImg} alt="cover" ratio="3/4" />
          </m.div>
        </Box>

        <Stack spacing={1} sx={{ textAlign: 'center', p: 2.5 }}>
          <Typography variant="h5">{location}</Typography>
          <Typography variant="body3" sx={{ color: 'text.disabled' }}>
            {totalJobs} Jobs
          </Typography>
        </Stack>
      </Card>
    </NextLink>
  );
}

import { useState } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
import { fShortenNumber } from 'src/utils/formatNumber';
// types
import { ICountriesProps } from 'src/types/contact';
import { IJobFiltersProps } from 'src/types/job';
// _mock
import { _brands } from 'src/_mock';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// assets
import CareerHeroIllustration from 'src/assets/illustrations/CareerHeroIllustration';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
//
import { CareerFilterKeyword, CareerFilterLocations } from '../job/filters/components';

// ----------------------------------------------------------------------

const StyledRoot = styled(Stack)(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  overflow: 'hidden',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(15),
  },
}));

const StyledBar = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

// ----------------------------------------------------------------------

type FiltersProps = Pick<IJobFiltersProps, 'filterKeyword' | 'filterLocation'>;

export default function CareerLandingHero() {
  const isMdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState<FiltersProps>({
    filterKeyword: null,
    filterLocation: null,
  });

  const handleChangeKeyword = (keyword: string | null) => {
    setFilters({
      ...filters,
      filterKeyword: keyword,
    });
  };

  const handleChangeLocation = (keyword: ICountriesProps | null) => {
    setFilters({
      ...filters,
      filterLocation: keyword,
    });
  };

  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  Get The
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {` Career `}
                  </Box>
                  You Deserve
                </Typography>

                <Typography sx={{ color: 'grey.500' }}>
                  Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                  venenatis ante odio sit amet eros.
                </Typography>
              </Stack>

              <StyledBar spacing={{ xs: 1, md: 0 }}>
                <CareerFilterKeyword
                  filterKeyword={filters.filterKeyword}
                  onChangeKeyword={handleChangeKeyword}
                  sx={{
                    bgcolor: 'transparent',
                    '&:hover, &.Mui-focused': { bgcolor: 'transparent' },
                  }}
                />

                {isMdUp && <Divider orientation="vertical" sx={{ height: 24 }} />}

                <CareerFilterLocations
                  filterLocation={filters.filterLocation}
                  onChangeLocation={handleChangeLocation}
                  sx={{
                    bgcolor: 'transparent',
                    '&:hover, &.Mui-focused': { bgcolor: 'transparent' },
                  }}
                />

                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    px: 0,
                    minWidth: { xs: 1, md: 48 },
                  }}
                >
                  <Iconify icon="carbon:search" width={24} />
                </Button>
              </StyledBar>

              <BrandsSection />

              <SummarySection />
            </Stack>
          </Grid>

          {isMdUp && (
            <Grid xs={12} md={6} lg={6}>
              <CareerHeroIllustration />
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

const DividerStyle = <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />;

function BrandsSection() {
  return (
    <Stack
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      sx={{
        mt: { md: 1 },
      }}
    >
      {_brands.slice(0, 4).map((brand) => (
        <Box
          key={brand.id}
          sx={{
            lineHeight: 0,
            my: { xs: 1.5, md: 0.5 },
            mr: { md: 3 },
            width: { xs: 0.5, md: 'auto' },
            '&:last-of-type': {
              mr: 0,
            },
          }}
        >
          <SvgColor
            src={brand.image}
            sx={{
              width: 94,
              height: 28,
              opacity: 0.8,
              color: 'grey.500',
            }}
          />
        </Box>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function SummarySection() {
  return (
    <Stack
      spacing={3}
      direction={{ xs: 'column', md: 'row' }}
      divider={DividerStyle}
      sx={{ pt: { md: 5 } }}
    >
      <Stack spacing={{ md: 3 }} direction="row" divider={DividerStyle}>
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(2000000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Jobs
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(500000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Successful Hiring
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={{ md: 3 }} direction="row" divider={DividerStyle}>
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(250000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Partners
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(156000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Employee
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

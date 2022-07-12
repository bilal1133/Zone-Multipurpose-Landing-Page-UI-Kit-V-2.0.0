// icons
import locationIcon from '@iconify/icons-carbon/location';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Box } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// @types
import { TourProps } from '../../../@types/travel';
// components
import { Image, BgOverlay, Iconify, TextMaxLine, TextIconLabel } from '../../../components';

// ----------------------------------------------------------------------

const LINES = [
  'First Class Flights',
  '5 Star Accommodations',
  'Inclusive Packages',
  'Latest Model Vehicles',
  'Handpicked Hotels',
  'Accesibility managment',
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  tours: TourProps[];
};

export default function TravelLandingFavoriteDestinations({ tours }: Props) {
  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h2">Our Favorite Destinations</Typography>
            <Typography sx={{ my: 3, color: 'text.secondary' }}>
              Since wire-frame renderings are relatively simple and fast to calculate, they are
              often used in cases
            </Typography>

            <Stack spacing={2}>
              {LINES.map((line) => (
                <TextIconLabel
                  key={line}
                  icon={
                    <Box
                      sx={{
                        mr: 2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                      }}
                    />
                  }
                  value={line}
                  sx={{ typography: 'body1' }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={{ xs: 4, md: 3 }}>
              {tours.map((tour, index) => (
                <Grid
                  key={tour.id}
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    ...(index === 1 && {
                      display: { md: 'inline-flex' },
                      alignItems: { md: 'flex-end' },
                    }),
                  }}
                >
                  <DestinationItem tour={tour} order={index % 3} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type DestinationItemProps = {
  tour: TourProps;
  order: number;
};

function DestinationItem({ tour, order }: DestinationItemProps) {
  const isDesktop = useResponsive('up', 'md');

  const { location, continent, coverImg } = tour;

  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BgOverlay />
      <Image
        alt={location}
        src={coverImg}
        ratio={(!isDesktop && '1/1') || (order && '1/1') || '4/6'}
      />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          left: 0,
          bottom: 0,
          zIndex: 9,
          color: 'common.white',
          position: 'absolute',
        }}
      >
        <TextMaxLine variant="h4" line={1}>
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
            <TextMaxLine variant="body2" line={1} sx={{ opacity: 0.72 }}>
              {continent}
            </TextMaxLine>
          }
        />
      </Stack>
    </Box>
  );
}

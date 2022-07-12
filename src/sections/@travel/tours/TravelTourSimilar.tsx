// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Button, Typography, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// @types
import { TourProps } from '../../../@types/travel';
// components
import { Iconify } from '../../../components';
//
import TravelTourItem from './TravelTourItem';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  tours: TourProps[];
};

export default function TravelTourSimilar({ tours }: Props) {
  return (
    <RootStyle>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ mb: { xs: 8, md: 6 } }}
        >
          <Typography variant="h3">You Might Like</Typography>

          <NextLink href={Routes.travel.tours} passHref>
            <Button
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
              }}
            >
              View All
            </Button>
          </NextLink>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {tours.map((tour) => (
            <TravelTourItem key={tour.id} tour={tour} />
          ))}
        </Box>

        <Stack
          alignItems="center"
          sx={{
            mt: 8,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <NextLink href={Routes.travel.tours} passHref>
            <Button
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              View All
            </Button>
          </NextLink>
        </Stack>
      </Container>
    </RootStyle>
  );
}

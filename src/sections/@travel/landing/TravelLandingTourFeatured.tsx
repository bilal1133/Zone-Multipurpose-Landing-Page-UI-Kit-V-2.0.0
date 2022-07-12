// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Button, Typography, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// @types
import { TourProps } from '../../../@types/travel';
//
import TravelTourItem from '../tours/TravelTourItem';

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

export default function TravelLandingTourFeatured({ tours }: Props) {
  return (
    <RootStyle>
      <Container>
        <Stack spacing={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h3">Featured Tours</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {`Our Featured Tours can help you find the trip that's perfect for you!`}
          </Typography>
        </Stack>

        <Box
          sx={{
            my: { xs: 8, md: 10 },
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

        <Box sx={{ textAlign: 'center' }}>
          <NextLink href={Routes.travel.tours} passHref>
            <Button size="large" variant="contained">
              View All Tours
            </Button>
          </NextLink>
        </Box>
      </Container>
    </RootStyle>
  );
}

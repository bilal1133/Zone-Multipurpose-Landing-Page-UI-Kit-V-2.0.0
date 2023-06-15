import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Container, Stack, Button, Typography, Box } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// types
import { ITourProps } from 'src/types/tour';
//
import TravelTourItem from '../tour/item/TravelTourItem';

// ----------------------------------------------------------------------

type Props = {
  tours: ITourProps[];
};

export default function TravelLandingTourFeatured({ tours }: Props) {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Featured Tours</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          {`Our Featured Tours can help you find the trip that's perfect for you!`}
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          my: { xs: 8, md: 10 },
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
        <Button
          component={RouterLink}
          to={paths.travel.tours}
          size="large"
          variant="outlined"
          color="inherit"
        >
          View All Tours
        </Button>
      </Box>
    </Container>
  );
}

// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Typography, Paper, Avatar, Button, Container, Box } from '@mui/material';
// @routes
import Routes from '../../../routes';
// @types
import { TourProps } from '../../../@types/travel';
// components
import { Iconify, TextMaxLine } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  tours: TourProps[];
};

export default function TravelLandingToursByCity({ tours }: Props) {
  return (
    <RootStyle>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h2">Tours By City</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {`Our Featured Tours can help you find the trip that's perfect for you!`}
            </Typography>
          </Stack>

          <NextLink href={Routes.travel.tours} passHref>
            <Button
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              View All
            </Button>
          </NextLink>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {tours.map((tour) => (
            <TourItem key={tour.id} tour={tour} />
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

// ----------------------------------------------------------------------

type TourItemProps = {
  tour: TourProps;
};

function TourItem({ tour }: TourItemProps) {
  const { id, coverImg, location } = tour;

  return (
    <NextLink as={Routes.travel.tour(id)} href={Routes.travel.tour('[id]')} passHref>
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: 2,
          cursor: 'pointer',
          bgcolor: 'background.default',
          '&:hover': {
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <Avatar src={coverImg} sx={{ width: 64, height: 64 }} />
          <Stack spacing={0.5}>
            <TextMaxLine variant="h6" line={1}>
              {location}
            </TextMaxLine>
            <Typography variant="body3" sx={{ color: 'text.secondary' }}>
              196 Place
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </NextLink>
  );
}

// @mui
import { Typography, Container, Stack, Box } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    total: 130,
    description: 'Air tickets sold',
    icon: '/assets/icons/travel/ic_travel_tickets.svg',
  },
  {
    total: 196,
    description: 'Tours booked',
    icon: '/assets/icons/travel/ic_travel_booking.svg',
  },
  {
    total: 10670,
    description: 'Site visitors',
    icon: '/assets/icons/travel/ic_travel_site_visitors.svg',
  },
  {
    total: 877,
    description: 'Verified hotels',
    icon: '/assets/icons/travel/ic_travel_verified_hotels.svg',
  },
];

// ----------------------------------------------------------------------

export default function TravelLandingSummary() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Fastest Way to Book over 450 Great Tours</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Since wire-frame renderings are relatively simple and fast to calculate, they are often
          used in cases
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 8, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value) => (
          <Stack key={value.description} spacing={1}>
            <Image
              alt={value.icon}
              src={value.icon}
              sx={{ mb: 3, width: 80, height: 80, mx: 'auto' }}
            />

            <Typography variant="h3">
              <CountUp
                start={value.total / 5}
                end={value.total}
                formattingFn={(newValue: number) => fShortenNumber(newValue)}
              />
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}

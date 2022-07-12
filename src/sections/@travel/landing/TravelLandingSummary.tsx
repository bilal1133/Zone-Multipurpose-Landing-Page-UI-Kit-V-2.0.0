// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import { CountUpNumber, Image } from '../../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    total: 130,
    description: 'Air tickets sold',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/travel/ic_travel_tickets.svg',
  },
  {
    total: 196,
    description: 'Tours booked',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/travel/ic_travel_booking.svg',
  },
  {
    total: 10670,
    description: 'Site visitors',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/travel/ic_travel_site_visitors.svg',
  },
  {
    total: 877,
    description: 'Verified hotels',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/travel/ic_travel_verified_hotels.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function TravelLandingSummary() {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
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
            <div key={value.description}>
              <Image alt={value.icon} src={value.icon} sx={{ width: 80, height: 80, mx: 'auto' }} />
              <Typography variant="h3" sx={{ mt: 3, mb: 1 }}>
                <CountUpNumber
                  threshold={1}
                  start={value.total / 5}
                  end={value.total}
                  formattingFn={(value: number) => fShortenNumber(value)}
                />
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}

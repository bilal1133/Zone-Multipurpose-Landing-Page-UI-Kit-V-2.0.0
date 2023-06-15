// @mui
import { Container, Typography, Box, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import _mock from 'src/_mock';
// components
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index + 2));

const SUMMARY = [
  { name: 'Air tickets sold', number: 130 },
  { name: 'Tours booked', number: 196 },
  { name: 'Site visitors', number: 10679 },
  { name: 'Verified hotels', number: 877 },
];

// ----------------------------------------------------------------------

export default function TravelAbout() {
  const isSmUp = useResponsive('up', 'sm');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: 5,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 560,
          textAlign: 'center',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h1">About Us</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook
          Marketing, Analytics & More!
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {(isSmUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
          <Grid key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
            <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          textAlign: 'center',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          pt: { xs: 5, md: 10 },
          pb: 10,
        }}
      >
        {SUMMARY.map((value) => (
          <div key={value.name}>
            <Typography variant="h2" gutterBottom>
              <CountUp
                start={value.number / 5}
                end={value.number}
                formattingFn={(newValue: number) => fShortenNumber(newValue)}
              />

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                +
              </Typography>
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.name}
            </Typography>
          </div>
        ))}
      </Box>

      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Box
            sx={{
              mb: 2,
              width: 24,
              height: 3,
              borderRadius: 3,
              bgcolor: 'primary.main',
              mx: { xs: 'auto', md: 0 },
            }}
          />
          <Typography variant="h3">
            Maecenas malesuada. Cras ultricies mi eu turpis hendrerit fringilla Nunc egestas
          </Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            Fusce convallis metus id felis luctus
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
            Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
            <br />
            <br />
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Maecenas nec odio et
            ante tincidunt tempus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi. Vestibulum eu odio. Curabitur ullamcorper ultricies nisi.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

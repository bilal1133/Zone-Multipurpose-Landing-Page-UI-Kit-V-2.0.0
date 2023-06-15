// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Stack, Box, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Jobs', number: 2230000 },
  { name: 'Successful Hiring', number: 500000 },
  { name: 'Partners', number: 250 },
  { name: 'Employee', number: 1560 },
];

// ----------------------------------------------------------------------

const StyledSection = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(10),
  },
}));

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    right: 0,
    width: '75%',
    left: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

// ----------------------------------------------------------------------

export default function CareerAbout() {
  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography
        paragraph
        variant="overline"
        sx={{ color: 'primary.main', textAlign: { xs: 'center', md: 'left' } }}
      >
        About us
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Typography variant="h2">We Make The Best For All Our Customers.</Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6} sx={{ color: 'text.secondary' }}>
          <Stack spacing={{ xs: 3, md: 10 }} direction={{ xs: 'column', md: 'row' }}>
            <Typography>
              Curabitur ullamcorper ultricies nisi. Sed mollis, eros et ultrices tempus, mauris
              ipsum aliquam libero, non adipiscing dolor urna a orci.
            </Typography>

            <Typography>
              Donec vitae sapien ut libero venenatis faucibus. Vestibulum fringilla pede sit amet
              augue. Vivamus euismod mauris.
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Section />
    </Container>
  );
}

// ----------------------------------------------------------------------

function Section() {
  return (
    <StyledSection>
      <Stack
        sx={{
          py: 10,
          zIndex: 9,
          ml: 'auto',
          position: 'relative',
          px: { xs: 2.5, md: 10 },
          width: { md: 0.75, lg: 0.5 },
        }}
      >
        <Stack
          sx={{
            mb: 5,
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2" paragraph>
            Our Agency Has Been
          </Typography>
          <Typography sx={{ opacity: 0.72 }}>
            Hello. Our agency has been present for over 20 years. We make the best for all our
            customers.
          </Typography>
        </Stack>

        <Box
          sx={{
            gap: 5,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {SUMMARY.map((value) => (
            <div key={value.name}>
              <Typography variant="h2" gutterBottom sx={{ color: 'primary.main' }}>
                <CountUp
                  start={value.number / 5}
                  end={value.number}
                  formattingFn={(newValue: number) => fShortenNumber(newValue)}
                />

                <Typography variant="h3" component="span" sx={{ verticalAlign: 'top', ml: 0.5 }}>
                  +
                </Typography>
              </Typography>

              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                {value.name}
              </Typography>
            </div>
          ))}
        </Box>
      </Stack>

      <StyledOverlay />

      <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0 }}>
        <Image
          alt="career about"
          src="/assets/images/career/career_about_team.jpg"
          sx={{ width: 1, height: 1 }}
        />
      </Box>
    </StyledSection>
  );
}

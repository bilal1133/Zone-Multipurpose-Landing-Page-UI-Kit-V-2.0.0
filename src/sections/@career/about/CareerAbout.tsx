// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
//
import { Image, BgOverlay, CountUpNumber } from '../../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Jobs', number: 2230000 },
  { name: 'Successful Hiring', number: 500000 },
  { name: 'Partners', number: 250 },
  { name: 'Employee', number: 1560 },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const SectionStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));

// ----------------------------------------------------------------------

export default function CareerAbout() {
  return (
    <RootStyle>
      <Container>
        <Typography
          paragraph
          variant="overline"
          sx={{ color: 'primary.main', textAlign: { xs: 'center', md: 'left' } }}
        >
          About us
        </Typography>

        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
          sx={{
            mb: { xs: 8, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid item xs={12} md={6} lg={5}>
            <Typography variant="h2">We Make The Best For All Our Customers.</Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ color: 'text.secondary' }}>
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
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

function Section() {
  return (
    <SectionStyle>
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
            display: 'grid',
            gap: 5,
            gridTemplateColumns: 'repeat(2, 1fr)',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {SUMMARY.map((value) => (
            <div key={value.name}>
              <Typography variant="h2" gutterBottom sx={{ color: 'primary.main' }}>
                <CountUpNumber
                  start={value.number / 5}
                  end={value.number}
                  formattingFn={(value: number) => fShortenNumber(value)}
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

      <BgOverlay
        sx={{
          right: { md: 0 },
          left: { md: 'auto' },
          width: { md: 0.75, lg: 0.5 },
        }}
      />

      <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0 }}>
        <Image
          alt="career about"
          src="https://zone-assets-api.vercel.app/assets/images/career/career_about.jpg"
          sx={{ width: 1, height: 1 }}
        />
      </Box>
    </SectionStyle>
  );
}

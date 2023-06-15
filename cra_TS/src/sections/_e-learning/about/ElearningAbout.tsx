// @mui
import { Container, Typography, Box, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    name: 'Learners',
    number: 14000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'Courses',
    number: 1050,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'Graduates',
    number: 52000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAbout() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: 10,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 8 }}
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid xs={12} md={6}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            Nullam accumsan lorem in dui.
          </Typography>
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Effective Forms Advertising Internet Web Site
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Over 92% of computers are infected with Adware and spyware. Such software is rarely
            accompanied by uninstall utility and even when it is it almost always leaves broken
            Windows
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={8}
        direction={{ md: 'row-reverse' }}
        justifyContent={{ md: 'space-between' }}
        sx={{
          pt: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={12} md={6} lg={6}>
          <Image
            alt="about"
            src="/assets/images/course/course_about.jpg"
            ratio="3/4"
            sx={{ borderRadius: 2 }}
          />
        </Grid>

        <Grid
          xs={12}
          md={6}
          lg={5}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Stack spacing={{ xs: 5, md: 10 }}>
            {SUMMARY.map((value) => (
              <Box key={value.name}>
                <Typography variant="h4" sx={{ color: 'text.disabled', opacity: 0.48 }}>
                  {value.name}
                </Typography>

                <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                  <CountUp
                    start={value.number / 2}
                    end={value.number}
                    formattingFn={(newValue: number) => fShortenNumber(newValue)}
                  />
                  +
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

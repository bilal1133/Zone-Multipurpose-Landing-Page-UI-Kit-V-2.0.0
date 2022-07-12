// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container, Grid, Box } from '@mui/material';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function ElearningLandingIntroduce() {
  return (
    <RootStyle>
      <Container>
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            color: 'primary.main',
            mb: { xs: 2, md: 10 },
          }}
        >
          Nullam accumsan lorem in dui.
        </Typography>

        <Grid
          container
          spacing={3}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid item xs={12} md={6} lg={5} display={{ xs: 'none', md: 'block' }}>
            <Image
              alt="about"
              src="https://zone-assets-api.vercel.app/assets/images/e-learning/course_langding_about.jpg"
              ratio="4/6"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Phasellus gravida semper nisi. Vestibulum rutrum{' '}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam
              vitae tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos hymenaeos.
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 5, md: 10 }}
              sx={{ mt: { xs: 8, md: 10 } }}
            >
              <Stack spacing={3}>
                <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
                <Typography sx={{ color: 'text.secondary' }}>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis
                </Typography>
              </Stack>

              <Stack spacing={3}>
                <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
                <Typography sx={{ color: 'text.secondary' }}>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

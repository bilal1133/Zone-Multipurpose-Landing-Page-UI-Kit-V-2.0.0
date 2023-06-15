// @mui
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function NewsletterElearning() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        overflow: 'hidden',
        bgcolor: 'primary.lighter',
      }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          <Grid xs={12} md={5} sx={{ textAlign: 'center', color: 'grey.800' }}>
            <Typography variant="h3">Register Now Forget 20% Discount Every Courses</Typography>

            <Typography sx={{ mt: 2.5, mb: 5 }}>
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus,
              fermentum eu
            </Typography>

            <TextField
              fullWidth
              hiddenLabel
              placeholder="Enter your email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button size="large" variant="contained">
                      Register
                    </Button>
                  </InputAdornment>
                ),
                sx: {
                  pr: 0.5,
                  bgcolor: 'common.white',
                  '&:hover, &.Mui-focused': {
                    bgcolor: 'common.white',
                  },
                },
              }}
              sx={{ maxWidth: 560 }}
            />
          </Grid>

          <Grid xs={12} md={5}>
            <Image
              alt="newsletter"
              src="/assets/illustrations/illustration_newsletter.svg"
              sx={{ maxWidth: 366, mx: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

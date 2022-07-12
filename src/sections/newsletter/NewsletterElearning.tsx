// @mui
import { alpha, styled } from '@mui/material/styles';
import { Grid, Button, Container, Typography, FilledInput, InputAdornment } from '@mui/material';
// components
import { Image } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
    backgroundColor: 'transparent',
  },
}));

// ----------------------------------------------------------------------

export default function NewsletterElearning() {
  return (
    <RootStyle>
      <Container
        sx={{
          py: { md: 10 },
          borderRadius: { md: 2 },
          bgcolor: (theme) => ({ md: alpha(theme.palette.primary.main, 0.08) }),
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            <Grid
              container
              spacing={{ xs: 8, md: 3 }}
              alignItems={{ md: 'center' }}
              justifyContent={{ md: 'space-between' }}
              direction={{ xs: 'column-reverse', md: 'row' }}
            >
              <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                <Typography variant="h3">Register Now Forget 20% Discount Every Courses</Typography>
                <Typography sx={{ mt: 2.5, mb: 5 }}>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna
                  purus, fermentum eu
                </Typography>

                <FilledInput
                  placeholder="Enter your email"
                  endAdornment={
                    <InputAdornment position="end">
                      <Button size="large" variant="contained">
                        Register
                      </Button>
                    </InputAdornment>
                  }
                  sx={{
                    pr: 0.5,
                    width: 1,
                    maxWidth: 560,
                    bgcolor: 'common.white',
                    '&:hover, &.Mui-focused': {
                      bgcolor: 'common.white',
                    },
                    '& .MuiFilledInput-input': {
                      py: '18px',
                      '&::placeholder': {
                        color: 'grey.500',
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={5}>
                <Image
                  alt="newsletter"
                  src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_newsletter.svg"
                  sx={{ maxWidth: 366, mx: 'auto' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

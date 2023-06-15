// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  ...bgGradient({
    startColor: `${alpha(theme.palette.grey[900], 0.88)}`,
    endColor: `${alpha(theme.palette.grey[900], 0.88)}`,
    imgUrl: '/assets/images/travel/travel_newsletter.jpg',
  }),
  [theme.breakpoints.up('md')]: {
    ...bgGradient({
      direction: 'to right',
      startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
      endColor: `${alpha(theme.palette.grey[900], 1)} 50%`,
      imgUrl: '/assets/images/travel/travel_newsletter.jpg',
    }),
    backgroundPosition: 'center, left ',
    backgroundSize: 'cover, auto 100%',
  },
}));

// ----------------------------------------------------------------------

export default function NewsletterTravel() {
  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3} justifyContent="flex-end">
          <Grid xs={12} md={5}>
            <Stack
              spacing={3}
              sx={{
                color: 'common.white',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h2">Newsletter</Typography>

              <Typography>
                Sign up now to receive hot special offers
                <br /> and information about the best tours!
              </Typography>

              <TextField
                fullWidth
                hiddenLabel
                placeholder="Enter your email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" size="large" sx={{ minWidth: 48, px: 0 }}>
                        <Iconify icon="carbon:chevron-right" />
                      </Button>
                    </InputAdornment>
                  ),
                  sx: { pr: 0.5, color: 'common.white' },
                }}
                sx={{ my: 5 }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

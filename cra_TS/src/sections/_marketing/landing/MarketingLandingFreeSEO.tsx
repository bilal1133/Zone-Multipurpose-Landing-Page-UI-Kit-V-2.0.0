// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Link,
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  TextFieldProps,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0),
    imgUrl: '/assets/images/marketing/marketing_get_free_seo.jpg',
  }),
  padding: theme.spacing(10, 0),
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const StyledInput = styled((props: TextFieldProps) => <TextField fullWidth {...props} />)(
  ({ theme }) => ({
    '& .MuiInputBase-input': {
      color: theme.palette.common.white,
    },
    '& .MuiInputLabel-root,& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.grey[500],
    },
  })
);

// ----------------------------------------------------------------------

export default function MarketingLandingFreeSEO() {
  return (
    <StyledRoot>
      <Container>
        <Grid
          container
          spacing={{
            xs: 5,
            md: 3,
          }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={5}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: 'primary.main',
                mb: { xs: 3, md: 8 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Get Free
              <br /> SEO Analysis
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 2 }}
            >
              <Iconify icon="carbon:email" width={24} sx={{ mr: 2 }} />

              <Link color="inherit" href="mailto:hello@example.com">
                hello@example.com
              </Link>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white' }}
            >
              <Iconify icon="carbon:location" width={24} sx={{ mr: 2 }} />
              508 Bridle Avenue Newnan, GA 30263
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
              <StyledInput variant="filled" label="Name" sx={{ mb: 2.5 }} />

              <StyledInput variant="filled" label="Email" sx={{ mb: 2.5 }} />

              <StyledInput variant="filled" label="Phone" sx={{ mb: 2.5 }} />

              <StyledInput variant="filled" label="Website URL" sx={{ mb: 5 }} />

              <Button size="large" variant="contained">
                Send Request
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

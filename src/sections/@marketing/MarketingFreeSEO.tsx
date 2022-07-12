// icons
import emailIcon from '@iconify/icons-carbon/email';
import locationIcon from '@iconify/icons-carbon/location';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Grid,
  Link,
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  TextFieldProps,
} from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
// components
import { Iconify } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  ...cssStyles(theme).bgImage({
    direction: 'right',
    url: 'https://zone-assets-api.vercel.app/assets/images/marketing/marketing_get_free_seo.jpg',
    startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
    endColor: `${alpha(theme.palette.grey[900], 1)} 50%`,
  }),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const InputStyle = styled((props: TextFieldProps) => <TextField fullWidth {...props} />)(
  ({ theme }) => ({
    '& .MuiFilledInput-input': {
      color: theme.palette.common.white,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.grey[500],
    },
  })
);

// ----------------------------------------------------------------------

export default function MarketingFreeSEO() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} justifyContent="space-between">
          <Grid item xs={12} md={5}>
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
              spacing={1}
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 2 }}
            >
              <Iconify icon={emailIcon} sx={{ width: 24, height: 24 }} />
              <Link color="inherit" href="mailto:hello@example.com">
                hello@example.com
              </Link>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              spacing={1}
              sx={{ color: 'common.white' }}
            >
              <Iconify icon={locationIcon} sx={{ width: 24, height: 24 }} />
              <Typography>508 Bridle Avenue Newnan, GA 30263</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack spacing={2.5} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <InputStyle variant="filled" label="Name" />
              <InputStyle variant="filled" label="Email" />
              <InputStyle variant="filled" label="Phone" />
              <InputStyle variant="filled" label="Website URL" sx={{ pb: 2.5 }} />
              <Button size="large" variant="contained" sx={{ width: 172 }}>
                Send Request
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

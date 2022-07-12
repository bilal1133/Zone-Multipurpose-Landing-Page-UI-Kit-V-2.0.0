// icons
import documentIcon from '@iconify/icons-carbon/document';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Button } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// components
import { Iconify, Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgImage(),
  padding: theme.spacing(10, 0),
}));

// ----------------------------------------------------------------------

export default function CareerLangdingForRecruiters() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              color: 'common.white',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
              FOR RECRUITERS
            </Typography>
            <Typography variant="h2">Do You Have A Position To Post Job? </Typography>
            <Typography sx={{ mt: 3, mb: 5, opacity: 0.72 }}>
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis
              ullamcorper velit.
            </Typography>

            <Button variant="contained" size="large" startIcon={<Iconify icon={documentIcon} />}>
              Post a Job
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="recruitment"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_recruitment.svg"
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

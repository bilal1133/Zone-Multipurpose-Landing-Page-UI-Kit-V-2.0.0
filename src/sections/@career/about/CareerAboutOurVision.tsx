// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function CareerAboutOurVision() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Typography variant="h3" sx={{ pt: { md: 5 } }}>
              Fusce convallis metus id felis luctus
            </Typography>
            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
              Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Image
              alt="about introduce"
              src="https://zone-assets-api.vercel.app/assets/images/career/career_about_introduce.jpg"
              ratio="3/4"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h3" sx={{ pt: { md: 5 } }}>
              Fusce convallis metus id felis luctus
            </Typography>
            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
              Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

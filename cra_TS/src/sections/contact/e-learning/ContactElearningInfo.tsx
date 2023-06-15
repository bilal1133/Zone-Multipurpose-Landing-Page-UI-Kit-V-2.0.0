// @mui
import {
  Typography,
  Stack,
  Container,
  Link,
  Divider,
  IconButton,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// _mock
import { _socials, _offices } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
//
import ContactMap from '../map';

// ----------------------------------------------------------------------

export default function ContactElearningInfo() {
  return (
    <Container
      sx={{
        pt: { xs: 5, md: 5 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={6} lg={4}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Get In Touch
          </Typography>

          <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> Email
              </Stack>

              <Link color="inherit" variant="body2" href="mailto:hello@example.com">
                hello@example.com
              </Link>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Phone
              </Stack>

              <Typography variant="body2">(907) 555-0101</Typography>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Address
              </Stack>

              <Typography variant="body2">
                3891 Ranchview Dr. Richardson, California 62639
              </Typography>
            </Stack>

            <Divider sx={{ borderStyle: 'dashed', width: 1 }} />

            <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="overline">Follow Us</Typography>
              <Stack direction="row">
                {_socials.map((social) => (
                  <IconButton key={social.value} color="inherit">
                    <Iconify icon={social.icon} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <ContactMap offices={_offices} sx={{ borderRadius: 2 }} />
        </Grid>
      </Grid>
    </Container>
  );
}

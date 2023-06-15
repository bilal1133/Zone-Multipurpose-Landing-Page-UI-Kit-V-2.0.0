// @mui
import { Typography, Stack, Container, Link, IconButton } from '@mui/material';
// _mock
import { _socials } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ContactCareerInfo() {
  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 5, md: 10 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography variant="h2">Get In Touch</Typography>

      <Typography
        variant="subtitle1"
        sx={{
          mt: 2,
          mb: { xs: 3, md: 5 },
        }}
      >{`We'd love to talk about how we can help you.`}</Typography>

      <Stack spacing={{ xs: 3, md: 5 }} direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">Email</Typography>

          <Link variant="body2" color="inherit" href="mailto:hello@example.com">
            hello@example.com
          </Link>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">Phone</Typography>

          <Typography variant="body2">(907) 555-0101</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">Address</Typography>

          <Typography variant="body2">3891 Ranchview Dr. Richardson, California 62639</Typography>
        </Stack>

        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Typography variant="subtitle2">Follow Us</Typography>

          <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value} color="inherit">
                <Iconify icon={social.icon} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

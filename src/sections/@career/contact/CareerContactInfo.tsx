// @mui
import { Typography, Stack, Container, Link } from '@mui/material';
// components
import { SocialsButton } from '../../../components';

// ----------------------------------------------------------------------

export default function CareerContactInfo() {
  return (
    <Container
      sx={{
        py: { xs: 8, md: 10 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography variant="h2">Get In Touch</Typography>
      <Typography
        variant="subtitle1"
        sx={{
          mt: 3,
          mb: { xs: 3, md: 6 },
        }}
      >{`We'd love to talk about how we can help you.`}</Typography>

      <Stack spacing={{ xs: 3, md: 5 }} direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={1}>
          <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
            Email
          </Typography>
          <Link variant="body2" color="inherit" href="mailto:hello@example.com">
            hello@example.com
          </Link>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
            Phone
          </Typography>
          <Typography variant="body2">(907) 555-0101</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
            Address
          </Typography>
          <Typography variant="body2">3891 Ranchview Dr. Richardson, California 62639</Typography>
        </Stack>

        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
            Follow Us
          </Typography>
          <SocialsButton sx={{ color: 'text.primary' }} />
        </Stack>
      </Stack>
    </Container>
  );
}

// @mui
import {
  Box,
  Stack,
  Button,
  BoxProps,
  Container,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function NewsletterMarketing({ sx, ...other }: BoxProps) {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.neutral' }} {...other}>
      <Container>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            direction={{ xs: 'column', md: 'row' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <SvgColor
              src="/assets/icons/ic_newsletter.svg"
              sx={{ width: 80, height: 80, color: 'primary.main' }}
            />

            <div>
              <Typography variant="h4" gutterBottom>
                Sign Up For Newsletter
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Receive 50% discount on first project
              </Typography>
            </div>
          </Stack>

          <TextField
            fullWidth
            hiddenLabel
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    size="large"
                    color="inherit"
                    variant="contained"
                    sx={{ height: 54, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  >
                    Sign Up
                  </Button>
                </InputAdornment>
              ),
              sx: { pr: 0 },
            }}
            sx={{ maxWidth: 466 }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, FilledInput, InputAdornment, Button } from '@mui/material';
//
import { SvgIconStyle } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

export default function NewsletterMarketing() {
  return (
    <RootStyle>
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
            <SvgIconStyle
              src="https://zone-assets-api.vercel.app/assets/icons/ic_newsletter.svg"
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

          <FilledInput
            placeholder="Enter your email"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    height: 56,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  Sign Up
                </Button>
              </InputAdornment>
            }
            sx={{
              p: 0,
              width: 1,
              maxWidth: 466,
              '& .MuiFilledInput-input': {
                py: '18px',
                '&::placeholder': {
                  color: 'grey.500',
                },
              },
            }}
          />
        </Stack>
      </Container>
    </RootStyle>
  );
}

// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Button, Container, Typography, TextField, InputAdornment } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: `${alpha(theme.palette.grey[900], 0.88)}`,
    imgUrl: '/assets/images/career/career_newsletter.jpg',
  }),
  padding: theme.spacing(15, 0),
}));

// ----------------------------------------------------------------------

export default function NewsletterCareer() {
  return (
    <StyledRoot>
      <Container>
        <Stack spacing={3} alignItems="center" sx={{ color: 'common.white', textAlign: 'center' }}>
          <Typography variant="h2">Get The Right Job For You</Typography>

          <Typography>
            Subscribe to get updated on latest and relevant career opportunities
          </Typography>

          <TextField
            fullWidth
            hiddenLabel
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      height: 54,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    Subscribe
                  </Button>
                </InputAdornment>
              ),
              sx: {
                pr: 0,
                bgcolor: 'common.white',
                '&:hover, &.Mui-focused': {
                  bgcolor: 'common.white',
                },
              },
            }}
            sx={{ maxWidth: 560 }}
          />
        </Stack>
      </Container>
    </StyledRoot>
  );
}

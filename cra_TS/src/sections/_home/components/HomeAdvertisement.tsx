// @mui
import { styled, alpha } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// routes
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    imgUrl: '/assets/images/home/advertisement.jpg',
    color: alpha(theme.palette.grey[900], 0.8),
  }),
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(35, 0),
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  zIndex: 9,
  display: 'flex',
  textAlign: 'center',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2.5),
  color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  return (
    <StyledRoot>
      <StyledContent>
        <Typography variant="h1" component="h2" sx={{ opacity: 0.48 }}>
          Start Now
        </Typography>

        <Typography variant="h1" component="h2" sx={{ mb: 8 }}>
          Create Your
          <br /> Website Today
        </Typography>

        <Button
          size="large"
          variant="contained"
          target="_blank"
          rel="noopener"
          href={paths.zoneStore}
        >
          Purchase Now
        </Button>
      </StyledContent>
    </StyledRoot>
  );
}

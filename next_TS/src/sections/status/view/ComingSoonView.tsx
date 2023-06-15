// @mui
import {
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
// hooks
import useCountdown from 'src/hooks/useCountdown';
// _mock
import { _socials } from 'src/_mock';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('07/07/2024 21:30'));

  return (
    <>
      <Typography variant="h3" paragraph>
        Coming Soon!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        We are currently working hard on this page!
      </Typography>

      <Image
        alt="comingsoon"
        src="/assets/illustrations/illustration_comingsoon.svg"
        sx={{
          my: 3,
          mx: 'auto',
          maxWidth: 320,
        }}
      />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: 'h2' }}
      >
        <TimeBlock label="Days" value={days} />

        <TimeBlock label="Hours" value={hours} />

        <TimeBlock label="Minutes" value={minutes} />

        <TimeBlock label="Seconds" value={seconds} />
      </Stack>

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Enter your email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="large" color="inherit">
                Notify
              </Button>
            </InputAdornment>
          ),
          sx: { pr: 0.5 },
        }}
        sx={{ my: 5 }}
      />

      <Stack direction="row" justifyContent="center">
        {_socials.map((social) => (
          <IconButton key={social.value}>
            <Iconify icon={social.icon} sx={{ color: social.color }} />
          </IconButton>
        ))}
      </Stack>
    </>
  );
}

// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}

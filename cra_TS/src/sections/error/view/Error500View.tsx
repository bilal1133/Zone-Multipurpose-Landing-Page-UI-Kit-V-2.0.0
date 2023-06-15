import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Typography } from '@mui/material';
// components
import Image from 'src/components/image';
import { MotionContainer, varBounce } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function Error500View() {
  return (
    <MotionContainer>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" paragraph>
          500 Internal Server Error
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          There was an error, please try again later.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Image
          alt="500"
          src="/assets/illustrations/illustration_500.svg"
          sx={{
            mx: 'auto',
            maxWidth: 320,
            my: { xs: 5, sm: 8 },
          }}
        />
      </m.div>

      <Button component={RouterLink} to="/" size="large" color="inherit" variant="contained">
        Go to Home
      </Button>
    </MotionContainer>
  );
}

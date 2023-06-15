import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { Button, Typography } from '@mui/material';
// components
import Image from 'src/components/image';
import { MotionContainer, varBounce } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function Error404View() {
  return (
    <MotionContainer>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" paragraph>
          Page Not Found!
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
          sure to check your spelling.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Image
          alt="404"
          src="/assets/illustrations/illustration_404.svg"
          sx={{
            mx: 'auto',
            maxWidth: 320,
            my: { xs: 5, sm: 8 },
          }}
        />
      </m.div>

      <Button component={NextLink} href="/" size="large" color="inherit" variant="contained">
        Go to Home
      </Button>
    </MotionContainer>
  );
}

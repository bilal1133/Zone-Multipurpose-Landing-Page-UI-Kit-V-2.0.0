import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Typography } from '@mui/material';
// components
import Image from 'src/components/image';
import { MotionContainer, varBounce } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function MaintenanceView() {
  return (
    <MotionContainer>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" paragraph>
          Website Currently Under Maintenance
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          We are currently working hard on this page!
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Image
          alt="maintenance"
          src="/assets/illustrations/illustration_maintenance.svg"
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

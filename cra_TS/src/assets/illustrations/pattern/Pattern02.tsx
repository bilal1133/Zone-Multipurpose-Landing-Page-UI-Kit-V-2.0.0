import { memo } from 'react';
import { m } from 'framer-motion';
// @mui
import { Box, BoxProps } from '@mui/material';
//
import Dot from './Dots';
import Circle from './Circle';

// ----------------------------------------------------------------------

const animateDown = (duration = 60) => ({
  animate: { rotate: [360, 0] },
  transition: { duration, repeat: Infinity, ease: 'linear' },
});

const animateUp = (duration = 60) => ({
  animate: { rotate: [0, 360] },
  transition: { duration, repeat: Infinity, ease: 'linear' },
});

function Pattern02({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        ...sx,
      }}
      {...other}
    >
      <Circle hide component={m.div} {...animateDown()}>
        <Dot sx={{ left: -12, top: '50%', mt: -1.5 }} />
      </Circle>

      <Circle hide component={m.div} {...animateUp(80)}>
        <Dot size={16} color="secondary" sx={{ top: 80, left: 42 }} />
      </Circle>

      <Circle hide component={m.div} {...animateUp(100)}>
        <Dot size={14} color="success" sx={{ top: 22, left: 112 }} />
      </Circle>

      <Circle component={m.div} {...animateDown(120)}>
        <Dot size={12} color="warning" sx={{ top: 54, right: 70 }} />
      </Circle>
    </Box>
  );
}

export default memo(Pattern02);

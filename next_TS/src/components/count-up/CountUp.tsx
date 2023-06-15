import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ReactCountUp, { CountUpProps as ReactCountUpProps } from 'react-countup';
// @mui
import { Theme } from '@mui/material/styles';
import { Box, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface CountUpNumberProps extends ReactCountUpProps {
  sx?: SxProps<Theme>;
}

export default function CountUp({ sx, ...other }: CountUpNumberProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <Box component="span" ref={ref} sx={sx}>
      {isInView && <ReactCountUp duration={1} {...other} />}
    </Box>
  );
}

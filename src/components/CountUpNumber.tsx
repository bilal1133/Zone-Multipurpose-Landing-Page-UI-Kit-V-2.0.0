import CountUp, { CountUpProps } from 'react-countup';
import { useInView } from 'react-intersection-observer';
// @mui
import { Box, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends CountUpProps {
  threshold?: number | number[];
  sx?: SxProps;
}

export default function CountUpNumber({ threshold = 1, sx, ...other }: Props) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <Box component="span" ref={ref} sx={sx}>
      {inView && <CountUp duration={1} {...other} />}
    </Box>
  );
}

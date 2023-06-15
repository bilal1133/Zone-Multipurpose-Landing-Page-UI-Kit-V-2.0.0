import { m } from 'framer-motion';
// @mui
import { styled, Theme } from '@mui/material/styles';
import { Box, SxProps } from '@mui/material';
// utils
import { bgBlur } from 'src/utils/cssStyles';
//
import Logo from '../logo';
import ProgressBar from '../progress-bar';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgBlur({
    blur: 2,
    opacity: 0.24,
    color: theme.palette.background.default,
  }),
  top: 0,
  zIndex: 9999,
  position: 'fixed',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoadingScreen({ sx }: Props) {
  return (
    <>
      <ProgressBar />

      <StyledRoot sx={sx}>
        <m.div
          animate={{
            scale: [1, 0.96, 1, 0.96, 1],
            opacity: [1, 0.48, 1, 0.48, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo single sx={{ width: 128, height: 128 }} />
        </m.div>
      </StyledRoot>

      <Box sx={{ width: 1, height: '100vh' }} />
    </>
  );
}

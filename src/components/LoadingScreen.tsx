// @mui
import { styled } from '@mui/material/styles';
import { LinearProgress, Box, SxProps } from '@mui/material';
//
import cssStyles from '../utils/cssStyles';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgBlur({
    opacity: 0.24,
    blur: 2,
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
  sx?: SxProps;
};

export default function LoadingScreen({ sx }: Props) {
  return (
    <>
      <RootStyle sx={sx}>
        <LinearProgress sx={{ width: 1, maxWidth: 320 }} />
      </RootStyle>

      <Box sx={{ width: '100%', height: '100vh' }} />
    </>
  );
}

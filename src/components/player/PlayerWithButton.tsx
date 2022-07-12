import { useState } from 'react';
import { ReactPlayerProps } from 'react-player';
// icons
import closeIcon from '@iconify/icons-carbon/close';
// @mui
import { Box, CircularProgress } from '@mui/material';
//
import { DialogAnimate, IconButtonAnimate, varZoom } from '../animate';
import { ReactPlayerStyle } from './Player';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

interface Props extends ReactPlayerProps {
  videoPath: string;
  open: boolean;
  onClose: VoidFunction;
}

export default function PlayerWithButton({ videoPath, open, onClose, ...other }: Props) {
  const [loading, setLoading] = useState(true);

  const onReady = () => {
    setLoading(false);
  };

  return (
    <DialogAnimate
      fullScreen
      open={open}
      variants={{
        initial: { ...varZoom().in.initial, scale: 0.64 },
        animate: {
          ...varZoom().in.animate,
          transition: { ...varZoom().in.animate.transition, duration: 0.48 },
        },
        exit: { ...varZoom().in.exit, scale: 0.64 },
      }}
      sx={{ bgcolor: 'transparent' }}
    >
      <Box sx={{ position: 'fixed', top: 24, right: 24, zIndex: 9 }}>
        <IconButtonAnimate
          size="large"
          onClick={onClose}
          sx={{
            bgcolor: 'common.white',
            '&:hover': {
              color: 'primary.main',
              bgcolor: 'common.white',
            },
          }}
        >
          <Iconify icon={closeIcon} sx={{ width: 24, height: 24 }} />
        </IconButtonAnimate>
      </Box>

      {loading && (
        <CircularProgress
          sx={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            m: 'auto',
            zIndex: -1,
            position: 'absolute',
          }}
        />
      )}

      <ReactPlayerStyle url={videoPath} playing={!loading} onReady={onReady} {...other} />
    </DialogAnimate>
  );
}

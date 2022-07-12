import { memo } from 'react';
// @mui
import { Box, SxProps } from '@mui/material';
// theme
import { ColorSchema } from '../../theme/palette';

// ----------------------------------------------------------------------

type Props = {
  size?: number;
  color?: ColorSchema;
  sx?: SxProps;
};

function Dot({ size = 24, color = 'primary', sx }: Props) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        zIndex: 10,
        position: 'absolute',
        borderRadius: '50%',
        background: (theme) => theme.palette.gradients[color],
        boxShadow: (theme) => `inset 0px -2px 4px ${theme.palette[color].darker}`,
        ...sx,
      }}
    />
  );
}
export default memo(Dot);

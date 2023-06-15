import { memo } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';
// theme
import { ColorSchema } from 'src/theme/palette';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  size?: number;
  color?: ColorSchema;
}

function Dot({ size = 24, color = 'primary', sx }: Props) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        zIndex: 10,
        position: 'absolute',
        borderRadius: '50%',
        background: (theme) =>
          `linear-gradient(to bottom, ${theme.palette[color].light}, ${theme.palette[color].main})`,
        boxShadow: (theme) => `inset 0px -2px 4px ${theme.palette[color].darker}`,
        ...sx,
      }}
    />
  );
}
export default memo(Dot);

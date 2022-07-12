import { ReactElement } from 'react';
// @mui
import { Stack, StackProps, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  icon: ReactElement;
  value: any;
  endIcon?: boolean;
  sx?: SxProps;
}

export default function TextIconLabel({ icon, value, endIcon = false, sx, ...other }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        typography: 'body2',
        ...sx,
      }}
      {...other}
    >
      {!endIcon && icon}
      {value}
      {endIcon && icon}
    </Stack>
  );
}

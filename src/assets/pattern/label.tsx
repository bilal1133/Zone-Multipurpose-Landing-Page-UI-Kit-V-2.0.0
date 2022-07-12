import { ReactElement, memo } from 'react';
// @mui
import { Box, Stack, StackProps, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  text: string;
  icon: ReactElement;
  sx?: SxProps;
}

function Label({ icon, text, sx, ...other }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        px: 2,
        py: 1.25,
        fontSize: 15,
        borderRadius: 2,
        letterSpacing: -0.5,
        color: 'common.black',
        bgcolor: 'common.white',
        fontWeight: 'fontWeightBold',
        boxShadow: (theme) =>
          `0px 24px 48px rgba(0, 0, 0, 0.8), inset 0px -4px 10px ${theme.palette.grey[600]}`,
        '& > div': { lineHeight: 0 },
        '& svg': { width: 44, height: 44 },
        ...sx,
      }}
      {...other}
    >
      {icon}
      <Box sx={{ ml: 1 }}>{text}</Box>
    </Stack>
  );
}

export default memo(Label);

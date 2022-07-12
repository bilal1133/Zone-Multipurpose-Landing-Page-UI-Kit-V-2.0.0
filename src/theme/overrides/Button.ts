import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: isLight ? theme.palette.common.white : theme.palette.grey[800],
          backgroundColor: isLight ? theme.palette.grey[800] : theme.palette.common.white,
          '&:hover': {
            backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[400],
          },
        },
        outlinedInherit: {
          borderColor: alpha(theme.palette.grey[500], 0.32),
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            borderColor: theme.palette.text.primary,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}

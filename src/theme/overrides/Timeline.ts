import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Timeline(theme: Theme) {
  return {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },

    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          width: 1,
          backgroundColor: theme.palette.divider,
        },
      },
    },
  };
}

import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Menu(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          padding: theme.spacing(1),
          borderRadius: theme.shape.borderRadius,
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
  };
}

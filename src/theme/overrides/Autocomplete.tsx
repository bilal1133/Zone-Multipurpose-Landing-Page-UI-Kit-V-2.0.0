import { Theme } from '@mui/material/styles';
//
import { AutocompleteIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <AutocompleteIcon />,
      },

      styleOverrides: {
        paper: {
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
          boxShadow: theme.customShadows.z24,
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
        option: {
          ...theme.typography.body2,
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  };
}

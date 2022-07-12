// @mui
import { Theme } from '@mui/material/styles';
//
import { CloseIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function Chip(theme: Theme) {
  return {
    MuiChip: {
      defaultProps: {
        deleteIcon: CloseIcon,
      },

      styleOverrides: {
        root: {
          ...theme.typography.body3,
          borderRadius: theme.shape.borderRadius,
        },
        colorDefault: {
          color: theme.palette.text.secondary,
          '& .MuiChip-avatarMedium, .MuiChip-avatarSmall': {
            color: theme.palette.text.secondary,
          },
        },
        outlined: {
          borderColor: theme.palette.grey[500_32],
          '&.MuiChip-colorPrimary': {
            borderColor: theme.palette.primary.main,
          },
          '&.MuiChip-colorSecondary': {
            borderColor: theme.palette.secondary.main,
          },
        },
        //
        avatar: {
          fontSize: theme.typography.subtitle2.fontSize,
          fontWeight: theme.typography.subtitle2.fontWeight,
        },
        avatarColorInfo: {
          color: theme.palette.info.contrastText,
          backgroundColor: theme.palette.info.dark,
        },
        avatarColorSuccess: {
          color: theme.palette.success.contrastText,
          backgroundColor: theme.palette.success.dark,
        },
        avatarColorWarning: {
          color: theme.palette.warning.contrastText,
          backgroundColor: theme.palette.warning.dark,
        },
        avatarColorError: {
          color: theme.palette.error.contrastText,
          backgroundColor: theme.palette.error.dark,
        },
      },
    },
  };
}

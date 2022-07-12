// @mui
import { Theme } from '@mui/material/styles';
// theme
import { ColorSchema } from '../../theme/palette';
//
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function Alert(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  const standardStyle = (color: ColorSchema) => ({
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      color: theme.palette[color][isLight ? 'dark' : 'light'],
    },
  });

  const filledStyle = (color: ColorSchema) => ({
    color: theme.palette[color].contrastText,
  });

  const outlinedStyle = (color: ColorSchema) => ({
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    border: `solid 1px ${theme.palette[color][isLight ? 'light' : 'dark']}`,
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      color: theme.palette[color][isLight ? 'dark' : 'light'],
    },
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: ErrorIcon,
          info: InfoIcon,
          success: SuccessIcon,
          warning: WarningIcon,
        },
      },

      styleOverrides: {
        message: {
          '& .MuiAlertTitle-root': {
            marginBottom: theme.spacing(0.5),
          },
        },
        action: {
          '& button:not(:first-of-type)': {
            marginLeft: theme.spacing(1),
          },
        },
        icon: {
          '& svg': { width: 24, height: 24 },
        },

        standardInfo: standardStyle('info'),
        standardSuccess: standardStyle('success'),
        standardWarning: standardStyle('warning'),
        standardError: standardStyle('error'),

        filledInfo: filledStyle('info'),
        filledSuccess: filledStyle('success'),
        filledWarning: filledStyle('warning'),
        filledError: filledStyle('error'),

        outlinedInfo: outlinedStyle('info'),
        outlinedSuccess: outlinedStyle('success'),
        outlinedWarning: outlinedStyle('warning'),
        outlinedError: outlinedStyle('error'),
      },
    },
  };
}

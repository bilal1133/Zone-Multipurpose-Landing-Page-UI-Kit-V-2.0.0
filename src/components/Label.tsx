// @mui
import { alpha, Theme, useTheme, styled } from '@mui/material/styles';
import { BoxProps } from '@mui/material';
// theme
import { ColorSchema } from '../theme/palette';

// ----------------------------------------------------------------------

type LabelColor = 'default' | ColorSchema;

type LabelVariant = 'filled' | 'outlined' | 'ghost';

const RootStyle = styled('span')(
  ({
    theme,
    ownerState,
  }: {
    theme: Theme;
    ownerState: {
      color: LabelColor;
      variant: LabelVariant;
    };
  }) => {
    const isLight = theme.palette.mode === 'light';
    const { color, variant } = ownerState;

    const styleFilled = (color: ColorSchema) => ({
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
    });

    const styleOutlined = (color: ColorSchema) => ({
      color: theme.palette[color].main,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette[color].main}`,
    });

    const styleGhost = (color: ColorSchema) => ({
      color: theme.palette[color][isLight ? 'dark' : 'light'],
      backgroundColor: alpha(theme.palette[color].main, 0.16),
    });

    return {
      height: 22,
      minWidth: 22,
      lineHeight: 0,
      borderRadius: 6,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
      color: theme.palette.grey[800],
      fontSize: theme.typography.pxToRem(12),
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.grey[300],
      fontWeight: theme.typography.fontWeightBold,

      ...(color !== 'default'
        ? {
            ...(variant === 'filled' && { ...styleFilled(color) }),
            ...(variant === 'outlined' && { ...styleOutlined(color) }),
            ...(variant === 'ghost' && { ...styleGhost(color) }),
          }
        : {
            ...(variant === 'outlined' && {
              backgroundColor: 'transparent',
              color: theme.palette.text.primary,
              border: `1px solid ${theme.palette.grey[500_32]}`,
            }),
            ...(variant === 'ghost' && {
              color: isLight ? theme.palette.text.secondary : theme.palette.common.white,
              backgroundColor: theme.palette.grey[500_16],
            }),
          }),
    };
  }
);

// ----------------------------------------------------------------------

interface LabelProps extends BoxProps {
  color?: LabelColor;
  variant?: LabelVariant;
}

export default function Label({ color = 'default', variant = 'ghost', children, sx }: LabelProps) {
  const theme = useTheme();

  return (
    <RootStyle ownerState={{ color, variant }} sx={sx} theme={theme}>
      {children}
    </RootStyle>
  );
}

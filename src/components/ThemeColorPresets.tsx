import { ReactNode, useMemo } from 'react';
// @mui
import { alpha, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
// hooks
import { useSettings } from '../hooks';
// utils
import createGradient from '../utils/createGradient';
//
import componentsOverride from '../theme/overrides';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeColorPresets({ children }: Props) {
  const defaultTheme = useTheme();
  const { setColor } = useSettings();

  const { primary, secondary } = setColor;

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: primary,
        secondary: secondary,
        gradients: {
          ...defaultTheme.palette.gradients,
          primary: createGradient(primary.light, primary.main),
          secondary: createGradient(secondary.light, secondary.main),
        },
      },
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `0 8px 16px 0 ${alpha(primary.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${alpha(secondary.main, 0.24)}`,
      },
    }),
    [defaultTheme, primary, secondary]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

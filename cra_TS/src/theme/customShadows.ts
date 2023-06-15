// @mui
import { alpha } from '@mui/material/styles';
//
import palette from './palette';

// ----------------------------------------------------------------------

interface CustomShadowOptions {
  z1: string;
  z4: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  //
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  //
  card: string;
  dialog: string;
  dropdown: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }
}

// ----------------------------------------------------------------------

const themeColor = palette('light');

const LIGHT_MODE = themeColor.grey[500];

const DARK_MODE = themeColor.common.black;

function createShadow(color: string) {
  const transparent = (opacity: number) => alpha(color, opacity);
  return {
    z1: `0 1px 2px 0 ${transparent(0.04)}`,
    z4: `-4px 4px 12px 0 ${transparent(0.08)}`,
    z8: `-8px 8px 24px -4px ${transparent(0.08)}`,
    z12: `-12px 12px 36px -4px ${transparent(0.12)}`,
    z16: `-16px 16px 48px -8px ${transparent(0.16)}`,
    z20: `-20px 20px 60px -8px ${transparent(0.2)}`,
    z24: `-24px 24px 72px -8px ${transparent(0.24)}`,
    //
    primary: `0 8px 16px 0 ${alpha(palette('light').primary.main, 0.24)}`,
    info: `0 8px 16px 0 ${alpha(palette('light').info.main, 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha(palette('light').secondary.main, 0.24)}`,
    success: `0 8px 16px 0 ${alpha(palette('light').success.main, 0.24)}`,
    warning: `0 8px 16px 0 ${alpha(palette('light').warning.main, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(palette('light').error.main, 0.24)}`,
    //
    card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
    dialog: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
    dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`,
  };
}

export default function customShadows(themeMode: 'light' | 'dark') {
  return themeMode === 'light' ? createShadow(LIGHT_MODE) : createShadow(DARK_MODE);
}

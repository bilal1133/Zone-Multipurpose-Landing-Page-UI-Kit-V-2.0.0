// ----------------------------------------------------------------------

export type ThemeMode = 'light' | 'dark';
export type ThemeDirection = 'rtl' | 'ltr';
export type ThemeColorPresets = string;

type ColorVariants = {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export type SettingsValueProps = {
  themeMode: ThemeMode;
  themeDirection: ThemeDirection;
  themeColorPresets: ThemeColorPresets;
};

export type SettingsContextProps = {
  themeMode: ThemeMode;
  themeDirection: ThemeDirection;
  themeColorPresets: ThemeColorPresets;
  setColor: {
    name: string;
    primary: ColorVariants;
    secondary: ColorVariants;
  };
  colorOption: {
    name: string;
    primary: string;
    secondary: string;
  }[];
  onChangeColorPresets: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMode: VoidFunction;
  onToggleDirection: VoidFunction;
  onResetSetting: VoidFunction;
};

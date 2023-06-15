// ----------------------------------------------------------------------

export type ColorVariants = {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export type ThemeModeValue = 'light' | 'dark';
export type ThemeDirectionValue = 'rtl' | 'ltr';
export type ThemeColorPresetsValue = string;

export type SettingsValueProps = {
  themeMode: ThemeModeValue;
  themeDirection: ThemeDirectionValue;
  themeColorPresets: ThemeColorPresetsValue;
};

export type PresetsColorProps = {
  name: string;
  primary: ColorVariants;
  secondary: ColorVariants;
};

export type SettingsContextProps = SettingsValueProps & {
  presetsColor: PresetsColorProps;
  presetsOption: {
    name: string;
    primary: string;
    secondary: string;
  }[];
  // Mode
  onToggleMode: VoidFunction;
  // Direction
  onToggleDirection: VoidFunction;
  // Color
  onChangeColorPresets: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // Reset
  onResetSetting: VoidFunction;
  // Open
  open: boolean;
  onToggle: VoidFunction;
  onOpen: VoidFunction;
  onClose: VoidFunction;
  // Not default
  notDefault: boolean;
};

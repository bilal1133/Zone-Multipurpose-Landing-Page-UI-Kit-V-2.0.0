// theme
import palette, { contrastText } from '../theme/palette';
// @type
import { ThemeColorPresets } from '../@types/settings';

// ----------------------------------------------------------------------

const presetsKey = {
  default: 'default',
  blueOrange: 'blueOrange',
  greenOrange: 'greenOrange',
  purpleTeal: 'purpleTeal',
  cyanYellow: 'cyanYellow',
  pinkCyan: 'pinkCyan',
};

export const colorPresets = [
  // DEFAULT
  {
    name: presetsKey.default,
    primary: palette.light.primary,
    secondary: palette.light.secondary,
  },

  // PINK CYAN
  {
    name: presetsKey.pinkCyan,
    primary: {
      lighter: '#FEE7E4',
      light: '#FBAEB5',
      main: '#F2779A',
      dark: '#AE3B72',
      darker: '#741655',
      contrastText: contrastText.white,
    },
    secondary: {
      lighter: '#CAFDEB',
      light: '#61F4D9',
      main: '#00DCDA',
      dark: '#00849E',
      darker: '#004569',
      contrastText: contrastText.white,
    },
  },

  // CYAN YELLOW
  {
    name: presetsKey.cyanYellow,
    primary: {
      lighter: '#C8FAEC',
      light: '#5CE6D6',
      main: '#00A3AC',
      dark: '#00607B',
      darker: '#003252',
      contrastText: contrastText.white,
    },
    secondary: {
      lighter: '#FEF9DA',
      light: '#FEE992',
      main: '#FDD14A',
      dark: '#B68B25',
      darker: '#79540E',
      contrastText: contrastText.black,
    },
  },

  // PURPLE - TEAL
  {
    name: presetsKey.purpleTeal,
    primary: {
      lighter: '#EACCFF',
      light: '#B566FF',
      main: '#6E00FF',
      dark: '#3F00B7',
      darker: '#1F007A',
      contrastText: contrastText.white,
    },
    secondary: {
      lighter: '#CBFEFB',
      light: '#65F2FE',
      main: '#00C5FE',
      dark: '#0073B6',
      darker: '#003B79',
      contrastText: contrastText.white,
    },
  },

  // BLUE - ORANGE
  {
    name: presetsKey.blueOrange,
    primary: {
      lighter: '#CCEEFF',
      light: '#66BDFF',
      main: '#007AFF',
      dark: '#0046B7',
      darker: '#00237A',
      contrastText: contrastText.white,
    },
    secondary: {
      lighter: '#FFF3D8',
      light: '#FFD18B',
      main: '#FFA03F',
      dark: '#B75D1F',
      darker: '#7A2D0C',
      contrastText: contrastText.black,
    },
  },

  // GREEN - ORANGE
  {
    name: presetsKey.greenOrange,
    primary: {
      lighter: '#DBF7EE',
      light: '#8BD0C7',
      main: '#2D6365',
      dark: '#163E48',
      darker: '#082130',
      contrastText: contrastText.white,
    },
    secondary: {
      lighter: '#FEEFD5',
      light: '#FBC182',
      main: '#F37F31',
      dark: '#AE4318',
      darker: '#741B09',
      contrastText: contrastText.white,
    },
  },
];

// ----------------------------------------------------------------------

const getPreset = (presetsKey: string) =>
  colorPresets.filter((item) => item.name === presetsKey)[0];

export default function getColorPresets(themeColorPresets: ThemeColorPresets) {
  let color;

  switch (themeColorPresets) {
    // pinkCyan
    case presetsKey.pinkCyan:
      color = getPreset(presetsKey.pinkCyan);
      break;
    // cyanYellow
    case presetsKey.cyanYellow:
      color = getPreset(presetsKey.cyanYellow);
      break;
    // blueOrange
    case presetsKey.blueOrange:
      color = getPreset(presetsKey.blueOrange);
      break;
    // greenOrange
    case presetsKey.greenOrange:
      color = getPreset(presetsKey.greenOrange);
      break;
    // purpleTeal
    case presetsKey.purpleTeal:
      color = getPreset(presetsKey.purpleTeal);
      break;

    default:
      color = getPreset(presetsKey.default);
  }
  return color;
}

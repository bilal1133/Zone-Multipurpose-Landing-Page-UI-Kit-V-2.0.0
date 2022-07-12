// @type
import { SettingsValueProps } from './@types/settings';

// API
// ----------------------------------------------------------------------

export const HOST_API = {
  dev: process.env.DEV_API,
  production: process.env.PRODUCTION_API,
};

export const GOOGLE_API = process.env.GOOGLE_API;

// MARKDOWN FILE DIRECTORY
// ----------------------------------------------------------------------

export const CAREER_POSTS_DIRECTORY = '_data/blog-posts/career';
export const ELEARNING_POSTS_DIRECTORY = '_data/blog-posts/e-learning';
export const TRAVEL_POSTS_DIRECTORY = '_data/blog-posts/travel';
export const MARKETING_POSTS_DIRECTORY = '_data/blog-posts/marketing';
export const CASE_STUDIES_DIRECTORY = '_data/case-studies';
export const COMPONENTS_DIRECTORY = '_data/components';

// DEFAULT LOCALE
// ----------------------------------------------------------------------
// Also change in next.config.mjs

export const defaultLocale = 'en';

// SETTINGS
// ----------------------------------------------------------------------

export const defaultSettings = {
  // light | dark
  themeMode: 'light',
  // ltr | rtl
  themeDirection: 'ltr',
  //  default | blueOrange | greenOrange | purpleTeal | cyanYellow | pinkCyan
  themeColorPresets: 'default',
} as SettingsValueProps;

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER_MOBILE_HEIGHT = 64;
export const HEADER_DESKTOP_HEIGHT = 96;
export const DRAWER_WIDTH = 280;

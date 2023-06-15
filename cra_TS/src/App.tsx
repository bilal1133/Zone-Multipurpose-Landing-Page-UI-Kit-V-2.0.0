// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lightbox
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// routes
import Router from 'src/routes';
// theme
import ThemeProvider from 'src/theme';
// components
import ScrollToTop from 'src/components/scroll-to-top';
import { ThemeSettings, SettingsProvider } from 'src/components/settings';
import MotionLazyContainer from 'src/components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <ThemeProvider>
              <ThemeSettings>
                <MotionLazyContainer>
                  <Router />
                </MotionLazyContainer>
              </ThemeSettings>
            </ThemeProvider>
          </BrowserRouter>
        </SettingsProvider>
      </LocalizationProvider>
    </HelmetProvider>
  );
}

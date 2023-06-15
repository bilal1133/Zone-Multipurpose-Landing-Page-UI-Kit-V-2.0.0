import { m } from 'framer-motion';
// @mui
import { Container, Typography, Box, Unstable_Grid2 as Grid } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const FEATURE_HIGHLIGHTS = [
  { title: '5 Prebuilt Websites', icon: 'carbon:application-web' },
  { title: '60+ Demo Page', icon: 'carbon:stacked-scrolling-2' },
  { title: 'Easy to Customize', icon: 'carbon:settings-adjust' },
  { title: 'Color Presets', icon: 'carbon:color-switch' },
  { title: 'Dark Mode', icon: 'carbon:asleep' },
  { title: 'Awesome Animation', icon: 'carbon:boolean' },
  { title: 'Google Fonts', icon: 'carbon:text-font' },
  { title: 'Figma Design', icon: 'ph:figma-logo' },
  { title: 'Fully Responsive', icon: 'carbon:devices' },
  { title: 'Mega Menu', icon: 'carbon:list-dropdown' },
  { title: 'Clean Markup', icon: 'carbon:script' },
  { title: 'Free Updates', icon: 'carbon:update-now' },
  { title: 'Fast Support', icon: 'carbon:headset' },
  { title: 'Well Documented', icon: 'carbon:notebook' },
];

// ----------------------------------------------------------------------

export default function HomeFeatureHighlights() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={{ xs: 8, md: 3 }} justifyContent={{ md: 'space-between' }}>
        <Grid
          xs={12}
          md={4}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Feature Highlights
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ my: 3 }}>
              Have Everything You Need
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              {`Let's see what makes our theme super powerful and user-friendly!`}
            </Typography>
          </m.div>
        </Grid>

        <Grid xs={12} md={7}>
          <Box
            sx={{
              rowGap: 6,
              columnGap: 3,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              },
            }}
          >
            {FEATURE_HIGHLIGHTS.map((feature) => (
              <m.div key={feature.title} variants={varFade({ distance: 40 }).in}>
                <Box sx={{ textAlign: 'center' }}>
                  <Iconify icon={feature.icon} width={32} />

                  <Typography variant="subtitle2" component="div" sx={{ mt: 2 }}>
                    {feature.title}
                  </Typography>
                </Box>
              </m.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

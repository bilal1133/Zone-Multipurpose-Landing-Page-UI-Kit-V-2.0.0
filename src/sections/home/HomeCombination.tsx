import { m } from 'framer-motion';
// icons
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Container, Typography, Paper } from '@mui/material';
// routes
import Routes from '../../routes';
// components
import { Image, Iconify } from '../../components';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  overflow: 'hidden',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: theme.spacing(10, 0, 15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeCombination() {
  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Paper
          sx={{
            borderRadius: 3,
            p: { md: 10 },
            bgcolor: { xs: 'transparent', md: 'background.neutral' },
          }}
        >
          <Box
            sx={{
              maxWidth: 360,
              mx: { xs: 'auto', md: 'unset' },
            }}
          >
            <m.div variants={varFade().inLeft}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                Perfect combination
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography variant="h3" sx={{ mt: 2, mb: 3 }}>
                Looking For a <br />
                Dashboard Template?
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography sx={{ color: 'text.secondary' }}>
                Minimal UI Kit is a professional dashboard used by many of our clients.
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Button
                size="large"
                color="inherit"
                variant="outlined"
                target="_blank"
                rel="noopener"
                href={Routes.minimalDashboard}
                endIcon={<Iconify icon={chevronRight} sx={{ width: 16, height: 16 }} />}
                sx={{ mt: 5, visibility: { xs: 'hidden', md: 'visible' } }}
              >
                Visit Minimal Dashboard
              </Button>
            </m.div>
          </Box>
        </Paper>

        <Box
          sx={{
            top: { md: -40 },
            right: { md: -120 },
            my: { xs: 8, md: 0 },
            position: { md: 'absolute' },
          }}
        >
          <m.div variants={varFade().inRight}>
            <Image
              alt="minimal-dashboard"
              src="https://zone-assets-api.vercel.app/assets/images/home/minimal_dashboard.png"
              sx={{
                maxWidth: { md: 790 },
              }}
            />
          </m.div>
        </Box>

        <m.div variants={varFade().inLeft}>
          <Button
            size="large"
            color="inherit"
            variant="outlined"
            target="_blank"
            rel="noopener"
            href={Routes.minimalDashboard}
            endIcon={<Iconify icon={chevronRight} sx={{ width: 16, height: 16 }} />}
            sx={{ display: { md: 'none' } }}
          >
            Visit Minimal Dashboard
          </Button>
        </m.div>
      </Container>
    </RootStyle>
  );
}

import { m } from 'framer-motion';
// icons
import launchIcon from '@iconify/icons-carbon/launch';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
// routes
import Routes from '../../routes';
// components
import { Iconify } from '../../components';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgImage({
    url: 'https://zone-assets-api.vercel.app/assets/images/home/for_designer.jpg',
    startColor: alpha(theme.palette.grey[900], 0.8),
    endColor: alpha(theme.palette.grey[900], 0.8),
  }),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeForDesigner() {
  return (
    <MotionViewport>
      <RootStyle>
        <ContentStyle>
          <m.div variants={varFade({ distance: 40 }).inUp}>
            <Typography variant="overline" sx={{ opacity: 0.48 }}>
              Professional Kit
            </Typography>
          </m.div>

          <m.div variants={varFade({ distance: 40 }).inUp}>
            <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
              For Designer
            </Typography>
          </m.div>

          <m.div variants={varFade({ distance: 40 }).inUp}>
            <Button
              size="large"
              variant="contained"
              endIcon={<Iconify icon={launchIcon} />}
              target="_blank"
              rel="noopener"
              href={Routes.figmaPreview}
            >
              figma workspace
            </Button>
          </m.div>
        </ContentStyle>
      </RootStyle>
    </MotionViewport>
  );
}

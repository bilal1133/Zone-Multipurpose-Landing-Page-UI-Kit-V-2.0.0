import { m, MotionValue } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Button, Stack, Typography, Box } from '@mui/material';
// hooks
import { useHoverParallax } from '../../hooks';
// routes
import Routes from '../../routes';
// components
import { Image } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 9,
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2.5),
  color: theme.palette.common.white,
}));

const BackgroundStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:before': {
    zIndex: 8,
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.8),
  },
}));

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  return (
    <RootStyle onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
      <ContentStyle>
        <Typography variant="h3" sx={{ opacity: 0.72 }}>
          Start Now
        </Typography>
        <Typography variant="h1" component="h2" sx={{ mt: 1, mb: 8 }}>
          Create Your
          <br /> Website Today
        </Typography>
        <Button
          size="large"
          variant="contained"
          target="_blank"
          rel="noopener"
          href={Routes.buyNow}
        >
          Purchase Now
        </Button>
      </ContentStyle>
      <Background offsetX={offsetX} offsetY={offsetY} />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type BackgroundProps = {
  offsetX: (force: number) => MotionValue<number>;
  offsetY: (force: number) => MotionValue<number>;
};

function Background({ offsetX, offsetY }: BackgroundProps) {
  const boxStyle = { position: 'absolute', top: 0, width: 1, height: 1 } as const;

  return (
    <BackgroundStyle>
      <m.div style={{ x: offsetX(16), y: offsetY(16) }}>
        <Image
          alt="screen-07"
          src="https://zone-assets-api.vercel.app/assets/images/home/advertisement_screen07.png"
          sx={{ minHeight: 360 }}
        />
      </m.div>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(24), y: offsetY(24) }}>
          <Image
            alt="screen-06"
            src="https://zone-assets-api.vercel.app/assets/images/home/advertisement_screen06.png"
          />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ y: offsetY(20) }}>
          <Image
            alt="screen-05"
            src="https://zone-assets-api.vercel.app/assets/images/home/advertisement_screen05.png"
          />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(-20), y: offsetY(-20) }}>
          <Image
            alt="screen-04"
            src="https://zone-assets-api.vercel.app/assets/images/home/advertisement_screen04.png"
          />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ y: offsetY(20) }}>
          <Image
            alt="screen-03"
            src="https://zone-assets-api.vercel.app/assets/images/home/advertisement_screen03.png"
          />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(-48), y: offsetY(8) }}>
          <Image
            alt="screen-02"
            src="https://zone-assets-api.vercel.app/assets/images/home/advertisement_screen02.png"
          />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(20), y: offsetY(20) }}>
          <Image
            alt="screen-01"
            src="https://zone-assets-api.vercel.app/assets/images/home/advertisement_screen01.png"
          />
        </m.div>
      </Box>
    </BackgroundStyle>
  );
}

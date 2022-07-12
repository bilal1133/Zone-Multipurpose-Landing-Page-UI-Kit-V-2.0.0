import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Paper, Container, Typography } from '@mui/material';
// components
import { Image } from '../../components';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeNewStart() {
  return (
    <RootStyle>
      <Container>
        <Paper
          sx={{
            pb: 10,
            borderRadius: 3,
            textAlign: 'center',
            bgcolor: 'background.neutral',
          }}
          component={MotionViewport}
        >
          <m.div variants={varFade().inUp}>
            <Image
              alt="cover"
              src="https://zone-assets-api.vercel.app/assets/images/home/new_start.png"
              sx={{ maxWidth: 720, mx: 'auto' }}
            />
          </m.div>

          <Box sx={{ mt: 3, mx: 'auto', px: 3, maxWidth: 560 }}>
            <m.div variants={varFade().inDown}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                new start
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
                The
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {''} ZONE {''}
                </Box>
                UI Kit
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography sx={{ color: 'text.secondary' }}>
                Modern ui kit to save your time, boost your creativity. Neat and super stylish
                layout ready to help with your projects
              </Typography>
            </m.div>
          </Box>
        </Paper>
      </Container>
    </RootStyle>
  );
}

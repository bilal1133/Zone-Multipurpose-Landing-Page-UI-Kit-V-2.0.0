import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// @types
import { PricingHomeProps } from '../../../@types/pricing';
// components
import { MotionViewport, varFade } from '../../../components/animate';
//
import PricingHomeCard from './PricingHomeCard';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgGradient({
    direction: 'top',
    startColor: alpha(theme.palette.grey[500], 0),
    endColor: alpha(theme.palette.grey[500], 0.12),
  }),
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  plans: PricingHomeProps[];
};

export default function PricingHome({ plans }: Props) {
  return (
    <MotionViewport>
      <RootStyle>
        <Container>
          <Box
            sx={{
              mb: { xs: 8, md: 10 },
              textAlign: 'center',
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                pricing plans
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
                The Right Plan <br />
                For Your Business
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography sx={{ color: 'text.secondary' }}>
                Choose the perfect plan for your needs. Always flexible to grow
              </Typography>
            </m.div>
          </Box>

          <Box
            sx={{
              alignItems: 'center',
              display: 'grid',
              gap: 4,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {plans.map((plan) => (
              <m.div key={plan.license} variants={varFade().inUp}>
                <PricingHomeCard plan={plan} />
              </m.div>
            ))}
          </Box>
        </Container>
      </RootStyle>
    </MotionViewport>
  );
}

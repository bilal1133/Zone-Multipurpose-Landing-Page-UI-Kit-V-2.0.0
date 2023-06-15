import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography } from '@mui/material';
// types
import { IPricingHomeProps } from 'src/types/pricing';
// components
import { MotionViewport, varFade } from 'src/components/animate';
//
import PlanCard from './PlanCard';

// ----------------------------------------------------------------------

type Props = {
  plans: IPricingHomeProps[];
};

export default function PricingHome({ plans }: Props) {
  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
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
          <Typography variant="h2" sx={{ my: 3 }}>
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
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {plans.map((plan) => (
          <m.div key={plan.license} variants={varFade().inUp}>
            <PlanCard plan={plan} />
          </m.div>
        ))}
      </Box>
    </Container>
  );
}

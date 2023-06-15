// @mui
import { Box, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
//
import { PaymentSummary, PaymentMethods, PaymentBillingAddress } from '../components';

// ----------------------------------------------------------------------

export default function PaymentView() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        minHeight: 1,
        pt: { xs: 13, md: 16 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h3" align="center" paragraph>
        {`Let's Finish Powering You Up!`}
      </Typography>

      <Typography align="center" sx={{ color: 'text.secondary', mb: { xs: 5, md: 8 } }}>
        Professional plan is right for you.
      </Typography>

      <Grid container spacing={isMdUp ? 3 : 5}>
        <Grid xs={12} md={8}>
          <Box
            gap={5}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            sx={{
              p: { md: 5 },
              borderRadius: 2,
              border: (theme) => ({
                md: `dashed 1px ${theme.palette.divider}`,
              }),
            }}
          >
            <PaymentBillingAddress />

            <PaymentMethods />
          </Box>
        </Grid>

        <Grid xs={12} md={4}>
          <PaymentSummary />
        </Grid>
      </Grid>
    </Container>
  );
}

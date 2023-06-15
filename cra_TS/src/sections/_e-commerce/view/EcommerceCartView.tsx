import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Container, Typography, Button, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _products } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
//
import { EcommerceHeader } from '../layout';
import { EcommerceCartList, EcommerceCartSummary } from '../cart';

// ----------------------------------------------------------------------

export default function EcommerceCartView() {
  return (
    <>
      <EcommerceHeader />

      <Container
        sx={{
          overflow: 'hidden',
          pt: 5,
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h3" sx={{ mb: 5 }}>
          Shopping Cart
        </Typography>

        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={8}>
            <EcommerceCartList products={_products.slice(0, 4)} />
          </Grid>

          <Grid xs={12} md={4}>
            <EcommerceCartSummary
              tax={7}
              total={357.09}
              subtotal={89.09}
              shipping={55.47}
              discount={16.17}
            />
          </Grid>
        </Grid>

        <Button
          component={RouterLink}
          to={paths.eCommerce.products}
          color="inherit"
          startIcon={<Iconify icon="carbon:chevron-left" />}
          sx={{ mt: 3 }}
        >
          Continue Shopping
        </Button>
      </Container>
    </>
  );
}

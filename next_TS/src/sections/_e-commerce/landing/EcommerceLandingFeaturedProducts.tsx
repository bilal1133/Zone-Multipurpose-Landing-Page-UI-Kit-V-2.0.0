// @mui
import { Box, Typography, Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
import { _products } from 'src/_mock';
//
import { EcommerceProductItemHot, EcommerceProductItemCountDown } from '../product/item';

// ----------------------------------------------------------------------

export default function EcommerceLandingFeaturedProducts() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        Featured Products
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} lg={8}>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          >
            {_products.slice(1, 3).map((product, index) => (
              <EcommerceProductItemCountDown
                key={product.id}
                product={product}
                color={index === 0 ? 'primary' : 'secondary'}
              />
            ))}
          </Box>
        </Grid>

        <Grid xs={12} lg={4}>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(2, 1fr)',
            }}
          >
            {_products.slice(4, 8).map((product) => (
              <EcommerceProductItemHot key={product.id} product={product} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

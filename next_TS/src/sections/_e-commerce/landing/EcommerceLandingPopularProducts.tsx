import { useState } from 'react';
// @mui
import { Box, Typography, Container, Tabs, Tab } from '@mui/material';
// _mock
import { _products } from 'src/_mock';
//
import { EcommerceProductItemBestSellers } from '../product/item';

// ----------------------------------------------------------------------

const TABS = ['Featured Products', 'Top Rated Products', 'Onsale Products'];

// ----------------------------------------------------------------------

export default function EcommerceLandingPopularProducts() {
  const [tab, setTab] = useState('Featured Products');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        Popular Products
      </Typography>

      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
        sx={{ my: 5 }}
      >
        {TABS.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
      >
        {_products.slice(0, 8).map((product) => (
          <EcommerceProductItemBestSellers key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
}

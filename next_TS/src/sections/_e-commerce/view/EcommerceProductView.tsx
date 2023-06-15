import { useState, useEffect } from 'react';
// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
import { _products } from 'src/_mock';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import LoadingScreen from 'src/components/loading-screen';
//
import ReviewEcommerce from '../../review/e-commerce';
import { EcommerceHeader } from '../layout';
import {
  EcommerceProductDetailsInfo,
  EcommerceProductDetailsCarousel,
  EcommerceProductDetailsDescription,
} from '../product/details';

// ----------------------------------------------------------------------

const _mockProduct = _products[0];

export default function EcommerceProductView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <EcommerceHeader />

      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            {
              name: 'Home',
            },
            {
              name: 'Mobile Phones',
            },
            {
              name: 'Apple iPhone 14',
            },
          ]}
          sx={{ my: 5 }}
        />

        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <EcommerceProductDetailsCarousel images={_mockProduct.images} />
          </Grid>

          <Grid xs={12} md={6} lg={5}>
            <EcommerceProductDetailsInfo
              name={_mockProduct.name}
              price={_mockProduct.price}
              rating={_mockProduct.rating}
              review={_mockProduct.review}
              priceSale={_mockProduct.priceSale}
              caption={_mockProduct.caption}
            />
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <EcommerceProductDetailsDescription
              description={_mockProduct.description}
              specifications={[
                { label: 'Category', value: 'Mobile' },
                { label: 'Manufacturer', value: 'Apple' },
                { label: 'Warranty', value: '12 Months' },
                { label: 'Serial number', value: '358607726380311' },
                { label: 'Ships From', value: 'United States' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>

      <ReviewEcommerce />
    </>
  );
}

import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Container, Typography, Box } from '@mui/material';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import { CheckoutSummary, CheckoutMethods, CheckoutBillingAddress } from '../src/sections/checkout';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function CheckoutPage() {
  return (
    <RootStyle title="Checkout">
      <Container>
        <Typography variant="h3" align="center" paragraph>
          {`Let's Finish Powering You Up!`}
        </Typography>
        <Typography align="center" sx={{ color: 'text.secondary', mb: 5 }}>
          Professional plan is right for you.
        </Typography>

        <Card
          sx={{
            boxShadow: (theme) => ({
              xs: 0,
              md: theme.customShadows.z16,
            }),
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gap: 4,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            <CheckoutBillingAddress />
            <CheckoutMethods />
            <CheckoutSummary />
          </Box>
        </Card>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};

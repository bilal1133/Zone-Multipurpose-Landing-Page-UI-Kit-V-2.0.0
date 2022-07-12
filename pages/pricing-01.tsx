import { useState, ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Container, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
// _data
import { _pricing01 } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
import { PricingPlan01Card } from '../src/sections/pricing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Pricing01Page() {
  const [subscription, setSubscription] = useState('monthly');

  const handleChangeSubscription = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) {
      setSubscription(newValue);
    }
  };

  return (
    <Page title="Pricing 01">
      <RootStyle>
        <Container>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mt: 2, mb: 3, mx: 'auto', maxWidth: 480 }}>
              {`Flexible Plans For Your Community's Size and Needs`}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Choose the perfect plan for your needs.
              <br /> Always flexible to grow
            </Typography>
          </Box>

          <Stack sx={{ my: 6 }}>
            <ToggleButtonGroup
              exclusive
              color="standard"
              value={subscription}
              onChange={handleChangeSubscription}
              sx={{
                mx: 'auto',
                border: 0,
                bgcolor: 'grey.5008',
                '& .MuiToggleButton-root': {
                  m: 0,
                  typography: 'overline',
                  color: 'text.secondary',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                  '&.Mui-selected': {
                    bgcolor: 'text.primary',
                    color: (theme) =>
                      theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                    '&:hover': {
                      bgcolor: 'text.primary',
                    },
                  },
                },
              }}
            >
              <ToggleButton value="monthly">MONTHLY</ToggleButton>
              <ToggleButton value="yearly">YEARLY (save 10%)</ToggleButton>
            </ToggleButtonGroup>
          </Stack>

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
            {_pricing01.map((plan) => (
              <PricingPlan01Card key={plan.license} plan={plan} />
            ))}
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

Pricing01Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};

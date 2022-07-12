import { ReactElement } from 'react';
// icons
import informationIcon from '@iconify/icons-carbon/information';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Stack, Tooltip, Container, Typography } from '@mui/material';
// _data
import { _pricing02 } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page, Iconify } from '../src/components';
import {
  PricingPlan02Header,
  PricingPlan02ContentMobile,
  PricingPlan02ContentDesktop,
} from '../src/sections/pricing/pricing-02';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Pricing02Page() {
  return (
    <Page title="Pricing 02">
      <RootStyle>
        <Container>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 10 } }}>
            <Typography variant="h3" sx={{ mt: 2, mb: 3, mx: 'auto', maxWidth: 480 }}>
              {`Flexible Plans For Your \n Community's Size and Needs`}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Choose the perfect plan for your needs.
              <br /> Always flexible to grow
            </Typography>
          </Box>

          <Grid container alignItems="flex-end">
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                pb: 5,
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Typography variant="overline" sx={{ color: 'primary.main' }}>
                Feature
              </Typography>
            </Grid>

            {_pricing02.map((plan) => (
              <Grid
                key={plan.license}
                item
                xs={12}
                md={3}
                sx={{
                  mb: { xs: 4, md: 0 },
                  borderRadius: { xs: 2, md: 0 },
                  boxShadow: (theme) => ({ xs: theme.customShadows.z16, md: 0 }),
                }}
              >
                <PricingPlan02Header plan={plan} />
                <PricingPlan02ContentMobile plan={plan} />
              </Grid>
            ))}
          </Grid>

          <Grid container>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: { xs: 'none', md: 'block' },
                borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
              }}
            >
              {_pricing02[0].options.map((option) => (
                <Stack
                  key={option.title}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    height: 72,
                    borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                  }}
                >
                  <Typography variant="subtitle2">{option.title}</Typography>
                  <Tooltip title={option.tootip} placement="right" arrow>
                    <div>
                      <Iconify
                        icon={informationIcon}
                        sx={{ color: 'text.secondary', width: 20, height: 20 }}
                      />
                    </div>
                  </Tooltip>
                </Stack>
              ))}
            </Grid>

            {_pricing02.map((plan) => (
              <Grid
                key={plan.license}
                item
                xs={12}
                md={3}
                sx={{
                  borderTop: (theme) => ({ md: `solid 1px ${theme.palette.divider}` }),
                }}
              >
                <PricingPlan02ContentDesktop plan={plan} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

Pricing02Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};
